/* ==========================================================================
   V-WANGI APPLICATION DATABASE & LOGIC - COMPREHENSIVE LOCAL & BRAND EXPANSION
   ========================================================================== */

// 1. Expanded Product Database (26 items including premium global and local Indonesian brands)
const PERFUMES_DATA = [
    {
        id: "p1",
        name: "Rose Elixir",
        brand: "V-Wangi Signature",
        price: 310000,
        image: "assets/rose_elixir.png",
        imageFilter: "none",
        theme: "pink",
        category: "Floral",
        badge: "Best Seller",
        description: "Perpaduan romantis antara mawar Bulgaria segar dan vanila Madagaskar yang hangat, menciptakan sillage sensual yang melekat sepanjang hari.",
        notes: {
            top: { name: "Mawar Merah, Bergamot", intensity: 75 },
            heart: { name: "Mawar Bulgaria, Melati", intensity: 85 },
            base: { name: "Vanila, Amber, Musk", intensity: 90 }
        },
        ingredients: "Alcohol Denat, Aqua, Fragrance (Parfum), Bulgarian Rose Absolute, Madagascar Vanilla Pod Extract, Linalool, Geraniol.",
        reviews: [
            { name: "Siti Rahma", rating: 5, comment: "Wanginya enak banget, wangi mawar mewah tidak bikin pusing. Tahan seharian!", date: "2026-06-20" },
            { name: "Dewi Lestari", rating: 4, comment: "Sangat feminin dan manis. Pengiriman cepat dan rapi.", date: "2026-06-22" }
        ]
    },
    {
        id: "p2",
        name: "Citrus Bloom",
        brand: "V-Wangi Signature",
        price: 295000,
        image: "assets/citrus_bloom.png",
        imageFilter: "none",
        theme: "orange",
        category: "Citrus",
        badge: "Fresh",
        description: "Ledakan kesegaran jeruk mandarin dan lemon Sisilia yang berpadu harmonis dengan kelembutan neroli dan musk.",
        notes: {
            top: { name: "Jeruk Mandarin, Lemon Sisilia", intensity: 90 },
            heart: { name: "Neroli, Kuncup Melati", intensity: 70 },
            base: { name: "Musk Putih, Cedarwood", intensity: 65 }
        },
        ingredients: "Alcohol Denat, Aqua, Citrus Limon Oil, Mandarin Peel Essence, Orange Blossom absolute, White Musk Accord.",
        reviews: [
            { name: "Budi Santoso", rating: 5, comment: "Segar banget cocok dipakai siang hari setelah olahraga.", date: "2026-06-18" },
            { name: "Amelia", rating: 4, comment: "Aroma jeruknya kerasa natural, tidak kayak pengharum ruangan. Mantap.", date: "2026-06-21" }
        ]
    },
    {
        id: "p3",
        name: "Ocean Breeze",
        brand: "V-Wangi Signature",
        price: 280000,
        image: "assets/ocean_breeze.png",
        imageFilter: "none",
        theme: "blue",
        category: "Fresh",
        badge: "Original",
        description: "Aroma akuatik yang segar laksana angin laut pagi hari, dipadukan dengan kesegaran mint liar dan kedalaman amberwood.",
        notes: {
            top: { name: "Garam Laut, Mint Liar", intensity: 80 },
            heart: { name: "Alga Laut, Sage", intensity: 65 },
            base: { name: "Amberwood, Nilam (Patchouli)", intensity: 75 }
        },
        ingredients: "Alcohol Denat, Aqua, Marine Accord, Peppermint Oil, Patchouli Heart Extract, Salicylates.",
        reviews: [
            { name: "Rian Hidayat", rating: 5, comment: "Aroma maskulin yang santai. Tahan lama di baju sampai 8 jam.", date: "2026-06-15" }
        ]
    },
    {
        id: "p4",
        name: "Royal Oud",
        brand: "V-Wangi Signature",
        price: 340000,
        image: "assets/royal_oud.png",
        imageFilter: "none",
        theme: "purple",
        category: "Woody",
        badge: "Exclusive",
        description: "Kemewahan oud Timur Tengah yang misterius, diperkaya dengan kapulaga pedas, cendana, dan aroma kulit maskulin yang berwibawa.",
        notes: {
            top: { name: "Kapulaga, Lada Merah muda", intensity: 75 },
            heart: { name: "Oud (Agarwood), Cendana", intensity: 90 },
            base: { name: "Kulit (Leather), Vetiver", intensity: 85 }
        },
        ingredients: "Alcohol Denat, Aqua, Agarwood Essence, East Indian Sandalwood Oil, Vetiver Oil, Cardamom Absolute.",
        reviews: [
            { name: "Hadi Wijaya", rating: 5, comment: "Sangat berwibawa wanginya. Cocok untuk acara formal malam hari.", date: "2026-06-19" },
            { name: "Farhan", rating: 4, comment: "Oud-nya strong di awal tapi setelah beberapa jam jadi soft dan manis.", date: "2026-06-23" }
        ]
    },
    {
        id: "p5",
        name: "Bleu De Luxe",
        brand: "Chanel",
        price: 1850000,
        image: "assets/ocean_breeze.png",
        imageFilter: "hue-rotate(50deg) saturate(1.2)",
        theme: "blue",
        category: "Fresh",
        badge: "Premium",
        description: "Wewangian kayu yang segar dengan aroma citrus yang kuat, melambangkan kebebasan pria modern.",
        notes: {
            top: { name: "Grapefruit, Lemon, Mint", intensity: 85 },
            heart: { name: "Ginger, Jasmine, Nutmeg", intensity: 70 },
            base: { name: "Incense, Cedar, Sandalwood", intensity: 80 }
        },
        ingredients: "Alcohol, Fragrance, Water, Limonene, Linalool, Citronellol, Coumarin.",
        reviews: [
            { name: "Kevin", rating: 5, comment: "Signature scent saya. Keaslian produk terjamin di sini.", date: "2026-06-10" }
        ]
    },
    {
        id: "p6",
        name: "Coco Essence",
        brand: "Chanel",
        price: 1950000,
        image: "assets/rose_elixir.png",
        imageFilter: "hue-rotate(320deg) brightness(0.9)",
        theme: "pink",
        category: "Oriental",
        badge: "Luxury",
        description: "Esensi wanita yang berani dan bebas. Wewangian oriental feminin dengan karakter kuat namun segar.",
        notes: {
            top: { name: "Orange, Bergamot, Grapefruit", intensity: 80 },
            heart: { name: "Rose, Jasmine, Litchi", intensity: 75 },
            base: { name: "Patchouli, Vetiver, Vanilla", intensity: 90 }
        },
        ingredients: "Alcohol, Parfum, Aqua, Linalool, Benzyl Salicylate, Geraniol, Coumarin.",
        reviews: [
            { name: "Diana P.", rating: 5, comment: "Klasik dan seksi. Pacar saya suka banget wanginya.", date: "2026-06-12" }
        ]
    },
    {
        id: "p7",
        name: "Sauvage Intense",
        brand: "Dior",
        price: 1780000,
        image: "assets/ocean_breeze.png",
        imageFilter: "hue-rotate(180deg) contrast(1.1)",
        theme: "blue",
        category: "Fresh",
        badge: "Populer",
        description: "Aroma maskulin ekstrem yang terinspirasi dari padang pasir di bawah langit biru berbintang.",
        notes: {
            top: { name: "Calabrian Bergamot, Pepper", intensity: 95 },
            heart: { name: "Sichuan Pepper, Lavender, Vetiver", intensity: 80 },
            base: { name: "Ambroxan, Cedar, Labdanum", intensity: 85 }
        },
        ingredients: "Alcohol, Aqua, Parfum, Limonene, Linalool, Citral, Coumarin.",
        reviews: [
            { name: "Rendra", rating: 5, comment: "Proyeksi dan ketahanan luar biasa. 10/10!", date: "2026-06-11" },
            { name: "Toni", rating: 4, comment: "Semua orang suka wewangian ini. Sangat aman dibeli.", date: "2026-06-14" }
        ]
    },
    {
        id: "p8",
        name: "J'adore Floral",
        brand: "Dior",
        price: 1820000,
        image: "assets/citrus_bloom.png",
        imageFilter: "hue-rotate(30deg) saturate(1.5)",
        theme: "orange",
        category: "Floral",
        badge: "Elegant",
        description: "Buket bunga terindah dari seluruh dunia, menyajikan aroma ylang-ylang, mawar, dan melati yang anggun.",
        notes: {
            top: { name: "Pear, Melon, Magnolia", intensity: 75 },
            heart: { name: "Jasmine, Lily of the Valley, Rose", intensity: 85 },
            base: { name: "Musk, Vanilla, Blackberry", intensity: 70 }
        },
        ingredients: "Alcohol, Parfum, Aqua, Hexyl Cinnamal, Benzyl Salicylate, Alpha-Isomethyl Ionone.",
        reviews: [
            { name: "Gisella", rating: 5, comment: "Sangat elegan. Botolnya juga cantik banget dipajang.", date: "2026-06-05" }
        ]
    },
    {
        id: "p9",
        name: "Tobacco Vanille",
        brand: "Tom Ford",
        price: 2450000,
        image: "assets/royal_oud.png",
        imageFilter: "hue-rotate(240deg) brightness(0.8)",
        theme: "purple",
        category: "Oriental",
        badge: "High End",
        description: "Interpretasi modern dari klub pria Inggris klasik. Aroma rempah-rempah hangat, tembakau, dan vanila lembut.",
        notes: {
            top: { name: "Tobacco Leaf, Spicy Notes", intensity: 85 },
            heart: { name: "Vanilla, Cacao, Tonka Bean", intensity: 90 },
            base: { name: "Dried Fruits, Woody Notes", intensity: 80 }
        },
        ingredients: "Alcohol Denat., Water, Fragrance, Coumarin, Linalool, Eugenol, Benzyl Benzoate.",
        reviews: [
            { name: "Lukman", rating: 5, comment: "Wanginya tebal, berkelas, dan manis tembakau yang mahal.", date: "2026-06-13" }
        ]
    },
    {
        id: "p10",
        name: "Oud Wood Gold",
        brand: "Tom Ford",
        price: 2600000,
        image: "assets/royal_oud.png",
        imageFilter: "saturate(0.5) contrast(1.2)",
        theme: "purple",
        category: "Woody",
        badge: "Prestige",
        description: "Salah satu bahan paling langka, berharga, dan mahal dalam dunia wewangian: kayu oud yang smoky.",
        notes: {
            top: { name: "Sichuan Pepper, Cardamom", intensity: 80 },
            heart: { name: "Agarwood (Oud), Sandalwood, Vetiver", intensity: 95 },
            base: { name: "Tonka Bean, Vanilla, Amber", intensity: 85 }
        },
        ingredients: "Alcohol Denat., Water, Fragrance, Linalool, Bht, Limonene, Geraniol.",
        reviews: [
            { name: "Anwar", rating: 5, comment: "Parfum oud terbaik sepanjang masa. Sangat mewah.", date: "2026-06-17" }
        ]
    },
    {
        id: "p11",
        name: "Aventus Imperial",
        brand: "Creed",
        price: 2850000,
        image: "assets/ocean_breeze.png",
        imageFilter: "brightness(0.9) hue-rotate(15deg)",
        theme: "blue",
        category: "Fresh",
        badge: "Legendary",
        description: "Merayakan kekuatan, kekuasaan, dan kesuksesan. Aroma nanas asap yang legendaris bagi kaum pria.",
        notes: {
            top: { name: "Pineapple, Bergamot, Apple", intensity: 90 },
            heart: { name: "Birch, Patchouli, Jasmine", intensity: 80 },
            base: { name: "Musk, Oakmoss, Ambergris", intensity: 85 }
        },
        ingredients: "Alcohol, Parfum, Aqua, Limonene, Linalool, Citral, Citronellol.",
        reviews: [
            { name: "Dicky", rating: 5, comment: "Banyak dapet komplemen pas pake ini. Worth the money.", date: "2026-06-08" }
        ]
    },
    {
        id: "p12",
        name: "Green Irish Tweed",
        brand: "Creed",
        price: 2700000,
        image: "assets/emerald_forest.png",
        imageFilter: "none",
        theme: "teal",
        category: "Woody",
        badge: "Classic",
        description: "Berjalan di pedesaan Irlandia yang hijau. Klasik, segar, maskulin, dan abadi.",
        notes: {
            top: { name: "Lemon Verbena, Iris", intensity: 80 },
            heart: { name: "Violet Leaf", intensity: 70 },
            base: { name: "Ambergris, Sandalwood", intensity: 85 }
        },
        ingredients: "Alcohol, Parfum, Aqua, Limonene, Alpha-Isomethyl Ionone, Linalool.",
        reviews: [
            { name: "Rony", rating: 5, comment: "Wanginya seperti rumput hijau basah dipadu kayu mewah. Segar banget.", date: "2026-06-03" }
        ]
    },
    {
        id: "p13",
        name: "Wood Sage & Sea Salt",
        brand: "Jo Malone",
        price: 1350000,
        image: "assets/ocean_breeze.png",
        imageFilter: "saturate(0.2) brightness(1.1)",
        theme: "blue",
        category: "Fresh",
        badge: "Cozy",
        description: "Melarikan diri dari rutinitas harian ke pantai yang berangin. Deburan ombak putih dan wangi sage.",
        notes: {
            top: { name: "Ambrette Seeds", intensity: 65 },
            heart: { name: "Sea Salt", intensity: 80 },
            base: { name: "Sage", intensity: 75 }
        },
        ingredients: "Alcohol Denat., Water, Fragrance, Limonene, Linalool, Geraniol.",
        reviews: [
            { name: "Nadia", rating: 5, comment: "Sangat menenangkan, ringan dan cocok untuk layering.", date: "2026-06-16" }
        ]
    },
    {
        id: "p14",
        name: "English Pear & Freesia",
        brand: "Jo Malone",
        price: 1350000,
        image: "assets/rose_elixir.png",
        imageFilter: "hue-rotate(20deg) brightness(1.05)",
        theme: "pink",
        category: "Floral",
        badge: "Best Seller",
        description: "Sensasi musim gugur di Inggris. Keharuman buah pir matang yang segar dibalut dengan bunga freesia putih.",
        notes: {
            top: { name: "King William Pear", intensity: 80 },
            heart: { name: "White Freesia", intensity: 75 },
            base: { name: "Patchouli", intensity: 70 }
        },
        ingredients: "Alcohol Denat., Water, Fragrance, Geraniol, Hexyl Cinnamal, Limonene.",
        reviews: [
            { name: "Kartika", rating: 5, comment: "Manis pir yang segar, tidak eneg sama sekali. Favorit cewek-cewek.", date: "2026-06-20" }
        ]
    },
    {
        id: "p15",
        name: "Black Opium Glow",
        brand: "YSL",
        price: 1650000,
        image: "assets/matte_black.png",
        imageFilter: "none",
        theme: "purple",
        category: "Oriental",
        badge: "Seductive",
        description: "Adiktif dan memikat. Aroma kopi hitam yang kaya energi berpadu dengan vanila manis dan bunga putih.",
        notes: {
            top: { name: "Pear, Pink Pepper, Orange Blossom", intensity: 85 },
            heart: { name: "Coffee, Jasmine, Bitter Almond", intensity: 90 },
            base: { name: "Vanilla, Patchouli, Cedar", intensity: 88 }
        },
        ingredients: "Alcohol, Aqua, Parfum, Benzyl Salicylate, Benzyl Alcohol, Linalool.",
        reviews: [
            { name: "Fanny", rating: 5, comment: "Parfum wajib kalau mau pergi nge-date. Wanginya menggoda.", date: "2026-06-21" },
            { name: "Tasya", rating: 4, comment: "Aroma kopinya calming banget, tahan 6 jam lebih di kulit.", date: "2026-06-22" }
        ]
    },
    {
        id: "p16",
        name: "Y Men Intense",
        brand: "YSL",
        price: 1720000,
        image: "assets/ocean_breeze.png",
        imageFilter: "hue-rotate(210deg) saturate(1.4)",
        theme: "blue",
        category: "Fresh",
        badge: "Modern",
        description: "Wewangian fougere berkayu yang maskulin dan berenergi tinggi untuk pria yang berani bermimpi.",
        notes: {
            top: { name: "Ginger, Apple, Bergamot", intensity: 85 },
            heart: { name: "Sage, Juniper Berries, Geranium", intensity: 80 },
            base: { name: "Amberwood, Tonka Bean, Cedar", intensity: 85 }
        },
        ingredients: "Alcohol, Parfum, Aqua, Limonene, Linalool, Citral, Coumarin, Citronellol.",
        reviews: [
            { name: "Alif", rating: 5, comment: "Sangat segar dan awet aromanya. Cocok buat ngantor seharian.", date: "2026-06-15" }
        ]
    },
    // INDONESIAN LOCAL BRANDS (CRITICAL ADDITIONS)
    {
        id: "p17",
        name: "Aphrodite",
        brand: "Velixir",
        price: 259000,
        image: "assets/rose_elixir.png",
        imageFilter: "hue-rotate(290deg) saturate(1.8)",
        theme: "pink",
        category: "Floral",
        badge: "Lokal Hits",
        description: "Parfum buatan lokal dari Velixir yang sangat populer. Keharuman bunga mawar sensual berpadu dengan rempah manis kayu manis dan kelapa.",
        notes: {
            top: { name: "Jasmine, Saffron, Tagetes", intensity: 80 },
            heart: { name: "Caramel, Amberwood, Coconut", intensity: 85 },
            base: { name: "Oakmoss, Ambergris, Dry Wood", intensity: 90 }
        },
        ingredients: "Alcohol Denat, Purified Water, Fragrance Oil, Saffron Extract, Linalool, Benzyl Salicylate.",
        reviews: [
            { name: "Rina Kartini", rating: 5, comment: "Ini dupe parfum mahal yang beneran mirip dan wanginya nempel banget di kulit!", date: "2026-06-23" },
            { name: "Bunga", rating: 5, comment: "Velixir emang ga pernah gagal. Wangi caramelnya manis mewah banget.", date: "2026-06-24" }
        ]
    },
    {
        id: "p18",
        name: "Coconut Dreams",
        brand: "Mykonos",
        price: 249000,
        image: "assets/citrus_bloom.png",
        imageFilter: "hue-rotate(15deg) contrast(1.1) brightness(0.95)",
        theme: "orange",
        category: "Citrus",
        badge: "Sweet Cream",
        description: "Esensi kelapa segar yang dipadukan dengan kesegaran mandarin dan manisnya vanila lembut laksana liburan tropis.",
        notes: {
            top: { name: "Coconut, Mandarin Orange", intensity: 85 },
            heart: { name: "Vanilla, Jasmine", intensity: 70 },
            base: { name: "Musk, Amber, Sandalwood", intensity: 80 }
        },
        ingredients: "Alcohol Denat, Aqua, Fragrance, Coconut Extract, Mandarin Peel Oil.",
        reviews: [
            { name: "Kiky", rating: 4, comment: "Wanginya kayak kue kelapa vanila yang manis dan hangat. Suka banget.", date: "2026-06-22" }
        ]
    },
    {
        id: "p19",
        name: "Sweet Liberty",
        brand: "Velixir",
        price: 198000,
        image: "assets/citrus_bloom.png",
        imageFilter: "hue-rotate(60deg) brightness(1.1)",
        theme: "orange",
        category: "Fresh",
        badge: "Lokal Favorite",
        description: "Kesegaran buah apel merah dan pir hijau berpadu dengan mawar putih lembut dan musk yang bersih untuk kebebasan aroma harian.",
        notes: {
            top: { name: "Red Apple, Green Pear", intensity: 85 },
            heart: { name: "White Rose, Freesia", intensity: 70 },
            base: { name: "Clean Musk, Amber, Cedarwood", intensity: 75 }
        },
        ingredients: "Alcohol Denat, Aqua, Apple Extract, Rose Flower Absolute, White Musk Accord.",
        reviews: [
            { name: "Tania", rating: 5, comment: "Seger banget dan ga pasaran wanginya. Dipakai sekolah/kuliah cocok pol.", date: "2026-06-21" }
        ]
    },
    {
        id: "p20",
        name: "Dark Secret",
        brand: "Mykonos",
        price: 210000,
        image: "assets/matte_black.png",
        imageFilter: "contrast(1.2) brightness(0.95)",
        theme: "purple",
        category: "Woody",
        badge: "Mysterious",
        description: "Aroma rahasia malam hari dengan paduan grapefruit segar di awal, disusul kehangatan lada hitam, cedar, dan kulit yang sensual.",
        notes: {
            top: { name: "Grapefruit, Bergamot", intensity: 80 },
            heart: { name: "Black Pepper, Nutmeg", intensity: 75 },
            base: { name: "Cedarwood, Vetiver, Leather", intensity: 85 }
        },
        ingredients: "Alcohol Denat, Fragrance, Aqua, Black Pepper Essence, Cedarwood Oil.",
        reviews: [
            { name: "Gilang", rating: 5, comment: "Wanginya manly dan agak woody smoky gitu. Ketahanan mantap 6 jam.", date: "2026-06-23" }
        ]
    },
    {
        id: "p21",
        name: "Batavia Oud",
        brand: "Project 1945",
        price: 320000,
        image: "assets/royal_oud.png",
        imageFilter: "hue-rotate(180deg) brightness(0.85)",
        theme: "purple",
        category: "Woody",
        badge: "Heritage",
        description: "Menghidupkan aroma sejarah Batavia tempo dulu. Kombinasi unik lada hitam Indonesia, kayu oud berharga, dan cengkeh hangat.",
        notes: {
            top: { name: "Lada Hitam, Cengkeh, Kapulaga", intensity: 85 },
            heart: { name: "Oud, Melati Kraton", intensity: 90 },
            base: { name: "Sandalwood, Patchouli, Amber", intensity: 85 }
        },
        ingredients: "Alcohol Denat, Fragrance, Indonesian Clove Oil, Sumatra Patchouli Extract, Oud Accord.",
        reviews: [
            { name: "Ahmad", rating: 5, comment: "Bangga banget ada brand lokal bikin aroma dengan konsep nusantara se-mewah ini.", date: "2026-06-18" },
            { name: "Dewo", rating: 5, comment: "Rasa rempahnya sangat otentik tapi tetap modern. Sukses terus Project 1945!", date: "2026-06-20" }
        ]
    },
    {
        id: "p22",
        name: "Kahuripan",
        brand: "Project 1945",
        price: 295000,
        image: "assets/emerald_forest.png",
        imageFilter: "hue-rotate(240deg) contrast(1.1)",
        theme: "teal",
        category: "Oriental",
        badge: "Heritage Series",
        description: "Aroma kemakmuran nusantara. Perpaduan kayu manis manis, kayu kering, madu hutan, dan kehangatan kemenyan modern.",
        notes: {
            top: { name: "Kayu Manis, Apple", intensity: 80 },
            heart: { name: "Madu Hutan, Cokelat", intensity: 85 },
            base: { name: "Dry Wood, Amber, Benzoin (Kemenyan)", intensity: 90 }
        },
        ingredients: "Alcohol Denat, Aqua, Cinnamon Oil, Honey Accord, Benzoin Resinoid.",
        reviews: [
            { name: "Hendra", rating: 5, comment: "Wanginya hangat manis cokelat madu. Enak banget dipakai pas cuaca dingin/hujan.", date: "2026-06-22" }
        ]
    },
    {
        id: "p23",
        name: "Dark Amber",
        brand: "BSP",
        price: 285000,
        image: "assets/royal_oud.png",
        imageFilter: "hue-rotate(90deg) saturate(1.5)",
        theme: "purple",
        category: "Oriental",
        badge: "Exclusive Lokal",
        description: "Wewangian amber berkelas dari BSP (Babylon Scent Project) dengan sentuhan kulit maskulin, kapulaga, dan kayu cedar merah.",
        notes: {
            top: { name: "Cardamom, Saffron", intensity: 75 },
            heart: { name: "Red Cedar, Leather", intensity: 85 },
            base: { name: "Amber, Vanilla, Tonka Bean", intensity: 90 }
        },
        ingredients: "Alcohol Denat, Fragrance, Red Cedarwood Essence, Saffron Extract.",
        reviews: [
            { name: "Zidan", rating: 4, comment: "Mewah dan awet. Karakter ambernya tebal, mirip parfum niche eropa.", date: "2026-06-24" }
        ]
    },
    {
        id: "p24",
        name: "Saffron Silk",
        brand: "BSP",
        price: 295000,
        image: "assets/rose_elixir.png",
        imageFilter: "hue-rotate(180deg) brightness(0.9)",
        theme: "pink",
        category: "Floral",
        badge: "Premium Silk",
        description: "Kelembutan aroma bagaikan sutra. Saffron merah berpadu dengan mawar merah tua yang memikat dan ketahanan vetiver jawa.",
        notes: {
            top: { name: "Saffron, Red Fruits", intensity: 80 },
            heart: { name: "Rose, Jasmine, Leather", intensity: 80 },
            base: { name: "Java Vetiver, Patchouli, Amber", intensity: 85 }
        },
        ingredients: "Alcohol Denat, Aqua, Saffron absolute, Java Vetiver Oil, Rose Oil.",
        reviews: [
            { name: "Sari", rating: 5, comment: "Wangi saffron-rose yang eksotis. Sangat puas belanja di sini.", date: "2026-06-23" }
        ]
    },
    {
        id: "p25",
        name: "Orgasm",
        brand: "HMNS",
        price: 349000,
        image: "assets/rose_elixir.png",
        imageFilter: "hue-rotate(45deg) saturate(1.1)",
        theme: "pink",
        category: "Floral",
        badge: "Lokal Legend",
        description: "Formula legendaris lokal dari HMNS yang menjadi pelopor kebangkitan parfum nusantara. Kombinasi apple merah, caramel, mawar, dan vanila hangat.",
        notes: {
            top: { name: "Red Apple", intensity: 80 },
            heart: { name: "Rose, Jasmine, Peony", intensity: 85 },
            base: { name: "Vanilla, Amber", intensity: 90 }
        },
        ingredients: "Alcohol Denat, Purified Water, Fragrance Oil, Red Apple Essence, Benzyl Salicylate.",
        reviews: [
            { name: "Putri Eka", rating: 5, comment: "Parfum sejuta umat cewek indonesia karena emang seenak dan se-awet itu!", date: "2026-06-24" },
            { name: "Nabila", rating: 5, comment: "Wanginya feminim, manis vanilla yang pas banget di hidung.", date: "2026-06-24" }
        ]
    },
    {
        id: "p26",
        name: "Farhampton",
        brand: "HMNS",
        price: 369000,
        image: "assets/emerald_forest.png",
        imageFilter: "hue-rotate(90deg) brightness(0.8)",
        theme: "teal",
        category: "Woody",
        badge: "Lokal Maskulin",
        description: "Ekspresi maskulin murni dengan konsentrasi tinggi. Keharuman lavender berpadu dengan orange blossom dan kehangatan cedarwood.",
        notes: {
            top: { name: "Bergamot, Lavender", intensity: 85 },
            heart: { name: "Orange Blossom, Labdanum", intensity: 80 },
            base: { name: "Cedarwood, Patchouli, Amber", intensity: 90 }
        },
        ingredients: "Alcohol Denat, Aqua, Lavender Essential Oil, Cedarwood Heart Oil, Patchouli.",
        reviews: [
            { name: "Yusuf", rating: 5, comment: "Aroma fresh clean yang ganteng banget. SPL (Spray, Projection, Longevity) juara.", date: "2026-06-22" }
        ]
    }
];

// Helper to calculate average rating of a product dynamically
function getProductAverageRating(product) {
    if (!product.reviews || product.reviews.length === 0) return 0;
    const sum = product.reviews.reduce((acc, r) => acc + r.rating, 0);
    return (sum / product.reviews.length).toFixed(1);
}

// Helper to get stars icon HTML based on rating
function getStarsHtml(rating) {
    let starsHtml = '';
    const rounded = Math.round(rating);
    for (let i = 1; i <= 5; i++) {
        if (i <= rounded) {
            starsHtml += '<i class="fa-solid fa-star"></i>';
        } else {
            starsHtml += '<i class="fa-regular fa-star"></i>';
        }
    }
    return starsHtml;
}

// 2. Application State
let appState = {
    cart: [],
    currentUser: null,
    currentView: "home",
    selectedProduct: null,
    shippingCost: 15000,
    shippingAddress: null,
    orderSummary: {
        subtotal: 0,
        shipping: 15000,
        total: 0
    },
    // Filtering State
    filterBrand: "All",
    filterCategory: "All"
};

// ==========================================================================
// VIEW ROUTER (SPA VIEWS MANAGEMENT)
// ==========================================================================

function switchView(viewName) {
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Update active nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('data-target') === viewName) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Hide all views
    const views = document.querySelectorAll('.view-section');
    views.forEach(view => {
        view.classList.remove('active');
    });

    // Show target view
    const targetView = document.getElementById(`${viewName}-view`);
    if (targetView) {
        targetView.classList.add('active');
        appState.currentView = viewName;
    }

    // Special logic for loading pages
    if (viewName === 'collections') {
        renderCollectionsGrid();
    } else if (viewName === 'checkout') {
        renderCheckoutSummary();
    } else if (viewName === 'payment') {
        renderPaymentSummary();
    }
}

// Intercept routing via Hash links
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    const validViews = ['home', 'about', 'collections', 'detail', 'auth', 'checkout', 'payment', 'success'];
    
    if (hash.startsWith('detail-')) {
        const prodId = hash.split('-')[1];
        loadProductDetail(prodId);
    } else if (validViews.includes(hash)) {
        switchView(hash);
    } else {
        switchView('home');
    }
});

// Initialize Routing on load
document.addEventListener('DOMContentLoaded', () => {
    // Initial Render Home
    renderBestSellers();
    
    // Setup Navigation Listeners
    document.querySelectorAll('.nav-link, .footer-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-target') || link.getAttribute('href').substring(1);
            window.location.hash = target;
        });
    });

    document.getElementById('nav-logo').addEventListener('click', (e) => {
        e.preventDefault();
        window.location.hash = 'home';
    });

    // Initial load check
    const initialHash = window.location.hash.substring(1);
    if (initialHash) {
        if (initialHash.startsWith('detail-')) {
            const prodId = initialHash.split('-')[1];
            loadProductDetail(prodId);
        } else {
            switchView(initialHash);
        }
    } else {
        switchView('home');
    }

    // Setup other events
    initAppEvents();
    updateCartCountUI();
});


// ==========================================================================
// RENDER DYNAMIC PAGES & COMPONENTS
// ==========================================================================

// Render best sellers on Home View (limit to first 4 signature ones)
function renderBestSellers() {
    const grid = document.getElementById('best-sellers-grid');
    if (!grid) return;

    grid.innerHTML = '';
    const bestSellers = PERFUMES_DATA.filter(p => p.badge === 'Best Seller').slice(0, 4);
    
    // Fallback if none flagged
    const listToRender = bestSellers.length > 0 ? bestSellers : PERFUMES_DATA.slice(0, 4);
    
    listToRender.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });
}

// Render all collections with Brand and Category Filter Bar
function renderCollectionsGrid() {
    const grid = document.getElementById('all-collections-grid');
    const container = document.querySelector('.collections-container');
    if (!grid || !container) return;

    // Create filter bar if it doesn't exist
    let filterBar = document.getElementById('collections-filter-bar');
    if (!filterBar) {
        filterBar = document.createElement('div');
        filterBar.id = 'collections-filter-bar';
        filterBar.className = 'filter-bar-wrapper';
        
        // Insert it right after the header section
        const header = container.querySelector('.section-header');
        header.parentNode.insertBefore(filterBar, grid);
    }

    // Dynamic Lists of Brands & Categories
    const brands = ["All", ...new Set(PERFUMES_DATA.map(p => p.brand))];
    const categories = ["All", ...new Set(PERFUMES_DATA.map(p => p.category))];

    // Render Filter Bar Content
    filterBar.innerHTML = `
        <div class="filter-group">
            <span class="filter-label">Brand:</span>
            <div class="filter-options-list" id="brand-filters">
                ${brands.map(b => `
                    <button class="filter-btn ${appState.filterBrand === b ? 'active' : ''}" data-brand="${b}">
                        ${b}
                    </button>
                `).join('')}
            </div>
        </div>
        <div class="filter-group">
            <span class="filter-label">Kategori Aroma:</span>
            <div class="filter-options-list" id="category-filters">
                ${categories.map(c => `
                    <button class="filter-btn ${appState.filterCategory === c ? 'active' : ''}" data-category="${c}">
                        ${c}
                    </button>
                `).join('')}
            </div>
        </div>
    `;

    // Attach listeners to filter buttons
    filterBar.querySelectorAll('#brand-filters .filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            appState.filterBrand = btn.getAttribute('data-brand');
            renderCollectionsGrid(); // re-render grid
        });
    });

    filterBar.querySelectorAll('#category-filters .filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            appState.filterCategory = btn.getAttribute('data-category');
            renderCollectionsGrid(); // re-render grid
        });
    });

    // Filter Products
    const filteredProducts = PERFUMES_DATA.filter(p => {
        const matchBrand = appState.filterBrand === 'All' || p.brand === appState.filterBrand;
        const matchCategory = appState.filterCategory === 'All' || p.category === appState.filterCategory;
        return matchBrand && matchCategory;
    });

    // Render filtered product cards
    grid.innerHTML = '';
    if (filteredProducts.length === 0) {
        grid.innerHTML = `
            <div class="no-products-found">
                <i class="fa-solid fa-magnifying-glass"></i>
                <p>Tidak ada produk parfum yang cocok dengan filter yang dipilih.</p>
                <button class="btn btn-secondary" id="btn-reset-filters">Reset Filter</button>
            </div>
        `;
        document.getElementById('btn-reset-filters').addEventListener('click', () => {
            appState.filterBrand = 'All';
            appState.filterCategory = 'All';
            renderCollectionsGrid();
        });
        return;
    }

    filteredProducts.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });
}

// Helper to create product card element with unique styling filter support
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-theme', product.theme);
    
    const avgRating = getProductAverageRating(product);
    const reviewsCount = product.reviews ? product.reviews.length : 0;
    const formattedPrice = formatRupiah(product.price);

    card.innerHTML = `
        <div class="product-card-img-container">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <img src="${product.image}" alt="${product.name}" class="product-card-img" style="filter: ${product.imageFilter || 'none'}">
        </div>
        <div class="product-card-info">
            <span class="product-card-brand">${product.brand}</span>
            <h3 class="product-card-title">${product.name}</h3>
            <div class="product-card-rating">
                <i class="fa-solid fa-star"></i>
                <span>${avgRating} (${reviewsCount})</span>
            </div>
            <p class="product-card-notes-preview">Top: ${product.notes.top.name}</p>
            <div class="product-card-footer">
                <span class="product-card-price">${formattedPrice}</span>
                <button class="add-cart-circle-btn add-to-cart-btn" data-id="${product.id}" title="Tambah ke keranjang">
                    <i class="fa-solid fa-cart-plus"></i>
                </button>
            </div>
        </div>
    `;

    card.addEventListener('click', (e) => {
        if (e.target.closest('.add-to-cart-btn')) {
            e.stopPropagation();
            addToCart(product.id);
            return;
        }
        window.location.hash = `detail-${product.id}`;
    });

    return card;
}

// Load Product Detail, Notes & Reviews section with image style filter support
function loadProductDetail(productId) {
    const product = PERFUMES_DATA.find(p => p.id === productId);
    if (!product) {
        window.location.hash = 'home';
        return;
    }

    appState.selectedProduct = product;
    const container = document.getElementById('product-detail-container');
    if (!container) return;

    const formattedPrice = formatRupiah(product.price);
    const avgRating = getProductAverageRating(product);
    const reviewsCount = product.reviews ? product.reviews.length : 0;
    const starsHtml = getStarsHtml(avgRating);

    container.innerHTML = `
        <div class="detail-grid">
            <!-- Left Side Product Image -->
            <div class="detail-img-wrapper">
                <img src="${product.image}" alt="${product.name}" class="detail-img floating-animation" style="filter: ${product.imageFilter || 'none'}">
            </div>
            
            <!-- Right Side Product details & Interactive Notes -->
            <div class="detail-info">
                <div class="detail-brand-badge">${product.brand}</div>
                <h1 class="detail-title">${product.name}</h1>
                
                <div class="detail-rating">
                    <span class="rating-stars">${starsHtml}</span>
                    <span class="rating-value">${avgRating}</span>
                    <span class="rating-count">(${reviewsCount} ulasan pelanggan)</span>
                </div>
                
                <div class="detail-price">${formattedPrice}</div>
                <p class="detail-description">${product.description}</p>
                
                <div class="detail-actions">
                    <button class="btn btn-primary btn-lg" id="btn-buy-now" data-id="${product.id}"><i class="fa-solid fa-bag-shopping"></i> Beli Sekarang</button>
                    <button class="btn btn-secondary btn-lg" id="btn-add-cart-detail" data-id="${product.id}"><i class="fa-solid fa-cart-plus"></i> Tambah Ke Keranjang</button>
                </div>

                <!-- Aroma Notes Section -->
                <div class="detail-notes-section">
                    <h4>Rincian Aroma & Komposisi</h4>
                    
                    <div class="notes-structure-grid">
                        <div class="note-item-box top-note">
                            <span class="note-phase-label">Top Note (0-15 Menit)</span>
                            <h5>Aroma Awal</h5>
                            <p class="note-content">${product.notes.top.name}</p>
                            <div class="intensity-slider-bar" title="Intensitas Aroma Awal">
                                <div class="intensity-fill" style="width: ${product.notes.top.intensity}%"></div>
                            </div>
                        </div>

                        <div class="note-item-box heart-note">
                            <span class="note-phase-label">Heart Note (15-60 Menit)</span>
                            <h5>Aroma Inti</h5>
                            <p class="note-content">${product.notes.heart.name}</p>
                            <div class="intensity-slider-bar" title="Intensitas Aroma Inti">
                                <div class="intensity-fill" style="width: ${product.notes.heart.intensity}%"></div>
                            </div>
                        </div>

                        <div class="note-item-box base-note">
                            <span class="note-phase-label">Base Note (1-8 Jam)</span>
                            <h5>Aroma Penutup</h5>
                            <p class="note-content">${product.notes.base.name}</p>
                            <div class="intensity-slider-bar" title="Intensitas Aroma Penutup">
                                <div class="intensity-fill" style="width: ${product.notes.base.intensity}%"></div>
                            </div>
                        </div>
                    </div>

                    <div class="note-ingredients">
                        <h5>Bahan-Bahan / Ingredients</h5>
                        <p>${product.ingredients}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Dynamic Reviews & Comments Block -->
        <div class="reviews-section-wrapper">
            <h3 class="reviews-heading">Ulasan Pelanggan</h3>
            
            <div class="reviews-summary-block">
                <div class="reviews-overall-rating">
                    <span class="overall-num">${avgRating}</span>
                    <span class="overall-stars">${starsHtml}</span>
                    <span class="overall-text">Berdasarkan ${reviewsCount} ulasan</span>
                </div>
                
                <!-- Review Form -->
                <div class="write-review-form-container">
                    <h4>Tulis Ulasan Anda</h4>
                    <form id="product-review-form">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="review-author">Nama Anda</label>
                                <input type="text" id="review-author" required placeholder="Contoh: Valen">
                            </div>
                            <div class="form-group">
                                <label for="review-rating">Rating Bintang</label>
                                <select id="review-rating" required>
                                    <option value="5">⭐⭐⭐⭐⭐ (5/5)</option>
                                    <option value="4">⭐⭐⭐⭐ (4/5)</option>
                                    <option value="3">⭐⭐⭐ (3/5)</option>
                                    <option value="2">⭐⭐ (2/5)</option>
                                    <option value="1">⭐ (1/5)</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="review-comment">Ulasan / Komentar</label>
                            <textarea id="review-comment" required placeholder="Bagikan pendapat Anda mengenai aroma, daya tahan, atau kemasan parfum ini..." rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Kirim Ulasan</button>
                    </form>
                </div>
            </div>

            <!-- List of customer reviews -->
            <div class="reviews-list-container" id="reviews-list-container">
                <!-- Loaded dynamically below -->
            </div>
        </div>
    `;

    renderProductReviewsList(product);

    // Detail page action events
    document.getElementById('btn-buy-now').addEventListener('click', () => {
        addToCart(product.id, 1, false);
        window.location.hash = 'checkout';
    });

    document.getElementById('btn-add-cart-detail').addEventListener('click', () => {
        addToCart(product.id, 1, true);
    });

    // Review form handler
    document.getElementById('product-review-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const author = document.getElementById('review-author').value;
        const rating = parseInt(document.getElementById('review-rating').value);
        const comment = document.getElementById('review-comment').value;
        const today = new Date().toISOString().split('T')[0];

        // Push review to product data
        product.reviews.push({
            name: author,
            rating: rating,
            comment: comment,
            date: today
        });

        alert("Ulasan Anda berhasil dikirim! Terima kasih atas feedback-nya.");
        
        // Reload detail page content to reflect changes in stars, lists, counts instantly
        loadProductDetail(product.id);
    });

    switchView('detail');
}

// Render dynamic customer reviews list
function renderProductReviewsList(product) {
    const list = document.getElementById('reviews-list-container');
    if (!list) return;

    if (!product.reviews || product.reviews.length === 0) {
        list.innerHTML = `
            <div class="no-reviews-card">
                <p>Belum ada ulasan untuk parfum ini. Jadilah yang pertama memberikan ulasan!</p>
            </div>
        `;
        return;
    }

    list.innerHTML = '';
    // Render from newest first
    const sortedReviews = [...product.reviews].reverse();

    sortedReviews.forEach(rev => {
        const revCard = document.createElement('div');
        revCard.className = 'review-card';
        
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            stars += i <= rev.rating ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-regular fa-star"></i>';
        }

        revCard.innerHTML = `
            <div class="review-card-header">
                <div class="review-author-avatar">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="review-author-meta">
                    <h5 class="review-author-name">${rev.name}</h5>
                    <span class="review-date">${rev.date}</span>
                </div>
                <div class="review-stars-badge">${stars}</div>
            </div>
            <p class="review-comment-text">${rev.comment}</p>
        `;
        list.appendChild(revCard);
    });
}

// ==========================================================================
// CART FUNCTIONALITY
// ==========================================================================

function toggleCart(isOpen) {
    const overlay = document.getElementById('cart-overlay');
    const panel = document.getElementById('cart-panel');
    
    if (isOpen) {
        overlay.classList.add('active');
        panel.classList.add('active');
        renderCartPanel();
    } else {
        overlay.classList.remove('active');
        panel.classList.remove('active');
    }
}

function addToCart(productId, quantity = 1, showCartPanel = true) {
    const product = PERFUMES_DATA.find(p => p.id === productId);
    if (!product) return;

    const existingItem = appState.cart.find(item => item.product.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        appState.cart.push({ product, quantity });
    }

    updateCartCountUI();
    
    if (showCartPanel) {
        toggleCart(true);
    }
}

function updateCartQuantity(productId, delta) {
    const cartItem = appState.cart.find(item => item.product.id === productId);
    if (!cartItem) return;

    cartItem.quantity += delta;
    if (cartItem.quantity <= 0) {
        appState.cart = appState.cart.filter(item => item.product.id !== productId);
    }

    updateCartCountUI();
    renderCartPanel();
}

function removeCartItem(productId) {
    appState.cart = appState.cart.filter(item => item.product.id !== productId);
    updateCartCountUI();
    renderCartPanel();
}

function updateCartCountUI() {
    const count = appState.cart.reduce((total, item) => total + item.quantity, 0);
    const badge = document.getElementById('cart-badge-count');
    if (badge) {
        badge.innerText = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }
}

function renderCartPanel() {
    const container = document.getElementById('cart-items-container');
    const footer = document.getElementById('cart-footer');
    if (!container || !footer) return;

    if (appState.cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart-message">
                <i class="fa-solid fa-bag-shopping"></i>
                <p>Keranjang belanja Anda kosong.</p>
                <button class="btn btn-primary btn-shop-now">Lihat Koleksi</button>
            </div>
        `;
        footer.style.display = 'none';
        
        container.querySelector('.btn-shop-now').addEventListener('click', () => {
            toggleCart(false);
            window.location.hash = 'collections';
        });
        return;
    }

    footer.style.display = 'block';
    container.innerHTML = '';
    
    let subtotal = 0;

    appState.cart.forEach(item => {
        const itemTotal = item.product.price * item.quantity;
        subtotal += itemTotal;

        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <div class="cart-item-img-container">
                <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-img" style="filter: ${item.product.imageFilter || 'none'}">
            </div>
            <div class="cart-item-info">
                <h4>${item.product.name}</h4>
                <div class="cart-item-price">${formatRupiah(item.product.price)}</div>
                <div class="cart-item-qty">
                    <button class="qty-btn dec-qty-btn" data-id="${item.product.id}"><i class="fa-solid fa-minus"></i></button>
                    <span class="qty-val">${item.quantity}</span>
                    <button class="qty-btn inc-qty-btn" data-id="${item.product.id}"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
            <div class="cart-item-actions">
                <button class="remove-item-btn" data-id="${item.product.id}"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `;

        cartItemDiv.querySelector('.dec-qty-btn').addEventListener('click', () => {
            updateCartQuantity(item.product.id, -1);
        });
        cartItemDiv.querySelector('.inc-qty-btn').addEventListener('click', () => {
            updateCartQuantity(item.product.id, 1);
        });
        cartItemDiv.querySelector('.remove-item-btn').addEventListener('click', () => {
            removeCartItem(item.product.id);
        });

        container.appendChild(cartItemDiv);
    });

    document.getElementById('cart-subtotal').innerText = formatRupiah(subtotal);
    appState.orderSummary.subtotal = subtotal;
}

// ==========================================================================
// CHECKOUT & SHIPPING
// ==========================================================================

function renderCheckoutSummary() {
    const listContainer = document.getElementById('checkout-items-list');
    const subtotalText = document.getElementById('checkout-subtotal');
    const shippingText = document.getElementById('checkout-shipping');
    const grandTotalText = document.getElementById('checkout-grand-total');

    if (!listContainer) return;

    if (appState.cart.length === 0) {
        listContainer.innerHTML = '<p class="text-muted">Tidak ada produk untuk checkout.</p>';
        subtotalText.innerText = 'Rp 0';
        grandTotalText.innerText = 'Rp 0';
        return;
    }

    listContainer.innerHTML = '';
    let subtotal = 0;

    appState.cart.forEach(item => {
        const itemTotal = item.product.price * item.quantity;
        subtotal += itemTotal;

        const row = document.createElement('div');
        row.className = 'summary-item-row';
        row.innerHTML = `
            <span class="summary-item-name">${item.product.name} (x${item.quantity})</span>
            <span class="summary-item-price">${formatRupiah(itemTotal)}</span>
        `;
        listContainer.appendChild(row);
    });

    const courierSelect = document.getElementById('shipping-courier');
    appState.shippingCost = parseInt(courierSelect.value) || 15000;

    const total = subtotal + appState.shippingCost;

    appState.orderSummary.subtotal = subtotal;
    appState.orderSummary.shipping = appState.shippingCost;
    appState.orderSummary.total = total;

    subtotalText.innerText = formatRupiah(subtotal);
    shippingText.innerText = formatRupiah(appState.shippingCost);
    grandTotalText.innerText = formatRupiah(total);
}

// ==========================================================================
// PAYMENT
// ==========================================================================

function renderPaymentSummary() {
    document.getElementById('payment-subtotal').innerText = formatRupiah(appState.orderSummary.subtotal);
    document.getElementById('payment-shipping').innerText = formatRupiah(appState.orderSummary.shipping);
    document.getElementById('payment-grand-total').innerText = formatRupiah(appState.orderSummary.total);
}

function formatCardNumber(value) {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
    }

    if (parts.length > 0) {
        return parts.join(' ');
    } else {
        return v;
    }
}

// ==========================================================================
// HELPERS
// ==========================================================================
function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number).replace('IDR', 'Rp');
}

function generateRandomOrderId() {
    return 'VW-' + Math.floor(100000 + Math.random() * 900000);
}

// ==========================================================================
// EVENTS INITIALIZATION
// ==========================================================================
function initAppEvents() {
    const authBtn = document.getElementById('auth-btn');
    authBtn.addEventListener('click', () => {
        if (appState.currentUser) {
            appState.currentUser = null;
            authBtn.innerHTML = '<i class="fa-regular fa-user"></i> <span class="btn-text">Masuk</span>';
            alert("Anda telah keluar dari akun.");
            window.location.hash = 'home';
        } else {
            window.location.hash = 'auth';
        }
    });

    document.getElementById('cart-btn').addEventListener('click', () => toggleCart(true));
    document.getElementById('close-cart-btn').addEventListener('click', () => toggleCart(false));
    document.getElementById('cart-overlay').addEventListener('click', () => toggleCart(false));

    document.querySelectorAll('.btn-shop-now').forEach(btn => {
        btn.addEventListener('click', () => {
            toggleCart(false);
            window.location.hash = 'collections';
        });
    });

    document.getElementById('btn-explore-story').addEventListener('click', () => {
        window.location.hash = 'about';
    });

    document.getElementById('btn-go-to-checkout').addEventListener('click', () => {
        toggleCart(false);
        window.location.hash = 'checkout';
    });

    document.getElementById('link-to-register').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('login-form-container').classList.remove('active');
        document.getElementById('register-form-container').classList.add('active');
    });

    document.getElementById('link-to-login').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('register-form-container').classList.remove('active');
        document.getElementById('login-form-container').classList.add('active');
    });

    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        appState.currentUser = { email: email, name: email.split('@')[0] };
        
        authBtn.innerHTML = `<i class="fa-solid fa-user-check"></i> <span class="btn-text">${appState.currentUser.name}</span>`;
        alert(`Selamat Datang, ${appState.currentUser.name}!`);
        window.location.hash = 'collections';
    });

    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        appState.currentUser = { email: email, name: name };

        authBtn.innerHTML = `<i class="fa-solid fa-user-check"></i> <span class="btn-text">${name}</span>`;
        alert(`Akun Anda berhasil didaftarkan. Selamat datang, ${name}!`);
        window.location.hash = 'collections';
    });

    const courierSelect = document.getElementById('shipping-courier');
    if (courierSelect) {
        courierSelect.addEventListener('change', () => {
            renderCheckoutSummary();
        });
    }

    document.getElementById('checkout-shipping-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (appState.cart.length === 0) {
            alert("Keranjang Anda kosong. Silakan belanja terlebih dahulu.");
            window.location.hash = 'collections';
            return;
        }

        appState.shippingAddress = {
            firstName: document.getElementById('shipping-first-name').value,
            lastName: document.getElementById('shipping-last-name').value,
            phone: document.getElementById('shipping-phone').value,
            address: document.getElementById('shipping-address').value,
            city: document.getElementById('shipping-city').value,
            zip: document.getElementById('shipping-zip').value
        };

        window.location.hash = 'payment';
    });

    const paymentTabs = document.querySelectorAll('.payment-tab');
    paymentTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            paymentTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const targetMethod = tab.getAttribute('data-method');
            document.querySelectorAll('.payment-method-content').forEach(form => {
                form.classList.remove('active');
            });
            document.getElementById(`payment-${targetMethod}`).classList.add('active');
        });
    });

    const ccNumInput = document.getElementById('cc-number');
    const ccNameInput = document.getElementById('cc-name');
    const ccExpiryInput = document.getElementById('cc-expiry');

    ccNumInput.addEventListener('input', (e) => {
        e.target.value = formatCardNumber(e.target.value);
        document.getElementById('card-preview-number').innerText = e.target.value || '•••• •••• •••• ••••';
    });

    ccNameInput.addEventListener('input', (e) => {
        document.getElementById('card-preview-name').innerText = e.target.value.toUpperCase() || 'VALEN PRATAMA';
    });

    ccExpiryInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/[^0-9]/g, '');
        if (value.length > 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        e.target.value = value;
        document.getElementById('card-preview-expiry').innerText = value || 'MM/YY';
    });

    const handleSuccessfulPayment = () => {
        const orderId = generateRandomOrderId();
        const addressText = `${appState.shippingAddress.address}, ${appState.shippingAddress.city}, ${appState.shippingAddress.zip}`;
        const nameText = `${appState.shippingAddress.firstName} ${appState.shippingAddress.lastName}`;

        document.getElementById('receipt-order-id').innerText = orderId;
        document.getElementById('receipt-name').innerText = nameText;
        document.getElementById('receipt-address').innerText = addressText;
        document.getElementById('receipt-total').innerText = formatRupiah(appState.orderSummary.total);

        appState.cart = [];
        updateCartCountUI();

        window.location.hash = 'success';
    };

    document.getElementById('credit-card-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const payBtn = document.getElementById('btn-pay-now');
        payBtn.disabled = true;
        payBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Memproses Transaksi...';

        setTimeout(() => {
            payBtn.disabled = false;
            payBtn.innerHTML = 'Bayar Sekarang';
            handleSuccessfulPayment();
        }, 1500);
    });

    document.getElementById('btn-pay-bank').addEventListener('click', () => {
        const btn = document.getElementById('btn-pay-bank');
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Memverifikasi Transaksi...';

        setTimeout(() => {
            btn.disabled = false;
            btn.innerHTML = 'Konfirmasi Pembayaran';
            handleSuccessfulPayment();
        }, 1000);
    });

    document.getElementById('btn-pay-qris').addEventListener('click', () => {
        const btn = document.getElementById('btn-pay-qris');
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Menunggu Pemindaian QRIS...';

        setTimeout(() => {
            btn.disabled = false;
            btn.innerHTML = 'Simulasi Pindai Berhasil';
            handleSuccessfulPayment();
        }, 1200);
    });

    document.getElementById('btn-back-to-home').addEventListener('click', () => {
        window.location.hash = 'home';
    });

    document.getElementById('btn-print-receipt').addEventListener('click', () => {
        window.print();
    });
}
