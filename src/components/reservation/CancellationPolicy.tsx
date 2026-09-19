import type { CancellationPolicyContent, RefundRow } from "@/content/types";

function RefundTable({
  title,
  rows,
  headers,
}: {
  title: string;
  rows: RefundRow[];
  headers: { timing: string; weekday: string; weekend: string };
}) {
  return (
    <div>
      <h4 className="font-serif text-lg text-primary mb-3">{title}</h4>
      <div className="overflow-x-auto">
        <table className="w-full text-sm font-sans border-collapse min-w-[420px]">
          <thead>
            <tr className="border-b border-border text-left text-brown">
              <th className="py-2 pr-4 font-medium">{headers.timing}</th>
              <th className="py-2 pr-4 font-medium">{headers.weekday}</th>
              <th className="py-2 font-medium">{headers.weekend}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.timing} className="border-b border-border/60">
                <td className="py-2.5 pr-4 text-ink/80">{row.timing}</td>
                <td className="py-2.5 pr-4 text-ink/80">{row.weekday}</td>
                <td className="py-2.5 text-ink/80">{row.weekend}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function CancellationPolicy({ content }: { content: CancellationPolicyContent }) {
  const headers = {
    timing: content.tableHeaderTiming,
    weekday: content.tableHeaderWeekday,
    weekend: content.tableHeaderWeekend,
  };

  return (
    <div id="cancellation" className="p-6 sm:p-8 bg-surface space-y-8 scroll-mt-24">
      <div className="space-y-2">
        <h3 className="font-serif text-xl text-primary">{content.title}</h3>
        <p className="font-sans text-sm text-ink/75 leading-relaxed">{content.intro}</p>
      </div>

      <RefundTable title={content.highSeasonTitle} rows={content.highSeasonRows} headers={headers} />
      <RefundTable title={content.lowSeasonTitle} rows={content.lowSeasonRows} headers={headers} />

      <div className="space-y-1.5 pt-2 border-t border-border">
        {content.notes.map((note) => (
          <p key={note} className="font-sans text-xs text-brown leading-relaxed">
            · {note}
          </p>
        ))}
      </div>
    </div>
  );
}
