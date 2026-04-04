const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const districtCatalog = [
  { name: 'Ariyalur', heroQuery: 'temple architecture', foods: ['Ariyalur Kari Dosai', 'Kezhvaragu Koozh', 'Sevai with Coconut'] },
  { name: 'Chengalpattu', heroQuery: 'lakes and heritage', foods: ['Kalpakkam Fish Fry', 'Poonamallee Parotta', 'Elaneer Payasam'] },
  { name: 'Chennai', heroQuery: 'marina beach city', foods: ['Sundal', 'Kothu Parotta', 'Filter Coffee'] },
  { name: 'Coimbatore', heroQuery: 'western ghats city', foods: ['Arisi Paruppu Sadam', 'Kari Kuzhi Paniyaram', 'Kambu Koozh'] },
  { name: 'Cuddalore', heroQuery: 'coastal temple town', foods: ['Nethili Fry', 'Cuddalore Kuzhambu', 'Palm Jaggery Halwa'] },
  { name: 'Dharmapuri', heroQuery: 'hogenakkal falls', foods: ['Ragi Kali', 'Aatu Kari Sukka', 'Mango Pachadi'] },
  { name: 'Dindigul', heroQuery: 'fort hill city', foods: ['Dindigul Thalappakatti Biryani', 'Mutton Chops', 'Parotta Salna'] },
  { name: 'Erode', heroQuery: 'textile market and river', foods: ['Kongunadu Chicken', 'Thengai Paal Paniyaram', 'Manjal Milk'] },
  { name: 'Kallakurichi', heroQuery: 'kalvarayan hills', foods: ['Millet Upma', 'Country Chicken Curry', 'Groundnut Chikki'] },
  { name: 'Kancheepuram', heroQuery: 'ancient temples', foods: ['Kancheepuram Idli', 'Puliyodarai', 'Sakkarai Pongal'] },
  { name: 'Karur', heroQuery: 'amaravathi river', foods: ['Karur Kola Urundai', 'Milagu Rasam', 'Banana Flower Vadai'] },
  { name: 'Krishnagiri', heroQuery: 'mango orchards', foods: ['Mango Biryani', 'Ragi Dosa', 'Arachuvitta Sambar'] },
  { name: 'Madurai', heroQuery: 'meenakshi temple', foods: ['Jigarthanda', 'Kari Dosa', 'Malli Poo Idli'] },
  { name: 'Mayiladuthurai', heroQuery: 'cauvery delta temples', foods: ['Mayavaram Filter Coffee', 'Kadappa Curry', 'Thavala Vadai'] },
  { name: 'Nagapattinam', heroQuery: 'seashore pilgrimage', foods: ['Nandu Masala', 'Prawn Thokku', 'Nei Appam'] },
  { name: 'Namakkal', heroQuery: 'hill fort', foods: ['Egg Kalakki', 'Namakkal Chicken Roast', 'Thinai Pongal'] },
  { name: 'Nilgiris', heroQuery: 'ooty mountains', foods: ['Ooty Varkey', 'Homemade Chocolate', 'Nilgiri Tea'] },
  { name: 'Perambalur', heroQuery: 'rural heritage', foods: ['Kambu Adai', 'Karuveppilai Sadam', 'Seeraga Samba Pongal'] },
  { name: 'Pudukkottai', heroQuery: 'palaces and caves', foods: ['Pudukkottai Mutton Fry', 'Curry Leaf Prawn', 'Ellu Urundai'] },
  { name: 'Ramanathapuram', heroQuery: 'rameswaram coast', foods: ['Kola Meen Fry', 'Crab Masala', 'Panagam'] },
  { name: 'Ranipet', heroQuery: 'arcot heritage', foods: ['Arcot Makkan Peda', 'Mutton Biryani', 'Nannari Sherbet'] },
  { name: 'Salem', heroQuery: 'yercaud hills', foods: ['Salem Thattu Vadai Set', 'Mango Pachadi', 'Pepper Chicken'] },
  { name: 'Sivaganga', heroQuery: 'chettinad mansions', foods: ['Chettinad Chicken', 'Kavuni Arisi', 'Vazhaipoo Vadai'] },
  { name: 'Tenkasi', heroQuery: 'courtallam falls', foods: ['Kutralam Parotta', 'Kambu Koozh', 'Puli Sevai'] },
  { name: 'Thanjavur', heroQuery: 'brihadeeswara temple', foods: ['Thanjavur Thali', 'Ashoka Halwa', 'Degree Coffee'] },
  { name: 'Theni', heroQuery: 'valley and hills', foods: ['Cumbum Grapes Juice', 'Paniyaram', 'Mutton Sukka'] },
  { name: 'Thoothukudi', heroQuery: 'port city coast', foods: ['Macaroon', 'Karuvadu Kulambu', 'Parotta with Salna'] },
  { name: 'Tiruchirappalli', heroQuery: 'rockfort and cauvery', foods: ['Manapparai Murukku', 'Puliyodarai', 'Rose Milk'] },
  { name: 'Tirunelveli', heroQuery: 'nellaiappar temple', foods: ['Iruttu Kadai Halwa', 'Sodhi Kuzhambu', 'Parotta'] },
  { name: 'Tirupathur', heroQuery: 'javadi hills', foods: ['Ragi Mudde', 'Country Chicken Pepper Fry', 'Karupatti Coffee'] },
  { name: 'Tiruppur', heroQuery: 'noyyal river city', foods: ['Kongu Mutton Chukka', 'Kambu Kali', 'Paal Kozhukattai'] },
  { name: 'Tiruvallur', heroQuery: 'lakes and temples', foods: ['Poondu Kuzhambu', 'Thengai Sadam', 'Sambar Vadai'] },
  { name: 'Tiruvannamalai', heroQuery: 'arunachala hills', foods: ['Temple Prasadam Pongal', 'Rava Kesari', 'Filter Coffee'] },
  { name: 'Tiruvarur', heroQuery: 'music and temples', foods: ['Kumbakonam Degree Coffee', 'Kadalai Urundai', 'Vazhaipoo Kootu'] },
  { name: 'Vellore', heroQuery: 'fort and medical city', foods: ['Vellore Biryani', 'Mutton Paya', 'Arcot Sweet'] },
  { name: 'Viluppuram', heroQuery: 'gingee fort', foods: ['Thinai Upma', 'Muttai Kalaki', 'Kadalai Mittai'] },
  { name: 'Virudhunagar', heroQuery: 'sivakasi heritage', foods: ['Paruthi Paal', 'Kari Dosai', 'Kara Sev'] },
  { name: 'Kanyakumari', heroQuery: 'sunrise beach', foods: ['Fish Molee', 'Appam Stew', 'Nungu Sarbath'] }
]

const seedPlacesByDistrict = {
  Ariyalur: ['Gangaikonda Cholapuram', 'Karaivetti Bird Sanctuary', 'Melapalur'],
  Chengalpattu: ['Mahabalipuram', 'Vedanthangal Bird Sanctuary', 'Muttukadu', 'DakshinaChitra'],
  Chennai: ['Marina Beach', 'Kapaleeshwarar Temple', 'Government Museum Egmore', 'Besant Nagar Beach', 'Fort St. George', 'Santhome Church'],
  Coimbatore: ['Adiyogi Shiva Statue', 'Marudhamalai Temple', 'VOC Park', 'Perur Pateeswarar Temple', 'Kovai Kutralam'],
  Cuddalore: ['Pichavaram Bird Sanctuary', 'Nataraja Temple Chidambaram', 'Silver Beach'],
  Dharmapuri: ['Hogenakkal Falls', 'Theerthamalai Temple', 'Adhiyamankottai'],
  Dindigul: ['Dindigul Fort', 'Sirumalai Hills', 'Abirami Amman Temple', 'Kodaikanal Lake', 'Coaker\'s Walk'],
  Erode: ['Bhavanisagar Dam', 'Kodiveri Dam', 'Chennimalai Dam'],
  Kallakurichi: ['Kalvarayan Hills', 'Megam Falls', 'Periyar Falls'],
  Kancheepuram: ['Kailasanathar Temple', 'Ekambareswarar Temple', 'Varadharaja Perumal Temple'],
  Karur: ['Pasupatheeswarar Temple', 'Mayanur Dam', 'Ponnaniar Dam'],
  Krishnagiri: ['Krishnagiri Dam', 'KRP Dam Park', 'Rayakottai'],
  Madurai: ['Meenakshi Amman Temple', 'Thirumalai Nayakkar Mahal', 'Alagar Kovil', 'Vandiyur Mariamman Teppakulam', 'Gandhi Memorial Museum'],
  Mayiladuthurai: ['Poompuhar Mangrove Forest', 'Mayuranathaswami Temple', 'Thirukadaiyur'],
  Nagapattinam: ['Velankanni Church', 'Nagore Dargah', 'Kodiakkarai Beach'],
  Namakkal: ['Namakkal Anjaneyar Temple', 'Kolli Hills', 'Agaya Gangai Waterfalls'],
  Nilgiris: ['Ooty Lake', 'Doddabetta Peak', 'Botanical Garden Ooty', 'Coonoor Tea Estate', 'Pykara Lake'],
  Perambalur: ['Ranjankudi Fort', 'Siruvachur Fort', 'Chettikulam'],
  Pudukkottai: ['Sittanavasal Cave', 'Thirumayam', 'Brahadambal Temple'],
  Ramanathapuram: ['Pamban Bridge View', 'Dhanushkodi Beach', 'Ramanathaswamy Temple', 'Kurusadai Island'],
  Ranipet: ['Arcot Fort', 'BHEL Ranipet', 'Kaigal'],
  Salem: ['Yercaud', 'Mettur Dam', 'Kurumbapatti Zoological Park'],
  Sivaganga: ['Karaikudi', 'Kanadukathan', 'Pillayarpatti'],
  Tenkasi: ['Courtallam Waterfalls', 'Tenkasi Kasi Viswanathar Temple', 'Shenbaga Devi Amman Temple'],
  Thanjavur: ['Brihadeeswara Temple', 'Thanjavur Palace', 'Saraswathi Mahal Library', 'Sivaganga Park'],
  Theni: ['Suruli Falls', 'Megamalai', 'Vaigai Dam'],
  Thoothukudi: ['Manapad', 'Kalakkad Mundanthurai Tiger Reserve', 'Our Lady of Snows Basilica'],
  Tiruchirappalli: ['Rockfort Temple', 'Srirangam Temple', 'Kallanai Dam', 'Mukkombu Park', 'Jambukeswarar Temple'],
  Tirunelveli: ['Nellaiappar Temple', 'Papanasam Falls', 'Manimuthar Dam', 'Agasthiyar Falls'],
  Tirupathur: ['Yelagiri', 'Jalagamparai Waterfalls', 'Vainu Bappu Observatory'],
  Tiruppur: ['Thirumuruganpoondi', 'Indira Gandhi Wildlife Sanctuary', 'Amaravathi Dam'],
  Tiruvallur: ['Pulicat Lake', 'Tiruttani', 'Bhavani Amman Temple'],
  Tiruvannamalai: ['Annamalaiyar Temple', 'Gingee Fort', 'Sathanur Dam'],
  Tiruvarur: ['Thyagaraja Temple', 'Muthupet Mangrove Forest', 'Koothanur'],
  Vellore: ['Vellore Fort', 'Golden Temple Sripuram', 'Amirthi Zoological Park'],
  Viluppuram: ['Auroville', 'Gingee', 'Melmalayanur'],
  Virudhunagar: ['Srivilliputhur', 'Ayyanar Falls', 'Andal Temple'],
  Kanyakumari: ['Vivekananda Rock Memorial', 'Thiruvalluvar Statue', 'Kanyakumari Beach', 'Sunset View Point', 'Padmanabhapuram Palace']
}

const realImagePool = [
  'https://images.unsplash.com/photo-1582510003544-4d00b7f74220',
  'https://images.unsplash.com/photo-1662644841888-5b670d7dd3bf',
  'https://images.unsplash.com/photo-1662555755452-1f9644f9e0e2',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
  'https://images.unsplash.com/photo-1510798831971-661eb04b3739',
  'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369',
  'https://images.unsplash.com/photo-1629294892587-d303ac31f07b',
  'https://images.unsplash.com/photo-1630913661985-432f56d7dede',
  'https://images.unsplash.com/photo-1606291229990-be6e7b276cb8',
  'https://images.unsplash.com/photo-1621961458348-f013d219b50c',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
  'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f',
  'https://images.unsplash.com/photo-1455218873509-8097305ee378',
  'https://images.unsplash.com/photo-1528127269322-539801943592',
  'https://images.unsplash.com/photo-1493244040629-496f6d136cc3',
  'https://images.unsplash.com/photo-1521292270410-a8c4d716d518',
  'https://images.unsplash.com/photo-1519985176271-adb1088fa94c'
]

const getPlaceImage = (query, seed) => {
  const base = realImagePool[Math.abs(seed) % realImagePool.length]
  return `${base}?auto=format&fit=crop&w=1200&q=80`
}

const attractionTemplates = [
  {
    label: 'Heritage Temple Circuit',
    query: 'temple gopuram',
    description:
      'is a heritage temple circuit known for intricate architecture, colorful carvings, and strong local traditions.',
    foodTypes: ['Temple Prasadam', 'Vegetarian Tiffin', 'Traditional Sweet']
  },
  {
    label: 'Lakeside Walk',
    query: 'lake walkway',
    description:
      'offers a calm lakeside route with breezy viewpoints, boating pockets, and evening street food stretches.',
    foodTypes: ['Street Snack', 'Fresh Juice', 'Light Meal']
  },
  {
    label: 'Hill View Point',
    query: 'hill viewpoint',
    description:
      'features rolling hill views, cool weather, and sunrise photography spots popular with weekend travelers.',
    foodTypes: ['Hot Beverage', 'Hill Snack', 'Quick Bite']
  },
  {
    label: 'Fort and Museum Trail',
    query: 'fort museum',
    description:
      'blends fort remains, museum exhibits, and guided narratives about the district history and trade routes.',
    foodTypes: ['Regional Meal', 'Beverage', 'Evening Snack']
  },
  {
    label: 'Waterfall Escape',
    query: 'waterfall forest',
    description:
      'is a refreshing waterfall zone with seasonal flow, greenery, and nearby village food stalls.',
    foodTypes: ['Travel Snack', 'Local Lunch', 'Herbal Drink']
  },
  {
    label: 'Beachfront Stretch',
    query: 'beach coast',
    description:
      'is a coastal stretch with sunrise views, fishing harbor vibes, and lively seafood counters.',
    foodTypes: ['Seafood Special', 'Coastal Snack', 'Tender Coconut']
  },
  {
    label: 'Market Street',
    query: 'local market',
    description:
      'is a buzzing market street where handloom, crafts, and regional flavors come alive through the day.',
    foodTypes: ['Street Dinner', 'Sweet Shop', 'Tea Stall']
  },
  {
    label: 'Eco Park',
    query: 'eco park nature',
    description:
      'is an eco-park area with family-friendly paths, gardens, and low-intensity activity zones.',
    foodTypes: ['Family Combo', 'Healthy Bowl', 'Fruit Drink']
  }
]

const authenticFoodDatabase = {
  Chennai: {
    famousLocal: [
      { name: 'Ghee Podi Idli', price: 90, hotel: 'Murugan Idli Shop', type: 'Specialty' },
      { name: 'Sambar Vada', price: 65, hotel: 'Ratna Cafe', type: 'Specialty' }
    ],
    starters: [{ name: 'Chicken 65', price: 160, hotel: 'Buhari Hotel' }, { name: 'Mutton Chukka', price: 210, hotel: 'Anjappar' }],
    mainCourse: [{ name: 'South Indian Meals', price: 150, hotel: 'Saravana Bhavan' }, { name: 'Fish Curry', price: 180, hotel: 'Nair Mess' }],
    snacks: [{ name: 'Filter Coffee', price: 30, hotel: 'Sangeetha' }, { name: 'Bajji', price: 20, hotel: 'Marina Beach Stalls' }],
    desserts: [{ name: 'Mysore Pak', price: 80, hotel: 'Sri Krishna Sweets' }, { name: 'Rose Milk', price: 50, hotel: 'Kalathi Rose Milk' }]
  },
  Madurai: {
    famousLocal: [
      { name: 'Jigarthanda', price: 70, hotel: 'Famous Jigarthanda Shop', type: 'Specialty' },
      { name: 'Kari Dosa', price: 180, hotel: 'Amma Mess', type: 'Specialty' },
      { name: 'Parotta Salna', price: 60, hotel: 'Bun Parotta Shop', type: 'Specialty' }
    ],
    starters: [{ name: 'Kola Urundai', price: 140, hotel: 'Chandran Mess' }, { name: 'Nethili Fry', price: 120, hotel: 'Kumar Mess' }],
    mainCourse: [{ name: 'Mutton Biryani', price: 220, hotel: 'Muniyandi Vilas' }, { name: 'Veg Meals', price: 100, hotel: 'Sree Sabarees' }],
    snacks: [{ name: 'Paruthi Paal', price: 30, hotel: 'Local Carts' }, { name: 'Malli Poo Idli', price: 40, hotel: 'Murugan Idli Shop' }],
    desserts: [{ name: 'Halwa', price: 50, hotel: 'Prema Vilas' }, { name: 'Kadalai Mittai', price: 20, hotel: 'Local Shops' }]
  },
  Coimbatore: {
    famousLocal: [
      { name: 'Sambar & Ghee Roast', price: 110, hotel: 'Sree Annapoorna', type: 'Specialty' },
      { name: 'Kongunadu Chicken', price: 190, hotel: 'Junior Kuppanna', type: 'Specialty' }
    ],
    starters: [{ name: 'Pallipalayam Chicken', price: 170, hotel: 'Hari Bhavanam' }, { name: 'Mushroom Pepper Fry', price: 130, hotel: 'Anandhas' }],
    mainCourse: [{ name: 'Seeraga Samba Biryani', price: 240, hotel: 'Venu Biryani' }, { name: 'Arisi Paruppu Sadam', price: 80, hotel: 'Gowri Krishna' }],
    snacks: [{ name: 'Kaalan Masala', price: 40, hotel: 'Kovai Kaalan Kadai' }, { name: 'Filter Coffee', price: 35, hotel: 'Annapoorna' }],
    desserts: [{ name: 'Elaneer Payasam', price: 90, hotel: 'RHR Hotels' }]
  },
  Dindigul: {
    famousLocal: [{ name: 'Thalappakatti Biryani', price: 280, hotel: 'Venu Biryani / Thalappakatti', type: 'Specialty' }],
    starters: [{ name: 'Mutton Chops', price: 210, hotel: 'Ponram Biryani' }, { name: 'Brain Fry', price: 180, hotel: 'Venu Biryani' }],
    mainCourse: [{ name: 'Mutton Biryani', price: 260, hotel: 'Venu Biryani' }, { name: 'Parotta', price: 40, hotel: 'Local Stalls' }],
    snacks: [{ name: 'Tea & Vada', price: 20, hotel: 'Highway Motels' }],
    desserts: [{ name: 'Jigarthanda', price: 60, hotel: 'Madurai Outlets' }]
  },
  Tirunelveli: {
    famousLocal: [{ name: 'Wheat Halwa', price: 120, hotel: 'Iruttu Kadai Halwa', type: 'Specialty' }, { name: 'Sodhi', price: 80, hotel: 'Hotel Aryaas', type: 'Specialty' }],
    starters: [{ name: 'Kozhi Roast', price: 160, hotel: 'Bheemaas' }],
    mainCourse: [{ name: 'Parotta with Salna', price: 50, hotel: 'Border Rahmath Kadai' }],
    snacks: [{ name: 'Nungu Sarbath', price: 40, hotel: 'Street Vendors' }],
    desserts: [{ name: 'Iruttu Kadai Halwa', price: 120, hotel: 'Iruttu Kadai' }, { name: 'Muscoth Halwa', price: 140, hotel: 'Muthu Halwa' }]
  },
  Thanjavur: {
    famousLocal: [{ name: 'Ashoka Halwa', price: 80, hotel: 'Bombay Sweets', type: 'Specialty' }, { name: 'Thanjavur Thali', price: 180, hotel: 'Hotel Gnanam', type: 'Specialty' }],
    starters: [{ name: 'Chettinad Chicken', price: 150, hotel: 'Anjappar' }],
    mainCourse: [{ name: 'Vegetarian Meals', price: 120, hotel: 'Sribhavan' }],
    snacks: [{ name: 'Degree Coffee', price: 30, hotel: 'Kumbakonam Filter Coffee' }],
    desserts: [{ name: 'Ashoka Halwa', price: 80, hotel: 'Bombay Sweets' }]
  }
}

const placeSpecificFood = {
  'Suruli Falls': {
    famousLocal: [
      { name: 'Suruli Malai Honey & Thinai Paniyaram', price: 60, hotel: 'Local Tribal Stalls', type: 'Specialty' },
      { name: 'Kambu Koozh', price: 40, hotel: 'Suruli Mess', type: 'Specialty' }
    ],
    starters: [{ name: 'Nattu Kozhi Chukka', price: 160, hotel: 'Cumbum Highway Hotel' }],
    mainCourse: [{ name: 'Rice with Karuvadu Kulambu', price: 120, hotel: 'Suruli Mess' }],
    snacks: [{ name: 'Forest Grape Juice', price: 40, hotel: 'Farm Fresh Juice Stall' }],
    desserts: [{ name: 'Kambu Laddu', price: 30, hotel: 'Local Sweets' }]
  },
  'Megamalai': {
    famousLocal: [
      { name: 'Cardamom Tea & Varkey', price: 50, hotel: 'Hilltop Tea Stall', type: 'Specialty' }
    ],
    starters: [{ name: 'Pepper Mushroom Fry', price: 120, hotel: 'Megamalai Resort Kitchen' }],
    mainCourse: [{ name: 'Jeera Rice & Dal Tadka', price: 140, hotel: 'Highland Restaurant' }],
    snacks: [{ name: 'Spicy Milagai Bajji', price: 30, hotel: 'Viewpoint Snacks' }],
    desserts: [{ name: 'Hot Gulab Jamun', price: 40, hotel: 'Local Bakery' }]
  },
  'Vaigai Dam': {
    famousLocal: [
      { name: 'Vaigai Meen Varuval (Fish Fry)', price: 150, hotel: 'Dam View Fish Stalls', type: 'Specialty' },
      { name: 'Ayira Meen Kulambu', price: 200, hotel: 'Madurai Mess (Nearby)', type: 'Specialty' }
    ],
    starters: [{ name: 'Nethili Fry', price: 120, hotel: 'Riverbank Food Stall' }],
    mainCourse: [{ name: 'Parotta & Salna', price: 70, hotel: 'Local Dam Mess' }],
    snacks: [{ name: 'Pori Urundai', price: 20, hotel: 'Park Canteen' }],
    desserts: [{ name: 'Jigarthanda', price: 60, hotel: 'Madurai Famous Cool Drinks' }]
  },
  'Marina Beach': {
    famousLocal: [
      { name: 'Thenga Manga Pattani Sundal', price: 20, hotel: 'Beach Vendors', type: 'Specialty' },
      { name: 'Milagai Bajji', price: 30, hotel: 'Marina Food Stalls', type: 'Specialty' }
    ],
    starters: [{ name: 'Fried Nethili Meen', price: 100, hotel: 'Seafood Kiosks' }],
    mainCourse: [{ name: 'Kothu Parotta', price: 90, hotel: 'Buhari Hotel (Nearby)' }],
    snacks: [{ name: 'Sweet Corn on the Cob', price: 40, hotel: 'Beach Stalls' }],
    desserts: [{ name: 'Rose Milk', price: 35, hotel: 'Kalathi Rose Milk' }]
  },
  'Meenakshi Amman Temple': {
    famousLocal: [
      { name: 'Idli & Variety Chutneys', price: 60, hotel: 'Murugan Idli Shop', type: 'Specialty' },
      { name: 'Paruthi Paal', price: 30, hotel: 'Street Vendors near Temple', type: 'Specialty' }
    ],
    starters: [{ name: 'Mutton Chukka', price: 180, hotel: 'Amma Mess' }],
    mainCourse: [{ name: 'Kari Dosa', price: 150, hotel: 'Konar Mess' }],
    snacks: [{ name: 'Kalkandu Vadai', price: 15, hotel: 'Original Nagapattinam Sweets' }],
    desserts: [{ name: 'Famous Jigarthanda', price: 70, hotel: 'Famous Jigarthanda Shop' }]
  },
  'Kodaikanal Lake': {
    famousLocal: [
      { name: 'Homemade Chocolates', price: 150, hotel: 'Cloud Street / Local Shops', type: 'Specialty' },
      { name: 'Tibetan Momos', price: 90, hotel: 'Tibetan Brothers', type: 'Specialty' }
    ],
    starters: [{ name: 'Cheese Omelette', price: 70, hotel: 'Astoria Veg' }],
    mainCourse: [{ name: 'Wood-fired Pizza', price: 250, hotel: 'Cloud Street' }],
    snacks: [{ name: 'Roasted Corn', price: 30, hotel: 'Lake Road Walkway' }],
    desserts: [{ name: 'Plum Cake', price: 60, hotel: 'Pastry Corner' }]
  },
  'Ooty Lake': {
    famousLocal: [
      { name: 'Ooty Varkey & Nilgiri Tea', price: 40, hotel: 'Local Bakeries', type: 'Specialty' },
      { name: 'Ooty Chocolates', price: 100, hotel: 'Kingstar Confectionery', type: 'Specialty' }
    ],
    starters: [{ name: 'Nilgiri Mushroom Pepper Fry', price: 130, hotel: 'Shinkows' }],
    mainCourse: [{ name: 'Chicken Chettinad Bowl', price: 180, hotel: 'Hyderabadi Biryani House' }],
    snacks: [{ name: 'Hot Onion Pakoda', price: 40, hotel: 'Lake View Stall' }],
    desserts: [{ name: 'Fresh Strawberry Cream', price: 90, hotel: 'Moddy\'s Chocolates' }]
  },
  'Bhavanisagar Dam': {
    famousLocal: [
      { name: 'Dam Fresh Meen Varuval', price: 120, hotel: 'Dam Catch Stalls', type: 'Specialty' }
    ],
    starters: [{ name: 'Chicken 65', price: 100, hotel: 'Local Highway Mess' }],
    mainCourse: [{ name: 'Fish Curry with Rice', price: 140, hotel: 'Bhavani River View Hotel' }],
    snacks: [{ name: 'Tapioca Chips', price: 30, hotel: 'Dam Park Stalls' }],
    desserts: [{ name: 'Coconut Payasam', price: 40, hotel: 'Bhavani Sweets' }]
  },
  'Hogenakkal Falls': {
    famousLocal: [
      { name: 'Fresh Catch Fish Fry', price: 150, hotel: 'Riverbank Fishermen Stalls', type: 'Specialty' }
    ],
    starters: [{ name: 'Spicy Fish Paniyaram', price: 100, hotel: 'Local Cook Shops' }],
    mainCourse: [{ name: 'Ragi Mudde with Fish Curry', price: 160, hotel: 'Cauvery River Restaurant' }],
    snacks: [{ name: 'Cut Fruits & Chaat', price: 40, hotel: 'Waterfall Path Stalls' }],
    desserts: [{ name: 'Palkova', price: 50, hotel: 'Dharmapuri Sweets' }]
  },
  'Pichavaram Bird Sanctuary': {
    famousLocal: [
      { name: 'Mangrove Crab Curry', price: 220, hotel: 'Chidambaram Seafood Mess', type: 'Specialty' }
    ],
    starters: [{ name: 'Kaanankeluthi Fish Fry', price: 140, hotel: 'Estuary Food Stall' }],
    mainCourse: [{ name: 'Seafood Meals', price: 180, hotel: 'Tourism Canteen' }],
    snacks: [{ name: 'Roasted Peanuts', price: 20, hotel: 'Boating Point' }],
    desserts: [{ name: 'Elaneer (Tender Coconut) Payasam', price: 60, hotel: 'Local Canteen' }]
  },
  'Courtallam Waterfalls': {
    famousLocal: [
      { name: 'Border Parotta', price: 15, hotel: 'Rahmath Border Parotta Shop', type: 'Specialty' },
      { name: 'Nattu Kozhi Salna', price: 140, hotel: 'Rahmath Border Parotta Shop', type: 'Specialty' }
    ],
    starters: [{ name: 'Quail (Kaadai) Fry', price: 110, hotel: 'Tenkasi Highway Mess' }],
    mainCourse: [{ name: 'Mutton Chukka Parotta', price: 160, hotel: 'Border Shop' }],
    snacks: [{ name: 'Nungu (Ice Apple)', price: 40, hotel: 'Falls Entrance Stalls' }],
    desserts: [{ name: 'Halwa', price: 50, hotel: 'Tirunelveli Halwa Stalls' }]
  },
  'Mahabalipuram': {
    famousLocal: [
      { name: 'Grilled Prawns', price: 300, hotel: 'Moonrakers', type: 'Specialty' },
      { name: 'Squid Rings', price: 250, hotel: 'Bob Marley Cafe', type: 'Specialty' }
    ],
    starters: [{ name: 'Golden Fried Calamari', price: 220, hotel: 'Seashore Restaurant' }],
    mainCourse: [{ name: 'Seafood Platter with Garlic Butter Rice', price: 500, hotel: 'Moonrakers' }],
    snacks: [{ name: 'Masala Vadai', price: 30, hotel: 'Beach Shack' }],
    desserts: [{ name: 'Tender Coconut Ice Cream', price: 80, hotel: 'Local Creamery' }]
  },
  'Yercaud': {
    famousLocal: [
      { name: 'Hot Milagai Bajji & Tea', price: 40, hotel: 'Lake View Stalls', type: 'Specialty' }
    ],
    starters: [{ name: 'Gobi 65', price: 90, hotel: 'Eggetarian Cafe' }],
    mainCourse: [{ name: 'Bamboo Chicken Biryani', price: 220, hotel: 'Yercaud Bamboo Restaurant' }],
    snacks: [{ name: 'Chilli Roasted Corn', price: 30, hotel: 'Lady\'s Seat Stalls' }],
    desserts: [{ name: 'Artisan Chocolates', price: 100, hotel: 'Bears Cave Chocolates' }]
  },
  'Dhanushkodi Beach': {
    famousLocal: [
      { name: 'Rameswaram Meen Curry', price: 150, hotel: 'Local Fishing Village Shack', type: 'Specialty' }
    ],
    starters: [{ name: 'Prawn Varuval', price: 180, hotel: 'Beachside Stalls' }],
    mainCourse: [{ name: 'White Rice with Squid Gravy', price: 160, hotel: 'Fishermen\'s Mess' }],
    snacks: [{ name: 'Sundal', price: 20, hotel: 'Ruins Path Vendors' }],
    desserts: [{ name: 'Kadal Paasi (Agar Agar Jelly)', price: 30, hotel: 'Rameswaram Roadside Shops' }]
  },
  'Kanyakumari Beach': {
    famousLocal: [
      { name: 'Nagercoil Nendran Chips', price: 60, hotel: 'Beach Road Shops', type: 'Specialty' },
      { name: 'Karimeen Pollichathu', price: 250, hotel: 'Seaview Restaurant', type: 'Specialty' }
    ],
    starters: [{ name: 'Crab Roast', price: 190, hotel: 'Sangam Restaurant' }],
    mainCourse: [{ name: 'Kerala Style Fish Curry Meals', price: 180, hotel: 'Triveni Restaurant' }],
    snacks: [{ name: 'Pazham Pori (Banana Fritters)', price: 40, hotel: 'Local Tea Kadai' }],
    desserts: [{ name: 'Muttaikose Halwa', price: 50, hotel: 'Nagercoil Bakeries' }]
  },
  'Brihadeeswara Temple': {
    famousLocal: [
      { name: 'Ashoka Halwa', price: 80, hotel: 'Bombay Sweets', type: 'Specialty' },
      { name: 'Thanjavur Thali', price: 180, hotel: 'Hotel Gnanam', type: 'Specialty' }
    ],
    starters: [{ name: 'Chettinad Chicken', price: 150, hotel: 'Anjappar' }],
    mainCourse: [{ name: 'Vegetarian Meals', price: 120, hotel: 'Sribhavan' }],
    snacks: [{ name: 'Degree Coffee', price: 30, hotel: 'Kumbakonam Filter Coffee' }],
    desserts: [{ name: 'Ashoka Halwa', price: 80, hotel: 'Bombay Sweets' }]
  },
  'Adiyogi Shiva Statue': {
    famousLocal: [
      { name: 'Isha Prasadam', price: 40, hotel: 'Isha Canteen', type: 'Specialty' }
    ],
    starters: [{ name: 'Sprouted Moong Salad', price: 60, hotel: 'Isha Life Eatery' }],
    mainCourse: [{ name: 'Sanjeevini Kanji', price: 50, hotel: 'Isha Diet Canteen' }],
    snacks: [{ name: 'Sundal', price: 30, hotel: 'Outside Stalls' }],
    desserts: [{ name: 'Jaggery Laddu', price: 20, hotel: 'Isha Sweets' }]
  },
  'Rockfort Temple': {
    famousLocal: [
      { name: 'Trichy Parotta', price: 40, hotel: 'Michael Ice Cream & Parotta', type: 'Specialty' }
    ],
    starters: [{ name: 'Nethili Fry', price: 120, hotel: 'Kannappa' }],
    mainCourse: [{ name: 'Mutton Biryani', price: 220, hotel: 'Vasantha Bhavan' }],
    snacks: [{ name: 'Filter Coffee', price: 35, hotel: 'Sri Sangeethas' }],
    desserts: [{ name: 'Jigarthanda', price: 60, hotel: 'Local Cool Bar' }]
  },
  'Srirangam Temple': {
    famousLocal: [
      { name: 'Temple Puliyodarai', price: 30, hotel: 'Srirangam Madapalli', type: 'Specialty' }
    ],
    starters: [{ name: 'Medu Vada', price: 20, hotel: 'Gopal Bhavan' }],
    mainCourse: [{ name: 'Traditional Iyengar Meals', price: 150, hotel: 'Srirangam Mess' }],
    snacks: [{ name: 'Degree Coffee', price: 30, hotel: 'Mangalambigai Coffee Paribar' }],
    desserts: [{ name: 'Akkaravadisal', price: 50, hotel: 'Temple Stalls' }]
  },
  'Ramanathaswamy Temple': {
    famousLocal: [
      { name: 'Pulihora', price: 30, hotel: 'Temple Prasadam', type: 'Specialty' }
    ],
    starters: [{ name: 'Gobi 65', price: 90, hotel: 'Gujarati Bhavan' }],
    mainCourse: [{ name: 'Pure Veg Thali', price: 120, hotel: 'Ram Nivas' }],
    snacks: [{ name: 'Chukku Coffee', price: 20, hotel: 'Pilgrim Stalls' }],
    desserts: [{ name: 'Kadal Paasi', price: 30, hotel: 'Temple Approach Road' }]
  },
  'Kapaleeshwarar Temple': {
    famousLocal: [
      { name: 'Mylapore Filter Coffee', price: 40, hotel: 'Karpagambal Mess', type: 'Specialty' },
      { name: 'Keerai Vadai', price: 25, hotel: 'Mami Tiffen Stall', type: 'Specialty' }
    ],
    starters: [{ name: 'Podi Idli', price: 50, hotel: 'Rayar Mess' }],
    mainCourse: [{ name: 'Sambar Sadam', price: 70, hotel: 'Karpagambal Mess' }],
    snacks: [{ name: 'Rose Milk', price: 35, hotel: 'Kalathi Rose Milk' }],
    desserts: [{ name: 'Jangiri', price: 30, hotel: 'Mami Sweets' }]
  },
  'Doddabetta Peak': {
    famousLocal: [
      { name: 'Hot Milagai Bajji', price: 40, hotel: 'Peak Viewpoint Stalls', type: 'Specialty' }
    ],
    starters: [{ name: 'Roasted Peanuts', price: 20, hotel: 'Mountain Vendors' }],
    mainCourse: [{ name: 'Maggi Noodles', price: 50, hotel: 'Peak Top Shacks' }],
    snacks: [{ name: 'Ooty Tea', price: 20, hotel: 'Tea Stalls' }],
    desserts: [{ name: 'Fresh Carrots', price: 30, hotel: 'Local Farmers' }]
  },
  'Annamalaiyar Temple': {
    famousLocal: [
      { name: 'Temple Milagu Pongal', price: 40, hotel: 'Prasadam Kiosk', type: 'Specialty' }
    ],
    starters: [{ name: 'Masala Vada', price: 15, hotel: 'Girivalam Path Shops' }],
    mainCourse: [{ name: 'Annadhanam Meals', price: 0, hotel: 'Ashrams' }],
    snacks: [{ name: 'Chukku Malli Coffee', price: 20, hotel: 'Aakash Hotel' }],
    desserts: [{ name: 'Sweet Pongal', price: 30, hotel: 'Sri Krishna Sweets' }]
  },
  'Papanasam Falls': {
    famousLocal: [
      { name: 'Mooli Soup', price: 30, hotel: 'Agasthiyar Stalls', type: 'Specialty' }
    ],
    starters: [{ name: 'Kaadai Fry', price: 120, hotel: 'Highway Mess' }],
    mainCourse: [{ name: 'Mutton Salna Parotta', price: 150, hotel: 'Local Village Mess' }],
    snacks: [{ name: 'Herbal Tea', price: 20, hotel: 'Checkpost Tea Stall' }],
    desserts: [{ name: 'Halwa', price: 50, hotel: 'Tirunelveli Town Bakeries' }]
  },
  'Vellore Fort': {
    famousLocal: [
      { name: 'Vellore Mutton Paya', price: 160, hotel: 'Taj Restaurant', type: 'Specialty' }
    ],
    starters: [{ name: 'Chicken Kebab', price: 130, hotel: 'Bombay Ananda Bhavan' }],
    mainCourse: [{ name: 'Ambur Biryani', price: 200, hotel: 'Star Biryani' }],
    snacks: [{ name: 'Goli Bajji', price: 30, hotel: 'Fort Canteen' }],
    desserts: [{ name: 'Makkan Peda', price: 40, hotel: 'Arcot Sweets' }]
  },
  'Gingee Fort': {
    famousLocal: [
      { name: 'Varagu Upma', price: 50, hotel: 'Gingee Local Stalls', type: 'Specialty' }
    ],
    starters: [{ name: 'Muttai Kalaki', price: 30, hotel: 'Street Food Stalls' }],
    mainCourse: [{ name: 'Vegetable Kurma & Parotta', price: 80, hotel: 'Highway Motels' }],
    snacks: [{ name: 'Kadalai Mittai', price: 20, hotel: 'Town Shops' }],
    desserts: [{ name: 'Jaggery Paniyaram', price: 40, hotel: 'Village Sweets' }]
  }
}

// Fallback logic for districts that don't have deeply mapped custom sets
const genericAccurateSets = {
  starters: [{ name: 'Gobi 65', price: 80, hotel: 'Sree Saravana Bhavan' }, { name: 'Chicken 65', price: 120, hotel: 'Anjappar' }, { name: 'Mutton Chukka', price: 160, hotel: 'Junior Kuppanna' }],
  mainCourse: [{ name: 'Vegetarian Meals', price: 100, hotel: 'Arya Bhavan' }, { name: 'Chicken Biryani', price: 160, hotel: 'Thalappakatti' }, { name: 'Parotta Salna', price: 50, hotel: 'Buhari' }],
  snacks: [{ name: 'Filter Coffee', price: 30, hotel: 'A2B' }, { name: 'Samosa & Tea', price: 40, hotel: 'Local Bakery' }],
  desserts: [{ name: 'Payasam', price: 50, hotel: 'Sree Annapoorna' }, { name: 'Gulab Jamun', price: 40, hotel: 'Grand Sweets' }]
}

const pickFood = (districtFoods, template, seed, districtName, placeName) => {
  if (placeName && placeSpecificFood[placeName]) {
    return placeSpecificFood[placeName];
  }

  if (authenticFoodDatabase[districtName]) {
    return authenticFoodDatabase[districtName];
  }

  // Generate an "authentic-looking" realistic list for missing districts 
  // relying entirely on the generic sets & real district specific specials
  return {
    famousLocal: districtFoods.slice(0, 2).map((item, i) => ({
      name: `${item}`,
      price: 100 + ((seed + i) % 5) * 20,
      type: 'Specialty',
      hotel: 'Top Local Restaurant'
    })),
    starters: genericAccurateSets.starters,
    mainCourse: genericAccurateSets.mainCourse,
    snacks: genericAccurateSets.snacks,
    desserts: genericAccurateSets.desserts
  }
}

const buildSeedPlace = (district, placeName, index) => {
  const template = attractionTemplates[index % attractionTemplates.length]
  const seed = index + 11
  return {
    id: slugify(placeName),
    name: placeName,
    image: getPlaceImage(placeName, seed + district.name.length),
    description: `${placeName} in ${district.name} ${template.description}`,
    food: pickFood(district.foods, template, seed, district.name, placeName),
    stayCost: {
      budget: 1100 + (seed % 7) * 220,
      midRange: 2500 + (seed % 7) * 430
    },
    travelCost: {
      localTransport: 480 + (seed % 7) * 95
    }
  }
}

const buildGeneratedPlace = (district, districtIndex, placeIndex) => {
  const template = attractionTemplates[placeIndex % attractionTemplates.length]
  const numeric = districtIndex * 100 + placeIndex
  const name = `${district.name} ${template.label} ${placeIndex + 1}`
  return {
    id: slugify(name),
    name,
    image: getPlaceImage(`${district.name} ${template.query}`, numeric + district.name.length),
    description: `${name} in ${district.name} ${template.description}`,
    food: pickFood(district.foods, template, numeric, district.name, name),
    stayCost: {
      budget: 1000 + (districtIndex % 5) * 180 + (placeIndex % 6) * 110,
      midRange: 2300 + (districtIndex % 5) * 350 + (placeIndex % 6) * 220
    },
    travelCost: {
      localTransport: 420 + (districtIndex % 5) * 70 + (placeIndex % 5) * 45
    }
  }
}

const placesPerDistrict = 30

export const tamilNaduData = districtCatalog.map((district, districtIndex) => {
  const districtId = slugify(district.name)
  const heroImage = getPlaceImage(`${district.name} ${district.heroQuery}`, districtIndex + district.name.length)
  const seedNames = seedPlacesByDistrict[district.name] || [`${district.name} City Center`, `${district.name} Market`, `${district.name} Hills`]

  const seedPlaces = seedNames.map((name, index) => buildSeedPlace(district, name, index))

  return {
    id: districtId,
    name: district.name,
    heroImage,
    places: seedPlaces
  }
})

export const allPlaces = tamilNaduData.flatMap((city) =>
  city.places.map((place) => ({
    id: `${city.id}:${place.id}`,
    cityId: city.id,
    cityName: city.name,
    placeId: place.id,
    placeName: place.name
  }))
)

export const findCityById = (cityId) => tamilNaduData.find((city) => city.id === cityId)

export const findPlaceById = (cityId, placeId) => {
  const city = findCityById(cityId)
  if (!city) {
    return null
  }
  return city.places.find((place) => place.id === placeId) || null
}
