// Map Data - Places with coordinates
// Multilingual support: Thai (th), English (en), Chinese (zh)

const mapPlacesData = [
    // Bangkok
    {
        id: 1,
        name: {
            th: 'วัดพระศรีรัตนศาสดาราม (วัดพระแก้ว)',
            en: 'Temple of the Emerald Buddha',
            zh: '玉佛寺'
        },
        description: {
            th: 'วัดที่สำคัญที่สุดในประเทศไทย ตั้งอยู่ในเขตพระบรมมหาราชวัง',
            en: 'The most sacred Buddhist temple in Thailand, located within the Grand Palace',
            zh: '泰国最神圣的佛教寺庙，位于大皇宫内'
        },
        category: 'temple',
        lat: 13.7516,
        lng: 100.4927,
        image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=400',
        province: 'Bangkok',
        rating: 4.8
    },
    {
        id: 2,
        name: {
            th: 'วัดอรุณราชวราราม',
            en: 'Wat Arun (Temple of Dawn)',
            zh: '黎明寺'
        },
        description: {
            th: 'วัดที่มีพระปรางค์สูงตระหง่านริมแม่น้ำเจ้าพระยา',
            en: 'Iconic temple with towering spire on the Chao Phraya River',
            zh: '湄南河畔标志性的高塔寺庙'
        },
        category: 'temple',
        lat: 13.7437,
        lng: 100.4888,
        image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=400',
        province: 'Bangkok',
        rating: 4.7
    },
    {
        id: 3,
        name: {
            th: 'ไอคอนสยาม',
            en: 'ICONSIAM',
            zh: 'ICONSIAM购物中心'
        },
        description: {
            th: 'ศูนย์การค้าริมแม่น้ำที่ใหญ่ที่สุดในประเทศไทย',
            en: 'Thailand\'s largest riverside shopping mall',
            zh: '泰国最大的河滨购物中心'
        },
        category: 'shopping',
        lat: 13.7262,
        lng: 100.5098,
        image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400',
        province: 'Bangkok',
        rating: 4.6
    },
    {
        id: 4,
        name: {
            th: 'ตลาดนัดจตุจักร',
            en: 'Chatuchak Weekend Market',
            zh: '乍都乍周末市场'
        },
        description: {
            th: 'ตลาดนัดที่ใหญ่ที่สุดในโลก เปิดวันเสาร์-อาทิตย์',
            en: 'One of the world\'s largest weekend markets',
            zh: '世界上最大的周末市场之一'
        },
        category: 'shopping',
        lat: 13.7999,
        lng: 100.5503,
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400',
        province: 'Bangkok',
        rating: 4.5
    },
    {
        id: 5,
        name: {
            th: 'ถนนข้าวสาร',
            en: 'Khao San Road',
            zh: '考山路'
        },
        description: {
            th: 'ถนนสายเที่ยวที่มีชื่อเสียงระดับโลก',
            en: 'World-famous backpacker street',
            zh: '世界著名的背包客街'
        },
        category: 'attraction',
        lat: 13.7588,
        lng: 100.4974,
        image: 'https://images.unsplash.com/photo-1504457047772-27faf1c00561?w=400',
        province: 'Bangkok',
        rating: 4.3
    },
    // Chiang Mai
    {
        id: 6,
        name: {
            th: 'วัดพระธาตุดอยสุเทพ',
            en: 'Doi Suthep Temple',
            zh: '素贴山寺'
        },
        description: {
            th: 'วัดศักดิ์สิทธิ์บนยอดดอยสุเทพ สัญลักษณ์ของเชียงใหม่',
            en: 'Sacred temple atop Doi Suthep mountain, symbol of Chiang Mai',
            zh: '素贴山顶的神圣寺庙，清迈的象征'
        },
        category: 'temple',
        lat: 18.8048,
        lng: 98.9212,
        image: 'https://images.unsplash.com/photo-1598935898639-81629f717fcd?w=400',
        province: 'Chiang Mai',
        rating: 4.8
    },
    {
        id: 7,
        name: {
            th: 'ประตูท่าแพ',
            en: 'Tha Pae Gate',
            zh: '塔佩门'
        },
        description: {
            th: 'ประตูเมืองโบราณที่เป็นสัญลักษณ์ของเมืองเก่าเชียงใหม่',
            en: 'Historic city gate, landmark of Chiang Mai Old City',
            zh: '清迈古城的标志性城门'
        },
        category: 'attraction',
        lat: 18.7876,
        lng: 98.9936,
        image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=400',
        province: 'Chiang Mai',
        rating: 4.5
    },
    {
        id: 8,
        name: {
            th: 'ดอยอินทนนท์',
            en: 'Doi Inthanon',
            zh: '因他农山'
        },
        description: {
            th: 'ยอดเขาที่สูงที่สุดในประเทศไทย 2,565 เมตร',
            en: 'Thailand\'s highest peak at 2,565 meters',
            zh: '泰国最高峰，海拔2565米'
        },
        category: 'nature',
        lat: 18.5875,
        lng: 98.4867,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        province: 'Chiang Mai',
        rating: 4.7
    },
    // Phuket
    {
        id: 9,
        name: {
            th: 'หาดป่าตอง',
            en: 'Patong Beach',
            zh: '芭东海滩'
        },
        description: {
            th: 'หาดที่มีชื่อเสียงที่สุดในภูเก็ต เต็มไปด้วยกิจกรรมและความบันเทิง',
            en: 'Phuket\'s most famous beach with activities and entertainment',
            zh: '普吉岛最著名的海滩，充满活动和娱乐'
        },
        category: 'beach',
        lat: 7.8965,
        lng: 98.2965,
        image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=400',
        province: 'Phuket',
        rating: 4.4
    },
    {
        id: 10,
        name: {
            th: 'แหลมพรหมเทพ',
            en: 'Promthep Cape',
            zh: '神仙半岛'
        },
        description: {
            th: 'จุดชมพระอาทิตย์ตกที่สวยที่สุดในภูเก็ต',
            en: 'Best sunset viewpoint in Phuket',
            zh: '普吉岛最佳日落观景点'
        },
        category: 'attraction',
        lat: 7.7587,
        lng: 98.3036,
        image: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=400',
        province: 'Phuket',
        rating: 4.6
    },
    {
        id: 11,
        name: {
            th: 'เมืองเก่าภูเก็ต',
            en: 'Phuket Old Town',
            zh: '普吉古城'
        },
        description: {
            th: 'ย่านเมืองเก่าสไตล์ชิโน-โปรตุกีส',
            en: 'Historic Sino-Portuguese architecture district',
            zh: '中葡历史建筑区'
        },
        category: 'attraction',
        lat: 7.8844,
        lng: 98.3878,
        image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400',
        province: 'Phuket',
        rating: 4.5
    },
    // Krabi
    {
        id: 12,
        name: {
            th: 'เกาะพีพี',
            en: 'Phi Phi Islands',
            zh: '皮皮岛'
        },
        description: {
            th: 'หมู่เกาะที่สวยที่สุดแห่งหนึ่งของโลก',
            en: 'One of the most beautiful island groups in the world',
            zh: '世界上最美丽的岛屿之一'
        },
        category: 'island',
        lat: 7.7407,
        lng: 98.7784,
        image: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=400',
        province: 'Krabi',
        rating: 4.8
    },
    {
        id: 13,
        name: {
            th: 'หาดไร่เลย์',
            en: 'Railay Beach',
            zh: '莱雷海滩'
        },
        description: {
            th: 'หาดสวยล้อมรอบด้วยหน้าผาหินปูน เหมาะสำหรับปีนเขา',
            en: 'Beautiful beach surrounded by limestone cliffs, great for rock climbing',
            zh: '被石灰岩悬崖环绕的美丽海滩，非常适合攀岩'
        },
        category: 'beach',
        lat: 8.0105,
        lng: 98.8385,
        image: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=400',
        province: 'Krabi',
        rating: 4.7
    },
    // Ayutthaya
    {
        id: 14,
        name: {
            th: 'วัดมหาธาตุ',
            en: 'Wat Mahathat',
            zh: '玛哈泰寺'
        },
        description: {
            th: 'วัดโบราณที่มีพระพักตร์พระพุทธรูปในรากไม้',
            en: 'Ancient temple famous for Buddha head in tree roots',
            zh: '以树根中的佛头而闻名的古寺'
        },
        category: 'temple',
        lat: 14.3565,
        lng: 100.5684,
        image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=400',
        province: 'Ayutthaya',
        rating: 4.6
    },
    {
        id: 15,
        name: {
            th: 'วัดไชยวัฒนาราม',
            en: 'Wat Chaiwatthanaram',
            zh: '柴瓦塔那兰寺'
        },
        description: {
            th: 'วัดที่สวยงามที่สุดในอยุธยา ริมแม่น้ำเจ้าพระยา',
            en: 'Most beautiful temple in Ayutthaya, on Chao Phraya River',
            zh: '大城府最美的寺庙，位于湄南河畔'
        },
        category: 'temple',
        lat: 14.3428,
        lng: 100.5339,
        image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=400',
        province: 'Ayutthaya',
        rating: 4.7
    },
    // Chiang Rai
    {
        id: 16,
        name: {
            th: 'วัดร่องขุ่น',
            en: 'White Temple (Wat Rong Khun)',
            zh: '白庙'
        },
        description: {
            th: 'วัดสีขาวที่สวยงามที่สุดในประเทศไทย',
            en: 'Thailand\'s most stunning white temple',
            zh: '泰国最美丽的白色寺庙'
        },
        category: 'temple',
        lat: 19.8244,
        lng: 99.7631,
        image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400',
        province: 'Chiang Rai',
        rating: 4.8
    },
    {
        id: 17,
        name: {
            th: 'วัดร่องเสือเต้น (Blue Temple)',
            en: 'Blue Temple',
            zh: '蓝庙'
        },
        description: {
            th: 'วัดสีน้ำเงินที่สวยงามตระการตา',
            en: 'Stunning blue-colored temple',
            zh: '令人惊叹的蓝色寺庙'
        },
        category: 'temple',
        lat: 19.9361,
        lng: 99.8759,
        image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=400',
        province: 'Chiang Rai',
        rating: 4.6
    }
];

// Category icons and colors
const categoryConfig = {
    temple: {
        icon: 'fa-place-of-worship',
        color: '#FF6B35',
        label: { th: 'วัด', en: 'Temple', zh: '寺庙' }
    },
    beach: {
        icon: 'fa-umbrella-beach',
        color: '#00BCD4',
        label: { th: 'ชายหาด', en: 'Beach', zh: '海滩' }
    },
    island: {
        icon: 'fa-island-tropical',
        color: '#4CAF50',
        label: { th: 'เกาะ', en: 'Island', zh: '岛屿' }
    },
    nature: {
        icon: 'fa-mountain',
        color: '#8BC34A',
        label: { th: 'ธรรมชาติ', en: 'Nature', zh: '自然' }
    },
    attraction: {
        icon: 'fa-camera',
        color: '#9C27B0',
        label: { th: 'สถานที่ท่องเที่ยว', en: 'Attraction', zh: '景点' }
    },
    shopping: {
        icon: 'fa-shopping-bag',
        color: '#E91E63',
        label: { th: 'ช้อปปิ้ง', en: 'Shopping', zh: '购物' }
    },
    restaurant: {
        icon: 'fa-utensils',
        color: '#FF9800',
        label: { th: 'ร้านอาหาร', en: 'Restaurant', zh: '餐厅' }
    },
    hotel: {
        icon: 'fa-hotel',
        color: '#3F51B5',
        label: { th: 'ที่พัก', en: 'Hotel', zh: '酒店' }
    }
};

// Helper functions
function getMapPlaces() {
    return mapPlacesData;
}

function getMapPlacesByCategory(category) {
    return mapPlacesData.filter(place => place.category === category);
}

function getMapPlacesByProvince(province) {
    return mapPlacesData.filter(place => place.province === province);
}

function getCategoryConfig(category) {
    return categoryConfig[category] || categoryConfig.attraction;
}
