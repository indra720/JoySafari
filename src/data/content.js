// Master Content for Joy Safari Jaipur
// All UI components map their text, video streams, images, and configurations from here.
// =========================================================================================
// VERIFIED VIDEO ASSETS CONFIG — Replace with your Joy Safari team .mp4 files anytime
// =========================================================================================
import heroBgVideo from '../assets/hero-bg-web.mp4';

export const VIDEO_URLS = {
  heroBg: heroBgVideo,
  heroFullFilm: "https://assets.mixkit.co/videos/4281/4281-720.mp4",
  liveShow: "https://assets.mixkit.co/videos/1240/1240-720.mp4",
  galaDinner: "https://assets.mixkit.co/videos/28392/28392-720.mp4",
  adventureActivities: "https://assets.mixkit.co/videos/4281/4281-720.mp4",
  boating: "https://assets.mixkit.co/videos/1164/1164-720.mp4",
  swimmingPool: "https://assets.mixkit.co/videos/3163/3163-720.mp4",
  zipLine: "https://assets.mixkit.co/videos/41576/41576-720.mp4",
  commandoTyre: "https://assets.mixkit.co/videos/4281/4281-720.mp4",
  toyTrain: "https://assets.mixkit.co/videos/1173/1173-720.mp4",
  horseRiding: "https://assets.mixkit.co/videos/26070/26070-720.mp4",
  bungeeJumping: "https://assets.mixkit.co/videos/41576/41576-720.mp4",
  gunShooting: "https://assets.mixkit.co/videos/39765/39765-720.mp4",
  mountingWall: "https://assets.mixkit.co/videos/4281/4281-720.mp4",
  bannerSafariPromo: "https://assets.mixkit.co/videos/39765/39765-720.mp4",
  bannerLakeStay: "https://assets.mixkit.co/videos/43068/43068-720.mp4",
  melaStageBg: "https://assets.mixkit.co/videos/1240/1240-720.mp4",
  countdownPromoBg: "https://assets.mixkit.co/videos/26070/26070-720.mp4",
  roomGardenTour: "https://assets.mixkit.co/videos/1173/1173-720.mp4",
  roomLakeTour: "https://assets.mixkit.co/videos/1259/1259-720.mp4",
};

export const content = {
  brand: {
    name: "Joy Safari Jaipur",
    tagline: "Venture of Joy, Adventure & Resort",
    badge: "1st Time in Jaipur",
    familyTag: "Only for Family & Couples",
    headline: "Experience Jaipur Like Never Before!",
    subline: "Adventure | Culture | Entertainment | Luxury",
    phone: "8000928080",
    displayPhone: "+91 8000928080",
    email: "info@joyadventureresort.com",
    website: "www.joyadventureresort.com",
    websiteUrl: "https://www.joyadventureresort.com",
    address: "Joy Safari & Adventure Resort, Delhi-Jaipur Highway (NH-48), Achrol Valley, Jaipur, Rajasthan 302028",
    timings: "3:30 PM to 11:00 PM (Daily)",
    whatsappNumber: "918000928080",
    whatsappUrl: "https://wa.me/918000928080?text=Hello%20Joy%20Safari%20Jaipur%2C%20I%20would%20like%20to%20know%20more%20and%20book%20a%20package.",
    whatsappShareUrl: "https://api.whatsapp.com/send?text=Check%20out%20Joy%20Safari%20Jaipur%20-%20Jaipur's%201st%20Family%20%26%20Couples%20Adventure%20Resort%20with%2012%2B%20Activities%2C%20Boating%2C%20Live%20Show%20%26%20Gala%20Dinner%20Buffet%20at%20just%20%E2%82%B91999%2B!%20Visit%20www.joyadventureresort.com%20or%20call%208000928080",
    copyright: "© 2026 Joy Safari Jaipur. A Venture of Joy, Adventure & Resort. All Rights Reserved."
  },

  navigation: [
    { label: "Home", path: "/" },
    { label: "Activities", path: "/activities" },
    { label: "Packages", path: "/packages" },
    { label: "Rooms", path: "/rooms" },
    { label: "Gallery", path: "/gallery" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" }
  ],

  hero: {
    ribbonBadge: "1st Time in Jaipur",
    familyBadge: "Only for Family & Couples",
    scriptLine: "Experience. Enjoy. Celebrate.",
    titlePrefix: "It's time for a",
    titleHighlight: "royal adventure",
    brandTitle: "JOY SAFARI JAIPUR",
    subtitle: "Venture of Joy, Adventure & Resort",
    paragraph: "Experience Jaipur like never before! Adventure, culture, entertainment and luxury, all in one royal destination nestled in the scenic Aravallis.",
    priceTag: "Price Only ₹1999 + GST",
    ctaPrimary: "Book Day Safari @ ₹1999",
    ctaSecondary: "Call 8000928080",
    bgVideo: VIDEO_URLS.heroBg,
    trust: {
      avatarCount: "5000+",
      guestsLabel: "Happy Guests",
      rating: "4.9 / 5.0",
      reviewsCount: "2,450+ Verified Reviews"
    },
    bgImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=2000&q=85",
  },

  featuresStrip: [
    {
      icon: "Bus",
      title: "Free Pick Up & Drop",
      desc: "Convenient AC coach travel from prime Jaipur hubs",
      videoUrl: VIDEO_URLS.zipLine,
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: "Utensils",
      title: "Gala Dinner Buffet",
      desc: "Grand authentic Rajasthani & multi-cuisine spread",
      videoUrl: VIDEO_URLS.galaDinner,
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: "Flame",
      title: "12+ Activities Included",
      desc: "Water thrills, aerial rope courses & family rides",
      videoUrl: VIDEO_URLS.boating,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: "HeartHandshake",
      title: "Family & Couples Only",
      desc: "100% verified, peaceful & respectful royal atmosphere",
      videoUrl: VIDEO_URLS.bannerSafariPromo,
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80"
    }
  ],

  planSteps: {
    eyebrow: "PLAN YOUR VISIT",
    title: "Everything you need for the",
    scriptWord: "perfect trip",
    steps: [
      {
        step: "01",
        title: "Choose Package",
        desc: "Select Day Safari Pass (₹1999) or Luxury Lake/Garden Room stay with breakfast.",
        icon: "Ticket",
        videoUrl: VIDEO_URLS.roomLakeTour,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: "02",
        title: "Book & Confirm",
        desc: "Instant booking confirmation via WhatsApp or simple online booking form.",
        icon: "CalendarCheck",
        videoUrl: VIDEO_URLS.roomGardenTour,
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: "03",
        title: "Get Pick Up",
        desc: "Board our designated AC tourist shuttle from your nearest Jaipur hub or drive directly.",
        icon: "BusFront",
        videoUrl: VIDEO_URLS.zipLine,
        image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: "04",
        title: "Enjoy the Safari",
        desc: "Immerse in 12+ adventures, lake boating, live stage shows, and royal buffet dinner.",
        icon: "Sparkles",
        videoUrl: VIDEO_URLS.liveShow,
        image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },

  activities: [
    {
      id: "live-show",
      name: "Live Show: Singing & Dancing",
      shortDesc: "Soulful Rajasthani folk singing, dhol beats, Kalbelia & fire dance performances.",
      fullDesc: "Immerse in Rajasthan's legendary royal folk artistry. Watch master artists perform the high-energy Kalbelia dance, soulful Manganiyar dhol singing, Ghoomar, and mesmerizing fire stunts under a starry desert sky.",
      tag: "Culture",
      category: "Culture",
      tagColor: "maroon",
      image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.liveShow,
      videoDuration: "0:32",
      reelLabel: "Live Stage Reel",
      timing: "7:30 PM - 9:00 PM",
      safety: "Open-Air Amphitheater Seating",
      ageLimit: "All Ages Welcome"
    },
    {
      id: "gala-dinner",
      name: "Gala Dinner Buffet",
      shortDesc: "A grand multi-course royal spread of authentic Rajasthani and global delicacies.",
      fullDesc: "A feast fit for royalty! Featuring traditional Dal Baati Churma, Ker Sangri, Gatte ki Sabzi, Paneer specialties, fresh breads from tandoor, live chaat stalls, and delectable sweet treats.",
      tag: "Bestseller",
      category: "Food",
      tagColor: "gold",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.galaDinner,
      videoDuration: "0:28",
      reelLabel: "Royal Buffet Clip",
      timing: "9:00 PM - 10:45 PM",
      safety: "Hygienic 5-Star Kitchen Standards",
      ageLimit: "All Ages Welcome"
    },
    {
      id: "adventure-activities",
      name: "Adventure Activities",
      shortDesc: "Thrilling aerial obstacle challenges and rope bridges across lush natural greenery.",
      fullDesc: "Challenge your balance and confidence across suspension wooden bridges, high-wire walks, balance logs, and net crossings built through scenic trees with international Petzl safety harnesses.",
      tag: "Thrill",
      category: "Adventure",
      tagColor: "sage",
      image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.adventureActivities,
      videoDuration: "0:24",
      reelLabel: "Aerial Rope Video",
      timing: "4:00 PM - 7:00 PM",
      safety: "Dual Carabiner Lifeline & Certified Marshals",
      ageLimit: "Age 8+ Years"
    },
    {
      id: "boating",
      name: "Boating",
      shortDesc: "Glide peacefully across the resort's tranquil lake surrounded by hills.",
      fullDesc: "Soak in the serene golden-hour sunset on water. Safe pedal boats and rowing rafts with trained boatmen and mandatory safety life vests, perfect for romantic couples and laughing families.",
      tag: "Family Fun",
      category: "Water",
      tagColor: "sage",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.boating,
      videoDuration: "0:30",
      reelLabel: "Lake Boating Reel",
      timing: "4:00 PM - 6:45 PM",
      safety: "Mandatory Life Jackets & Rescue Guards",
      ageLimit: "All Ages Welcome"
    },
    {
      id: "swimming-pool",
      name: "Swimming Pool",
      shortDesc: "Relax in a crystal-clear resort pool surrounded by date palms and sunbeds.",
      fullDesc: "Take a refreshing swim in our temperature-balanced outdoor pool. Features separate shallow wading areas for young children and lounging poolside cabanas for comfortable relaxation.",
      tag: "Family Fun",
      category: "Water",
      tagColor: "sage",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.swimmingPool,
      videoDuration: "0:22",
      reelLabel: "Poolside Video",
      timing: "3:30 PM - 6:30 PM",
      safety: "Dedicated Lifeguards, 4.5 ft Max Depth",
      ageLimit: "All Ages (Costume Required)"
    },
    {
      id: "zip-line",
      name: "Zip Line Over Water",
      shortDesc: "Jaipur's premier high-flying zip line zooming hundreds of meters directly over shimmering water.",
      fullDesc: "Feel the rush of adrenaline as you leap from the elevated launch tower and glide smoothly across the entire width of the lake, admiring panoramic 360-degree views of the Aravalli hills.",
      tag: "Popular",
      category: "Adventure",
      tagColor: "maroon",
      image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.zipLine,
      videoDuration: "0:26",
      reelLabel: "Zip Line POV",
      timing: "4:00 PM - 7:00 PM",
      safety: "Twin High-Tension Steel Cables & Braking Gear",
      ageLimit: "Weight 35kg - 110kg"
    },
    {
      id: "commando-tyre",
      name: "Commando Tyre Course",
      shortDesc: "Army-style agility obstacle course made of rugged tyres, balance beams and ramps.",
      fullDesc: "Unleash your inner commando! Run, leap, scramble, and test your stamina through heavy tyre obstacles, rope climbs, and agility courses inspired by tactical defense training.",
      tag: "Thrill",
      category: "Adventure",
      tagColor: "sage",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.commandoTyre,
      videoDuration: "0:19",
      reelLabel: "Commando Action",
      timing: "4:00 PM - 7:00 PM",
      safety: "Soft Sand Landing Pit & Instructors",
      ageLimit: "Age 10+ Years"
    },
    {
      id: "toy-train",
      name: "Toy Train Ride",
      shortDesc: "Charming colorful scenic miniature train ride winding through landscaped gardens.",
      fullDesc: "A delightful joyride loved by children, grandparents, and romantic couples. The open-window toy train chugs along dedicated tracks touring the water body, rose gardens, and adventure zones.",
      tag: "Family Fun",
      category: "Fun",
      tagColor: "gold",
      image: "https://images.unsplash.com/photo-1520255870062-bd79d3865de7?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.toyTrain,
      videoDuration: "0:25",
      reelLabel: "Toy Train Tour",
      timing: "4:00 PM - 7:30 PM",
      safety: "Slow-Speed Controlled Guided Rails",
      ageLimit: "All Ages (Kids' Favorite)"
    },
    {
      id: "horse-riding",
      name: "Horse Riding",
      shortDesc: "Ride gentle Marwari horses across open lush green grounds with trained grooms.",
      fullDesc: "Experience the royal heritage of Rajputana on horseback. Our well-trained, docile horses and experienced grooms guide you along picturesque dirt tracks with full equestrian helmets.",
      tag: "Family Fun",
      category: "Fun",
      tagColor: "sage",
      image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.horseRiding,
      videoDuration: "0:29",
      reelLabel: "Royal Ride Clip",
      timing: "4:00 PM - 6:45 PM",
      safety: "Mandatory Helmets & Dedicated Handler",
      ageLimit: "All Ages"
    },
    {
      id: "bungee-jumping",
      name: "Bungee / Sling Shot",
      shortDesc: "Experience weightless zero-gravity launches with certified bungee cords and harnesses.",
      fullDesc: "Get strapped into high-elasticity aerospace-grade bungee cables and experience an electrifying catapult launch skywards, flipping safely into the open air with breathtaking mountain views.",
      tag: "Thrill",
      category: "Adventure",
      tagColor: "maroon",
      image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.bungeeJumping,
      videoDuration: "0:21",
      reelLabel: "Bungee Launch",
      timing: "4:30 PM - 7:00 PM",
      safety: "Triple Redundant Elastic Cords & Certified Techs",
      ageLimit: "Age 12+ Years"
    },
    {
      id: "gun-shooting",
      name: "Target Gun Shooting",
      shortDesc: "Test your aim and focus at our air-rifle and target shooting range under expert supervision.",
      fullDesc: "Steady your hands, aim down the sights, and hit bullseye targets, balloons, and spinning steel plates at our fully cordoned safe sport shooting range equipped with precision 0.177 air rifles.",
      tag: "Thrill",
      category: "Fun",
      tagColor: "gold",
      image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.gunShooting,
      videoDuration: "0:18",
      reelLabel: "Target Range Clip",
      timing: "4:00 PM - 7:30 PM",
      safety: "Eye Protection & Closed Berm Range",
      ageLimit: "Age 10+ Years"
    },
    {
      id: "mounting-wall",
      name: "Mounting (Rock Climbing) Wall",
      shortDesc: "Scale the 35-foot artificial rock climbing wall with varied grips and safety harnesses.",
      fullDesc: "Reach new heights! Test your upper body strength and footwork on our 35-foot textured vertical climbing wall equipped with multiple difficulty routes, auto-belay, and dedicated safety marshals.",
      tag: "Thrill",
      category: "Adventure",
      tagColor: "sage",
      image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.mountingWall,
      videoDuration: "0:27",
      reelLabel: "Climbing Action",
      timing: "4:00 PM - 7:00 PM",
      safety: "Certified Dynamic Ropes & Auto-Belay",
      ageLimit: "Age 8+ Years"
    }
  ],

  featuredBanners: {
    banner1: {
      tag: "Popular",
      title: "Royal Day Safari Experience",
      price: "₹1999 + GST",
      priceUnit: "per person",
      description: "Complete all-inclusive package with free AC pickup & drop, all 12+ adventures, lake boating, live cultural show, and lavish royal gala dinner buffet.",
      cta: "Explore Package",
      link: "/packages",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
      videoUrl: VIDEO_URLS.bannerSafariPromo
    },
    banner2: {
      tag: "Relax & Chill",
      title: "Stay by the Lake & Hills",
      price: "From ₹6999",
      priceUnit: "per night (Breakfast Inc.)",
      description: "Wake up to misty waters and Aravalli hills in luxury cottages with private balconies, king bed, and full safari activity pass included.",
      cta: "View Rooms",
      link: "/rooms",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
      videoUrl: VIDEO_URLS.bannerLakeStay
    }
  },

  liveStage: {
    eyebrow: "CULTURE & FOLK MAGIC",
    title: "The Live Stage: Rajasthani",
    scriptWord: "Mela Night",
    description: "As the sun dips behind the Aravalli hills, Joy Safari comes alive with vibrant royal festivities. Enjoy blazing fire dances, hypnotic Kalbelia swirls, rhythmic dholak beats, and traditional puppet artistry under lantern-lit open skies.",
    bgImage: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1600&q=85",
    bgVideo: VIDEO_URLS.melaStageBg,
    reelVideo: VIDEO_URLS.liveShow,
    highlights: [
      { title: "Folk Dance", desc: "Soulful Ghoomar, Chari & Kalbelia performances" },
      { title: "Dhol & Singing", desc: "Traditional Rajasthani folk musicians & dholak beats" },
      { title: "Fire Show", desc: "Thrilling traditional fire-breathing and stunts" },
      { title: "Puppet & Magic", desc: "Authentic Kathputli puppet shows and interactive magic" }
    ],
    timeline: [
      { time: "03:30 PM", label: "Royal Welcome", desc: "Traditional tilak, garland greeting & chilled welcome drinks" },
      { time: "04:00 PM", label: "Adventure & Water", desc: "Zip line, boating, pool, commando obstacle & 12+ rides open" },
      { time: "06:30 PM", label: "Sunset High Tea", desc: "Crispy Rajasthani kachoris, cookies, tea & coffee by the lake" },
      { time: "07:30 PM", label: "Live Folk Stage", desc: "Grand cultural show, folk dance, fire show & musical extravaganza" },
      { time: "09:00 PM", label: "Gala Dinner Buffet", desc: "Extensive royal Rajasthani and multi-cuisine feast served hot" }
    ]
  },

  countdownOffer: {
    eyebrow: "LIMITED TIME INAUGURAL OFFER",
    title: "Book Your Day Safari at just",
    price: "₹1999 + GST",
    scriptWord: "Hurry up!",
    subtitle: "Prices revise soon! Reserve your dates now and pay zero cancellation hassle.",
    bgVideo: VIDEO_URLS.countdownPromoBg,
    targetDays: 4,
    inclusions: [
      "Free AC Pick Up & Drop across Jaipur",
      "Royal Gala Dinner Buffet Included",
      "Unlimited Access to 12+ Activities",
      "100% Verified Safe for Families & Couples"
    ],
    cta: "Claim This Offer Now",
    link: "/contact"
  },

  pricingSection: {
    eyebrow: "BEST VALUE IN JAIPUR",
    title: "Transparent & Royal All-Inclusive",
    scriptWord: "Pricing",
    badgePrice: "1999",
    badgeGst: "+ GST",
    bgVideo: VIDEO_URLS.bannerSafariPromo,
    familyCard: {
      title: "FAMILY & COUPLES ENTRY",
      subtitle: "Strictly for families and couples to ensure maximum dignity, safety, and royal hospitality.",
      inclusions: [
        { label: "Pick Up & Drop", desc: "Free AC travel from Jaipur", icon: "Bus" },
        { label: "Gala Dinner Buffet", desc: "Multi-cuisine lavish royal feast", icon: "Utensils" },
        { label: "All Activities Access", desc: "12+ adventure & water rides", icon: "Flame" },
        { label: "Family & Couples", desc: "Respectful verified entry only", icon: "Users" }
      ]
    }
  },

  parkInfo: {
    eyebrow: "LOCATION & SCHEDULE",
    title: "Plan Your Journey to",
    scriptWord: "Joy Safari",
    timings: "3:30 PM - 11:00 PM (Daily)",
    location: "Joy Safari, Delhi-Jaipur Highway (NH-48), Achrol Valley, Jaipur",
    website: "www.joyadventureresort.com",
    pickupFacility: "Free Pick Up & Drop Included Across Jaipur",
    videoUrl: VIDEO_URLS.zipLine,
    poster: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
    hubs: [
      "Sindhi Camp Bus Stand (Gate 2)",
      "Mansarovar Metro Station",
      "Vaishali Nagar (National Handloom)",
      "Malviya Nagar (Gaurav Tower)",
      "Raja Park (Panchwati Circle)"
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113658.21980386927!2d75.76878939521482!3d27.086395252877395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db37b2d56d953%3A0xc47e388c3a107ef4!2sAchrol%2C%20Rajasthan%20303002!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },

  rooms: [
    {
      id: "garden-facing",
      title: "Garden Facing Luxury Room",
      subtitle: "Surrounded by lush green floral lawns and serene nature walks",
      price: "6999",
      priceNote: "/- per night (Breakfast included)",
      tag: "Serene & Green",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
      videoUrl: VIDEO_URLS.roomGardenTour,
      videoDuration: "0:36 Tour",
      gallery: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"
      ],
      amenities: [
        "Complimentary Lavish Breakfast",
        "King Size Royal Bed",
        "High-Speed Wi-Fi",
        "Private Garden Balcony",
        "Inverter Split Air Conditioning",
        "Ensuite Luxury Marble Bath",
        "Full Safari Activities Access"
      ]
    },
    {
      id: "lake-view",
      title: "Lake View Facing Royal Room",
      subtitle: "Panoramic lake balcony view with sunset golden reflections",
      price: "7999",
      priceNote: "/- per night (Breakfast included)",
      tag: "Most Popular",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
      videoUrl: VIDEO_URLS.roomLakeTour,
      videoDuration: "0:42 Tour",
      gallery: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80"
      ],
      amenities: [
        "Complimentary Lavish Breakfast",
        "Direct Panoramic Lake Balcony",
        "King Size Royal Bed with Premium Linen",
        "High-Speed Wi-Fi & Smart TV",
        "Silent Climate Control AC",
        "Luxury Rain Shower Bath",
        "Full Safari Activities Access"
      ]
    }
  ],

  packages: [
    {
      id: "day-safari",
      title: "Royal Day Safari Pass",
      subtitle: "Ideal for an exhilarating afternoon & evening family getaway",
      price: "1,999",
      gst: "+ GST",
      unit: "per person",
      tag: "Most Popular",
      popular: true,
      videoUrl: VIDEO_URLS.bannerSafariPromo,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80",
      inclusions: [
        "Free AC Pick Up & Drop Facility Across Jaipur",
        "Welcome Drink & Tilak on Arrival",
        "Access to All 12+ Adventure Activities",
        "Scenic Lake Boating with Safety Life Vests",
        "Resort Swimming Pool Access",
        "Sunset High Tea with Rajasthani Delicacies",
        "Live Folk Stage: Singing, Dhol & Kalbelia Dancing",
        "Grand Royal Gala Dinner Buffet"
      ],
      badge: "Best Value"
    },
    {
      id: "garden-stay",
      title: "Safari + Garden Facing Stay",
      subtitle: "Full safari experience + overnight luxury garden cottage stay",
      price: "6,999",
      gst: "+ Taxes",
      unit: "for 2 adults (1 night)",
      tag: "Nature Serenity",
      popular: false,
      videoUrl: VIDEO_URLS.roomGardenTour,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80",
      inclusions: [
        "Includes All Day Safari Benefits for 2 Persons",
        "Overnight Luxury Garden View Room Stay",
        "Complimentary Morning Lavish Breakfast Buffet",
        "Early Morning Nature Walk & Bird Watching",
        "Free AC Pick Up & Drop Included",
        "Free Wi-Fi & Welcome Fruit Basket",
        "Late Checkout (Subject to availability)"
      ],
      badge: "Relaxation"
    },
    {
      id: "lake-stay",
      title: "Safari + Lake View Suite",
      subtitle: "The ultimate royal weekend retreat overlooking tranquil waters",
      price: "7,999",
      gst: "+ Taxes",
      unit: "for 2 adults (1 night)",
      tag: "Royal Choice",
      popular: true,
      videoUrl: VIDEO_URLS.roomLakeTour,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
      inclusions: [
        "Includes All Day Safari Benefits for 2 Persons",
        "Overnight Lake-Facing Balcony Suite Stay",
        "Complimentary Lavish Breakfast Buffet",
        "Romantic Candlelit Dinner Seating Option",
        "Free AC Pick Up & Drop Included",
        "Priority Access to Zip Line & Boating",
        "Complimentary High-Tea in Private Balcony"
      ],
      badge: "Bestseller"
    }
  ],

  packageShowcaseVideos: [
    {
      title: "Afternoon Adventure",
      subtitle: "12+ Thrill & Water Rides",
      videoUrl: VIDEO_URLS.zipLine,
      image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Royal Mela & Gala Dinner",
      subtitle: "Folk Stage, Fire Show & Buffet",
      videoUrl: VIDEO_URLS.liveShow,
      image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Overnight Lakeside Retreat",
      subtitle: "Luxury Cottages with Breakfast",
      videoUrl: VIDEO_URLS.bannerLakeStay,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
    }
  ],

  whyChooseUs: [
    {
      icon: "ShieldCheck",
      title: "100% Family & Couple Verified",
      desc: "Strict couple & family entry policy guarantees a safe, dignified, and serene atmosphere for your loved ones.",
      videoUrl: VIDEO_URLS.bannerSafariPromo,
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: "Bus",
      title: "Zero-Hassle AC Transport",
      desc: "Complimentary designated tourist coaches pick you up from 5 major Jaipur points and drop you back safely.",
      videoUrl: VIDEO_URLS.zipLine,
      image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: "Sparkles",
      title: "All-Inclusive Single Pass",
      desc: "No hidden charges! Entry, 12+ adventure rides, swimming pool, boating, live cultural show, and gala dinner in one ticket.",
      videoUrl: VIDEO_URLS.swimmingPool,
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: "UtensilsCrossed",
      title: "Pure Rajasthani Zayka",
      desc: "Master chefs prepare fresh authentic Dal Baati Churma, Gatte, Ker Sangri alongside multi-cuisine favorites.",
      videoUrl: VIDEO_URLS.galaDinner,
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: "Trees",
      title: "Nature & Resort Luxury",
      desc: "Nestled in Achrol Valley hills with manicured lawns, natural water bodies, and cool evening breeze away from city noise.",
      videoUrl: VIDEO_URLS.roomGardenTour,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: "Award",
      title: "Safety First Standards",
      desc: "International Petzl climbing harnesses, double carabiners, certified life vests, and trained adventure marshals on duty.",
      videoUrl: VIDEO_URLS.adventureActivities,
      image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=600&q=80"
    }
  ],

  trustStats: {
    eyebrow: "TRUSTED BY JAIPUR FAMILIES",
    title: "Loved by thousands of",
    scriptWord: "happy explorers",
    bgVideo: VIDEO_URLS.bannerLakeStay,
    poster: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
    testimonial: {
      quote: "The best family weekend experience in Jaipur! The zip line over the water was breathtaking, our kids adored the toy train and boating, and the evening live folk performances with the royal gala dinner made it truly unforgettable. 100% safe and family-friendly!",
      author: "Dr. Vikramaditya & Priya Sharma",
      designation: "Family of 4, Jaipur Resident",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    counters: [
      { value: "12+", label: "Adventure Rides", icon: "Flame" },
      { value: "50K+", label: "Happy Guests", icon: "Users" },
      { value: "4.9/5", label: "Average Rating", icon: "Star" },
      { value: "1st", label: "In Jaipur Resort Safari", icon: "Award" }
    ]
  },

  collageGallery: [
    {
      title: "Zip line over the lake!",
      image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=600&q=80",
      videoUrl: VIDEO_URLS.zipLine,
      duration: "0:26",
      tilt: "-rotate-3",
      category: "Adventure"
    },
    {
      title: "Dinner under the stars",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80",
      videoUrl: VIDEO_URLS.galaDinner,
      duration: "0:28",
      tilt: "rotate-2",
      category: "Dining"
    },
    {
      title: "Kalbelia Folk Dancers",
      image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=600&q=80",
      videoUrl: VIDEO_URLS.liveShow,
      duration: "0:32",
      tilt: "-rotate-2",
      category: "Culture"
    },
    {
      title: "Toy Train rides for kids",
      image: "https://images.unsplash.com/photo-1520255870062-bd79d3865de7?auto=format&fit=crop&w=600&q=80",
      videoUrl: VIDEO_URLS.toyTrain,
      duration: "0:25",
      tilt: "rotate-3",
      category: "Activities"
    },
    {
      title: "Serene boating waters",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
      videoUrl: VIDEO_URLS.boating,
      duration: "0:30",
      tilt: "-rotate-1",
      category: "Activities"
    },
    {
      title: "Luxury Lake Balcony",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
      videoUrl: VIDEO_URLS.roomLakeTour,
      duration: "0:42",
      tilt: "rotate-2",
      category: "Rooms"
    },
    {
      title: "Bungee thrill moments",
      image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=600&q=80",
      videoUrl: VIDEO_URLS.bungeeJumping,
      duration: "0:21",
      tilt: "-rotate-2",
      category: "Adventure"
    },
    {
      title: "Family smiles at Joy Safari",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80",
      videoUrl: VIDEO_URLS.bannerSafariPromo,
      duration: "0:45",
      tilt: "rotate-1",
      category: "Culture"
    }
  ],

  galleryItems: [
    {
      id: "reel-zipline",
      title: "High-Flying Zip Line Over Water",
      category: "Activities",
      type: "video",
      duration: "0:26",
      image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=1000&q=80",
      videoUrl: VIDEO_URLS.zipLine,
      aspect: "aspect-[4/5]"
    },
    {
      id: "reel-mela-stage",
      title: "Kalbelia Folk Dancers & Live Stage",
      category: "Night Show",
      type: "video",
      duration: "0:32",
      image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1000&q=80",
      videoUrl: VIDEO_URLS.liveShow,
      aspect: "aspect-[16/10]"
    },
    {
      id: "reel-boating",
      title: "Tranquil Lake Boating at Sunset",
      category: "Activities",
      type: "video",
      duration: "0:30",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
      videoUrl: VIDEO_URLS.boating,
      aspect: "aspect-square"
    },
    {
      id: "reel-pool",
      title: "Crystal Clear Resort Swimming Pool",
      category: "Activities",
      type: "video",
      duration: "0:22",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1000&q=80",
      videoUrl: VIDEO_URLS.swimmingPool,
      aspect: "aspect-[4/5]"
    },
    {
      id: "reel-gala-dinner",
      title: "Royal Rajasthani Gala Dinner Buffet",
      category: "Dining",
      type: "video",
      duration: "0:28",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=80",
      videoUrl: VIDEO_URLS.galaDinner,
      aspect: "aspect-[16/10]"
    },
    {
      id: "reel-lake-room",
      title: "Lake View Royal Suite Walkthrough",
      category: "Rooms",
      type: "video",
      duration: "0:42",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
      videoUrl: VIDEO_URLS.roomLakeTour,
      aspect: "aspect-[4/5]"
    },
    {
      id: "reel-resort-film",
      title: "Joy Safari Resort Aerial Film",
      category: "Night Show",
      type: "video",
      duration: "1:45",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
      videoUrl: VIDEO_URLS.heroBg,
      aspect: "aspect-[16/10]"
    },
    {
      id: "reel-garden-room",
      title: "Garden Facing Luxury Cottage Tour",
      category: "Rooms",
      type: "video",
      duration: "0:36",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
      videoUrl: VIDEO_URLS.roomGardenTour,
      aspect: "aspect-square"
    },
    {
      id: "reel-toy-train",
      title: "Joyful Toy Train Garden Ride",
      category: "Activities",
      type: "video",
      duration: "0:25",
      image: "https://images.unsplash.com/photo-1520255870062-bd79d3865de7?auto=format&fit=crop&w=1000&q=80",
      videoUrl: VIDEO_URLS.toyTrain,
      aspect: "aspect-[4/5]"
    },
    {
      id: "reel-adventure",
      title: "Aerial Rope Course & Climbing Wall",
      category: "Activities",
      type: "video",
      duration: "0:24",
      image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=1000&q=80",
      videoUrl: VIDEO_URLS.adventureActivities,
      aspect: "aspect-[16/10]"
    },
    {
      id: "reel-dal-baati",
      title: "Authentic Dal Baati & Rajasthani Zayka",
      category: "Dining",
      type: "video",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80",
      videoUrl: VIDEO_URLS.galaDinner,
      aspect: "aspect-[16/10]"
    },
    {
      id: "reel-family-campfire",
      title: "Family Evenings & Cultural Warmth",
      category: "Culture",
      type: "video",
      duration: "0:38",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80",
      videoUrl: VIDEO_URLS.bannerSafariPromo,
      aspect: "aspect-square"
    }
  ],

  blogs: [
    {
      id: "things-to-do",
      title: "Top 10 Things to Do in Joy Safari Jaipur for Families",
      excerpt: "From thrilling over-water zip lines to royal folk dances and royal banquets, here is the ultimate guide to planning your weekend at Joy Safari.",
      category: "Travel Guide",
      readTime: "5 min read",
      date: "May 2026",
      image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=800&q=80",
      videoUrl: VIDEO_URLS.zipLine
    },
    {
      id: "family-day-out",
      title: "Planning the Perfect Family Day Out in Jaipur: What to Expect",
      excerpt: "Why staying near the Aravalli hills with all-inclusive activities and zero transport hassle is the new favorite getaway for Jaipur couples and families.",
      category: "Tips & Hacks",
      readTime: "4 min read",
      date: "May 2026",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      videoUrl: VIDEO_URLS.boating
    },
    {
      id: "mela-night",
      title: "Why the Rajasthani Mela Night is Jaipur's Must-Experience Evening",
      excerpt: "Witness authentic dhol rhythms, blazing fire artists, and traditional Kalbelia swirling dancers under a canopy of desert stars.",
      category: "Culture & Dining",
      readTime: "6 min read",
      date: "May 2026",
      image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80",
      videoUrl: VIDEO_URLS.liveShow
    }
  ],

  contactMedia: {
    heroVideo: VIDEO_URLS.heroFullFilm,
    heroPoster: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80",
    arrivalVideo: VIDEO_URLS.bannerLakeStay,
    arrivalPoster: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80"
  },

  newsletter: {
    eyebrow: "STAY IN THE LOOP",
    title: "Ready for your next royal",
    scriptWord: "adventure?",
    subtitle: "Subscribe to receive exclusive weekend discount codes, festival updates, and seasonal packages directly.",
    placeholder: "Enter your email address...",
    buttonText: "Subscribe Now",
    privacyNote: "No spam, only royal invitations & exclusive discounts."
  },

  finalCta: {
    headline: "EXPERIENCE JAIPUR LIKE NEVER BEFORE!",
    subline: "ADVENTURE | CULTURE | ENTERTAINMENT | LUXURY",
    actions: [
      { type: "call", label: "CALL NOW", value: "8000928080", href: "tel:8000928080" },
      { type: "website", label: "VISIT OUR WEBSITE", value: "www.joyadventureresort.com", href: "https://www.joyadventureresort.com" },
      { type: "share", label: "SHARE WITH YOUR LOVED ONES!", value: "WhatsApp Share", href: "https://api.whatsapp.com/send?text=Check%20out%20Joy%20Safari%20Jaipur%20-%20Jaipur's%201st%20Family%20%26%20Couples%20Adventure%20Resort!%20Visit%20www.joyadventureresort.com" }
    ]
  },

  aboutContent: {
    eyebrow: "OUR STORY & PHILOSOPHY",
    title: "Jaipur's First Destination for Wholesome",
    scriptWord: "Royal Joy",
    welcomeNote: "Padharo Mhare Desh! Welcome to Joy Safari Jaipur.",
    story: "Joy Safari was conceptualized as a sanctuary where modern heart-racing adventure merges harmoniously with the timeless warmth and grandeur of Rajasthani royal hospitality. Situated in the serene valleys of Achrol along the Delhi-Jaipur highway, we created a destination exclusively for families and couples to escape the concrete hustle and reconnect with joy, nature, and cultural pride.",
    mission: "To provide every family and couple with a safe, luxurious, and all-inclusive recreational resort experience featuring world-standard adventures, authentic Rajasthani culinary heritage, and heartwarming cultural performances.",
    values: [
      {
        title: "Safety First & Always",
        desc: "Certified European Petzl climbing gear, twin cable lifelines, lifejackets, and trained marshals oversee every activity.",
        icon: "ShieldAlert"
      },
      {
        title: "Royal Rajputana Hospitality",
        desc: "From the traditional tilak welcome to attentive table service during our gala buffet, every guest is treated like royalty.",
        icon: "Crown"
      },
      {
        title: "Wholesome Family & Couples Culture",
        desc: "A strictly verified environment where mothers, children, elders, and couples can relax in full dignity, peace, and security.",
        icon: "Heart"
      }
    ]
  },

  faqs: [
    {
      question: "What is included in the ₹1999 + GST Day Safari Pass?",
      answer: "The ₹1999 pass is all-inclusive! It includes Free AC Pick Up & Drop from designated Jaipur hubs, welcome drinks, access to all 12+ adventure activities (Zip line, Boating, Swimming Pool, Commando Tyre, Toy Train, Horse Riding, Bungee, Wall Climbing, Gun Shooting, etc.), Sunset High Tea, the Live Rajasthani Cultural Show, and the lavish Royal Gala Dinner Buffet."
    },
    {
      question: "Are stags or solo male groups permitted?",
      answer: "No. Joy Safari is strictly an exclusive destination for Families and Couples. This policy ensures a dignified, secure, and comfortable atmosphere for women, children, and elders."
    },
    {
      question: "How does the Free Pick Up & Drop service work?",
      answer: "We operate scheduled luxury AC coaches from 5 prominent Jaipur hubs: Sindhi Camp, Mansarovar Metro, Vaishali Nagar, Malviya Nagar, and Raja Park around 2:30 PM - 3:00 PM. Coaches return from the resort after the Gala Dinner around 10:30 PM. Prior booking reservation is required."
    },
    {
      question: "What are the timings of Joy Safari?",
      answer: "The resort gates open at 3:30 PM. Adventure activities and water rides operate from 4:00 PM to 7:00 PM. Sunset high tea is served at 6:30 PM, the Live Folk Stage starts at 7:30 PM, and the Gala Dinner Buffet runs from 9:00 PM to 10:45 PM."
    },
    {
      question: "What should we carry for our visit?",
      answer: "Please bring comfortable sports attire and athletic shoes for adventure rope courses and climbing. If you plan to use the swimming pool, appropriate swimwear is mandatory. Towels are available at the resort."
    },
    {
      question: "Can we stay overnight?",
      answer: "Yes! We offer luxury cottages facing our landscaped gardens (₹6999/- per night) and lake-view facing suites (₹7999/- per night), both of which include lavish morning breakfast, full safari pass access, and resort amenities."
    }
  ]
};
