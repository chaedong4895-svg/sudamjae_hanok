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
    imageCaption: "A stepping-stone path through Sudamjae's garden",
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
        image: "/images/spaces/01-anchae.jpg",
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
        image: "/images/spaces/02-sarangchae.jpg",
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
        image: "/images/spaces/03-tea-room.jpg",
        imageCaption: "Sudamjae's Dasil, with cushions and a tea table",
      },
      {
        tag: "04 · Gathering Hall",
        title: "Main Hall (Daecheong)",
        description:
          "The main hall, where soaring wooden rafters meet the warmth of natural timber. A generous shared space for family and friends to gather.",
        bullets: ["High timber-beamed ceiling", "Open living space connecting Anchae and Sarangchae"],
        image: "/images/spaces/04-main-hall.jpg",
        imageCaption: "The Main Hall beneath a chandelier",
      },
      {
        tag: "05 · Kitchen & Dining",
        title: "Kitchen",
        description:
          "A self-contained kitchen for cooking and dining. Enjoy a meal at the bar table while looking out over the garden.",
        bullets: ["Induction cooktop and oven", "Bar table facing the garden view"],
        image: "/images/spaces/05-kitchen.jpg",
        imageCaption: "The kitchen table beside a window view",
      },
      {
        tag: "06 · Attic",
        title: "Attic Loft",
        description:
          "A loft space where the roof's timber rafters remain fully exposed. Useful as extra sleeping space for families or larger groups.",
        bullets: ["Feel the Hanok roof structure up close", "Can be used as additional sleeping space"],
        image: "/images/spaces/06-attic.jpg",
        imageCaption: "The attic loft with exposed rafters",
      },
      {
        tag: "07 · Garden & Pavilion",
        title: "Garden & Glass Pavilion",
        description:
          "Old pine and crape myrtle trees surround the courtyard, beside an all-weather glass BBQ pavilion.",
        bullets: ["Private garden with stone guardian statues", "Glass BBQ pavilion (additional fee)"],
        image: "/images/spaces/07-garden-pavilion.jpg",
        imageCaption: "The glass BBQ pavilion beside the garden",
      },
    ],
  },
  experience: {
    eyebrow: "Chronicles of Serenity",
    title: "A Day at Sudamjae",
    subtitle: "Time flows gently, following the arc of sun and moon",
    imageCaption: "The sunlit glass pavilion",
    imageDescription:
      "Sudamjae's glass pavilion, where tea and meals come with a garden view through floor-to-ceiling windows.",
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
    showMore: "Show more photos",
    showLess: "Show less",
    items: [
      { src: "/images/gallery/01-front-view.jpg", alt: "Sudamjae seen across the lawn", caption: "Sudamjae seen across the lawn" },
      { src: "/images/gallery/02-sunset-glass-pavilion.jpg", alt: "The hanok and glass pavilion under a sunset sky", caption: "The hanok and glass pavilion under a sunset sky" },
      { src: "/images/gallery/03-anchae.jpg", alt: "Anchae, with crisp white bedding", caption: "Anchae, with crisp white bedding" },
      { src: "/images/gallery/04-tea-room.jpg", alt: "The Tea Room, set with a tea table and cushions", caption: "The Tea Room, set with a tea table and cushions" },
      { src: "/images/gallery/05-starry-night.jpg", alt: "Sudamjae beneath a starry night sky", caption: "Sudamjae beneath a starry night sky" },
      { src: "/images/gallery/06-garden-pavilion.jpg", alt: "The garden and glass pavilion", caption: "The garden and glass pavilion" },
      { src: "/images/gallery/07-main-hall.jpg", alt: "The Main Hall beneath a chandelier", caption: "The Main Hall beneath a chandelier" },
      { src: "/images/gallery/08-roof-tile-firepit.jpg", alt: "A fire crackling in the roof-tile fire pit", caption: "A fire crackling in the roof-tile fire pit" },
      { src: "/images/gallery/09-bedroom-sitting.jpg", alt: "A bedroom opening onto a floor-seated tea corner", caption: "A bedroom opening onto a floor-seated tea corner" },
      { src: "/images/gallery/10-tea-setting.jpg", alt: "An indoor tea setting with a wall of teaware", caption: "An indoor tea setting with a wall of teaware" },
      { src: "/images/gallery/11-attic.jpg", alt: "The Attic, under exposed rafters", caption: "The Attic, under exposed rafters" },
      { src: "/images/gallery/12-small-wedding.jpg", alt: "A small wedding held in the garden", caption: "A small wedding held in the garden" },
      { src: "/images/gallery/13-dusk-view.jpg", alt: "Sudamjae with its lights on at dusk", caption: "Sudamjae with its lights on at dusk" },
      { src: "/images/gallery/14-aerial.jpg", alt: "Sudamjae seen from above", caption: "Sudamjae seen from above" },
      { src: "/images/gallery/15-gate-courtyard.jpg", alt: "The front gate and gravel courtyard", caption: "The front gate and gravel courtyard" },
      { src: "/images/gallery/16-crape-myrtle.jpg", alt: "The courtyard with its crape myrtle and stone figures", caption: "The courtyard with its crape myrtle and stone figures" },
      { src: "/images/gallery/17-roofline.jpg", alt: "The hanok roofline reaching toward the sky", caption: "The hanok roofline reaching toward the sky" },
      { src: "/images/gallery/18-sunlit-eaves.jpg", alt: "A sunlit courtyard beneath the eaves", caption: "A sunlit courtyard beneath the eaves" },
      { src: "/images/gallery/19-veranda-eaves.jpg", alt: "The wooden veranda and eaves", caption: "The wooden veranda and eaves" },
      { src: "/images/gallery/20-veranda-pavilion-view.jpg", alt: "The garden pavilion seen from the veranda", caption: "The garden pavilion seen from the veranda" },
      { src: "/images/gallery/21-garden-path.jpg", alt: "A stepping-stone path through the garden", caption: "A stepping-stone path through the garden" },
      { src: "/images/gallery/22-stone-wall.jpg", alt: "The stone wall topped with roof tiles", caption: "The stone wall topped with roof tiles" },
      { src: "/images/gallery/23-eaves-01.jpg", alt: "Rafters beneath the eaves", caption: "Rafters beneath the eaves" },
      { src: "/images/gallery/24-eaves-02.jpg", alt: "Corner rafters fanning out like a folding fan", caption: "Corner rafters fanning out like a folding fan" },
      { src: "/images/gallery/25-eaves-03.jpg", alt: "Layered joinery of the eaves", caption: "Layered joinery of the eaves" },
      { src: "/images/gallery/26-eaves-04.jpg", alt: "The eaves against a blue sky", caption: "The eaves against a blue sky" },
      { src: "/images/gallery/27-night-veranda.jpg", alt: "The veranda lit up at night", caption: "The veranda lit up at night" },
      { src: "/images/gallery/28-night-maru.jpg", alt: "The wooden maru at night", caption: "The wooden maru at night" },
      { src: "/images/gallery/29-sarangchae.jpg", alt: "Sarangchae, under a rafter ceiling", caption: "Sarangchae, under a rafter ceiling" },
      { src: "/images/gallery/30-sarangchae-ceiling.jpg", alt: "The timber ceiling with a paper lantern", caption: "The timber ceiling with a paper lantern" },
      { src: "/images/gallery/31-bedroom-wood.jpg", alt: "A bedroom in warm wood tones", caption: "A bedroom in warm wood tones" },
      { src: "/images/gallery/32-kitchen-dining.jpg", alt: "The kitchen table beside a window view", caption: "The kitchen table beside a window view" },
      { src: "/images/gallery/33-kitchen-bar.jpg", alt: "The kitchen with its bar table", caption: "The kitchen with its bar table" },
      { src: "/images/gallery/34-moon-jar.jpg", alt: "A white porcelain moon jar by the window", caption: "A white porcelain moon jar by the window" },
      { src: "/images/gallery/35-outdoor-tea.jpg", alt: "A tea set laid out on the outdoor table", caption: "A tea set laid out on the outdoor table" },
      { src: "/images/gallery/36-teacups.jpg", alt: "A close-up of teacups", caption: "A close-up of teacups" },
      { src: "/images/gallery/37-pavilion-front.jpg", alt: "The glass pavilion with its doors open", caption: "The glass pavilion with its doors open" },
      { src: "/images/gallery/38-pavilion-dining.jpg", alt: "Inside the pavilion, tables set for a meal", caption: "Inside the pavilion, tables set for a meal" },
      { src: "/images/gallery/39-pavilion-interior.jpg", alt: "The pavilion filled with sunlight", caption: "The pavilion filled with sunlight" },
      { src: "/images/gallery/40-bath-mosaic.jpg", alt: "Green mosaic tile and a ceramic basin", caption: "Green mosaic tile and a ceramic basin" },
      { src: "/images/gallery/41-bath-mint.jpg", alt: "A bathroom with a mint basin and gold accents", caption: "A bathroom with a mint basin and gold accents" },
      { src: "/images/gallery/42-bath-basin.jpg", alt: "A celadon-toned ceramic basin", caption: "A celadon-toned ceramic basin" },
      { src: "/images/gallery/44-bath-shower.jpg", alt: "A beige-toned shower space", caption: "A beige-toned shower space" },
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
          "韓国の伝統家屋を体験できる素晴らしい所でした。寝室や浴室もとてもきれいで一泊二日では物足りなかったです。日々のストレスを忘れて自然に囲まれながら癒しのひとときを過ごせました。",
        translation:
          "It was a wonderful place to experience a traditional Korean house. The bedroom and bathroom were spotlessly clean, and one night felt too short. Surrounded by nature, I forgot the stress of daily life and enjoyed a truly healing time.",
        name: "Tokunaga",
        meta: "Seoul, South Korea",
      },
      {
        quote:
          "고즈넉하고 품이 넓은 한옥펜션입니다. 다도와 함께 넉넉한 시간을 즐길 수 있는 별채와 잘 정돈된 넓은 잔디 마당이 매력적인 여주 수담재입니다. 한적하고 여유로운 분위기 속에서 조용히 힐링하기에 최적인 감성 펜션입니다. 꼭 방문해 보세요!",
        translation:
          "A serene and spacious hanok stay. Sudamjae in Yeoju charms with a separate annex where you can enjoy unhurried time over tea ceremony, and a wide, well-kept lawn courtyard. Set in a quiet, relaxed atmosphere, it is a heartfelt retreat ideal for healing in peace. Do pay it a visit!",
        name: "Lee **",
        meta: "Seoul, South Korea",
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
