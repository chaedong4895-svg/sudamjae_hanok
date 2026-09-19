export type Locale = "ko" | "en";

export interface NavContent {
  story: string;
  space: string;
  experience: string;
  culture: string;
  yeoju: string;
  gallery: string;
  pricing: string;
  location: string;
  reviews: string;
  reservationCta: string;
}

export interface HeroContent {
  eyebrow: string;
  brand: string;
  brandHanja: string;
  title: string;
  tagline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  location: string;
  scrollHint: string;
}

export interface StoryContent {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  quote: string;
  quoteAuthor: string;
  imageCaption: string;
  imageSubCaption: string;
  linkLabel: string;
}

export interface SpaceRoom {
  tag: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageCaption: string;
}

export interface SpaceContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  specs: string[];
  rooms: SpaceRoom[];
}

export interface TimelineItem {
  time: string;
  title: string;
  description: string;
}

export interface ExperienceContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  imageCaption: string;
  imageDescription: string;
  timeline: TimelineItem[];
}

export interface CultureCard {
  tag: string;
  title: string;
  description: string;
}

export interface CultureContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  cards: CultureCard[];
}

export interface YeojuPlace {
  category: string;
  distance: string;
  name: string;
  description: string;
  address: string;
}

export interface YeojuContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  places: YeojuPlace[];
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export interface GalleryContent {
  eyebrow: string;
  title: string;
  hint: string;
  items: GalleryItem[];
}

export interface PriceRow {
  label: string;
  price: string;
  note: string;
}

export interface PricingContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  stayTitle: string;
  stayRates: PriceRow[];
  extraGuestNote: string;
  venueTitle: string;
  venueRates: PriceRow[];
  footnotes: string[];
  cancellationLinkLabel: string;
  ctaLabel: string;
}

export interface StayInfoContent {
  title: string;
  checkTitle: string;
  checkValue: string;
  checkNote: string;
  capacityTitle: string;
  capacityValue: string;
  capacityNote: string;
  includedTitle: string;
  includedItems: string[];
  petPolicyTitle: string;
  petPolicyBody: string;
  parkingPolicyTitle: string;
  parkingPolicyBody: string;
}

export interface ReservationPreviewContent {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
}

export interface CalendarLegend {
  available: string;
  closed: string;
  inquiry: string;
  selected: string;
  today: string;
  past: string;
}

export interface ReservationPageContent {
  title: string;
  intro: string;
  confirmNote: string;
  legend: CalendarLegend;
  prevMonth: string;
  nextMonth: string;
  selectCheckIn: string;
  selectCheckOut: string;
  resetSelection: string;
  guestsLabel: string;
  purposeLabel: string;
  purposeOptions: string[];
  optionsLabel: string;
  optionChoices: { key: string; label: string }[];
  summaryTitle: string;
  summaryCheckIn: string;
  summaryCheckOut: string;
  summaryNights: string;
  summaryGuests: string;
  summaryEstimate: string;
  summaryPlaceholder: string;
  estimateDisclaimer: string;
  channelsTitle: string;
  airbnbLabel: string;
  naverLabel: string;
  directLabel: string;
  comingSoon: string;
  channelNote: string;
}

export interface InquiryFormContent {
  title: string;
  description: string;
  nameLabel: string;
  namePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  datesLabel: string;
  guestsLabel: string;
  purposeLabel: string;
  optionsLabel: string;
  messageLabel: string;
  messagePlaceholder: string;
  consentLabel: string;
  consentDetail: string;
  submitLabel: string;
  sendingLabel: string;
  requiredMark: string;
  errors: {
    name: string;
    phone: string;
    email: string;
    dates: string;
    consent: string;
    server: string;
  };
  successTitle: string;
  /** {ref} 토큰을 접수 번호로 치환해서 사용한다. (서버→클라이언트 컴포넌트 경계로 함수를 전달할 수 없어 문자열 템플릿으로 관리) */
  successBodyTemplate: string;
}

export interface RefundRow {
  timing: string;
  weekday: string;
  weekend: string;
}

export interface CancellationPolicyContent {
  title: string;
  intro: string;
  tableHeaderTiming: string;
  tableHeaderWeekday: string;
  tableHeaderWeekend: string;
  highSeasonTitle: string;
  highSeasonRows: RefundRow[];
  lowSeasonTitle: string;
  lowSeasonRows: RefundRow[];
  notes: string[];
  externalChannelNote: string;
}

export interface LocationContent {
  eyebrow: string;
  title: string;
  roadAddressLabel: string;
  roadAddress: string;
  lotAddressLabel: string;
  lotAddress: string;
  phoneLabel: string;
  phone: string;
  emailLabel: string;
  email: string;
  directionsTitle: string;
  directionsNote: string;
  parkingNote: string;
  transitNote: string;
  openMapLabel: string;
  copyAddressLabel: string;
  copiedLabel: string;
  callLabel: string;
  mapFailureNote: string;
}

export interface ReviewItem {
  quote: string;
  name: string;
  meta: string;
}

export interface ReviewsContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: ReviewItem[];
}

export interface FooterContent {
  brand: string;
  tagline: string;
  addressTitle: string;
  connectTitle: string;
  connectLinks: string[];
  legalLinks: { label: string; href: string }[];
  copyright: string;
}

export interface LegalPageContent {
  title: string;
  updated: string;
  sections: { heading: string; body: string[] }[];
}

export interface SiteContent {
  locale: Locale;
  htmlLang: string;
  meta: { title: string; description: string };
  languageSwitch: { label: string };
  nav: NavContent;
  hero: HeroContent;
  story: StoryContent;
  space: SpaceContent;
  experience: ExperienceContent;
  culture: CultureContent;
  yeoju: YeojuContent;
  gallery: GalleryContent;
  pricing: PricingContent;
  stayInfo: StayInfoContent;
  reservationPreview: ReservationPreviewContent;
  reservationPage: ReservationPageContent;
  inquiryForm: InquiryFormContent;
  cancellation: CancellationPolicyContent;
  location: LocationContent;
  reviews: ReviewsContent;
  footer: FooterContent;
  terms: LegalPageContent;
  privacy: LegalPageContent;
}
