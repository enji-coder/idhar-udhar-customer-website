/**
 * IDHAR UDHAR — editable website content.
 * Components read from this file. Replace placeholders before public launch.
 * Do not put API keys, passwords, or private endpoints here.
 *
 * Before Cashfree / payment onboarding, replace:
 * - seo.siteUrl (also robots.txt, sitemap.xml, and index.html)
 * - company.email, company.phone, company.address
 * - legal registration fields only when the company has approved them
 * - team names, descriptions, photos, LinkedIn
 * - appLinks when real store or partner URLs exist
 */

const restrictedItems = [
  "Illegal goods",
  "Hazardous, flammable, explosive, or corrosive materials",
  "Items that need a licence or permit this service does not provide",
  "Cash, jewellery, and other high-value items unless the booking flow expressly accepts them",
  "Live animals",
  "Perishable goods that need temperature control, unless that handling is offered for the booking",
]

export const siteData = {
  seo: {
    siteUrl: "https://YOUR_DOMAIN",
    title: "IDHAR UDHAR | Local Parcel & Goods Delivery",
    description:
      "IDHAR UDHAR helps customers move parcels and goods with convenient booking, vehicle options and delivery visibility. Currently serving customers across Gujarat, with more cities and states coming soon.",
  },

  company: {
    brandName: "IDHAR UDHAR",
    legalName: "Swiftsendinnovation",
    city: "Ahmedabad, Gujarat",
    year: 2026,
    email: "swiftsendinnovation@gmail.com",
    phone: "6351527338",
    address: "C-12 Floor 1206\nRAJYASH RISE, B/S VISHALA, NR APMC MARKET\nNARAYAN NAGAR\nAhmedabad, Gujarat - 380007",
    supportHours: "",
    mapEmbedUrl: "",
    logoIncludesWordmark: true,
    gstin: "",
    cin: "",
    grievanceOfficer: "",
  },

  navigation: [
    { label: "Home", to: "/#home" },
    { label: "Services", to: "/#services" },
    { label: "How It Works", to: "/#how-it-works" },
    { label: "Vehicles", to: "/#vehicles" },
    { label: "About", to: "/#about" },
    { label: "FAQ", to: "/#faq" },
  ],

  contactLink: { label: "Contact", to: "/contact" },
  bookCta: { label: "Book a Delivery", to: "/#book" },

  hero: {
    eyebrow: "IDHAR UDHAR  ·  Gujarat",
    title: "Local Delivery. Simplified.",
    display: ["Local", "Delivery.", "Simplified."],
    text: "IDHAR UDHAR helps customers move parcels and goods with suitable vehicle options, convenient booking and delivery visibility. Serving Gujarat, with expansion to more states coming soon.",
    primaryCta: "Book a Delivery",
    secondaryCta: "Explore Services",
    cards: [
      { title: "Pickup confirmed", text: "Origin noted for the trip", place: "c1" },
      { title: "Vehicle assigned", text: "A suitable option is matched", place: "c2" },
      { title: "On the way", text: "The journey is underway", place: "c3" },
      { title: "Delivered", text: "Goods reach the destination", place: "c4" },
    ],
  },

  trust: [
    {
      id: "booking",
      title: "Easy Booking",
      text: "Plan your delivery in a few simple steps.",
      icon: "TouchAppOutlined",
    },
    {
      id: "vehicles",
      title: "Multiple Vehicles",
      text: "Choose a vehicle suited to your delivery requirements.",
      icon: "LocalShippingOutlined",
    },
    {
      id: "visibility",
      title: "Delivery Visibility",
      text: "Stay informed about your delivery journey.",
      icon: "MyLocationOutlined",
    },
    {
      id: "payments",
      title: "Secure Payments",
      text: "Use supported payment methods through the platform.",
      icon: "LockOutlined",
    },
  ],

  city: {
    eyebrow: "Gujarat",
    title: "The City Moves. We Move With It.",
    text: "A pickup, a vehicle, and a drop. IDHAR UDHAR is built to make that local trip easier to book and easier to follow. Serving Gujarat, with expansion to more states coming soon.",
    ahmedabadTitle: "Serving Gujarat.",
    ahmedabadText:
      "Currently serving customers across Gujarat, with more cities and states coming soon. The business is based in Ahmedabad. Neighbourhoods such as those listed below are examples, not a complete coverage list. They do not mean every street is covered, and they do not mean the service runs nationwide. Availability is confirmed when you book.",
    mapNote: "A schematic of listed Ahmedabad areas. This is not an official coverage map.",
    cards: [
      { label: "Ahmedabad", text: "Where the business is based" },
      { label: "Pickup", text: "Where the goods are collected" },
      { label: "Route", text: "The path between the stops" },
      { label: "Drop", text: "Where the goods are delivered" },
    ],
  },

  serviceAreas: ["Navrangpura", "Satellite", "Maninagar", "Bopal", "Naroda", "Gota", "SG Highway"],

  howItWorks: {
    eyebrow: "How it works",
    title: "Four steps. One delivery.",
    text: "From the first address to the last status update, the journey stays easy to follow.",
    steps: [
      {
        number: "01",
        title: "Enter Pickup & Drop",
        text: "Tell us where your parcel needs to go.",
      },
      {
        number: "02",
        title: "Choose Your Vehicle",
        text: "Select the vehicle that suits your delivery.",
      },
      {
        number: "03",
        title: "Confirm Your Delivery",
        text: "Review your trip and payment details.",
      },
      {
        number: "04",
        title: "Track Your Journey",
        text: "Stay informed as your delivery moves from pickup to destination.",
      },
    ],
  },

  servicesIntro: {
    eyebrow: "Services",
    title: "Local goods movement, clearly offered.",
    text: "Each service is available where the booking flow supports it. What you see at confirmation is what you are booking.",
  },

  services: [
    {
      id: "local-parcel",
      title: "Local Parcel Delivery",
      text: "Move parcels conveniently across the city.",
      icon: "Inventory2Outlined",
      span: "tall",
    },
    {
      id: "business-deliveries",
      title: "Business Deliveries",
      text: "Support local businesses with dependable goods transportation.",
      icon: "StorefrontOutlined",
      span: "regular",
    },
    {
      id: "door-to-door",
      title: "Door-to-Door Delivery",
      text: "Pickup from the requested location and deliver to the destination.",
      icon: "DoorFrontOutlined",
      span: "regular",
    },
    {
      id: "multi-stop",
      title: "Multi-Stop Delivery",
      text: "Support journeys involving multiple stops.",
      icon: "AltRoute",
      span: "regular",
    },
    {
      id: "scheduled",
      title: "Scheduled Delivery",
      text: "Plan a delivery around your requirement where supported.",
      icon: "ScheduleOutlined",
      span: "regular",
    },
    {
      id: "business-transport",
      title: "Business Transportation",
      text: "Help businesses move goods locally.",
      icon: "LocalShippingOutlined",
      span: "wide",
    },
  ],

  vehiclesIntro: {
    eyebrow: "Vehicles",
    title: "Pick the vehicle that fits the goods.",
    text: "Five ways to move something locally. Choose by the size of the job, not by a guessed weight limit. Exact fit is confirmed during booking.",
  },

  vehicles: [
    {
      id: "bike",
      name: "Bike",
      description: "Designed for smaller parcels and quick city deliveries.",
      tone: "#1B2430",
      route: "short",
      image: "/assets/brand/delivery-bike.png",
    },
    {
      id: "truck",
      name: "Truck",
      description: "For larger goods that need the space of a truck body.",
      tone: "#171C28",
      route: "long",
      image: "/assets/brand/truck-box.png",
    },
    {
      id: "mini-truck",
      name: "Mini Truck",
      description: "For deliveries that need more room.",
      tone: "#241C22",
      route: "medium",
      image: "/assets/brand/pickup.png",
    },
    {
      id: "tempo",
      name: "Tempo",
      description: "A practical option for mid-sized goods moving through the city.",
      tone: "#172228",
      route: "medium",
      image: "/assets/brand/auto-cargo.png",
    },
    {
      id: "large-tempo",
      name: "Large Tempo",
      description: "For bulkier local loads that need extra cargo space.",
      tone: "#201A24",
      route: "long",
      image: "/assets/brand/truck-cage.png",
    },
  ],

  featuresIntro: {
    eyebrow: "The product",
    title: "What the platform is built to do.",
    text: "Booking, assignment, status and payment sit in one customer experience.",
  },

  features: [
    {
      id: "easy-booking",
      title: "Easy Booking",
      text: "Set pickup and drop, then move through the trip without a long form.",
      icon: "TouchAppOutlined",
      variant: "story",
    },
    {
      id: "multiple-stops",
      title: "Multiple Stops",
      text: "Add stops when the booking you are confirming includes them.",
      icon: "AltRoute",
      variant: "compact",
    },
    {
      id: "rider-assignment",
      title: "Rider Assignment",
      text: "A delivery partner is assigned to carry the order.",
      icon: "TwoWheeler",
      variant: "compact",
    },
    {
      id: "tracking",
      title: "Delivery Tracking",
      text: "Follow the order as it moves from pickup toward the destination.",
      icon: "MyLocationOutlined",
      variant: "wide",
    },
    {
      id: "notifications",
      title: "Notifications",
      text: "Receive updates about assignment and delivery status.",
      icon: "NotificationsNone",
      variant: "compact",
    },
    {
      id: "secure-payments",
      title: "Secure Payments",
      text: "Pay with the methods shown at confirmation. Card numbers and UPI PINs are never requested by email or phone.",
      icon: "LockOutlined",
      variant: "compact",
    },
    {
      id: "cod",
      title: "COD where applicable",
      text: "Cash on delivery appears only on bookings where the app offers it.",
      icon: "PaymentsOutlined",
      variant: "compact",
    },
    {
      id: "status",
      title: "Delivery Status",
      text: "See where the order stands, from confirmation through completion.",
      icon: "FactCheckOutlined",
      variant: "compact",
    },
  ],

  product: {
    eyebrow: "Customer journey",
    title: "From booking to the door.",
    text: "These screens illustrate the customer journey in the IDHAR UDHAR style. The live app is the source of the options available on a booking.",
    screens: [
      {
        id: "booking",
        step: "01",
        title: "Booking",
        caption: "Pickup and drop, in plain language.",
      },
      {
        id: "vehicle",
        step: "02",
        title: "Vehicle selection",
        caption: "A vehicle chosen for the goods.",
      },
      {
        id: "review",
        step: "03",
        title: "Order review",
        caption: "Trip details before you confirm.",
      },
      {
        id: "payment",
        step: "04",
        title: "Payment",
        caption: "Methods shown for that booking.",
      },
      {
        id: "rider",
        step: "05",
        title: "Rider assigned",
        caption: "A partner is matched to the order.",
      },
      {
        id: "tracking",
        step: "06",
        title: "Delivery tracking",
        caption: "Status from pickup to drop.",
      },
    ],
  },

  technology: {
    eyebrow: "Connected delivery",
    title: "Technology That Keeps Every Delivery Moving.",
    text: "IDHAR UDHAR brings booking, order management, rider coordination, delivery status, notifications and payment infrastructure together into one connected experience.",
    nodes: [
      { id: "customer", label: "Customer", text: "Creates the booking and chooses a vehicle." },
      { id: "platform", label: "Platform", text: "Keeps the order, status and payment record together." },
      { id: "rider", label: "Rider", text: "Collects the goods and carries them onward." },
      { id: "destination", label: "Destination", text: "The drop confirmed for that trip." },
    ],
  },

  why: {
    eyebrow: "Why IDHAR UDHAR",
    title: "Built Around The Way Local Delivery Actually Works.",
    text: "City delivery is a sequence of practical decisions. The product is shaped around those decisions, without dressing them up.",
    principles: [
      { number: "01", title: "Simple", text: "Less complexity for customers." },
      { number: "02", title: "Connected", text: "Customers, riders and operations work through one ecosystem." },
      { number: "03", title: "Flexible", text: "Different vehicle options for different delivery needs." },
      { number: "04", title: "Transparent", text: "Clear order and delivery visibility." },
    ],
  },

  about: {
    eyebrow: "About",
    title: "We Are Building A Simpler Way To Move Things.",
    paragraphs: [
      "IDHAR UDHAR is being built to make local goods transportation simpler, more connected and technology-driven.",
      "A parcel still has to travel a real street. Someone has to be at the pickup. The vehicle has to make sense for the load. We are building the product around that reality, for customers and businesses across Gujarat, with more states coming soon. The business is based in Ahmedabad.",
      "IDHAR UDHAR is a product of Swiftsendinnovation.",
    ],
  },

  teamIntro: {
    eyebrow: "Team",
    title: "Meet The Team",
    text: "The roles behind IDHAR UDHAR. Names, photographs and introductions are placeholders until the company publishes them.",
  },

  team: [
    {
      name: "To be announced",
      designation: "CEO & Founder",
      image: "/assets/team/ceo.svg",
      description: "Leads the company and the direction of IDHAR UDHAR.",
      linkedin: "",
    },
    {
      name: "To be announced",
      designation: "Director — Business & Operations",
      image: "/assets/team/director.svg",
      description: "Looks after business operations and how deliveries are run.",
      linkedin: "",
    },
    {
      name: "To be announced",
      designation: "Lead Software Developer",
      image: "/assets/team/developer.svg",
      description: "Builds the software customers and delivery partners use.",
      linkedin: "",
    },
    {
      name: "To be announced",
      designation: "System Design Engineer",
      image: "/assets/team/system-engineer.svg",
      description: "Shapes the systems behind booking, assignment and delivery status.",
      linkedin: "",
    },
  ],

  faqIntro: {
    eyebrow: "FAQ",
    title: "Questions, answered plainly.",
    text: "If something is not listed here, the contact page is the right place to ask.",
  },

  restrictedItems,

  faqs: [
    {
      question: "What is IDHAR UDHAR?",
      answer:
        "IDHAR UDHAR is a local parcel and goods transportation platform from Swiftsendinnovation. It helps customers book a suitable vehicle and follow the delivery. Currently serving customers across Gujarat, with more cities and states coming soon.",
    },
    {
      question: "Where is IDHAR UDHAR currently available?",
      answer:
        "Currently serving customers across Gujarat, with more cities and states coming soon. The business is based in Ahmedabad. Areas such as Navrangpura, Satellite, Maninagar, Bopal, Naroda, Gota and SG Highway are examples, not a complete list. Listing an area does not promise every lane inside it, and it does not mean the service is available across India. Coverage is confirmed during booking.",
    },
    {
      question: "What can I send through IDHAR UDHAR?",
      answer:
        "Legal parcels and goods that are safely packed and suitable for the vehicle you select. Restricted items are listed in the delivery policy and in the answer below.",
    },
    {
      question: "Which vehicles are available?",
      answer:
        "Bike, Truck, Mini Truck, Tempo and Large Tempo. Choose the one that suits the goods. The app confirms what is available for that trip. We do not publish fixed load capacities on this website.",
    },
    {
      question: "How does booking work?",
      answer:
        "Enter the pickup and drop, choose a vehicle, review the trip and payment details, then confirm. A rider is assigned, the goods are collected, and you can follow the status through to delivery.",
    },
    {
      question: "Can I add multiple stops?",
      answer:
        "Multi-stop journeys are supported where the booking flow offers additional stops. If a stop cannot be added, that option will not be part of the trip you confirm.",
    },
    {
      question: "Can I schedule a delivery?",
      answer:
        "You can plan a delivery around your requirement where scheduling is offered in the app. If a time choice is not shown, the booking uses the window that is available.",
    },
    {
      question: "How can I pay?",
      answer:
        "Use the payment methods shown when you confirm the booking. Payments made in the app are handled through authorized payment partners. Never share a card number, UPI PIN, or OTP by phone or email.",
    },
    {
      question: "Is COD available?",
      answer:
        "Cash on delivery may be offered on selected bookings where the app shows it as a payment option. It is not available on every order.",
    },
    {
      question: "Can I track my delivery?",
      answer:
        "Yes. After the order is confirmed you can follow delivery status in the customer experience, including progress from pickup toward the destination.",
    },
    {
      question: "How can I contact support?",
      answer:
        "Use the contact page, or email swiftsendinnovation@gmail.com and call 6351527338. Please do not send payment secrets to support.",
    },
    {
      question: "What items cannot be transported?",
      answer: `IDHAR UDHAR does not transport: ${restrictedItems.join("; ")}. The company may update this list. If an item is not accepted, it will not be part of a confirmed booking.`,
    },
  ],

  contact: {
    eyebrow: "Contact",
    title: "We are here when you need the delivery to be clear.",
    text: "Questions about a booking, a business shipment, or this website can come here. This form opens a message to the support email. It does not store your message on a server.",
    formNote:
      "Use the support email and phone published on this page.",
  },

  appLinks: {
    customerApp: "",
    partnerApp: "",
  },

  appCta: {
    title: "Ready To Move Something?",
    text: "Book your local delivery with IDHAR UDHAR.",
    customerLabel: "Download Customer App",
    partnerLabel: "Become a Delivery Partner",
    note: "Store links will be added when the apps are publicly listed. Until then, use the contact page.",
  },

  socialLinks: {
    instagram: "",
    facebook: "",
    linkedin: "",
    x: "",
  },

  footer: {
    blurb: "Local parcel and goods delivery. Serving Gujarat, with expansion to more states coming soon. Choose a vehicle, confirm the trip, and follow it from pickup to drop.",
    columns: [
      {
        title: "Company",
        links: [
          { label: "About", to: "/#about" },
          { label: "Team", to: "/#team" },
          { label: "Contact", to: "/contact" },
          { label: "FAQ", to: "/#faq" },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Parcel Delivery", to: "/#services" },
          { label: "Business Delivery", to: "/#services" },
          { label: "Multi-Stop", to: "/#services" },
          { label: "Scheduled Delivery", to: "/#services" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", to: "/privacy-policy" },
          { label: "Terms & Conditions", to: "/terms-and-conditions" },
          { label: "Cancellation & Refund", to: "/cancellation-refund" },
          { label: "Delivery Policy", to: "/shipping-delivery" },
        ],
      },
    ],
  },

  legal: {
    privacy: {
      title: "Privacy Policy",
      path: "/privacy-policy",
      updated: "23 September 2026",
      lede: "How Swiftsendinnovation handles information when you use the IDHAR UDHAR website, customer app, and related delivery services.",
      notice:
        "Registration numbers and a grievance officer will be added here when Swiftsendinnovation confirms them. They are intentionally left blank rather than invented.",
      sections: [
        {
          heading: "Who we are",
          paragraphs: [
            "IDHAR UDHAR is a local parcel and goods delivery product operated by Swiftsendinnovation. In this policy, “we” means Swiftsendinnovation.",
            "This policy covers the public website and the personal information customers provide to book or support a delivery. It does not describe internal systems in technical detail.",
          ],
        },
        {
          heading: "Information we collect",
          paragraphs: [
            "Depending on how you use the service, we may collect your name, mobile number, email address, pickup and drop details, a description of the goods you choose to share, delivery instructions, and order status.",
            "If you contact us, we keep the details of that conversation so we can respond. If you use the customer app, the app may request permission for notifications so status updates can be sent.",
            "When you pay in the app, we receive a payment status and a transaction reference from the payment partner. We do not ask you to send card numbers, UPI PINs, or one-time passwords by email, phone, or chat.",
          ],
        },
        {
          heading: "How we use information",
          paragraphs: [
            "We use information to create and manage bookings, assign a delivery partner, show delivery status, send notifications you have allowed, provide support, process payments that the app offers, and keep the service secure.",
            "We may also use it to meet a legal duty, to respond to a lawful request, or to look into misuse of the service.",
          ],
        },
        {
          heading: "Who we share it with",
          paragraphs: [
            "A delivery partner assigned to your order receives the details needed to collect and deliver the goods, such as the addresses and a contact number.",
            "Payment partners receive what their checkout requires in order to process a payment you initiate. Service providers who host or support the product may process information on our instructions.",
            "We may share information if the law requires it. We do not sell personal information.",
          ],
        },
        {
          heading: "How long we keep it",
          paragraphs: [
            "We keep order and account information for as long as needed to provide the service, handle support, and meet legal, tax, and accounting duties.",
            "A specific retention schedule will be published in this policy once the company confirms it.",
          ],
        },
        {
          heading: "Your choices",
          paragraphs: [
            "You may ask for access, correction, or deletion of your information, or object to a use that the law allows you to refuse. Some records may need to be kept where a booking, payment, or legal duty requires it.",
            "You can control app notifications in your phone settings. Withdrawing a notification permission does not cancel an active booking.",
          ],
        },
        {
          heading: "Children",
          paragraphs: [
            "IDHAR UDHAR is a delivery service for customers who can enter a contract. It is not directed at children.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "Privacy requests can be sent to swiftsendinnovation@gmail.com or to 6351527338, or through the contact page. Do not send payment secrets.",
          ],
        },
      ],
    },
    terms: {
      title: "Terms & Conditions",
      path: "/terms-and-conditions",
      updated: "23 September 2026",
      lede: "The terms that apply when you use the IDHAR UDHAR website and booking services operated by Swiftsendinnovation.",
      notice:
        "These terms describe the service as it is offered. Commercial figures that the company has not approved, including fee schedules, are not stated here.",
      sections: [
        {
          heading: "The service",
          paragraphs: [
            "IDHAR UDHAR connects customers with delivery vehicles for local transportation of parcels and goods. Currently serving customers across Gujarat, with more cities and states coming soon. The business is based in Ahmedabad, Gujarat.",
            "A booking is formed when you confirm a trip in the customer experience. The vehicle, stops, price, and payment method are those shown at confirmation. Options that are not shown are not part of that booking.",
          ],
        },
        {
          heading: "Your responsibilities",
          paragraphs: [
            "You agree to provide accurate pickup, drop, and contact details, to pack goods so they can travel safely in the selected vehicle, and to make sure the goods may legally be transported.",
            "You will not book prohibited items. The current list is in the Delivery Policy. You are responsible for being available, or for having someone available, at the locations you provide.",
          ],
        },
        {
          heading: "Riders and vehicles",
          paragraphs: [
            "A delivery partner is assigned through the platform to carry the confirmed booking. Vehicle choice depends on what is available for that trip.",
            "Road conditions, access to a location, and vehicle availability can affect timing. A time shown during booking is the information available at that moment. This website does not promise a fixed travel time.",
          ],
        },
        {
          heading: "Payments",
          paragraphs: [
            "Charges for a trip are shown before you confirm. Payments offered in the app are processed by authorized payment partners.",
            "Cash on delivery is available only where that option is shown for the booking. Do not share payment secrets with riders or support staff.",
          ],
        },
        {
          heading: "Acceptable use",
          paragraphs: [
            "You may not use IDHAR UDHAR for unlawful goods, to mislead a rider about what is being carried, to interfere with the service, or to attempt to access another person’s booking.",
          ],
        },
        {
          heading: "The website",
          paragraphs: [
            "The IDHAR UDHAR name, mark, and site content belong to Swiftsendinnovation or its licensors. You may not copy the brand or the site for your own product.",
            "Illustrations on this website explain the service. They are not a quote, a map of guaranteed coverage, or a statement that every pictured screen is offered on every booking.",
          ],
        },
        {
          heading: "Liability",
          paragraphs: [
            "To the extent Indian law allows, Swiftsendinnovation is not liable for indirect or consequential loss arising from use of the website or the service.",
            "Nothing in these terms limits liability that the law does not allow a business to limit, including liability for fraud. A specific compensation amount for loss or damage is not stated here and will be added only when the company approves a claims process.",
          ],
        },
        {
          heading: "Changes and law",
          paragraphs: [
            "We may update these terms by publishing a new version on this page. The date at the top will change when we do. Bookings already confirmed keep the terms that applied at confirmation, unless the law requires otherwise.",
            "These terms are governed by the laws of India. Courts in Ahmedabad, Gujarat, have jurisdiction, subject to any right you have under law to bring a claim elsewhere.",
          ],
        },
      ],
    },
    cancellation: {
      title: "Cancellation & Refund",
      path: "/cancellation-refund",
      updated: "23 September 2026",
      lede: "How cancellation and refunds work for IDHAR UDHAR bookings made with Swiftsendinnovation.",
      notice:
        "Refund percentages and a fixed refund timeline are not published yet. They will be added only after Swiftsendinnovation approves them. Until then, any charge is explained before a cancellation is completed.",
      sections: [
        {
          heading: "How to cancel",
          paragraphs: [
            "You can request a cancellation from the customer app where the order screen allows it, or through the contact details on this website.",
            "Have the booking details ready so support can find the order.",
          ],
        },
        {
          heading: "Before a rider is assigned",
          paragraphs: [
            "A booking can be cancelled before a rider is assigned. If an online payment was collected, the amount paid is eligible to be returned, subject to the payment partner’s processing.",
          ],
        },
        {
          heading: "After assignment and before pickup",
          paragraphs: [
            "You may still request a cancellation after a rider is assigned and before the goods are picked up.",
            "A cancellation adjustment may apply once the company publishes the applicable amount on this page. Until that amount is published, you will be told the adjustment, if any, before the cancellation is completed. You can decline and keep the booking.",
          ],
        },
        {
          heading: "After pickup",
          paragraphs: [
            "Once goods have been picked up, the delivery is in progress and cancellation may not be available. Contact support if the drop details need a correction that the trip can still accept.",
          ],
        },
        {
          heading: "Refunds",
          paragraphs: [
            "If a refund of an online payment is approved, it is sent to the original payment method. Cash on delivery bookings have no online refund where no online payment was taken.",
            "Banks and payment partners control how quickly a refund appears on a statement. A standard number of days will be published here when the company confirms it. We will not quote a timeline that has not been approved.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "Cancellation help is available through the contact page. Please use the published email or phone. Do not send payment instrument details.",
          ],
        },
      ],
    },
    delivery: {
      title: "Delivery Policy",
      path: "/shipping-delivery",
      updated: "23 September 2026",
      lede: "What IDHAR UDHAR delivers, where, and how a local trip moves from pickup to drop.",
      notice:
        "This policy describes local goods transportation. It is not a nationwide courier network, and it does not set a guaranteed delivery time.",
      sections: [
        {
          heading: "Service area",
          paragraphs: [
            "Currently serving customers across Gujarat, with more cities and states coming soon. The business is based in Ahmedabad, Gujarat. Areas such as Navrangpura, Satellite, Maninagar, Bopal, Naroda, Gota and SG Highway are examples, not a complete coverage list.",
            "An area named on this website is an example, not a promise that every address inside it can be served. The booking flow confirms whether a pickup and drop are accepted.",
          ],
        },
        {
          heading: "What we move",
          paragraphs: [
            "Customers and businesses can book transportation for parcels and goods that are legal, safely packed, and suitable for the selected vehicle.",
            "Door-to-door pickup and delivery is offered for locations the booking accepts. Multi-stop and scheduled trips are offered where those choices appear before you confirm.",
          ],
        },
        {
          heading: "Vehicles",
          paragraphs: [
            "You can choose among Bike, Truck, Mini Truck, Tempo and Large Tempo, subject to availability on that booking. This website does not state load weights or prices. Both are confirmed in the booking, not guessed here.",
          ],
        },
        {
          heading: "Packing and handover",
          paragraphs: [
            "You are responsible for packing goods so they can travel in the vehicle you selected, and for meeting the rider at the pickup you provided.",
            "Please tell the booking about handling needs the rider must know. Special handling that is not offered in the app should not be assumed.",
          ],
        },
        {
          heading: "Items we do not transport",
          paragraphs: [
            `The following are not accepted: ${restrictedItems.join("; ")}.`,
            "If you are unsure, ask through the contact page before you book. An item that cannot be carried should not be handed to a rider.",
          ],
        },
        {
          heading: "Status and timing",
          paragraphs: [
            "After confirmation you can follow delivery status, including assignment, movement, and completion. Notifications are sent where you have allowed them.",
            "Timing depends on distance, traffic, access, and vehicle availability. A status update is information about the order. It is not a guarantee of a clock time.",
          ],
        },
        {
          heading: "If delivery cannot be completed",
          paragraphs: [
            "If the recipient or the location is unavailable, the rider may try to make contact using the details on the booking. The next step is shared in the app or by support.",
            "A fixed number of reattempts will be published here if the company adopts one. Until then, support will tell you the options for that order.",
          ],
        },
        {
          heading: "Loss or damage",
          paragraphs: [
            "If goods are lost or damaged in transit, contact support with the booking details as soon as you can. Any resolution follows the company’s approved process.",
            "This page does not promise a compensation amount. That figure will be added only when Swiftsendinnovation approves it.",
          ],
        },
      ],
    },
  },
}
