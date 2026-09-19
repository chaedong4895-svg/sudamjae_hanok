"use client";

import { useEffect, useRef, useState } from "react";

// Minimal typings for the parts of the Naver Maps JS SDK v3 we use (no @types package installed).
interface NaverLatLng {
  readonly __brand?: "LatLng";
}
interface NaverMapsApi {
  LatLng: new (lat: number, lng: number) => NaverLatLng;
  Map: new (el: HTMLElement, options: Record<string, unknown>) => unknown;
  Marker: new (options: Record<string, unknown>) => unknown;
  Position: { TOP_RIGHT: number };
}
declare global {
  interface Window {
    naver?: { maps?: NaverMapsApi };
    navermap_authFailure?: () => void;
  }
}

const SCRIPT_ID = "naver-maps-sdk";
const SDK_TIMEOUT_MS = 10000;

function loadSdk(clientId: string): Promise<NaverMapsApi> {
  return new Promise((resolve, reject) => {
    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.async = true;
      script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${encodeURIComponent(
        clientId
      )}`;
      document.head.appendChild(script);
    }
    script.addEventListener("error", () => reject(new Error("naver maps sdk failed to load")));

    // Poll rather than trust the script `load` event: the script may already be in the DOM
    // (StrictMode double-mount, client-side navigation) and finished loading.
    const startedAt = Date.now();
    const waitForMaps = () => {
      const maps = window.naver?.maps;
      if (maps?.Map) return resolve(maps);
      if (Date.now() - startedAt > SDK_TIMEOUT_MS) {
        return reject(new Error("naver maps sdk unavailable"));
      }
      setTimeout(waitForMaps, 50);
    };
    waitForMaps();
  });
}

export function NaverMap({
  clientId,
  lat,
  lng,
  title,
  fallbackSrc,
}: {
  clientId?: string;
  lat: number;
  lng: number;
  title: string;
  /** Keyless embed shown when there is no client id or the Naver SDK fails to load/authenticate. */
  fallbackSrc: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(!clientId);

  useEffect(() => {
    if (!clientId || !containerRef.current) return;
    let cancelled = false;
    const container = containerRef.current;

    // The SDK calls this global when the client id / registered web service URL is rejected. That
    // happens after the map has already been created, so it must flip state directly rather than
    // reject the load promise (which has long since resolved).
    window.navermap_authFailure = () => {
      if (!cancelled) setFailed(true);
    };

    loadSdk(clientId)
      .then((maps) => {
        if (cancelled) return;
        const position = new maps.LatLng(lat, lng);
        const map = new maps.Map(container, {
          center: position,
          zoom: 16,
          zoomControl: true,
          zoomControlOptions: { position: maps.Position.TOP_RIGHT },
          scaleControl: false,
          mapDataControl: false,
        });
        new maps.Marker({ position, map });
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
    };
  }, [clientId, lat, lng]);

  if (failed) {
    return (
      <iframe
        src={fallbackSrc}
        title={title}
        className="absolute inset-0 h-full w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    );
  }

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={title}
      className="absolute inset-0 h-full w-full"
    />
  );
}
