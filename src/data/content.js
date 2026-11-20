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
    timings: "3:00 PM to 12:00 AM (Pickup to Drop-off)",
    whatsappNumber: "918000928080",
    whatsappUrl: "https://wa.me/918000928080?text=Hello%20Joy%20Safari%20Jaipur%2C%20I%20would%20like%20to%20know%20more%20and%20book%20a%20package.",
    whatsappShareUrl: "https://api.whatsapp.com/send?text=Check%20out%20Joy%20Safari%20Jaipur%20-%20Jaipur's%201st%20Family%20%26%20Couples%20Adventure%20Resort%20with%2020%2B%20Activities%2C%20Boating%2C%20Live%20Show%20%26%20Gala%20Dinner%20Buffet%20at%20just%20%E2%82%B91999%2B!%20Visit%20www.joyadventureresort.com%20or%20call%208000928080",
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
      desc: "AC travel from designated Jaipur points (3:00 PM - 12:00 AM)",
      videoUrl: VIDEO_URLS.zipLine,
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: "Crown",
      title: "Traditional Welcome & Starters",
      desc: "Rajasthani girls welcome, cultural hospitality & welcome drinks (5:00 PM)",
      videoUrl: VIDEO_URLS.liveShow,
      image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: "Flame",
      title: "20+ Activities Included",
      desc: "Horse, camel, cart rides, boating, toy train & 12+ fun games",
      videoUrl: VIDEO_URLS.boating,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: "Utensils",
      title: "Dinner & Cultural Show",
      desc: "Live folk dance, fire show & authentic Rajasthani dinner buffet",
      videoUrl: VIDEO_URLS.galaDinner,
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80"
    }
  ],

  planSteps: {
    eyebrow: "THE JOY SAFARI JOURNEY",
    title: "Everything you need for the",
    scriptWord: "perfect trip",
    steps: [
      {
        step: "01",
        title: "3:00 PM • AC Pickup",
        desc: "Comfortable pickup from designated location in Jaipur by tourist coaches.",
        icon: "BusFront",
        videoUrl: VIDEO_URLS.zipLine,
        image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: "02",
        title: "5:00 PM • Royal Welcome",
        desc: "Warm Rajasthani welcome by traditional girls, welcome drinks & delicious starters.",
        icon: "Crown",
        videoUrl: VIDEO_URLS.liveShow,
        image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: "03",
        title: "5:30 PM • 20+ Activities",
        desc: "Horse, camel, cart ride, boating, toy train, sumo wrestling & 12+ fun experiences.",
        icon: "Flame",
        videoUrl: VIDEO_URLS.boating,
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80"
      },
      {
        step: "04",
        title: "Dinner & Midnight Drop",
        desc: "7:00 PM cultural fire show, 9:30 PM royal dinner buffet, and 10:30 PM safe drop-off.",
        icon: "Utensils",
        videoUrl: VIDEO_URLS.galaDinner,
        image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },

  activities: [
    {
      id: "horse-riding",
      name: "Horse Riding",
      shortDesc: "Ride gentle Marwari horses across open lush green grounds with trained handlers.",
      fullDesc: "Experience the royal heritage of Rajputana on horseback. Our well-trained, docile horses and experienced grooms guide you along picturesque dirt tracks with full equestrian safety helmets.",
      tag: "Family Fun",
      category: "Fun",
      tagColor: "sage",
      image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.horseRiding,
      videoDuration: "0:29",
      reelLabel: "Royal Ride Clip",
      timing: "5:30 PM - 7:00 PM",
      safety: "Mandatory Helmets & Dedicated Handler",
      ageLimit: "All Ages Welcome",
      included: true
    },
    {
      id: "camel-riding",
      name: "Camel Riding",
      shortDesc: "Authentic ship-of-the-desert joyride across the scenic resort grounds with traditional saddles.",
      fullDesc: "Take in sweeping views of the Aravalli hills from atop friendly, decorated camels guided by skilled Rajasthani handlers. A quintessential desert experience for families and romantic couples.",
      tag: "Royal Fun",
      category: "Fun",
      tagColor: "gold",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.bannerSafariPromo,
      videoDuration: "0:28",
      reelLabel: "Camel Safari Reel",
      timing: "5:30 PM - 7:00 PM",
      safety: "Trained Handlers & Soft Saddles",
      ageLimit: "All Ages Welcome",
      included: true
    },
    {
      id: "bullock-cart",
      name: "Bullock Cart Ride",
      shortDesc: "Traditional village cart joyride adorned with rhythmic folk bells winding through scenic pathways.",
      fullDesc: "Relive pastoral Rajasthan on a decorated wooden bullock cart ride. Complete with cheerful brass bells and cushioned seating, this gentle journey is a huge hit among kids and elders.",
      tag: "Heritage",
      category: "Fun",
      tagColor: "sage",
      image: "https://images.unsplash.com/photo-1570783307612-42751f7bb9ca?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.toyTrain,
      videoDuration: "0:24",
      reelLabel: "Bullock Cart Ride",
      timing: "5:30 PM - 7:00 PM",
      safety: "Slow-Paced & Soft Padded Benches",
      ageLimit: "All Ages Welcome",
      included: true
    },
    {
      id: "boating",
      name: "Boating",
      shortDesc: "Glide peacefully across the resort's tranquil lake surrounded by scenic Aravalli hills.",
      fullDesc: "Soak in the golden sunset reflections on the lake. Pedal boats and rowing rafts equipped with certified life jackets and watchful rescue guards make for an unforgettable, serene cruise.",
      tag: "Family Fun",
      category: "Water",
      tagColor: "sage",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.boating,
      videoDuration: "0:30",
      reelLabel: "Lake Boating Reel",
      timing: "5:30 PM - 7:00 PM",
      safety: "Mandatory Life Jackets & Rescue Guards",
      ageLimit: "All Ages Welcome",
      included: true
    },
    {
      id: "gun-shooting",
      name: "Target Gun Shooting",
      shortDesc: "Test your aim and precision at our professional sport target range under certified instructors.",
      fullDesc: "Steady your breath and aim at bullseye targets, floating balloons, and reactive steel targets with precision 0.177 sport air rifles in a safe, fully cordoned shooting gallery.",
      tag: "Skill Thrill",
      category: "Fun",
      tagColor: "gold",
      image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.gunShooting,
      videoDuration: "0:18",
      reelLabel: "Target Range Clip",
      timing: "5:30 PM - 7:00 PM",
      safety: "Protective Glasses & Range Marshals",
      ageLimit: "Age 10+ Years",
      included: true
    },
    {
      id: "toy-train",
      name: "Toy Train Ride",
      shortDesc: "Charming scenic miniature train chugging cheerfully through blooming gardens and lakesides.",
      fullDesc: "A delightful joyride loved by children, grandparents, and couples alike. The colorful open-air toy train winds along dedicated tracks touring the water bodies and adventure lawns.",
      tag: "Kids' Favorite",
      category: "Fun",
      tagColor: "gold",
      image: "https://images.unsplash.com/photo-1520255870062-bd79d3865de7?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.toyTrain,
      videoDuration: "0:25",
      reelLabel: "Toy Train Tour",
      timing: "5:30 PM - 7:00 PM",
      safety: "Slow-Speed Controlled Guided Rails",
      ageLimit: "All Ages (Family Joy)",
      included: true
    },
    {
      id: "kids-adventure",
      name: "Kids' Adventure Activities",
      shortDesc: "Dedicated safe thrill arena designed especially for young kids with fun obstacles and games.",
      fullDesc: "A wonderland for kids! Features crawl tunnels, bouncy obstacle zones, soft climbing ramps, mini balance beams, and supervised fun challenges that keep children happily engaged.",
      tag: "Kids Fun",
      category: "Adventure",
      tagColor: "sage",
      image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.adventureActivities,
      videoDuration: "0:22",
      reelLabel: "Kids Adventure Zone",
      timing: "5:30 PM - 7:00 PM",
      safety: "Cushioned Turf & Dedicated Attendants",
      ageLimit: "Kids (Up to 14 Years)",
      included: true
    },
    {
      id: "sumo-wrestling",
      name: "Sumo Wrestling",
      shortDesc: "Hilarious and energetic wrestling in oversized padded sumo suits inside a safe ring mat.",
      fullDesc: "Suit up in massive, foam-padded sumo wrestler suits and try to bump your family and friends out of the circular ring! Guaranteed laughter for both players and cheering spectators.",
      tag: "High Energy",
      category: "Fun",
      tagColor: "maroon",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.commandoTyre,
      videoDuration: "0:19",
      reelLabel: "Sumo Bout Action",
      timing: "5:30 PM - 7:00 PM",
      safety: "Heavy Foam Padding & Soft Mat Landing",
      ageLimit: "Age 8+ Years",
      included: true
    },
    {
      id: "commando-tyre",
      name: "Commando Tyre Course",
      shortDesc: "Army-inspired agility obstacle course featuring heavy tyres, balance ramps and scrambles.",
      fullDesc: "Unleash your inner commando! Run, step, balance, and scramble across authentic military tyre obstacles, rope climbs, and coordination tracks over a soft sand landing pit.",
      tag: "Thrill",
      category: "Adventure",
      tagColor: "sage",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.commandoTyre,
      videoDuration: "0:19",
      reelLabel: "Commando Action",
      timing: "5:30 PM - 7:00 PM",
      safety: "Soft Sand Landing Pit & Instructors",
      ageLimit: "Age 10+ Years",
      included: true
    },
    {
      id: "swimming-pool",
      name: "Swimming Pool",
      shortDesc: "Refresh in a crystal-clear outdoor resort pool bordered by palm trees and comfortable sunbeds.",
      fullDesc: "Enjoy a rejuvenating dip in our temperature-balanced outdoor pool. Includes dedicated shallow wading areas for young children and lounging cabanas for parents to relax in comfort.",
      tag: "Water Fun",
      category: "Water",
      tagColor: "sage",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.swimmingPool,
      videoDuration: "0:22",
      reelLabel: "Poolside Video",
      timing: "5:30 PM - 7:00 PM",
      safety: "Dedicated Lifeguards, 4.5 ft Max Depth",
      ageLimit: "All Ages (Costume Required)",
      included: true
    },
    {
      id: "bungee-jumping",
      name: "Bungee / Sling Shot",
      shortDesc: "Experience thrilling weightless zero-gravity launches with certified bungee cords and harnesses.",
      fullDesc: "Strap into aerospace-grade bungee cords and experience an exhilarating upward catapult launch, bouncing into the sky with 360-degree views of the surrounding hills.",
      tag: "Thrill",
      category: "Adventure",
      tagColor: "maroon",
      image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.bungeeJumping,
      videoDuration: "0:21",
      reelLabel: "Bungee Launch",
      timing: "5:30 PM - 7:00 PM",
      safety: "Triple Redundant Elastic Cords & Technicians",
      ageLimit: "Age 12+ Years",
      included: true
    },
    {
      id: "mounting-wall",
      name: "Mounting (Rock Climbing) Wall",
      shortDesc: "Scale our 35-foot textured vertical artificial climbing wall with multi-difficulty grips.",
      fullDesc: "Test your stamina and grip! Ascend the vertical textured climbing monolith using auto-belay cables, safety ropes, and instruction from certified climbing marshals.",
      tag: "Thrill",
      category: "Adventure",
      tagColor: "sage",
      image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.mountingWall,
      videoDuration: "0:27",
      reelLabel: "Climbing Action",
      timing: "5:30 PM - 7:00 PM",
      safety: "Certified Dynamic Ropes & Auto-Belay",
      ageLimit: "Age 8+ Years",
      included: true
    },
    {
      id: "aerial-rope",
      name: "Aerial Rope Balance Walk",
      shortDesc: "Challenge your balance across suspended wooden planks and high-wire rope bridges in nature.",
      fullDesc: "Walk above the tree canopy on suspension wooden bridges, balance beams, and net crossings secured with dual carabiner safety harnesses.",
      tag: "Adventure",
      category: "Adventure",
      tagColor: "sage",
      image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.adventureActivities,
      videoDuration: "0:24",
      reelLabel: "Aerial Rope Walk",
      timing: "5:30 PM - 7:00 PM",
      safety: "Petzl Harnesses & Certified Marshals",
      ageLimit: "Age 8+ Years",
      included: true
    },
    {
      id: "archery",
      name: "Archery Range",
      shortDesc: "Practice traditional bow-and-arrow marksmanship at our scenic outdoor target shooting range.",
      fullDesc: "Learn proper stance and release technique with lightweight recurve bows and high-density foam target boards under careful personal guidance.",
      tag: "Skill Fun",
      category: "Fun",
      tagColor: "gold",
      image: "https://images.unsplash.com/photo-1511295742362-92c96b124e52?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.gunShooting,
      videoDuration: "0:18",
      reelLabel: "Archery Range",
      timing: "5:30 PM - 7:00 PM",
      safety: "Recurve Bows & Closed Target Berm",
      ageLimit: "Age 8+ Years",
      included: true
    },
    {
      id: "trampoline",
      name: "Trampoline Jump Arena",
      shortDesc: "High-bounce recreational trampoline arena with full safety containment netting for pure fun.",
      fullDesc: "Kids and teenagers can jump, bounce, and show off tricks inside our padded, heavy-duty enclosed trampoline zone.",
      tag: "Kids Fun",
      category: "Fun",
      tagColor: "gold",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.toyTrain,
      videoDuration: "0:20",
      reelLabel: "Trampoline Arena",
      timing: "5:30 PM - 7:00 PM",
      safety: "Full Height Netting & Padded Springs",
      ageLimit: "All Ages",
      included: true
    },
    {
      id: "tug-of-war",
      name: "Tug of War & Village Games",
      shortDesc: "High-spirited team tug of war, sack races, and traditional Indian rural garden games.",
      fullDesc: "Bring families and friends together for energetic team games on the lush lawns. Perfect for laughter, camaraderie, and memorable photos.",
      tag: "Family Games",
      category: "Fun",
      tagColor: "sage",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.bannerSafariPromo,
      videoDuration: "0:25",
      reelLabel: "Village Games Fun",
      timing: "5:30 PM - 7:00 PM",
      safety: "Lush Soft Natural Grass Lawns",
      ageLimit: "All Ages",
      included: true
    },
    {
      id: "indoor-games",
      name: "Table Tennis & Indoor Club",
      shortDesc: "Enjoy table tennis, carrom, chess, and friendly indoor games in our airy recreation hall.",
      fullDesc: "Take a break in our indoor game room equipped with international tournament-standard table tennis, carrom boards, chess, and foosball.",
      tag: "Indoor Fun",
      category: "Fun",
      tagColor: "gold",
      image: "https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.roomGardenTour,
      videoDuration: "0:20",
      reelLabel: "Indoor Club",
      timing: "5:30 PM - 7:00 PM",
      safety: "Air-Cooled Indoor Recreation Lounge",
      ageLimit: "All Ages",
      included: true
    },
    {
      id: "badminton-cricket",
      name: "Badminton & Box Cricket",
      shortDesc: "Open-air lawn badminton and friendly box cricket pitch with all equipment provided.",
      fullDesc: "Challenge your family to lively badminton rallies and friendly box cricket matches on manicured turf under the cool evening sky.",
      tag: "Sports",
      category: "Fun",
      tagColor: "sage",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.roomGardenTour,
      videoDuration: "0:21",
      reelLabel: "Sports Lawn",
      timing: "5:30 PM - 7:00 PM",
      safety: "Turf Surface & Quality Gear Provided",
      ageLimit: "All Ages",
      included: true
    },
    {
      id: "puppet-magic",
      name: "Kathputli Puppet & Magic Show",
      shortDesc: "Authentic Rajasthani Kathputli puppet theater and interactive sleight-of-hand magic acts.",
      fullDesc: "Marvel at centuries-old Rajasthani storytelling told through hand-carved dancing puppets, rhythmic whistles, and mystifying live magic performances.",
      tag: "Culture",
      category: "Culture",
      tagColor: "maroon",
      image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.liveShow,
      videoDuration: "0:30",
      reelLabel: "Puppet & Magic Show",
      timing: "7:00 PM - 9:30 PM",
      safety: "Open-Air Amphitheater Seating",
      ageLimit: "All Ages Welcome",
      included: true
    },
    {
      id: "folk-dance",
      name: "Folk Dance, Dhol & Fire Show",
      shortDesc: "Soulful Ghoomar, Kalbelia swirls, live Manganiyar dhol beats, and thrilling fire stunts.",
      fullDesc: "The centerpiece of the evening! World-renowned Rajasthani folk artists perform mesmerizing dances, fire-breathing stunts, and vibrant music under the night stars.",
      tag: "Grand Show",
      category: "Culture",
      tagColor: "gold",
      image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.liveShow,
      videoDuration: "0:32",
      reelLabel: "Live Stage Reel",
      timing: "7:00 PM - 9:30 PM",
      safety: "Safe Amphitheater Stage Buffer Zone",
      ageLimit: "All Ages Welcome",
      included: true
    },
    {
      id: "zip-line",
      name: "High-Flying Zip Line Over Water",
      shortDesc: "Jaipur's premier high-flying zip line gliding directly over shimmering lake waters. (Separate Thrill Add-on).",
      fullDesc: "Feel the rush of adrenaline as you zoom from our elevated launch tower across the lake with 360-degree Aravalli views. Available as a special thrill add-on (not included in the standard ₹1999 pass).",
      tag: "Add-on Thrill",
      category: "Adventure",
      tagColor: "maroon",
      image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.zipLine,
      videoDuration: "0:26",
      reelLabel: "Zip Line POV",
      timing: "5:30 PM - 7:00 PM",
      safety: "Twin High-Tension Steel Cables & Braking Gear",
      ageLimit: "Weight 35kg - 110kg",
      included: false,
      isAddon: true,
      badge: "Not in Pass (Separate Add-on)"
    },
    {
      id: "atv-ride",
      name: "ATV Quad Bike Safari",
      shortDesc: "Rugged all-terrain quad biking thrill across dedicated dirt tracks and banked curves. (Separate Thrill Add-on).",
      fullDesc: "Power through dirt trails, sand berms, and turns aboard powerful 200cc all-terrain quad bikes under the supervision of off-road instructors. Available as a special thrill add-on (not included in the standard ₹1999 pass).",
      tag: "Add-on Thrill",
      category: "Adventure",
      tagColor: "maroon",
      image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.zipLine,
      videoDuration: "0:22",
      reelLabel: "ATV Quad Action",
      timing: "5:30 PM - 7:00 PM",
      safety: "Equestrian/ATV Helmets & Marshals",
      ageLimit: "Age 14+ Years",
      included: false,
      isAddon: true,
      badge: "Not in Pass (Separate Add-on)"
    },
    {
      id: "paintball",
      name: "Tactical Paintball Arena",
      shortDesc: "High-octane tactical combat simulation with paint markers, bunkers, and battle gear. (Separate Thrill Add-on).",
      fullDesc: "Form your squad, don protective armor and full-face thermal goggles, and battle in our outdoor wooded paintball arena. Available as a special thrill add-on (not included in the standard ₹1999 pass).",
      tag: "Add-on Thrill",
      category: "Adventure",
      tagColor: "maroon",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80",
      videoUrl: VIDEO_URLS.commandoTyre,
      videoDuration: "0:20",
      reelLabel: "Paintball Battle",
      timing: "5:30 PM - 7:00 PM",
      safety: "Full Face Mask & Body Chest Armor",
      ageLimit: "Age 12+ Years",
      included: false,
      isAddon: true,
      badge: "Not in Pass (Separate Add-on)"
    }
  ],

  featuredBanners: {
    banner1: {
      tag: "Most Popular",
      title: "Royal Day Safari Experience",
      price: "₹1999 + GST",
      priceUnit: "per person",
      description: "Complete all-inclusive package with free AC pickup & drop, 20+ fun-filled activities, lake boating, live cultural show, and lavish royal dinner buffet. (Note: ATV, Zipline & Paintball not included).",
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

  tourItinerary: [
    {
      time: "03:00 PM",
      label: "AC Pickup",
      title: "Pickup from Designated Location",
      desc: "Comfortable pickup from designated location in Jaipur by scheduled tourist coach.",
      tag: "Travel"
    },
    {
      time: "04:30 PM - 05:00 PM",
      label: "Resort Arrival",
      title: "Arrival at the Resort",
      desc: "Reach the picturesque resort at Achrol Valley and get ready for the welcome experience.",
      tag: "Arrival"
    },
    {
      time: "05:00 PM",
      label: "Traditional Welcome",
      title: "Traditional Rajasthani Welcome",
      desc: "Experience a warm and grand welcome in authentic Rajasthani style, featuring traditional Rajasthani girls, cultural hospitality, welcome drinks, and starters.",
      tag: "Welcome"
    },
    {
      time: "05:30 PM",
      label: "20+ Activities",
      title: "Adventure & Activities Time",
      desc: "Enjoy approximately 20 fun-filled activities and adventure experiences including Horse Riding, Camel Riding, Bullock Cart Ride, Boating, Gun Shooting, Toy Train Ride, Kids' Adventure Activities, Sumo Wrestling, and ~12 more fun activities. (Note: ATV Ride, Zipline, and Paintball are not included in the package).",
      note: "Note: ATV Ride, Zipline, and Paintball are not included in the package.",
      tag: "Activities"
    },
    {
      time: "07:00 PM - 09:30 PM",
      label: "Cultural Evening",
      title: "Cultural Evening & Live Entertainment",
      desc: "Enjoy an entertaining evening featuring traditional Rajasthani cultural performances, live music and dance, and an exciting fire show.",
      tag: "Live Show"
    },
    {
      time: "09:30 PM - 10:30 PM",
      label: "Royal Dinner",
      title: "Dinner Buffet",
      desc: "Enjoy a delicious dinner featuring a combination of traditional Rajasthani cuisine and regular dinner options.",
      tag: "Dining"
    },
    {
      time: "10:30 PM - 12:00 AM",
      label: "Safe Return",
      title: "Departure & Drop-Off",
      desc: "Departure from the resort and safe drop-off at your respective locations, concluding the Joy Safari experience.",
      tag: "Drop-Off"
    }
  ],

  liveStage: {
    eyebrow: "CULTURE & FOLK MAGIC",
    title: "The Live Stage: Rajasthani",
    scriptWord: "Mela Night",
    description: "Experience authentic Rajasthani cultural artistry from 7:00 PM to 9:30 PM under starry skies. Enjoy blazing fire dances, hypnotic Kalbelia swirls, rhythmic dholak beats, and traditional puppet artistry.",
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
      { time: "03:00 PM", label: "AC Pickup", desc: "Pickup from designated location across Jaipur." },
      { time: "04:30 PM", label: "Resort Arrival", desc: "Arrival at resort (4:30 - 5:00 PM) to freshen up." },
      { time: "05:00 PM", label: "Rajasthani Welcome", desc: "Welcome by traditional Rajasthani girls, hospitality, drinks & starters." },
      { time: "05:30 PM", label: "20+ Fun Activities", desc: "Horse & camel riding, bullock cart, boating, toy train, sumo & 12+ games." },
      { time: "07:00 PM", label: "Cultural Show & Fire", desc: "Rajasthani live music, folk dance & thrilling fire show (7:00 - 9:30 PM)." },
      { time: "09:30 PM", label: "Dinner Buffet", desc: "Traditional Rajasthani cuisine + regular dinner buffet (9:30 - 10:30 PM)." },
      { time: "10:30 PM", label: "Safe Drop-Off", desc: "Departure from resort & drop-off in Jaipur (10:30 PM - 12:00 AM)." }
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
      "Free AC Pick Up & Drop across Jaipur (3 PM - 12 AM)",
      "Traditional Welcome with Starters & Drinks (5 PM)",
      "Access to 20+ Fun Activities (5:30 PM)",
      "Cultural Live Show, Fire Stunts & Royal Dinner Buffet",
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
      exclusionNotice: "Note: ATV Ride, Zipline, and Paintball are not included in the package.",
      inclusions: [
        { label: "Pick Up & Drop", desc: "Free AC travel from Jaipur (3 PM - 12 AM)", icon: "Bus" },
        { label: "Welcome & Starters", desc: "Rajasthani hospitality & drinks (5 PM)", icon: "Crown" },
        { label: "20+ Activities Access", desc: "Horse, camel, cart, boat, train & games", icon: "Flame" },
        { label: "Dinner & Cultural Show", desc: "Live fire show & royal dinner buffet", icon: "Utensils" }
      ]
    }
  },

  parkInfo: {
    eyebrow: "LOCATION & SCHEDULE",
    title: "Plan Your Journey to",
    scriptWord: "Joy Safari",
    timings: "3:00 PM - 12:00 AM (Pickup to Drop-off)",
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
        "Free AC Pick Up & Drop Across Jaipur (3:00 PM - 12:00 AM)",
        "Traditional Rajasthani Welcome with Drinks & Starters (5:00 PM)",
        "Access to 20+ Fun Activities (Horse, Camel, Bullock Cart, Boating, Toy Train, Sumo & 12+ More)",
        "Scenic Lake Boating with Safety Life Vests",
        "Resort Swimming Pool & Kids' Adventure Zone",
        "Cultural Evening: Live Folk Stage & Thrilling Fire Show (7:00 PM - 9:30 PM)",
        "Royal Dinner: Traditional Rajasthani + Multi-Cuisine Buffet (9:30 PM - 10:30 PM)",
        "Note: ATV Ride, Zipline & Paintball are not included in the package"
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
        "Complimentary High-Tea in Private Balcony",
        "Scenic Water Views & Resort Access"
      ],
      badge: "Bestseller"
    }
  ],

  packageShowcaseVideos: [
    {
      title: "Afternoon Adventure",
      subtitle: "20+ Fun & Thrill Activities",
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
      desc: "Complimentary designated tourist coaches pick you up from designated Jaipur locations at 3:00 PM and drop you back safely.",
      videoUrl: VIDEO_URLS.zipLine,
      image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: "Ticket",
      title: "All-Inclusive Single Pass",
      desc: "No hidden charges! Entry, 20+ fun-filled activities, boating, pool, live cultural fire show, and dinner buffet in one ticket. (ATV, Zipline & Paintball available as separate add-ons).",
      videoUrl: VIDEO_URLS.swimmingPool,
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: "UtensilsCrossed",
      title: "Pure Rajasthani Zayka",
      desc: "Delicious dinner featuring a combination of traditional Rajasthani cuisine (Dal Baati Churma) and regular dinner options.",
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
      desc: "International Petzl climbing gear, certified life vests, trained horse/camel handlers, and marshals on duty.",
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
      quote: "The best family weekend experience in Jaipur! The traditional Rajasthani welcome with starters set the perfect mood, our kids loved the camel ride, boating, and toy train, and the evening fire dance with authentic dinner buffet was extraordinary. 100% safe and family-friendly!",
      author: "Dr. Vikramaditya & Priya Sharma",
      designation: "Family of 4, Jaipur Resident",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    counters: [
      { value: "20+", label: "Fun Activities", icon: "Flame" },
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
      answer: "The ₹1999 pass is all-inclusive! It includes Free AC Pick Up (3:00 PM) & Drop (10:30 PM - 12:00 AM) across Jaipur, traditional welcome by Rajasthani girls with welcome drinks & starters, access to approximately 20 fun-filled activities (Horse Riding, Camel Riding, Bullock Cart Ride, Boating, Toy Train, Gun Shooting, Sumo Wrestling, Kids' Adventure Zone & ~12 more games), the evening Live Rajasthani Cultural Show & Fire Stunts (7:00 PM - 9:30 PM), and the delicious dinner buffet with authentic Rajasthani cuisine (9:30 PM - 10:30 PM). Note: ATV Ride, Zipline, and Paintball are not included in the package."
    },
    {
      question: "Are stags or solo male groups permitted?",
      answer: "No. Joy Safari is strictly an exclusive destination for Families and Couples. This policy ensures a dignified, secure, and comfortable atmosphere for women, children, and elders."
    },
    {
      question: "How does the Free Pick Up & Drop service work?",
      answer: "We operate scheduled luxury AC coaches from designated locations across Jaipur around 3:00 PM. Coaches return from the resort after dinner at 10:30 PM, dropping guests back at their respective locations between 10:30 PM and 12:00 AM. Prior booking reservation is required."
    },
    {
      question: "What is the complete tour itinerary and timings of Joy Safari?",
      answer: "The itinerary starts at 3:00 PM with AC Pickup. Arrival at resort is between 4:30 PM - 5:00 PM. At 5:00 PM, enjoy the Traditional Rajasthani Welcome with drinks & starters. From 5:30 PM - 7:00 PM is Adventure & Activities Time (20+ fun activities). 7:00 PM - 9:30 PM is Cultural Evening & Live Entertainment with Fire Show. 9:30 PM - 10:30 PM is Dinner Buffet. Departure & Drop-Off is from 10:30 PM - 12:00 AM."
    },
    {
      question: "Are ATV Ride, Zipline, and Paintball included in the ₹1999 package?",
      answer: "No. ATV Ride, Zipline, and Paintball are specialized adventure experiences that are not included in the ₹1999 package. They are available on-site as optional thrill add-ons."
    },
    {
      question: "What should we carry for our visit?",
      answer: "Please bring comfortable sports attire and athletic shoes for adventure obstacle courses and climbing. If you plan to use the swimming pool, appropriate swimwear is mandatory. Towels are available at the resort."
    },
    {
      question: "Can we stay overnight?",
      answer: "Yes! We offer luxury cottages facing our landscaped gardens (₹6999/- per night) and lake-view facing suites (₹7999/- per night), both of which include lavish morning breakfast, full safari pass access, and resort amenities."
    }
  ]
};
