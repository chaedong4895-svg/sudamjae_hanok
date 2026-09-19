import type { SiteContent } from "./types";

export const en: SiteContent = {
  locale: "en",
  htmlLang: "en",
  meta: {
    title: "SUDAMJAE | A Private Hanok Stay in Yeoju, Korea",
    description:
      "SUDAMJAE is a premium private Hanok (traditional Korean house) stay in Sejongdaewang-myeon, Yeoju. Experience Korean architecture, a garden and a quiet tea room.",
  },
  languageSwitch: { label: "KR" },
  nav: {
    story: "Our Story",
    space: "The Space",
    experience: "A Day at Sudamjae",
    culture: "Experiences",
    yeoju: "Explore Yeoju",
    gallery: "Gallery",
    pricing: "Rates",
    location: "Location",
    reviews: "Reviews",
    reservationCta: "Reservations",
  },
  hero: {
    eyebrow: "A Private Hanok Sanctuary · Yeoju",
    brand: "SUDAMJAE",
    brandHanja: "水潭齋",
    title: "Experience the Beauty of Korea in a Private Hanok Stay",
    tagline:
      "Slow down and discover quiet rest among traditional Korean architecture and nature in Yeoju.",
    ctaPrimary: "Reservations",
    ctaSecondary: "Our Story",
    location: "Yeoju, Republic of Korea",
    scrollHint: "EXPLORE SUDAMJAE",
  },
  story: {
    eyebrow: "The Story of Sudamjae",
    title: "The Beauty of Hanok,\nLived in the Present",
    paragraphs: [
      "Sudamjae is not a museum piece preserving tradition behind glass. It is a whole-house Hanok stay where you live, even briefly, inside the warm aesthetics of Korean traditional architecture.",
      "Unhewn timber columns, morning light filtering through hanji (traditional mulberry paper) doors, and a courtyard made whole by its emptiness. Set aside the pace of daily life and recover the quiet, restrained rhythm unique to Korea.",
    ],
    quote:
      "In the emptiness of a Hanok that becomes fullness, you finally meet complete rest.",
    quoteAuthor: "Sudamjae Host",
    imageCaption: "Sudamjae's main house and front yard",
    imageSubCaption: "Architectural Wood & Hanji",
    linkLabel: "Explore the Space",
  },
  space: {
    eyebrow: "Exclusive Private Estate",
    title: "The Space",
    subtitle: "A private ground, emptied for you alone for the day",
    specs: [
      "Whole private Hanok",
      "2 bedrooms",
      "1 Dasil (tea room)",
      "1 kitchen",
      "2 bathrooms",
      "1 attic loft",
      "Garden & BBQ pavilion",
      "4 guests standard · up to 8",
    ],
    rooms: [
      {
        tag: "01 · Private Rest",
        title: "Anchae",
        description:
          "The main bedroom, with neatly prepared bedding. Morning light filters in through the latticed hanji windows, along with views of the garden, and a private bathroom connects directly to the room.",
        bullets: [
          "Connected directly to a private bathroom",
          "Individual heating and cooling",
        ],
        image: "/images/interior/bedroom-02.jpg",
        imageCaption: "Anchae, Sudamjae's main bedroom",
      },
      {
        tag: "02 · Private Rest",
        title: "Sarangchae",
        description:
          "A second bedroom, separate from Anchae. Convenient for larger groups who want to split across two rooms.",
        bullets: [
          "Neatly prepared bedding and storage",
          "Individual heating and cooling",
        ],
        image: "/images/interior/bedroom-01.jpg",
        imageCaption: "Sarangchae bedroom",
      },
      {
        tag: "03 · Tea Ritual",
        title: "Dasil (Tea Room)",
        description:
          "A quiet room for sitting on floor cushions, brewing tea and listening to each other. A low tea table and hanji-lined walls set a calm, contemplative mood.",
        bullets: [
          "Low tea table and floor cushions",
          "A dedicated space for tea ceremony",
          "Guided tea experiences available on request",
        ],
        image: "/images/interior/tea-room.jpg",
        imageCaption: "Sudamjae's Dasil, with cushions and a tea table",
      },
      {
        tag: "04 · Gathering Hall",
        title: "Main Hall (Daecheong)",
        description:
          "The main hall, where soaring wooden rafters meet the warmth of natural timber. A generous shared space for family and friends to gather.",
        bullets: ["High timber-beamed ceiling", "Open living space connecting Anchae and Sarangchae"],
        image: "/images/interior/main-hall.jpg",
        imageCaption: "Sudamjae's main hall with exposed rafters",
      },
      {
        tag: "05 · Kitchen & Dining",
        title: "Kitchen",
        description:
          "A self-contained kitchen for cooking and dining. Enjoy a meal at the bar table while looking out over the garden.",
        bullets: ["Induction cooktop and oven", "Bar table facing the garden view"],
        image: "/images/interior/kitchen-bar.jpg",
        imageCaption: "Kitchen bar table with a garden view",
      },
      {
        tag: "06 · Attic",
        title: "Attic Loft",
        description:
          "A loft space where the roof's timber rafters remain fully exposed. Useful as extra sleeping space for families or larger groups.",
        bullets: ["Feel the Hanok roof structure up close", "Can be used as additional sleeping space"],
        image: "/images/interior/attic.jpg",
        imageCaption: "The attic loft with exposed rafters",
      },
      {
        tag: "07 · Garden & Pavilion",
        title: "Garden & Glass Pavilion",
        description:
          "Old pine and crape myrtle trees surround the courtyard, beside an all-weather glass BBQ pavilion.",
        bullets: ["Private garden with stone guardian statues", "Glass BBQ pavilion (additional fee)"],
        image: "/images/exterior/pavilion-garden.jpg",
        imageCaption: "The glass BBQ pavilion beside the garden",
      },
    ],
  },
  experience: {
    eyebrow: "Chronicles of Serenity",
    title: "A Day at Sudamjae",
    subtitle: "Time flows gently, following the arc of sun and moon",
    imageCaption: "The heart of Sudamjae: the main hall",
    imageDescription:
      "A contemplative main hall where soaring rafters meet the warmth of natural timber.",
    timeline: [
      {
        time: "7:30 AM",
        title: "A Quiet Hanok Morning",
        description:
          "Wake naturally to soft morning light filtering through the hanji doors and birdsong from the garden.",
      },
      {
        time: "10:00 AM",
        title: "A Walk Through Yeoju",
        description:
          "Take a slow walk near the Royal Tomb of King Sejong or along the Namhan River, taking in Yeoju's peaceful scenery.",
      },
      {
        time: "3:00 PM",
        title: "Tea Time in the Dasil",
        description:
          "Sit in the Dasil and brew your own tea. The sound of water and the quiet hanji walls create a moment of deep rest.",
      },
      {
        time: "6:00 PM",
        title: "Evening in the Garden Pavilion",
        description:
          "Watch the sunset over the garden and share a relaxed evening with loved ones in the glass pavilion.",
      },
      {
        time: "9:00 PM",
        title: "A Hanok Night Under Soft Light",
        description:
          "Wind down under the stars at the edge of the eaves, in the stillness of the courtyard, before a restful night.",
      },
    ],
  },
  culture: {
    eyebrow: "Curated Korean Heritage",
    title: "What You'll Experience at Sudamjae",
    subtitle: "A deeper meeting with Korean culture, beyond simply staying the night",
    cards: [
      {
        tag: "01 · Tea Ritual",
        title: "Tea & Dado (Korean Tea Ceremony)",
        description:
          "Use the tea table and tea set prepared in the Dasil to brew your own tea. Let the sound of boiling water and its warmth settle your body and mind.",
      },
      {
        tag: "02 · Architecture",
        title: "The Beauty of Hanok",
        description:
          "Traditional joinery that uses minimal nails, and eaves that trace a gentle curve. Look up at the beams and rafters from the daecheong floor and admire the structure up close.",
      },
      {
        tag: "03 · Ceramic Craft",
        title: "Yeoju Ceramics",
        description:
          "Yeoju is known as a home of Joseon-era white porcelain, with many ceramic studios nearby. Visit the local ceramics village to browse and try your hand at pottery.",
      },
      {
        tag: "04 · Local Flavors",
        title: "Tastes of Yeoju",
        description:
          "Yeoju has long been known for high-quality rice. Contact us in advance if you would like a meal featuring local ingredients and nearby restaurants.",
      },
      {
        tag: "05 · Silence & Pine Yard",
        title: "Nature & Rest",
        description:
          "Behind walls that block the outside world, old pine and crape myrtle trees stand in the courtyard. Enjoy a stillness broken only by the rustle of leaves in the wind.",
      },
    ],
  },
  yeoju: {
    eyebrow: "Heritage Destination",
    title: "Explore Yeoju with Sudamjae",
    subtitle: "A long history, the clear waters of the Namhan River, and a city of ceramic artisans",
    places: [
      {
        category: "Royal Tomb",
        distance: "Sejongdaewang-myeon",
        name: "Royal Tomb of King Sejong (Yeongneung)",
        description:
          "A UNESCO World Heritage site, the resting place of King Sejong and Queen Soheon. It sits close to Sudamjae within Sejongdaewang-myeon.",
        address: "269-50 Yeongneung-ro, Neungseo-myeon, Yeoju-si, Gyeonggi-do",
      },
      {
        category: "Riverside Temple",
        distance: "Yeoju city",
        name: "Silleuksa Temple",
        description:
          "The only temple in Korea built directly on a riverbank. From the Gangwolheon pavilion, take in the misty views over the Namhan River.",
        address: "73 Silleuksa-gil, Yeoju-si, Gyeonggi-do",
      },
      {
        category: "Ceramic Craft",
        distance: "Yeoju Ceramics Village",
        name: "Yeoju Ceramics Village & Museum",
        description:
          "A village of studios carrying on the tradition of celadon and white porcelain. Browse showrooms or try a pottery wheel experience.",
        address: "Doye-ro area, Yeoju-si, Gyeonggi-do",
      },
      {
        category: "Riverside & Cycling",
        distance: "Namhan riverside",
        name: "Namhan River Bike Path & Gangcheon Island",
        description:
          "Endless silver reed fields and calm water. Rent a bicycle and enjoy the river breeze on a refreshing ride.",
        address: "Gangcheon Island and the Namhan riverside park, Yeoju",
      },
      {
        category: "Premium Shopping",
        distance: "Yeoju city",
        name: "Yeoju Premium Outlets",
        description:
          "One of Korea's largest outlet shopping destinations — a convenient stop for shopping and dining before or after your stay.",
        address: "360 Myeongpum-ro, Yeoju-si, Gyeonggi-do",
      },
      {
        category: "Private Golf",
        distance: "Near Yeoju",
        name: "Golf Clubs near Yeoju",
        description: "Several golf courses set across Yeoju's rolling hills are conveniently accessible.",
        address: "Major golf clubs within Yeoju-si",
      },
    ],
  },
  gallery: {
    eyebrow: "Visual Archive",
    title: "Sudamjae Gallery",
    hint: "Click a photo to view it larger",
    items: [
      { src: "/images/gallery/gallery-01.jpg", alt: "Sudamjae's main house and front yard", caption: "Sudamjae's main house and front yard" },
      { src: "/images/gallery/gallery-02.jpg", alt: "Sudamjae at dusk", caption: "Sudamjae at dusk" },
      { src: "/images/gallery/gallery-03.jpg", alt: "Sudamjae lit up at night", caption: "Sudamjae lit up at night" },
      { src: "/images/gallery/gallery-04.jpg", alt: "The glass BBQ pavilion beside the garden", caption: "The glass BBQ pavilion beside the garden" },
      { src: "/images/gallery/gallery-05.jpg", alt: "Detail of the eaves and roof joinery", caption: "Detail of the eaves and roof joinery" },
      { src: "/images/gallery/gallery-06.jpg", alt: "The Dasil, with cushions and a tea table", caption: "The Dasil, with cushions and a tea table" },
      { src: "/images/gallery/gallery-07.jpg", alt: "The main hall with exposed rafters", caption: "The main hall with exposed rafters" },
      { src: "/images/gallery/gallery-08.jpg", alt: "One of Sudamjae's neatly styled bedrooms", caption: "One of Sudamjae's neatly styled bedrooms" },
      { src: "/images/gallery/gallery-09.jpg", alt: "A bathroom with a sunken tub under a wood ceiling", caption: "A bathroom with a sunken tub under a wood ceiling" },
      { src: "/images/gallery/gallery-10.jpg", alt: "A bathroom finished in green mosaic tile", caption: "A bathroom finished in green mosaic tile" },
      { src: "/images/gallery/gallery-11.jpg", alt: "The attic loft with exposed rafters", caption: "The attic loft with exposed rafters" },
      { src: "/images/gallery/gallery-12.jpg", alt: "A crape myrtle tree in the garden", caption: "A crape myrtle tree in the garden" },
    ],
  },
  pricing: {
    eyebrow: "Rates",
    title: "Rates & Stay Information",
    subtitle: "Transparent pricing for accommodation and venue rental",
    stayTitle: "Accommodation (whole house, based on 4 guests)",
    stayRates: [
      { label: "Low season · Weekday", price: "KRW 590,000", note: "Sun–Thu nights (excluding the eve of a public holiday)" },
      { label: "Low season · Weekend", price: "KRW 740,000", note: "Fri/Sat nights or the eve of a public holiday" },
      { label: "High season · Weekday", price: "KRW 790,000", note: "Summer Jul 15–Aug 24, Winter Dec 20–Feb 20" },
      { label: "High season · Weekend", price: "KRW 950,000", note: "High season Fri/Sat nights or the eve of a public holiday" },
    ],
    extraGuestNote:
      "Based on 4 guests, up to 8 guests maximum. Each additional guest is KRW 30,000 per night.",
    venueTitle: "Venue Rental & Add-ons",
    venueRates: [
      { label: "Full-day venue rental", price: "KRW 1,000,000", note: "Corporate events, small gatherings, brand events, commercial shoots" },
      { label: "Full-day venue rental + overnight stay", price: "KRW 1,400,000", note: "Same rate regardless of season or day of week" },
      { label: "Private BBQ house use", price: "KRW 100,000", note: "Use of the BBQ house and related space" },
      { label: "Charcoal BBQ prep set", price: "KRW 20,000 per set", note: "Includes basic charcoal and setup" },
      { label: "Traditional cauldron (gamasot) experience", price: "KRW 100,000", note: "Use of the cauldron and space; scope confirmed on inquiry" },
    ],
    footnotes: [
      "All rates shown include VAT.",
      "High season runs every year from 15 July to 24 August (summer) and 20 December to 20 February (winter); all other dates are low season. Weekend rates apply to Friday and Saturday nights and to the night before a public holiday.",
      "Automatic multi-night discounts do not apply.",
      "Cancellation and refund policy is available on the Reservations page. Deposit, cleaning fees and other details will be shared when your reservation is confirmed.",
    ],
    cancellationLinkLabel: "View cancellation & refund policy",
    ctaLabel: "Check Availability",
  },
  stayInfo: {
    title: "Stay Information",
    checkTitle: "Check-in / Check-out",
    checkValue: "3:00 PM / 11:00 AM",
    checkNote: "Please observe check-in and check-out times so we can prepare the house for cleaning and for the next guests.",
    capacityTitle: "Capacity",
    capacityValue: "4 guests standard · up to 8",
    capacityNote: "KRW 30,000 is added per additional guest beyond the standard 4.",
    includedTitle: "What's Included",
    includedItems: [
      "Exclusive use of the whole Hanok (Anchae, Sarangchae, Dasil, kitchen, 2 bathrooms, attic loft)",
      "Private garden and glass BBQ pavilion",
      "Basic body and hair amenities",
      "High-speed Wi-Fi",
    ],
    petPolicyTitle: "Pets",
    petPolicyBody:
      "To keep the rooms comfortable for every guest, pets are not permitted. If you need to bring a certified service animal, please contact us before booking.",
    parkingPolicyTitle: "Parking",
    parkingPolicyBody:
      "Private on-site parking is available. If your group is bringing several vehicles, please check availability with us before booking.",
  },
  reservationPreview: {
    eyebrow: "Reservation",
    title: "Check Availability",
    description:
      "Sudamjae hosts only one group per day. Check the available dates, then book through your preferred channel or contact us directly.",
    ctaLabel: "Go to Reservations",
  },
  reservationPage: {
    title: "Reservations",
    intro:
      "Check the available dates below, then continue to Airbnb or Naver, or contact Sudamjae directly. Availability may change, and your reservation is confirmed only after confirmation from the selected booking channel or the host.",
    confirmNote:
      "This calendar may differ from external booking channels. Please reconfirm final availability with your booking channel or the host.",
    legend: {
      available: "Available",
      closed: "Closed",
      inquiry: "Inquiry required",
      selected: "Selected",
      today: "Today",
      past: "Past date",
    },
    prevMonth: "Previous month",
    nextMonth: "Next month",
    selectCheckIn: "Select a check-in date",
    selectCheckOut: "Select a check-out date",
    resetSelection: "Reset selection",
    guestsLabel: "Guests",
    purposeLabel: "Purpose of stay",
    purposeOptions: ["Overnight stay", "Family gathering", "Corporate event", "Brand event", "Commercial shoot", "Other"],
    optionsLabel: "Add-ons",
    optionChoices: [
      { key: "bbq", label: "Private BBQ house (KRW 100,000)" },
      { key: "charcoal", label: "Charcoal BBQ prep set (KRW 20,000/set)" },
      { key: "cauldron", label: "Traditional cauldron experience (KRW 100,000)" },
    ],
    summaryTitle: "Reservation Summary",
    summaryCheckIn: "Check-in",
    summaryCheckOut: "Check-out",
    summaryNights: "Nights",
    summaryGuests: "Guests",
    summaryEstimate: "Estimated total",
    summaryPlaceholder: "Select a check-in and check-out date on the calendar.",
    estimateDisclaimer:
      "This is an estimate; add-on fees are not included. Final pricing is confirmed through your booking channel or the host.",
    channelsTitle: "Choose a Booking Channel",
    airbnbLabel: "Book on Airbnb",
    naverLabel: "Book on Naver",
    directLabel: "Contact Sudamjae Directly",
    comingSoon: "Channel setup in progress · please use email or direct inquiry",
    channelNote:
      "Airbnb and Naver Place booking links will be added once those channels are set up. Until then, please use email or the direct inquiry form on this site. If you book through an external channel, that channel's own cancellation and refund policy applies instead of the one on this site.",
  },
  inquiryForm: {
    title: "Direct Inquiry",
    description: "Leave your details below and we will get back to you as soon as possible.",
    nameLabel: "Name",
    namePlaceholder: "Jane Doe",
    phoneLabel: "Phone",
    phonePlaceholder: "+82 10-0000-0000",
    emailLabel: "Email (optional)",
    emailPlaceholder: "example@email.com",
    datesLabel: "Preferred dates",
    guestsLabel: "Guests",
    purposeLabel: "Purpose of stay",
    optionsLabel: "Add-ons",
    messageLabel: "Message (optional)",
    messagePlaceholder: "Feel free to share any questions. (up to 1,000 characters)",
    consentLabel: "I agree to the collection and use of my personal information.",
    consentDetail:
      "Collected: name, phone, email. Purpose: responding to inquiries and confirming reservations. Retention: 1 year after the inquiry is resolved.",
    submitLabel: "Send Inquiry",
    sendingLabel: "Sending…",
    requiredMark: "*",
    errors: {
      name: "Please enter a name of at least 2 characters.",
      phone: "Please enter a valid phone number.",
      email: "Please check the email format.",
      dates: "Please select or enter your preferred dates.",
      consent: "Please agree to the collection and use of personal information.",
      server: "We couldn't send your inquiry. Please try again shortly, or contact us directly using the details below.",
    },
    successTitle: "Your inquiry has been received",
    successBodyTemplate:
      "Reference No. {ref} · Your inquiry has been received. We will reply as soon as possible.",
  },
  cancellation: {
    title: "Cancellation & Refund Policy",
    intro:
      "For direct bookings (email, phone, or this website), Sudamjae applies the Korea Fair Trade Commission's Consumer Dispute Resolution Standards. If you booked through Airbnb or Naver Place, that channel's own cancellation and refund policy applies instead.",
    tableHeaderTiming: "Cancellation timing",
    tableHeaderWeekday: "Weekday refund",
    tableHeaderWeekend: "Weekend refund",
    highSeasonTitle: "High Season Refund Schedule",
    highSeasonRows: [
      { timing: "Up to 10 days before stay, or same day as booking", weekday: "100% of payment", weekend: "100% of payment" },
      { timing: "7–9 days before stay", weekday: "90% of payment", weekend: "80% of payment" },
      { timing: "5–6 days before stay", weekday: "70% of payment", weekend: "60% of payment" },
      { timing: "3–4 days before stay", weekday: "50% of payment", weekend: "40% of payment" },
      { timing: "2 days before stay through the stay date", weekday: "20% of payment", weekend: "10% of payment" },
    ],
    lowSeasonTitle: "Low Season Refund Schedule",
    lowSeasonRows: [
      { timing: "Up to 2 days before stay", weekday: "100% of payment", weekend: "100% of payment" },
      { timing: "1 day before stay", weekday: "90% of payment", weekend: "80% of payment" },
      { timing: "Stay date, or no-show", weekday: "80% of payment", weekend: "70% of payment" },
    ],
    notes: [
      "Cancellation timing is based on when Sudamjae receives your request. A no-show without contact is treated as a same-day cancellation.",
      "If a natural disaster or an official travel restriction makes it impossible to reach or use the property, we will confirm the circumstances and refund the full payment.",
      "If Sudamjae cancels a confirmed reservation for reasons on our side, we will refund the full payment in line with the Consumer Dispute Resolution Standards.",
    ],
    externalChannelNote:
      "If you booked through Airbnb or Naver Place, that channel's own cancellation and refund policy applies instead of the schedule above.",
  },
  location: {
    eyebrow: "Location",
    title: "Location & Directions",
    roadAddressLabel: "Road address",
    roadAddress: "298-25, Neungseo-ro, Sejongdaewang-myeon, Yeoju-si, Gyeonggi-do, Republic of Korea",
    lotAddressLabel: "Lot number address",
    lotAddress: "692-66, Wangdae-ri, Sejongdaewang-myeon, Yeoju-si, Gyeonggi-do, Republic of Korea",
    phoneLabel: "Phone",
    phone: "",
    emailLabel: "Email",
    email: "sudamjae_67@naver.com",
    directionsTitle: "Getting Here",
    directionsNote: "Enter the road address into your navigation app. Traveling by car is recommended.",
    parkingNote:
      "Private on-site parking is available. If your group is bringing several vehicles, please check availability with us before booking.",
    transitNote: "If using public transport, a taxi or reserved car from central Yeoju is recommended.",
    openMapLabel: "Open in Naver Map",
    copyAddressLabel: "Copy address",
    copiedLabel: "Copied",
    callLabel: "Call",
    mapTitle: "Map showing the location of Sudamjae",
    mapFailureNote: "If the map does not load, please use the address and Naver Map link below.",
  },
  reviews: {
    eyebrow: "Guest Impressions",
    title: "Stories from Our Guests",
    subtitle: "A record of deep, warm hours spent at Sudamjae",
    items: [
      {
        quote:
          "Stepping away from the noise of the city and opening the hanji doors to the scent of pine and the sound of rain on the eaves is something I will never forget. A restful memory for our whole family.",
        name: "Seo-yeong Kim",
        meta: "Seoul, South Korea",
      },
      {
        quote:
          "Our whole family stayed to celebrate my parents' 60th anniversary. A place where traditional dignity meets modern comfort — the morning tea we shared in the Dasil was especially memorable.",
        name: "Jin-woo Park",
        meta: "Seongnam, South Korea",
      },
      {
        quote:
          "An extraordinary architectural experience. As an architect, seeing the structural elegance of Hanok timber joinery firsthand while drinking tea was deeply moving.",
        name: "Julian V.",
        meta: "Architect, Switzerland",
      },
    ],
  },
  footer: {
    brand: "SUDAMJAE",
    tagline: "A place where simply staying is an experience of Hanok beauty",
    addressTitle: "Location & Inquiries",
    connectTitle: "Connect",
    connectLinks: ["Instagram @sudamjae_yeoju", "Naver Place", "Direct Inquiry"],
    legalLinks: [
      { label: "Terms and Conditions", href: "/en/terms" },
      { label: "Privacy Policy", href: "/en/privacy" },
    ],
    copyright: "© 2026 SUDAMJAE YEOJU. All rights reserved.",
  },
  terms: {
    title: "Terms and Conditions",
    updated: "Last updated: 19 September 2026",
    sections: [
      {
        heading: "Article 1 (Purpose)",
        body: [
          "These terms govern the rights, obligations and responsibilities of Sudamjae (\"the Operator\") and users of the website and reservation information service (\"the Service\").",
        ],
      },
      {
        heading: "Article 2 (Description of the Service)",
        body: [
          "This website provides information about Sudamjae's space, rates, availability, links to external booking channels, and a direct inquiry form.",
          "Reservations are not confirmed through this website alone. A reservation is confirmed only after confirmation from your chosen booking channel (Airbnb, Naver Place, etc.) or the Operator.",
        ],
      },
      {
        heading: "Article 3 (Disclaimer)",
        body: [
          "Availability shown on the calendar may change in real time and may differ from information on external booking channels.",
          "The Operator is not liable for damages arising from errors in information on this website, except in cases of intent or gross negligence.",
        ],
      },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: 19 September 2026",
    sections: [
      {
        heading: "1. Personal Information Collected",
        body: [
          "When submitting a direct inquiry, we collect your name and phone number as required fields, and email and message content as optional fields.",
        ],
      },
      {
        heading: "2. Purpose of Collection and Use",
        body: ["Personal information is used to respond to inquiries and confirm reservation details."],
      },
      {
        heading: "3. Retention Period",
        body: [
          "Information is retained for one year after the inquiry is resolved, then destroyed, unless a longer period is required by law.",
        ],
      },
      {
        heading: "4. Disclosure to Third Parties",
        body: ["The Operator does not share your personal information with external parties as a rule."],
      },
      {
        heading: "5. Contact",
        body: ["For privacy-related inquiries, please contact sudamjae_67@naver.com."],
      },
    ],
  },
};
