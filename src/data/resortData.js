export const RESORT_DATA = {
  brand: {
    name: "Joy Safari",
    subName: "JAIPUR",
    tagline: "ADVENTURE RESORT",
    badgeTop: "VENTURE OF JOY, ADVENTURE & RESORT",
    headline: "Experience Jaipur Like Never Before",
    subHeadline: "Adventure | Culture | Entertainment | Luxury",
    badgeTopLeft: "1st Time in Jaipur",
    badgePolicy: "Only for Family & Couples",
    highlightChip: "Free Pick Up & Drop Facility Across Jaipur",
    phone: "8000928080",
    phoneDisplay: "+91 80009 28080",
    website: "www.joyadventureresort.com",
    address: "Jamwa Ramgarh Road, Near Nature Lake Valley, Jaipur, Rajasthan 302027",
    whatsappLink: "https://wa.me/918000928080?text=Hello%20Joy%20Safari%20Jaipur!%20I%20would%20like%20to%20inquire%20about%20booking%20Day%20Safari%20/%20Room%20Stay."
  },

  pricing: {
    daySafari: {
      price: 1999,
      gstNote: "+ GST",
      label: "PRICE ONLY ₹1999 + GST",
      title: "Royal Day Safari All-Inclusive Pass",
      target: "Family & Couples Entry",
      inclusions: [
        {
          id: "pickup",
          title: "Pick Up & Drop Facility",
          desc: "Dedicated hassle-free AC transport from key pickup spots across Jaipur."
        },
        {
          id: "dinner",
          title: "Gala Dinner Buffet",
          desc: "Unlimited grand royal buffet with authentic Rajasthani & multi-cuisine delicacies."
        },
        {
          id: "activities",
          title: "All 12 Activities Access",
          desc: "Unlimited access to all adventure, lake boating, zip line over water, and pool."
        },
        {
          id: "safety",
          title: "Family & Couples Safe",
          desc: "Exclusive restricted entry ensuring 100% dignified, secure family ambiance."
        }
      ]
    },
    rooms: [
      {
        id: "garden-facing",
        name: "Garden Facing Luxury Room",
        price: 6999,
        tag: "Nature Serenity",
        priceSuffix: "/- per night",
        badge: "Breakfast Included",
        view: "Lush Green Landscaped Gardens",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        description: "Elegant royal room surrounded by manicured lawns and floral gardens. Features a plush king bed, royal interiors, air conditioning, and complimentary lavish breakfast.",
        amenities: ["Complimentary Breakfast", "King Size Bed", "High Speed Wi-Fi", "Garden Balcony", "Air Conditioning", "Ensuite Marble Bath"]
      },
      {
        id: "lake-facing",
        name: "Lake View Facing Royal Room",
        price: 7999,
        tag: "Most Popular Choice",
        priceSuffix: "/- per night",
        badge: "Breakfast Included",
        view: "Panoramic Private Lake & Sunset View",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        description: "Our signature luxury suite overlooking the tranquil lake and illuminated resort fountains. Complete with a private sunset balcony and royal morning breakfast.",
        amenities: ["Complimentary Breakfast", "Private Lake Balcony", "Sunset View", "King Royal Bed", "Smart LED TV", "Luxury Bath Amenities"]
      }
    ]
  },

  // 12 Poster Activities with High-Quality Verified Photos
  activities: [
    {
      id: "live-show",
      num: "01",
      title: "Live Show Singing & Dancing",
      category: "Culture",
      posterLabel: "LIVE SHOW SINGING & DANCING",
      image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Soulful Rajasthani folk dance, Kalbelia performers, live vocalists, and dhol beats under festive lights.",
      fullDesc: "Immerse in the royal heritage of Rajasthan with authentic Kalbelia dancers, fire dance displays, traditional Ghoomar, soulful folk vocalists, and rhythmic live nagada performances that bring the night alive.",
      suitableFor: "All Families & Couples",
      duration: "1.5 Hours Evening Show",
      safety: "Open Air Amphitheater Seating"
    },
    {
      id: "gala-dinner",
      num: "02",
      title: "Gala Dinner Buffet",
      category: "Food",
      posterLabel: "GALA DINNER BUFFET",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
      shortDesc: "A grand culinary feast with authentic Dal Baati Churma, royal curries, live counters, and sweet desserts.",
      fullDesc: "Relish a lavish multi-course royal spread prepared by master Rajasthani maharaj chefs. Features authentic Ker Sangri, Gatta Curry, Dal Baati Churma, fresh tandoor breads, continental dishes, and decadent Indian mithais.",
      suitableFor: "Food Enthusiasts & Families",
      duration: "Open from 8:00 PM to 10:30 PM",
      safety: "Hygienic 5-Star Kitchen Standards"
    },
    {
      id: "adventure-activities",
      num: "03",
      title: "Adventure Activities",
      category: "Adventure",
      posterLabel: "ADVENTURE ACTIVITIES",
      image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Exciting rope courses, Burma bridges, commando nets, and high-adrenaline team adventure obstacles.",
      fullDesc: "Challenge your balance and fitness across multiple aerial rope crossings, suspension bridges, zip crossings, and obstacle networks designed for both adults and energetic youngsters.",
      suitableFor: "Age 8+",
      duration: "Unlimited Access",
      safety: "Double Carabiner Harnesses & Trained Marshals"
    },
    {
      id: "boating",
      num: "04",
      title: "Lake Boating",
      category: "Water",
      posterLabel: "BOATING",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Peaceful scenic boating in our private lake surrounded by hills and palace-style architecture.",
      fullDesc: "Glide along the serene waters in pedal boats and motorized pontoons. Perfect for romantic sunset moments for couples and scenic fun for families with children.",
      suitableFor: "All Age Groups",
      duration: "20-30 Mins Per Ride",
      safety: "Mandatory Life Jackets & Professional Lifeguards"
    },
    {
      id: "swimming-pool",
      num: "05",
      title: "Swimming Pool",
      category: "Water",
      posterLabel: "SWIMMING POOL",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Crystal-clear luxury pool with submerged loungers, palm trees, and a shallow kids splash section.",
      fullDesc: "Beat the day's heat in our pristine, temperature-managed resort swimming pool. Features a sunbathing deck, private changing cabanas, and poolside refreshments.",
      suitableFor: "Families & Couples",
      duration: "Open throughout day hours",
      safety: "Trained Lifeguards on Duty, 4.5ft Max Depth"
    },
    {
      id: "zip-line",
      num: "06",
      title: "Zip Line Over Water",
      category: "Adventure",
      posterLabel: "ZIP LINE OVER WATER",
      image: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Soar across the expansive lake on a high-speed steel zipline cable with panoramic hill vistas.",
      fullDesc: "Jaipur's premiere over-water zipline lets you zoom hundreds of meters above shimmering water ripples. Feel the wind rush past as you take in bird's-eye views of the entire resort.",
      suitableFor: "Age 10+ (Weight 35kg - 110kg)",
      duration: "High Thrill Ride",
      safety: "International Petzl Harness & Dual Pulley Systems"
    },
    {
      id: "commando-tyre",
      num: "07",
      title: "Commando Tyre Obstacle",
      category: "Adventure",
      posterLabel: "COMMANDO TYRE",
      image: "https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Military-inspired heavy tyre scramble walls, ground obstacle runs, and agility courses.",
      fullDesc: "Channel your inner warrior across our army-grade commando tyre course. Test endurance, coordination, and footwork on a series of suspended tyre ladders and ground zig-zags.",
      suitableFor: "Teens & Adults",
      duration: "Challenging Circuit",
      safety: "Soft Padded Landing Turf"
    },
    {
      id: "toy-train",
      num: "08",
      title: "Joy Safari Toy Train",
      category: "Fun",
      posterLabel: "TOY TRAIN",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Whimsical colorful locomotive carrying families around scenic resort gardens and lake banks.",
      fullDesc: "Hop aboard the Joy Express! A delightful train journey through winding tracks, passing flower tunnels, deer park replicas, and lakeside viewpoints. Loved by kids and grandparents alike.",
      suitableFor: "Kids, Families & Elders",
      duration: "15 Mins Round Tour",
      safety: "Low Speed Safe Rail System"
    },
    {
      id: "horse-riding",
      num: "09",
      title: "Royal Horse Riding",
      category: "Fun",
      posterLabel: "HORSE RIDING",
      image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Experience the royal gait on majestic Marwari and Kathiawari horses guided by expert handlers.",
      fullDesc: "Ride like Rajasthan's royalty on our well-groomed, gentle horses. Includes basic riding guidance and picture-perfect photo moments in traditional royal backdrops.",
      suitableFor: "All Guests",
      duration: "Guided Riding Circuit",
      safety: "Trained Handlers with Helmets Provided"
    },
    {
      id: "bungee-jumping",
      num: "10",
      title: "Bungee Jumping",
      category: "Adventure",
      posterLabel: "BUNGEE JUMPING",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      shortDesc: "The pinnacle of adrenaline! High-tower bungee bounce with state-of-the-art elastic cords.",
      fullDesc: "Defy gravity with a heart-pounding leap from our engineered bungee launch deck. Supervised by certified jumpmasters with 100% triple-redundant safety protocols.",
      suitableFor: "Adventure Seekers (Age 14+)",
      duration: "Unforgettable Rush",
      safety: "Imported Bungee Cords & Certified Jump Team"
    },
    {
      id: "gun-shooting",
      num: "11",
      title: "Target Gun Shooting",
      category: "Fun",
      posterLabel: "GUN SHOOTING",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=800&q=80",
      shortDesc: "Precision air rifle target shooting range with computerized bulls-eye scoring targets.",
      fullDesc: "Test your aim and steady hands at our safe shooting range. Learn stance, sight alignment, and trigger control from experienced shooting range officers.",
      suitableFor: "Age 10+",
      duration: "10-15 Shots Target Round",
      safety: "Enclosed Range & Eye Protection"
    },
    {
      id: "mounting-wall",
      num: "12",
      title: "Mounting (Rock Climbing) Wall",
      category: "Adventure",
      posterLabel: "MOUNTING WALL",
      image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=800&q=80",
      shortDesc: "35-foot artificial rock climbing wall with multiple difficulty routes and auto-belay ropes.",
      fullDesc: "Reach the top and ring the summit bell! Our textured rock climbing monolith features easy handholds for novices alongside angled overhangs for climbing enthusiasts.",
      suitableFor: "All Fitness Levels (Age 7+)",
      duration: "Timed Climbs",
      safety: "Auto-Belay Safety Harness & Thick Crash Pads"
    }
  ],

  // Suggested Day Safari Itinerary
  itinerary: [
    {
      time: "03:00 PM",
      title: "Pickup from Designated Location",
      desc: "Pickup from designated location across Jaipur in comfortable AC tourist coaches."
    },
    {
      time: "04:30 PM - 05:00 PM",
      title: "Arrival at the Resort",
      desc: "Reach the resort and get ready for the grand royal welcome experience."
    },
    {
      time: "05:00 PM",
      title: "Traditional Rajasthani Welcome",
      desc: "Experience a warm and grand welcome in authentic Rajasthani style, featuring traditional Rajasthani girls, cultural hospitality, welcome drinks, and starters."
    },
    {
      time: "05:30 PM",
      title: "Adventure & Activities Time",
      desc: "Enjoy approximately 20 fun-filled activities (Horse Riding, Camel Riding, Bullock Cart Ride, Boating, Gun Shooting, Toy Train Ride, Kids' Adventure Activities, Sumo Wrestling, and ~12 more games). Note: ATV Ride, Zipline, and Paintball are not included in the package."
    },
    {
      time: "07:00 PM - 09:30 PM",
      title: "Cultural Evening & Live Entertainment",
      desc: "Enjoy an entertaining evening featuring traditional Rajasthani cultural performances, live music and dance, and an exciting fire show."
    },
    {
      time: "09:30 PM - 10:30 PM",
      title: "Dinner",
      desc: "Enjoy a delicious dinner featuring a combination of traditional Rajasthani cuisine and regular dinner options."
    },
    {
      time: "10:30 PM - 12:00 AM",
      title: "Departure & Drop-Off",
      desc: "Departure from the resort and drop-off at your respective locations, concluding the Joy Safari experience."
    }
  ],

  whyChooseUs: [
    {
      title: "Only Family & Couples",
      desc: "Zero rowdy crowds. Strict screening ensures a respectful, dignified, and safe haven for your family."
    },
    {
      title: "Free Pick Up & Drop",
      desc: "No driving fatigue or cab surge prices. Enjoy comfortable shared pickup & drop from designated Jaipur points."
    },
    {
      title: "1st Time in Jaipur Concept",
      desc: "A unique fusion of high-octane adventure park, serene water lake, and opulent Rajasthani heritage resort."
    },
    {
      title: "Royal Gala Dinner Feast",
      desc: "Unlimited gourmet food crafted by royal recipe keepers — savor authentic taste and hygienic freshness."
    },
    {
      title: "20+ All-Inclusive Activities",
      desc: "No hidden charges per game. One pass unlocks horse & camel rides, boating, toy train, sumo, pool, climbing, and all shows. (ATV, Zipline, Paintball separate)."
    },
    {
      title: "Luxury Room Stay Options",
      desc: "Extend your celebration overnight in our lake-view or garden-view rooms with morning buffet breakfast."
    }
  ],

  pickupLocations: [
    "Sindhi Camp Central Bus Station",
    "Mansarovar Metro Station",
    "Raja Park / Jawahar Nagar Circle",
    "Vaishali Nagar (National Handloom)",
    "Ajmer Road (Purani Chungi)",
    "Durgapura Flyover / Tonk Road"
  ],

  faqs: [
    {
      q: "What is included in the ₹1999 + GST Day Safari pass?",
      a: "The ₹1999 pass is an all-inclusive ticket that covers: pickup (3:00 PM) & drop (10:30 PM - 12:00 AM) from Jaipur, traditional welcome with drinks & starters, access to ~20 fun activities (horse riding, camel riding, bullock cart, boating, toy train, sumo wrestling, pool, etc.), the evening Live Rajasthani Cultural Show with Fire Stunts (7:00 PM - 9:30 PM), and the royal dinner buffet (9:30 PM - 10:30 PM). Note: ATV Ride, Zipline, and Paintball are not included in the package."
    },
    {
      q: "Is stag entry (only boys group) allowed?",
      a: "No. Joy Safari Jaipur strictly reserves entry exclusively for families, couples, and accompanied children to maintain a safe, tranquil, and dignified atmosphere."
    },
    {
      q: "Do we need prior booking for pick up and drop?",
      a: "Yes, prior booking (at least 24 hours in advance) is recommended so we can allocate seats in our luxury AC shuttles and reserve your gala dinner table."
    },
    {
      q: "What are the timings for the Day Safari?",
      a: "The tour starts at 3:00 PM with pickup and concludes with drop-off by 12:00 AM midnight. Resort activities and welcome start from 5:00 PM until 10:30 PM."
    },
    {
      q: "Are the room stays inclusive of the Day Safari package?",
      a: "Yes, guests booking overnight rooms (Garden Facing at ₹6999 or Lake View Facing at ₹7999) enjoy resort stay, lavish morning breakfast, and full access to resort amenities."
    }
  ],

  testimonials: [
    {
      name: "Dr. Rajesh & Sunita Sharma",
      location: "Vaishali Nagar, Jaipur",
      text: "The best family weekend we have had in Jaipur! The zip line over the water was breathtaking, and the kids couldn't get enough of the toy train. The gala dinner dal baati was pure royal perfection.",
      rating: 5
    },
    {
      name: "Aniket & Pooja Verma",
      location: "Mansarovar, Jaipur",
      text: "Being only for couples and families makes a world of difference. It felt so secure, luxurious, and romantic. The live folk dance show under fairy lights next to the lake was truly unforgettable.",
      rating: 5
    },
    {
      name: "Col. Mahendra Singh Rathore",
      location: "C-Scheme, Jaipur",
      text: "Remarkable hospitality and first-class safety standards. Free pickup from the city made it totally stress-free. Highly recommend the Lake View room stay for anniversary celebrations!",
      rating: 5
    }
  ]
};
