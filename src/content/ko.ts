import type { SiteContent } from "./types";

export const ko: SiteContent = {
  locale: "ko",
  htmlLang: "ko",
  meta: {
    title: "수담재 水潭齋 | 여주 프리미엄 독채 한옥 스테이",
    description:
      "경기 여주 세종대왕면의 프리미엄 독채 한옥 수담재. 한옥 건축과 정원, 다실에서 깊은 쉼을 경험하세요.",
  },
  languageSwitch: { label: "EN" },
  nav: {
    story: "수담재 소개",
    space: "공간",
    experience: "하루",
    culture: "경험",
    yeoju: "여주",
    gallery: "갤러리",
    pricing: "가격",
    location: "오시는 길",
    reviews: "후기",
    reservationCta: "예약하기",
  },
  hero: {
    eyebrow: "A Private Hanok Sanctuary · Yeoju",
    brand: "수담재",
    brandHanja: "水潭齋",
    title: "한옥에 머물며, 한국의 미를 경험하다",
    tagline:
      "시간이 조금 느리게 흐르는 곳. 수담재에서 한옥과 자연, 그리고 깊은 쉼을 만나보세요.",
    ctaPrimary: "예약하기",
    ctaSecondary: "수담재 이야기",
    location: "Yeoju, Republic of Korea",
    scrollHint: "EXPLORE SUDAMJAE",
  },
  story: {
    eyebrow: "The Story of Sudamjae",
    title: "한옥의 아름다움을\n오늘의 삶 속에서 마주하다",
    paragraphs: [
      "수담재는 전통을 박제하여 전시하기 위한 공간이 아니라, 한옥의 따스한 미학을 직접 머물며 체화하는 독채 스테이입니다.",
      "다듬어지지 않은 목재 기둥과 창호지 문을 통해 흩어지는 아침 햇살, 그리고 비움으로써 채워지는 마당. 일상의 분주한 속도를 잠시 내려놓고, 한국 고유의 조용하고 단아한 호흡을 회복합니다.",
    ],
    quote: "비움으로써 채워지는 한옥의 여백, 그 안에서 비로소 마주하는 온전한 쉼",
    quoteAuthor: "수담재 호스트",
    imageCaption: "수담재 본채와 앞마당",
    imageSubCaption: "Architectural Wood & Hanji",
    linkLabel: "공간 구성 살펴보기",
  },
  space: {
    eyebrow: "Exclusive Private Estate",
    title: "머무는 공간",
    subtitle: "하루 동안 온전히 당신만을 위해 비워지는 사유의 터",
    specs: [
      "독채 한옥 전용",
      "객실 2개",
      "다실 1개",
      "주방 1개",
      "욕실 2개",
      "다락 1개",
      "정원 · 바비큐 파빌리온",
      "기준 4인 · 최대 8인",
    ],
    rooms: [
      {
        tag: "01 · Private Rest",
        title: "안채",
        description:
          "정갈한 침구가 놓인 메인 침실입니다. 창호지 창살 너머로 비치는 아침 햇살과 정원의 풍경이 함께하며, 전용 욕실이 바로 이어집니다.",
        bullets: [
          "독립된 욕실과 이어지는 구조",
          "개별 냉난방 설비",
        ],
        image: "/images/interior/bedroom-02.jpg",
        imageCaption: "정갈하게 꾸며진 안채 침실",
      },
      {
        tag: "02 · Private Rest",
        title: "사랑채",
        description:
          "안채와 별도로 마련된 두 번째 침실입니다. 일행이 많을 때 가족·지인이 나누어 머물기 좋습니다.",
        bullets: [
          "정갈한 침구와 수납장 완비",
          "개별 냉난방 설비",
        ],
        image: "/images/interior/bedroom-01.jpg",
        imageCaption: "사랑채 침실",
      },
      {
        tag: "03 · Tea Ritual",
        title: "다실",
        description:
          "방석에 앉아 차를 우리고 서로의 말소리에 귀 기울이는 정적의 공간입니다. 나지막한 찻상과 창호지 벽면이 고요한 분위기를 더합니다.",
        bullets: [
          "좌식 다과상과 방석 구비",
          "다도를 위한 별도 공간",
          "사전 문의 시 다도 체험 연계 가능",
        ],
        image: "/images/interior/tea-room.jpg",
        imageCaption: "방석과 찻상이 놓인 수담재 다실",
      },
      {
        tag: "04 · Gathering Hall",
        title: "대청과 공용공간",
        description:
          "높이 솟은 서까래와 천연 목재의 온기가 어우러지는 메인 홀입니다. 가족, 지인과 함께 넉넉한 시간을 보낼 수 있습니다.",
        bullets: ["층고가 높은 목조 천장", "안채·사랑채와 이어지는 넓은 공용 공간"],
        image: "/images/interior/main-hall.jpg",
        imageCaption: "서까래가 드러난 대청과 공용공간",
      },
      {
        tag: "05 · Kitchen & Dining",
        title: "주방",
        description:
          "취사와 다이닝이 모두 가능한 독립 주방입니다. 창밖 정원을 바라보며 바 테이블에서 식사할 수 있습니다.",
        bullets: ["인덕션과 오븐 등 취사 시설", "정원이 보이는 바 테이블"],
        image: "/images/interior/kitchen-bar.jpg",
        imageCaption: "정원 전망의 주방 바 테이블",
      },
      {
        tag: "06 · Attic",
        title: "다락",
        description:
          "지붕 서까래가 그대로 드러난 다락 공간으로, 아이들과 함께하는 가족 여행이나 추가 인원의 취침 공간으로 활용할 수 있습니다.",
        bullets: ["한옥 지붕 구조를 그대로 느낄 수 있는 공간", "추가 취침 공간으로 활용"],
        image: "/images/interior/attic.jpg",
        imageCaption: "서까래가 드러난 다락",
      },
      {
        tag: "07 · Garden & Pavilion",
        title: "정원과 글라스 파빌리온",
        description:
          "오래된 소나무와 배롱나무가 둘러싼 마당 한편에 날씨에 구애받지 않는 글라스 바비큐 파빌리온이 자리합니다.",
        bullets: ["프라이빗 정원과 석상", "글라스 바비큐 파빌리온 (별도 이용료)"],
        image: "/images/exterior/pavilion-garden.jpg",
        imageCaption: "정원 옆 글라스 바비큐 파빌리온",
      },
    ],
  },
  experience: {
    eyebrow: "Chronicles of Serenity",
    title: "한옥에서 보내는 하루",
    subtitle: "해와 달의 궤적을 따라 유연하게 흐르는 시간",
    imageCaption: "수담재의 중심, 대청과 공용공간",
    imageDescription:
      "웅장한 서까래와 천연 목재의 온기가 어우러지는 사유의 메인 홀입니다.",
    timeline: [
      {
        time: "07:30",
        title: "고요한 한옥의 아침",
        description:
          "창호지 문살 사이로 부드럽게 번지는 아침 햇살과 정원의 새소리로 자연스럽게 눈을 뜹니다.",
      },
      {
        time: "10:00",
        title: "여주의 자연과 산책",
        description:
          "세종대왕릉과 남한강변을 따라 천천히 거닐며 여주의 고즈넉한 풍경을 만납니다.",
      },
      {
        time: "15:00",
        title: "다실에서 즐기는 차 한 잔",
        description:
          "다실에 앉아 직접 차를 우려내는 시간. 찻물이 떨어지는 소리와 고요한 한지 벽면이 만들어내는 깊은 쉼의 시간입니다.",
      },
      {
        time: "18:00",
        title: "마당과 파빌리온에서의 저녁",
        description:
          "정원의 노을을 바라보며 글라스 파빌리온에서 소중한 사람들과 함께하는 저녁 시간을 보낼 수 있습니다.",
      },
      {
        time: "21:00",
        title: "은은한 조명 아래 한옥의 밤",
        description:
          "처마 끝으로 이어지는 별빛과 마당의 정온함 속에서 하루를 정리하며 편안한 밤을 맞이합니다.",
      },
    ],
  },
  culture: {
    eyebrow: "Curated Korean Heritage",
    title: "수담재에서 경험하는 것",
    subtitle: "머무름 그 이상의 깊이 있는 한국 문화와의 만남",
    cards: [
      {
        tag: "01 · Tea Ritual",
        title: "차와 다도",
        description:
          "다실에 마련된 찻상과 다구를 이용해 직접 차를 우려보는 시간을 가질 수 있습니다. 물 끓는 소리와 온기를 느끼며 몸과 마음을 가라앉혀 보세요.",
      },
      {
        tag: "02 · Architecture",
        title: "한옥의 미",
        description:
          "못을 최소화하고 목재를 짜맞춘 전통 결구 방식과 완만한 곡선의 처마. 대청마루에서 올려다보는 대들보와 서까래의 구조를 가까이에서 감상해보세요.",
      },
      {
        tag: "03 · Ceramic Craft",
        title: "여주 도자기",
        description:
          "조선 백자의 본고장으로 알려진 여주에는 다수의 도예 공방이 모여 있습니다. 인근 도예촌에서 그릇과 다기를 직접 둘러보고 체험해볼 수 있습니다.",
      },
      {
        tag: "04 · Local Flavors",
        title: "여주의 맛",
        description:
          "여주는 예로부터 품질 좋은 쌀 산지로 알려져 있습니다. 인근 맛집과 로컬 재료를 활용한 식사를 원하시면 사전 문의해 주세요.",
      },
      {
        tag: "05 · Silence & Pine Yard",
        title: "자연과 쉼",
        description:
          "외부 시선이 차단된 담장 안에서 만나는 오래된 소나무와 배롱나무. 바람이 지나갈 때마다 들리는 나뭇잎 소리 외에는 아무것도 방해하지 않는 고요한 휴식을 누려보세요.",
      },
    ],
  },
  yeoju: {
    eyebrow: "Heritage Destination",
    title: "수담재와 함께 만나는 여주",
    subtitle: "유구한 역사와 남한강의 맑은 물결, 도자기 장인들의 도시",
    places: [
      {
        category: "조선 왕릉",
        distance: "세종대왕면",
        name: "세종대왕릉 (영릉)",
        description:
          "세종대왕과 소헌왕후가 잠든 유네스코 세계문화유산. 수담재가 위치한 세종대왕면에서 가까운 거리에 있습니다.",
        address: "경기 여주시 능서면 영릉로 269-50",
      },
      {
        category: "남한강 천년고찰",
        distance: "여주 시내",
        name: "신륵사 (神勒寺)",
        description:
          "국내에서 유일하게 강변에 자리한 사찰로, 강월헌 정자에서 남한강 물안개를 바라보며 유유자적한 풍경을 감상할 수 있습니다.",
        address: "경기 여주시 신륵사길 73",
      },
      {
        category: "도자 문화 예술",
        distance: "여주 도예촌",
        name: "여주 도예촌 & 도자미술관",
        description:
          "청자와 백자의 전통을 이어받은 공방이 모여 있는 도예 마을. 그릇 쇼룸과 물레 체험이 가능합니다.",
        address: "경기 여주시 도예로 일대",
      },
      {
        category: "강변 산책 & 라이딩",
        distance: "남한강 수변",
        name: "남한강 강변 자전거길 & 강천섬",
        description:
          "끝없이 이어지는 은빛 갈대밭과 잔잔한 강물. 자전거를 대여해 강바람을 맞으며 달리는 상쾌한 시간을 보낼 수 있습니다.",
        address: "여주 강천섬 및 남한강 수변공원",
      },
      {
        category: "프리미엄 쇼핑",
        distance: "여주 시내",
        name: "여주 프리미엄 아울렛",
        description:
          "국내 최대 규모의 명품 쇼핑 명소. 여행의 일정 전후로 여유로운 쇼핑과 미식을 함께 즐기기에 좋습니다.",
        address: "경기 여주시 명품로 360",
      },
      {
        category: "프라이빗 골프",
        distance: "여주 인근",
        name: "여주 인근 골프 클럽",
        description: "여주의 구릉지에 펼쳐진 여러 골프 코스와 편리하게 연결됩니다.",
        address: "여주시 관내 주요 골프장",
      },
    ],
  },
  gallery: {
    eyebrow: "Visual Archive",
    title: "수담재 갤러리",
    hint: "사진을 클릭하면 크게 볼 수 있습니다",
    items: [
      { src: "/images/gallery/gallery-01.jpg", alt: "수담재 본채와 앞마당 전경", caption: "수담재 본채와 앞마당 전경" },
      { src: "/images/gallery/gallery-02.jpg", alt: "노을이 물드는 수담재의 저녁", caption: "노을이 물드는 수담재의 저녁" },
      { src: "/images/gallery/gallery-03.jpg", alt: "조명이 켜진 수담재의 밤 풍경", caption: "조명이 켜진 수담재의 밤" },
      { src: "/images/gallery/gallery-04.jpg", alt: "정원 옆 글라스 바비큐 파빌리온", caption: "정원 옆 글라스 바비큐 파빌리온" },
      { src: "/images/gallery/gallery-05.jpg", alt: "처마와 서까래의 결구", caption: "처마와 서까래의 결구" },
      { src: "/images/gallery/gallery-06.jpg", alt: "방석과 찻상이 놓인 다실", caption: "방석과 찻상이 놓인 다실" },
      { src: "/images/gallery/gallery-07.jpg", alt: "높은 서까래 아래 거실 홀", caption: "높은 서까래 아래 거실 홀" },
      { src: "/images/gallery/gallery-08.jpg", alt: "정갈하게 꾸며진 침실", caption: "정갈하게 꾸며진 침실" },
      { src: "/images/gallery/gallery-09.jpg", alt: "우드 천장 아래 욕조가 있는 욕실", caption: "우드 천장 아래 욕조가 있는 욕실" },
      { src: "/images/gallery/gallery-10.jpg", alt: "그린 모자이크 타일 욕실", caption: "그린 모자이크 타일 욕실" },
      { src: "/images/gallery/gallery-11.jpg", alt: "서까래가 드러난 다락", caption: "서까래가 드러난 다락" },
      { src: "/images/gallery/gallery-12.jpg", alt: "정원의 배롱나무", caption: "정원의 배롱나무" },
    ],
  },
  pricing: {
    eyebrow: "Rates",
    title: "가격 및 이용 안내",
    subtitle: "숙박과 공간대여 요금을 투명하게 안내합니다",
    stayTitle: "숙박 요금 (4인 기준 독채)",
    stayRates: [
      { label: "비성수기 · 주중", price: "590,000원", note: "일~목요일 밤 (공휴일 전날 제외)" },
      { label: "비성수기 · 주말", price: "740,000원", note: "금·토요일 밤 또는 공휴일 전날 밤" },
      { label: "성수기 · 주중", price: "790,000원", note: "여름 7/15~8/24, 겨울 12/20~2/20" },
      { label: "성수기 · 주말", price: "950,000원", note: "성수기 중 금·토요일 밤 또는 공휴일 전날 밤" },
    ],
    extraGuestNote: "기본 4인, 최대 8인. 추가 인원 1인당 30,000원(1박 기준)이 더해집니다.",
    venueTitle: "공간대여 및 추가 옵션",
    venueRates: [
      { label: "전일 공간대여", price: "1,000,000원", note: "기업 행사, 소규모 모임, 브랜드 행사, 상업 촬영 등" },
      { label: "전일 공간대여 + 숙박", price: "1,400,000원", note: "시즌·요일 구분 없이 동일 요금" },
      { label: "프라이빗 바비큐 하우스 이용", price: "100,000원", note: "바비큐 하우스와 관련 공간 이용" },
      { label: "숯 바비큐 준비 세트", price: "1세트 20,000원", note: "숯 등 기본 준비물 포함" },
      { label: "전통 가마솥 체험", price: "100,000원", note: "가마솥과 관련 공간 이용, 세부 범위는 사전 문의" },
    ],
    footnotes: [
      "모든 요금은 부가세가 포함된 금액입니다.",
      "성수기는 매년 여름 7월 15일~8월 24일, 겨울 12월 20일~다음 해 2월 20일이며 그 외 기간은 비성수기입니다. 주말 요금은 금·토요일 숙박 및 공휴일 전날 숙박에 적용됩니다.",
      "2박 이상 자동 연박 할인은 적용되지 않습니다.",
      "취소·환불 정책은 예약 페이지에서 확인하실 수 있습니다. 보증금·청소비 등 그 외 세부 정책은 예약 시 안내해 드립니다.",
    ],
    cancellationLinkLabel: "취소·환불 정책 보기",
    ctaLabel: "예약 가능일 확인하기",
  },
  stayInfo: {
    title: "이용 안내",
    checkTitle: "체크인 / 체크아웃",
    checkValue: "15:00 / 11:00",
    checkNote: "쾌적한 객실 정비와 다음 고객을 위한 준비를 위해 체크인 및 체크아웃 시간을 준수해 주세요.",
    capacityTitle: "인원",
    capacityValue: "기준 4인 · 최대 8인",
    capacityNote: "기준 인원 초과 시 1인당 30,000원이 추가됩니다.",
    includedTitle: "기본 제공 사항",
    includedItems: [
      "독채 한옥 (안채·사랑채, 다실, 주방, 욕실 2개, 다락) 전체 전용 사용",
      "프라이빗 정원과 글라스 바비큐 파빌리온",
      "기본 바디·헤어 어메니티",
      "고속 Wi-Fi",
    ],
    petPolicyTitle: "반려동물",
    petPolicyBody:
      "쾌적한 객실 관리와 다음 이용객을 위해 반려동물 동반은 불가합니다. 장애인 보조견 동반이 필요한 경우에는 예약 전에 별도로 문의해 주세요.",
    parkingPolicyTitle: "주차",
    parkingPolicyBody:
      "수담재 내부에 전용 주차 공간이 마련되어 있습니다. 여러 대의 차량을 이용하시는 경우에는 예약 전에 주차 가능 여부를 문의해 주세요.",
  },
  reservationPreview: {
    eyebrow: "Reservation",
    title: "예약 가능일 미리보기",
    description:
      "수담재는 하루 단 한 팀만을 위한 프라이빗 독채입니다. 예약 가능한 날짜를 확인한 뒤 원하는 채널로 예약하거나 직접 문의해 주세요.",
    ctaLabel: "예약 페이지로 이동",
  },
  reservationPage: {
    title: "예약",
    intro:
      "예약 가능한 날짜를 확인하신 후 Airbnb 또는 네이버 플레이스에서 예약하거나 수담재로 직접 문의해 주세요. 일정은 실시간으로 변경될 수 있으며 최종 예약은 선택한 예약 채널 또는 호스트의 확인 후 확정됩니다.",
    confirmNote:
      "외부 예약 채널과 이 달력의 정보가 다를 수 있습니다. 최종 예약 가능 여부는 예약 채널 또는 호스트 확인을 통해 다시 한 번 확인해 주세요.",
    legend: {
      available: "예약 가능",
      closed: "예약 마감",
      inquiry: "문의 필요",
      selected: "선택됨",
      today: "오늘",
      past: "지난 날짜",
    },
    prevMonth: "이전 달",
    nextMonth: "다음 달",
    selectCheckIn: "체크인 날짜를 선택해 주세요",
    selectCheckOut: "체크아웃 날짜를 선택해 주세요",
    resetSelection: "다시 선택",
    guestsLabel: "인원",
    purposeLabel: "이용 목적",
    purposeOptions: ["숙박", "가족 모임", "기업 행사", "브랜드 행사", "상업 촬영", "기타"],
    optionsLabel: "추가 옵션",
    optionChoices: [
      { key: "bbq", label: "프라이빗 바비큐 하우스 (100,000원)" },
      { key: "charcoal", label: "숯 바비큐 준비 세트 (20,000원/세트)" },
      { key: "cauldron", label: "전통 가마솥 체험 (100,000원)" },
    ],
    summaryTitle: "예약 요약",
    summaryCheckIn: "체크인",
    summaryCheckOut: "체크아웃",
    summaryNights: "숙박일 수",
    summaryGuests: "인원",
    summaryEstimate: "예상 숙박 요금",
    summaryPlaceholder: "달력에서 체크인과 체크아웃 날짜를 선택해 주세요.",
    estimateDisclaimer: "예상 금액이며 옵션 요금은 별도입니다. 최종 금액은 예약 채널 또는 호스트 확인 후 확정됩니다.",
    channelsTitle: "예약 채널 선택",
    airbnbLabel: "Airbnb에서 예약하기",
    naverLabel: "네이버에서 예약하기",
    directLabel: "수담재에 직접 문의하기",
    comingSoon: "채널 등록 중 · 이메일 또는 직접 문의를 이용해 주세요",
    channelNote:
      "Airbnb와 네이버 플레이스 예약 링크는 채널 등록이 완료되는 대로 반영할 예정입니다. 링크가 개설되기 전까지는 이메일 또는 홈페이지 직접 문의를 이용해 주세요. 외부 채널을 통해 예약하신 경우에는 해당 채널에 표시된 취소·환불 규정이 우선 적용됩니다.",
  },
  inquiryForm: {
    title: "직접 문의하기",
    description: "아래 정보를 남겨주시면 확인 후 순차적으로 연락드립니다.",
    nameLabel: "이름",
    namePlaceholder: "홍길동",
    phoneLabel: "휴대전화",
    phonePlaceholder: "010-0000-0000",
    emailLabel: "이메일 (선택)",
    emailPlaceholder: "example@email.com",
    datesLabel: "희망 일정",
    guestsLabel: "인원",
    purposeLabel: "이용 목적",
    optionsLabel: "옵션",
    messageLabel: "문의 내용 (선택)",
    messagePlaceholder: "궁금하신 점을 자유롭게 남겨주세요. (최대 1,000자)",
    consentLabel: "개인정보 수집 및 이용에 동의합니다.",
    consentDetail:
      "수집 항목: 이름, 휴대전화, 이메일. 이용 목적: 문의 응대 및 예약 확인. 보관 기간: 문의 처리 완료 후 1년.",
    submitLabel: "문의 보내기",
    sendingLabel: "전송 중…",
    requiredMark: "*",
    errors: {
      name: "이름을 2자 이상 입력해 주세요.",
      phone: "휴대전화 번호를 숫자로 입력해 주세요.",
      email: "이메일 형식을 확인해 주세요.",
      dates: "희망 일정을 선택하거나 입력해 주세요.",
      consent: "개인정보 수집 및 이용에 동의해 주세요.",
      server: "문의 전송에 실패했습니다. 잠시 후 다시 시도하시거나 아래 연락처로 직접 연락해 주세요.",
    },
    successTitle: "문의가 접수되었습니다",
    successBodyTemplate: "접수 번호 {ref} · 문의가 정상적으로 접수되었습니다. 확인 후 순차적으로 회신드립니다.",
  },
  cancellation: {
    title: "취소 및 환불 정책",
    intro:
      "직접 예약(이메일·전화·홈페이지 문의)에는 공정거래위원회 소비자분쟁해결기준을 적용합니다. Airbnb 또는 네이버 플레이스를 통해 예약하신 경우에는 해당 예약 채널에 표시된 취소·환불 규정이 우선 적용됩니다.",
    tableHeaderTiming: "취소 시점",
    tableHeaderWeekday: "주중 환불액",
    tableHeaderWeekend: "주말 환불액",
    highSeasonTitle: "성수기 환불 기준",
    highSeasonRows: [
      { timing: "이용일 10일 전까지 또는 예약 체결 당일", weekday: "결제금액 100%", weekend: "결제금액 100%" },
      { timing: "이용일 7~9일 전", weekday: "결제금액 90%", weekend: "결제금액 80%" },
      { timing: "이용일 5~6일 전", weekday: "결제금액 70%", weekend: "결제금액 60%" },
      { timing: "이용일 3~4일 전", weekday: "결제금액 50%", weekend: "결제금액 40%" },
      { timing: "이용일 2일 전~당일", weekday: "결제금액 20%", weekend: "결제금액 10%" },
    ],
    lowSeasonTitle: "비성수기 환불 기준",
    lowSeasonRows: [
      { timing: "이용일 2일 전까지", weekday: "결제금액 100%", weekend: "결제금액 100%" },
      { timing: "이용일 1일 전", weekday: "결제금액 90%", weekend: "결제금액 80%" },
      { timing: "이용일 당일 또는 연락 없이 불참", weekday: "결제금액 80%", weekend: "결제금액 70%" },
    ],
    notes: [
      "취소 요청은 수담재에서 접수한 시점을 기준으로 적용합니다. 연락 없이 입실하지 않는 경우에는 이용 당일 취소로 처리합니다.",
      "천재지변이나 관계기관의 통제로 숙소까지 이동하거나 숙소를 이용하는 것이 불가능한 경우에는 관련 증빙을 확인한 후 결제금액 전액을 환불합니다.",
      "수담재의 사정으로 예약이 취소되는 경우에는 결제금액을 전액 환불하고 소비자분쟁해결기준에 따라 처리합니다.",
    ],
    externalChannelNote:
      "Airbnb 또는 네이버 플레이스를 통해 예약하신 경우에는 위 기준 대신 해당 채널의 취소·환불 규정이 적용됩니다.",
  },
  location: {
    eyebrow: "Location",
    title: "오시는 길",
    roadAddressLabel: "도로명 주소",
    roadAddress: "경기 여주시 세종대왕면 능서로 298-25",
    lotAddressLabel: "지번 주소",
    lotAddress: "경기 여주시 세종대왕면 왕대리 692-66",
    phoneLabel: "전화",
    phone: "",
    emailLabel: "이메일",
    email: "sudamjae_67@naver.com",
    directionsTitle: "찾아오시는 방법",
    directionsNote: "네비게이션에 도로명 주소를 입력해 주세요. 자가용 이용을 권장합니다.",
    parkingNote:
      "수담재 내부에 전용 주차 공간이 마련되어 있습니다. 여러 대의 차량을 이용하시는 경우에는 예약 전에 주차 가능 여부를 문의해 주세요.",
    transitNote: "대중교통 이용 시 여주 시내에서 택시 또는 예약 차량 이용을 권장합니다.",
    openMapLabel: "네이버 지도에서 보기",
    copyAddressLabel: "주소 복사",
    copiedLabel: "복사되었습니다",
    callLabel: "전화 걸기",
    mapFailureNote: "지도가 표시되지 않는 경우 위 주소와 네이버 지도 링크를 이용해 주세요.",
  },
  reviews: {
    eyebrow: "Guest Impressions",
    title: "머물렀던 분들의 이야기",
    subtitle: "수담재에서 보낸 깊고 따스한 시간의 기록",
    items: [
      {
        quote:
          "도시의 소음에서 벗어나 창호지 문을 열었을 때 퍼지던 은은한 솔향과 처마 끝 빗소리를 잊을 수 없습니다. 가족 모두에게 오래 기억될 휴식이었습니다.",
        name: "김서영 님",
        meta: "서울 거주",
      },
      {
        quote:
          "부모님의 환갑을 기념하여 온 가족이 머물렀습니다. 전통의 품격과 현대적인 안락함이 조화를 이룬 곳. 다실에서 부모님과 함께 마신 아침 차 한 잔이 무척 각별했습니다.",
        name: "박진우 님",
        meta: "경기 성남 거주",
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
    brand: "수담재 (SUDAMJAE)",
    tagline: "머무는 것만으로 한옥의 미를 경험하는 곳",
    addressTitle: "위치 및 문의",
    connectTitle: "Connect",
    connectLinks: ["Instagram @sudamjae_yeoju", "네이버 플레이스", "직접 문의"],
    legalLinks: [
      { label: "이용약관", href: "/terms" },
      { label: "개인정보처리방침", href: "/privacy" },
    ],
    copyright: "© 2026 SUDAMJAE YEOJU. All rights reserved.",
  },
  terms: {
    title: "이용약관",
    updated: "최종 수정일: 2026년 9월 19일",
    sections: [
      {
        heading: "제1조 (목적)",
        body: [
          "이 약관은 수담재(이하 \"운영자\")가 제공하는 웹사이트 및 예약 안내 서비스(이하 \"서비스\")의 이용과 관련하여 운영자와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.",
        ],
      },
      {
        heading: "제2조 (서비스의 내용)",
        body: [
          "본 웹사이트는 수담재의 공간 소개, 가격 안내, 예약 가능일 확인 및 외부 예약 채널 연결, 직접 문의 접수 기능을 제공합니다.",
          "본 웹사이트를 통한 예약은 확정되지 않으며, 최종 예약은 Airbnb, 네이버 플레이스 등 선택한 예약 채널 또는 운영자의 확인을 거쳐 확정됩니다.",
        ],
      },
      {
        heading: "제3조 (면책)",
        body: [
          "달력에 표시되는 예약 가능 정보는 실시간으로 변경될 수 있으며, 외부 예약 채널의 정보와 다를 수 있습니다.",
          "운영자는 본 웹사이트에 게재된 정보의 오류로 발생한 손해에 대해 고의 또는 중대한 과실이 없는 한 책임을 지지 않습니다.",
        ],
      },
    ],
  },
  privacy: {
    title: "개인정보처리방침",
    updated: "최종 수정일: 2026년 9월 19일",
    sections: [
      {
        heading: "1. 수집하는 개인정보 항목",
        body: [
          "직접 문의 시 이름, 휴대전화 번호를 필수로, 이메일과 문의 내용을 선택적으로 수집합니다.",
        ],
      },
      {
        heading: "2. 개인정보의 수집 및 이용 목적",
        body: ["문의 응대, 예약 관련 확인 및 안내를 위해 개인정보를 이용합니다."],
      },
      {
        heading: "3. 개인정보의 보유 및 이용 기간",
        body: [
          "문의 처리가 완료된 날로부터 1년간 보관 후 파기합니다. 단, 관계 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관합니다.",
        ],
      },
      {
        heading: "4. 개인정보의 제3자 제공",
        body: ["운영자는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다."],
      },
      {
        heading: "5. 문의처",
        body: ["개인정보 관련 문의는 sudamjae_67@naver.com으로 연락해 주세요."],
      },
    ],
  },
};
