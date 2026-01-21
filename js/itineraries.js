// Travel Itineraries Data
// Multilingual support: Thai (th), English (en), Chinese (zh)

const itinerariesData = [
    {
        id: 1,
        slug: 'bangkok-3-days-classic',
        duration: 3,
        thumbnail: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600',
        coverImage: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200',
        destination: {
            th: 'กรุงเทพมหานคร',
            en: 'Bangkok',
            zh: '曼谷'
        },
        title: {
            th: '3 วัน 2 คืน กรุงเทพฯ คลาสสิค',
            en: '3 Days 2 Nights Classic Bangkok',
            zh: '3天2夜曼谷经典之旅'
        },
        description: {
            th: 'สัมผัสเสน่ห์กรุงเทพฯ ตั้งแต่วัดวาอาราม ตลาดน้ำ ไปจนถึงย่านช้อปปิ้งสุดฮิป',
            en: 'Experience the charm of Bangkok from temples, floating markets to trendy shopping districts',
            zh: '体验曼谷的魅力，从寺庙、水上市场到时尚购物区'
        },
        difficulty: 'easy',
        budget: {
            th: 'ประมาณ 5,000-8,000 บาท',
            en: 'Approx. $150-250 USD',
            zh: '约1000-1600元人民币'
        },
        bestSeason: {
            th: 'พฤศจิกายน - กุมภาพันธ์',
            en: 'November - February',
            zh: '11月至2月'
        },
        highlights: {
            th: ['วัดพระแก้ว', 'ตลาดน้ำดำเนินสะดวก', 'ถนนข้าวสาร', 'ไอคอนสยาม'],
            en: ['Grand Palace', 'Damnoen Saduak Floating Market', 'Khao San Road', 'ICONSIAM'],
            zh: ['大皇宫', '丹嫩沙多水上市场', '考山路', 'ICONSIAM购物中心']
        },
        days: [
            {
                day: 1,
                title: {
                    th: 'วัดวาอารามและพระบรมมหาราชวัง',
                    en: 'Temples and Grand Palace',
                    zh: '寺庙和大皇宫'
                },
                activities: [
                    {
                        time: '08:00',
                        activity: {
                            th: 'เริ่มต้นที่วัดพระศรีรัตนศาสดาราม (วัดพระแก้ว) และพระบรมมหาราชวัง',
                            en: 'Start at Wat Phra Kaew (Temple of the Emerald Buddha) and Grand Palace',
                            zh: '从玉佛寺和大皇宫开始'
                        },
                        location: 'Grand Palace',
                        duration: '3 hours',
                        tips: {
                            th: 'แต่งกายสุภาพ กางเกงขายาว ไม่เปิดไหล่',
                            en: 'Dress modestly, long pants, no bare shoulders',
                            zh: '穿着得体，长裤，不露肩'
                        }
                    },
                    {
                        time: '11:30',
                        activity: {
                            th: 'ข้ามเรือไปวัดอรุณราชวรารามราชวรมหาวิหาร',
                            en: 'Cross the river to Wat Arun (Temple of Dawn)',
                            zh: '乘船前往黎明寺'
                        },
                        location: 'Wat Arun',
                        duration: '1.5 hours',
                        tips: {
                            th: 'ค่าเรือข้ามฟาก 4 บาท',
                            en: 'Ferry costs 4 THB',
                            zh: '渡船费4泰铢'
                        }
                    },
                    {
                        time: '13:00',
                        activity: {
                            th: 'อาหารกลางวันที่ท่าเตียน ลองผัดไทยและก๋วยเตี๋ยวเรือ',
                            en: 'Lunch at Tha Tien, try Pad Thai and boat noodles',
                            zh: '在Tha Tien午餐，品尝泰式炒河粉和船面'
                        },
                        location: 'Tha Tien',
                        duration: '1 hour'
                    },
                    {
                        time: '14:30',
                        activity: {
                            th: 'เดินเล่นถนนข้าวสาร ช้อปปิ้งของที่ระลึก',
                            en: 'Walk around Khao San Road, shop for souvenirs',
                            zh: '漫步考山路，购买纪念品'
                        },
                        location: 'Khao San Road',
                        duration: '2 hours'
                    },
                    {
                        time: '18:00',
                        activity: {
                            th: 'ล่องเรือชมแม่น้ำเจ้าพระยายามค่ำ พร้อมอาหารเย็น',
                            en: 'Chao Phraya dinner cruise',
                            zh: '湄南河晚餐游船'
                        },
                        location: 'Chao Phraya River',
                        duration: '2.5 hours',
                        tips: {
                            th: 'จองล่วงหน้า ราคาประมาณ 1,500-2,500 บาท',
                            en: 'Book in advance, approx. 1,500-2,500 THB',
                            zh: '提前预订，约1500-2500泰铢'
                        }
                    }
                ]
            },
            {
                day: 2,
                title: {
                    th: 'ตลาดน้ำและช้อปปิ้ง',
                    en: 'Floating Market and Shopping',
                    zh: '水上市场和购物'
                },
                activities: [
                    {
                        time: '06:00',
                        activity: {
                            th: 'ออกเดินทางไปตลาดน้ำดำเนินสะดวก (ออกแต่เช้าเพื่อหลีกเลี่ยงนักท่องเที่ยว)',
                            en: 'Depart for Damnoen Saduak Floating Market (leave early to avoid crowds)',
                            zh: '前往丹嫩沙多水上市场（早出发避开人群）'
                        },
                        location: 'Damnoen Saduak',
                        duration: '4 hours',
                        tips: {
                            th: 'จองทัวร์หรือเช่ารถตู้ไปเอง ประมาณ 1-1.5 ชั่วโมงจากกรุงเทพฯ',
                            en: 'Book a tour or hire a van, about 1-1.5 hours from Bangkok',
                            zh: '预订旅游团或租面包车，距曼谷约1-1.5小时'
                        }
                    },
                    {
                        time: '11:00',
                        activity: {
                            th: 'แวะตลาดน้ำอัมพวา (ถ้ามีเวลา) หรือตลาดร่มหุบ',
                            en: 'Visit Amphawa Floating Market (if time permits) or Maeklong Railway Market',
                            zh: '参观安帕瓦水上市场（如有时间）或美功铁道市场'
                        },
                        location: 'Amphawa/Maeklong',
                        duration: '2 hours'
                    },
                    {
                        time: '14:00',
                        activity: {
                            th: 'กลับกรุงเทพฯ พักผ่อนที่โรงแรม',
                            en: 'Return to Bangkok, rest at hotel',
                            zh: '返回曼谷，在酒店休息'
                        },
                        location: 'Hotel',
                        duration: '2 hours'
                    },
                    {
                        time: '16:00',
                        activity: {
                            th: 'ช้อปปิ้งที่ไอคอนสยาม หรือ สยามพารากอน',
                            en: 'Shopping at ICONSIAM or Siam Paragon',
                            zh: '在ICONSIAM或暹罗百丽宫购物'
                        },
                        location: 'ICONSIAM / Siam',
                        duration: '3 hours'
                    },
                    {
                        time: '19:00',
                        activity: {
                            th: 'อาหารเย็นและชมวิวกรุงเทพฯ ที่ Sky Bar หรือ Rooftop Bar',
                            en: 'Dinner and Bangkok views at Sky Bar or rooftop bar',
                            zh: '在Sky Bar或屋顶酒吧用晚餐并欣赏曼谷美景'
                        },
                        location: 'Lebua / Banyan Tree',
                        duration: '2 hours',
                        tips: {
                            th: 'Dress code: Smart casual ห้ามใส่รองเท้าแตะ',
                            en: 'Dress code: Smart casual, no flip-flops',
                            zh: '着装要求：智能休闲，禁止穿拖鞋'
                        }
                    }
                ]
            },
            {
                day: 3,
                title: {
                    th: 'วัฒนธรรมและอำลากรุงเทพฯ',
                    en: 'Culture and Farewell Bangkok',
                    zh: '文化体验和告别曼谷'
                },
                activities: [
                    {
                        time: '08:00',
                        activity: {
                            th: 'ตักบาตรพระสงฆ์ที่วัดสระเกศ (ภูเขาทอง)',
                            en: 'Give alms to monks at Wat Saket (Golden Mount)',
                            zh: '在金山寺布施'
                        },
                        location: 'Wat Saket',
                        duration: '2 hours',
                        tips: {
                            th: 'ขึ้นไปชมวิวกรุงเทพฯ 360 องศา',
                            en: 'Climb up for 360-degree views of Bangkok',
                            zh: '登顶欣赏曼谷360度全景'
                        }
                    },
                    {
                        time: '10:30',
                        activity: {
                            th: 'เดินเล่นย่านเยาวราช (ไชน่าทาวน์) ชิมอาหารริมทาง',
                            en: 'Walk around Yaowarat (Chinatown), try street food',
                            zh: '漫步耀华力路（唐人街），品尝街头美食'
                        },
                        location: 'Yaowarat',
                        duration: '2 hours'
                    },
                    {
                        time: '13:00',
                        activity: {
                            th: 'นวดแผนไทยที่วัดโพธิ์ หรือสปาในเมือง',
                            en: 'Thai massage at Wat Pho or city spa',
                            zh: '在卧佛寺或城市水疗中心做泰式按摩'
                        },
                        location: 'Wat Pho',
                        duration: '1.5 hours',
                        tips: {
                            th: 'วัดโพธิ์เป็นโรงเรียนนวดแผนไทยแห่งแรก',
                            en: 'Wat Pho is the first Thai massage school',
                            zh: '卧佛寺是第一所泰式按摩学校'
                        }
                    },
                    {
                        time: '15:00',
                        activity: {
                            th: 'ซื้อของฝากที่ตลาดจตุจักร (เสาร์-อาทิตย์) หรือ MBK Center',
                            en: 'Buy souvenirs at Chatuchak Market (Sat-Sun) or MBK Center',
                            zh: '在乍都乍周末市场（周六日）或MBK购物中心购买纪念品'
                        },
                        location: 'Chatuchak / MBK',
                        duration: '2 hours'
                    },
                    {
                        time: '17:30',
                        activity: {
                            th: 'เดินทางไปสนามบิน',
                            en: 'Head to airport',
                            zh: '前往机场'
                        },
                        location: 'Airport',
                        duration: '-'
                    }
                ]
            }
        ],
        packingList: {
            th: ['เสื้อผ้าสบาย', 'รองเท้าเดินสบาย', 'ครีมกันแดด', 'ร่ม/เสื้อกันฝน', 'ผ้าคลุมไหล่สำหรับเข้าวัด'],
            en: ['Comfortable clothes', 'Walking shoes', 'Sunscreen', 'Umbrella/raincoat', 'Scarf for temple visits'],
            zh: ['舒适的衣服', '步行鞋', '防晒霜', '雨伞/雨衣', '参观寺庙用的围巾']
        },
        tags: ['bangkok', 'temples', 'shopping', 'food', 'culture'],
        featured: true
    },
    {
        id: 2,
        slug: 'chiang-mai-4-days-nature',
        duration: 4,
        thumbnail: 'https://images.unsplash.com/photo-1598935898639-81629f717fcd?w=600',
        coverImage: 'https://images.unsplash.com/photo-1598935898639-81629f717fcd?w=1200',
        destination: {
            th: 'เชียงใหม่',
            en: 'Chiang Mai',
            zh: '清迈'
        },
        title: {
            th: '4 วัน 3 คืน เชียงใหม่ ธรรมชาติและวัฒนธรรม',
            en: '4 Days 3 Nights Chiang Mai Nature & Culture',
            zh: '4天3夜清迈自然文化之旅'
        },
        description: {
            th: 'สัมผัสเสน่ห์ล้านนา วัดโบราณ ดอยสูง และปางช้าง',
            en: 'Experience Lanna charm, ancient temples, mountains, and elephant sanctuary',
            zh: '体验兰纳魅力、古寺、高山和大象保护区'
        },
        difficulty: 'moderate',
        budget: {
            th: 'ประมาณ 8,000-12,000 บาท',
            en: 'Approx. $250-350 USD',
            zh: '约1600-2400元人民币'
        },
        bestSeason: {
            th: 'พฤศจิกายน - กุมภาพันธ์',
            en: 'November - February',
            zh: '11月至2月'
        },
        highlights: {
            th: ['วัดพระธาตุดอยสุเทพ', 'ดอยอินทนนท์', 'ปางช้าง', 'ถนนคนเดิน'],
            en: ['Doi Suthep Temple', 'Doi Inthanon', 'Elephant Sanctuary', 'Walking Street'],
            zh: ['素贴寺', '因他农山', '大象保护区', '步行街']
        },
        days: [
            {
                day: 1,
                title: {
                    th: 'เมืองเก่าและวัดโบราณ',
                    en: 'Old City and Ancient Temples',
                    zh: '古城和古寺'
                },
                activities: [
                    {
                        time: '09:00',
                        activity: {
                            th: 'เดินเที่ยวเมืองเก่าเชียงใหม่ ชมกำแพงเมือง ประตูท่าแพ',
                            en: 'Walk around Chiang Mai Old City, see city walls, Tha Pae Gate',
                            zh: '漫步清迈古城，参观城墙和塔佩门'
                        },
                        location: 'Old City',
                        duration: '2 hours'
                    },
                    {
                        time: '11:00',
                        activity: {
                            th: 'วัดพระสิงห์ วัดเจดีย์หลวง วัดเชียงมั่น',
                            en: 'Visit Wat Phra Singh, Wat Chedi Luang, Wat Chiang Man',
                            zh: '参观帕辛寺、大佛塔寺、清曼寺'
                        },
                        location: 'Old City Temples',
                        duration: '3 hours'
                    },
                    {
                        time: '14:00',
                        activity: {
                            th: 'อาหารกลางวันข้าวซอยที่ร้านดัง',
                            en: 'Lunch: Famous Khao Soi noodles',
                            zh: '午餐：著名的咖喱面'
                        },
                        location: 'Khao Soi Khun Yai',
                        duration: '1 hour'
                    },
                    {
                        time: '15:30',
                        activity: {
                            th: 'ขึ้นดอยสุเทพ ไหว้พระธาตุดอยสุเทพ',
                            en: 'Visit Doi Suthep Temple',
                            zh: '参观素贴山寺'
                        },
                        location: 'Doi Suthep',
                        duration: '3 hours',
                        tips: {
                            th: 'บันได 309 ขั้น หรือขึ้นกระเช้า',
                            en: '309 steps or take the cable car',
                            zh: '309级台阶或乘缆车'
                        }
                    },
                    {
                        time: '19:00',
                        activity: {
                            th: 'ถนนคนเดิน (อาทิตย์: ถนนราชดำเนิน, เสาร์: วัวลาย)',
                            en: 'Walking Street (Sun: Ratchadamnoen, Sat: Wua Lai)',
                            zh: '步行街（周日：拉差丹能，周六：Wua Lai）'
                        },
                        location: 'Walking Street',
                        duration: '2 hours'
                    }
                ]
            },
            {
                day: 2,
                title: {
                    th: 'ดอยอินทนนท์ หลังคาประเทศไทย',
                    en: 'Doi Inthanon - Roof of Thailand',
                    zh: '因他农山 - 泰国之巅'
                },
                activities: [
                    {
                        time: '06:00',
                        activity: {
                            th: 'ออกเดินทางไปดอยอินทนนท์',
                            en: 'Depart for Doi Inthanon',
                            zh: '出发前往因他农山'
                        },
                        location: 'Doi Inthanon',
                        duration: '2 hours drive'
                    },
                    {
                        time: '08:30',
                        activity: {
                            th: 'ชมพระมหาธาตุนภเมทนีดลและนภพลภูมิสิริ',
                            en: 'Visit Twin Royal Pagodas',
                            zh: '参观双子皇家佛塔'
                        },
                        location: 'Royal Pagodas',
                        duration: '1.5 hours'
                    },
                    {
                        time: '10:30',
                        activity: {
                            th: 'จุดสูงสุดของประเทศไทย 2,565 เมตร',
                            en: 'Highest point in Thailand at 2,565m',
                            zh: '泰国最高点，海拔2565米'
                        },
                        location: 'Summit',
                        duration: '1 hour',
                        tips: {
                            th: 'อากาศเย็น เตรียมเสื้อกันหนาว',
                            en: 'Cold weather, bring warm jacket',
                            zh: '天气寒冷，带保暖外套'
                        }
                    },
                    {
                        time: '12:00',
                        activity: {
                            th: 'เดินป่าชมน้ำตกวชิรธาร',
                            en: 'Trek to Wachirathan Waterfall',
                            zh: '徒步前往Wachirathan瀑布'
                        },
                        location: 'Wachirathan Waterfall',
                        duration: '1.5 hours'
                    },
                    {
                        time: '14:00',
                        activity: {
                            th: 'อาหารกลางวันและเยี่ยมชมหมู่บ้านชาวเขา',
                            en: 'Lunch and visit hill tribe village',
                            zh: '午餐并参观山地部落村庄'
                        },
                        location: 'Hill Tribe Village',
                        duration: '2 hours'
                    },
                    {
                        time: '17:00',
                        activity: {
                            th: 'กลับเชียงใหม่ พักผ่อน',
                            en: 'Return to Chiang Mai, rest',
                            zh: '返回清迈，休息'
                        },
                        location: 'Hotel',
                        duration: '-'
                    }
                ]
            },
            {
                day: 3,
                title: {
                    th: 'ปางช้างและธรรมชาติ',
                    en: 'Elephant Sanctuary & Nature',
                    zh: '大象保护区与自然'
                },
                activities: [
                    {
                        time: '07:30',
                        activity: {
                            th: 'เดินทางไปปางช้างจริยธรรม (Ethical Elephant Sanctuary)',
                            en: 'Visit ethical elephant sanctuary',
                            zh: '参观道德大象保护区'
                        },
                        location: 'Elephant Sanctuary',
                        duration: 'Full day',
                        tips: {
                            th: 'เลือกปางช้างที่ไม่ขี่ช้าง เน้นการดูแลและให้อาหาร',
                            en: 'Choose no-riding sanctuary, focus on care and feeding',
                            zh: '选择不骑大象的保护区，专注于照顾和喂食'
                        }
                    },
                    {
                        time: '08:30',
                        activity: {
                            th: 'เรียนรู้เกี่ยวกับช้างไทย ให้อาหารช้าง',
                            en: 'Learn about Thai elephants, feed elephants',
                            zh: '了解泰国大象，喂食大象'
                        },
                        location: 'Elephant Sanctuary',
                        duration: '2 hours'
                    },
                    {
                        time: '11:00',
                        activity: {
                            th: 'อาบน้ำช้างในแม่น้ำ',
                            en: 'Bathe elephants in the river',
                            zh: '在河里给大象洗澡'
                        },
                        location: 'Elephant Sanctuary',
                        duration: '1.5 hours'
                    },
                    {
                        time: '12:30',
                        activity: {
                            th: 'อาหารกลางวันแบบพื้นเมือง',
                            en: 'Local lunch',
                            zh: '当地午餐'
                        },
                        location: 'Elephant Sanctuary',
                        duration: '1 hour'
                    },
                    {
                        time: '14:00',
                        activity: {
                            th: 'เดินป่าสั้นๆ หรือทำกิจกรรมกับช้าง',
                            en: 'Short jungle trek or more elephant activities',
                            zh: '短途丛林徒步或更多大象活动'
                        },
                        location: 'Elephant Sanctuary',
                        duration: '2 hours'
                    },
                    {
                        time: '16:30',
                        activity: {
                            th: 'กลับเชียงใหม่',
                            en: 'Return to Chiang Mai',
                            zh: '返回清迈'
                        },
                        location: 'Hotel',
                        duration: '-'
                    },
                    {
                        time: '19:00',
                        activity: {
                            th: 'ขันโตกดินเนอร์ พร้อมการแสดงพื้นเมือง',
                            en: 'Khantoke dinner with traditional show',
                            zh: 'Khantoke晚餐配传统表演'
                        },
                        location: 'Khum Khantoke',
                        duration: '2 hours'
                    }
                ]
            },
            {
                day: 4,
                title: {
                    th: 'คาเฟ่และอำลาเชียงใหม่',
                    en: 'Cafes and Farewell Chiang Mai',
                    zh: '咖啡馆和告别清迈'
                },
                activities: [
                    {
                        time: '08:00',
                        activity: {
                            th: 'กาแฟยามเช้าที่คาเฟ่วิวสวย',
                            en: 'Morning coffee at scenic cafe',
                            zh: '在风景咖啡馆享用早晨咖啡'
                        },
                        location: 'No.39 Cafe / Rustic & Blue',
                        duration: '1.5 hours'
                    },
                    {
                        time: '10:00',
                        activity: {
                            th: 'ช้อปปิ้งของฝากที่ตลาดวโรรส',
                            en: 'Shop for souvenirs at Warorot Market',
                            zh: '在瓦洛洛市场购买纪念品'
                        },
                        location: 'Warorot Market',
                        duration: '2 hours',
                        tips: {
                            th: 'ซื้อแคบหมู ไส้อั่ว น้ำพริกหนุ่ม',
                            en: 'Buy pork rinds, sausage, green chili dip',
                            zh: '购买猪皮、香肠、青辣椒酱'
                        }
                    },
                    {
                        time: '12:30',
                        activity: {
                            th: 'อาหารกลางวันที่ร้านเฮือนเพ็ญ',
                            en: 'Lunch at Huen Phen restaurant',
                            zh: '在Huen Phen餐厅午餐'
                        },
                        location: 'Huen Phen',
                        duration: '1 hour'
                    },
                    {
                        time: '14:00',
                        activity: {
                            th: 'เดินทางไปสนามบิน',
                            en: 'Head to airport',
                            zh: '前往机场'
                        },
                        location: 'Airport',
                        duration: '-'
                    }
                ]
            }
        ],
        packingList: {
            th: ['เสื้อกันหนาว', 'รองเท้าเดินป่า', 'ชุดเปียกน้ำได้', 'กล้องถ่ายรูป', 'ยากันยุง'],
            en: ['Warm jacket', 'Hiking shoes', 'Clothes that can get wet', 'Camera', 'Mosquito repellent'],
            zh: ['保暖外套', '登山鞋', '可弄湿的衣服', '相机', '驱蚊剂']
        },
        tags: ['chiang-mai', 'nature', 'temples', 'elephants', 'mountains'],
        featured: true
    },
    {
        id: 3,
        slug: 'phuket-krabi-5-days-beach',
        duration: 5,
        thumbnail: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=600',
        coverImage: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=1200',
        destination: {
            th: 'ภูเก็ต - กระบี่',
            en: 'Phuket - Krabi',
            zh: '普吉岛 - 甲米'
        },
        title: {
            th: '5 วัน 4 คืน ภูเก็ต-กระบี่ ทะเลใต้สุดฟิน',
            en: '5 Days 4 Nights Phuket-Krabi Beach Paradise',
            zh: '5天4夜普吉岛-甲米海滩天堂'
        },
        description: {
            th: 'เที่ยวทะเลอันดามัน ดำน้ำดูปะการัง เกาะพีพี และหาดทรายขาว',
            en: 'Explore Andaman Sea, snorkel coral reefs, Phi Phi Islands, and white sandy beaches',
            zh: '探索安达曼海，浮潜珊瑚礁，皮皮岛和白色沙滩'
        },
        difficulty: 'easy',
        budget: {
            th: 'ประมาณ 12,000-18,000 บาท',
            en: 'Approx. $350-550 USD',
            zh: '约2400-3800元人民币'
        },
        bestSeason: {
            th: 'พฤศจิกายน - เมษายน',
            en: 'November - April',
            zh: '11月至4月'
        },
        highlights: {
            th: ['เกาะพีพี', 'หาดในหาน', 'อ่าวพังงา', 'ระลอง'],
            en: ['Phi Phi Islands', 'Nai Harn Beach', 'Phang Nga Bay', 'Railay Beach'],
            zh: ['皮皮岛', '奈汉海滩', '攀牙湾', '莱雷海滩']
        },
        days: [
            {
                day: 1,
                title: {
                    th: 'ถึงภูเก็ต ผ่อนคลายริมหาด',
                    en: 'Arrive Phuket, Beach Relaxation',
                    zh: '抵达普吉岛，海滩放松'
                },
                activities: [
                    {
                        time: '12:00',
                        activity: {
                            th: 'เช็คอินที่พัก พักผ่อนริมสระ',
                            en: 'Check-in hotel, relax by the pool',
                            zh: '入住酒店，泳池边放松'
                        },
                        location: 'Hotel',
                        duration: '2 hours'
                    },
                    {
                        time: '15:00',
                        activity: {
                            th: 'เที่ยวหาดป่าตอง เล่นน้ำ นอนอาบแดด',
                            en: 'Visit Patong Beach, swim, sunbathe',
                            zh: '游览芭东海滩，游泳，日光浴'
                        },
                        location: 'Patong Beach',
                        duration: '3 hours'
                    },
                    {
                        time: '18:30',
                        activity: {
                            th: 'ชมพระอาทิตย์ตกที่แหลมพรหมเทพ',
                            en: 'Watch sunset at Promthep Cape',
                            zh: '在神仙半岛观看日落'
                        },
                        location: 'Promthep Cape',
                        duration: '1 hour',
                        tips: {
                            th: 'ไปถึงก่อนพระอาทิตย์ตก 30 นาที',
                            en: 'Arrive 30 mins before sunset',
                            zh: '日落前30分钟到达'
                        }
                    },
                    {
                        time: '20:00',
                        activity: {
                            th: 'อาหารทะเลสดๆ ที่หาดราไวย์',
                            en: 'Fresh seafood dinner at Rawai Beach',
                            zh: '在拉威海滩享用新鲜海鲜晚餐'
                        },
                        location: 'Rawai Beach',
                        duration: '2 hours'
                    }
                ]
            },
            {
                day: 2,
                title: {
                    th: 'One Day Trip เกาะพีพี',
                    en: 'Phi Phi Islands Day Trip',
                    zh: '皮皮岛一日游'
                },
                activities: [
                    {
                        time: '07:00',
                        activity: {
                            th: 'ขึ้นเรือ Speed Boat ไปเกาะพีพี',
                            en: 'Board speed boat to Phi Phi Islands',
                            zh: '乘快艇前往皮皮岛'
                        },
                        location: 'Rassada Pier',
                        duration: '1.5 hours'
                    },
                    {
                        time: '09:00',
                        activity: {
                            th: 'ดำน้ำตื้นที่อ่าวมาหยา (ถ้าเปิด) หรืออ่าวปิเละ',
                            en: 'Snorkel at Maya Bay (if open) or Pileh Lagoon',
                            zh: '在玛雅湾浮潜（如开放）或皮莱湾'
                        },
                        location: 'Phi Phi Leh',
                        duration: '2 hours'
                    },
                    {
                        time: '11:30',
                        activity: {
                            th: 'ดำน้ำดูปะการังและปลาสวยงาม',
                            en: 'Snorkel to see coral and fish',
                            zh: '浮潜观赏珊瑚和鱼类'
                        },
                        location: 'Snorkeling Point',
                        duration: '1.5 hours'
                    },
                    {
                        time: '13:00',
                        activity: {
                            th: 'อาหารกลางวันบนเกาะพีพีดอน',
                            en: 'Lunch on Phi Phi Don',
                            zh: '在大皮皮岛午餐'
                        },
                        location: 'Phi Phi Don',
                        duration: '1 hour'
                    },
                    {
                        time: '14:30',
                        activity: {
                            th: 'ขึ้น Viewpoint ชมวิวอ่าวทั้งสอง',
                            en: 'Climb to Viewpoint for bay views',
                            zh: '登上观景点欣赏海湾美景'
                        },
                        location: 'Phi Phi Viewpoint',
                        duration: '1.5 hours'
                    },
                    {
                        time: '16:30',
                        activity: {
                            th: 'เดินทางกลับภูเก็ต',
                            en: 'Return to Phuket',
                            zh: '返回普吉岛'
                        },
                        location: 'Phuket',
                        duration: '1.5 hours'
                    }
                ]
            },
            {
                day: 3,
                title: {
                    th: 'เมืองเก่าภูเก็ตและย้ายไปกระบี่',
                    en: 'Phuket Old Town & Transfer to Krabi',
                    zh: '普吉古城和转移到甲米'
                },
                activities: [
                    {
                        time: '08:00',
                        activity: {
                            th: 'เดินเที่ยวเมืองเก่าภูเก็ต ชมตึกชิโนโปรตุกีส',
                            en: 'Walk around Phuket Old Town, see Sino-Portuguese buildings',
                            zh: '漫步普吉古城，参观中葡建筑'
                        },
                        location: 'Phuket Old Town',
                        duration: '2 hours'
                    },
                    {
                        time: '10:30',
                        activity: {
                            th: 'กาแฟและขนมที่คาเฟ่น่ารัก',
                            en: 'Coffee and dessert at cute cafes',
                            zh: '在可爱的咖啡馆喝咖啡和甜点'
                        },
                        location: 'Old Town Cafes',
                        duration: '1 hour'
                    },
                    {
                        time: '12:00',
                        activity: {
                            th: 'เดินทางไปกระบี่ (รถตู้หรือเรือ)',
                            en: 'Travel to Krabi (minivan or ferry)',
                            zh: '前往甲米（面包车或渡轮）'
                        },
                        location: 'En route',
                        duration: '3 hours'
                    },
                    {
                        time: '15:30',
                        activity: {
                            th: 'เช็คอินที่พัก อ่าวนาง',
                            en: 'Check-in at Ao Nang',
                            zh: '在奥南入住'
                        },
                        location: 'Ao Nang',
                        duration: '1 hour'
                    },
                    {
                        time: '17:00',
                        activity: {
                            th: 'เที่ยวหาดอ่าวนาง ชมพระอาทิตย์ตก',
                            en: 'Visit Ao Nang Beach, watch sunset',
                            zh: '游览奥南海滩，观看日落'
                        },
                        location: 'Ao Nang Beach',
                        duration: '2 hours'
                    },
                    {
                        time: '19:30',
                        activity: {
                            th: 'อาหารเย็นและเดินเล่นถนนอ่าวนาง',
                            en: 'Dinner and walk along Ao Nang street',
                            zh: '晚餐和漫步奥南街'
                        },
                        location: 'Ao Nang',
                        duration: '2 hours'
                    }
                ]
            },
            {
                day: 4,
                title: {
                    th: '4 เกาะกระบี่',
                    en: 'Krabi 4 Islands Tour',
                    zh: '甲米四岛游'
                },
                activities: [
                    {
                        time: '08:30',
                        activity: {
                            th: 'ขึ้นเรือหางยาวไป 4 เกาะ',
                            en: 'Board longtail boat for 4 islands',
                            zh: '乘长尾船前往四岛'
                        },
                        location: 'Ao Nang Pier',
                        duration: '-'
                    },
                    {
                        time: '09:30',
                        activity: {
                            th: 'เกาะไก่ ถ่ายรูปกับหินรูปไก่',
                            en: 'Chicken Island, photo with chicken rock',
                            zh: '鸡岛，与鸡形岩石合影'
                        },
                        location: 'Koh Kai',
                        duration: '45 mins'
                    },
                    {
                        time: '10:30',
                        activity: {
                            th: 'เกาะทับ เดินทะเลแหวก',
                            en: 'Koh Tup, walk on sandbar between islands',
                            zh: '塔普岛，在岛间沙洲上行走'
                        },
                        location: 'Koh Tup',
                        duration: '1 hour'
                    },
                    {
                        time: '12:00',
                        activity: {
                            th: 'เกาะปอดะ ดำน้ำและอาหารกลางวัน',
                            en: 'Poda Island, snorkeling and lunch',
                            zh: '波达岛，浮潜和午餐'
                        },
                        location: 'Koh Poda',
                        duration: '2.5 hours'
                    },
                    {
                        time: '15:00',
                        activity: {
                            th: 'หาดพระนาง หาดสวยระดับโลก',
                            en: 'Phra Nang Beach, world-class beautiful beach',
                            zh: '帕南海滩，世界级美丽海滩'
                        },
                        location: 'Phra Nang Beach',
                        duration: '2 hours'
                    },
                    {
                        time: '17:30',
                        activity: {
                            th: 'กลับอ่าวนาง',
                            en: 'Return to Ao Nang',
                            zh: '返回奥南'
                        },
                        location: 'Ao Nang',
                        duration: '-'
                    }
                ]
            },
            {
                day: 5,
                title: {
                    th: 'ระลองและอำลากระบี่',
                    en: 'Railay Beach & Farewell Krabi',
                    zh: '莱雷海滩和告别甲米'
                },
                activities: [
                    {
                        time: '08:00',
                        activity: {
                            th: 'นั่งเรือหางยาวไปหาดระลอง (15 นาที)',
                            en: 'Longtail boat to Railay Beach (15 mins)',
                            zh: '乘长尾船前往莱雷海滩（15分钟）'
                        },
                        location: 'Railay Beach',
                        duration: '15 mins'
                    },
                    {
                        time: '08:30',
                        activity: {
                            th: 'เดินเที่ยวหาดระลอง ปีนเขาหินปูน (ถ้าสนใจ)',
                            en: 'Explore Railay, rock climbing (if interested)',
                            zh: '探索莱雷，攀岩（如有兴趣）'
                        },
                        location: 'Railay Beach',
                        duration: '3 hours'
                    },
                    {
                        time: '11:30',
                        activity: {
                            th: 'อาหารกลางวันริมหาด',
                            en: 'Beachside lunch',
                            zh: '海边午餐'
                        },
                        location: 'Railay Beach',
                        duration: '1 hour'
                    },
                    {
                        time: '13:00',
                        activity: {
                            th: 'กลับอ่าวนาง เก็บของ',
                            en: 'Return to Ao Nang, pack up',
                            zh: '返回奥南，打包'
                        },
                        location: 'Hotel',
                        duration: '1.5 hours'
                    },
                    {
                        time: '15:00',
                        activity: {
                            th: 'เดินทางไปสนามบินกระบี่',
                            en: 'Transfer to Krabi Airport',
                            zh: '前往甲米机场'
                        },
                        location: 'Airport',
                        duration: '-'
                    }
                ]
            }
        ],
        packingList: {
            th: ['ชุดว่ายน้ำ', 'ครีมกันแดด SPF50', 'แว่นดำน้ำ', 'รองเท้าแตะ', 'กระเป๋ากันน้ำ'],
            en: ['Swimsuit', 'SPF50 sunscreen', 'Snorkel mask', 'Flip-flops', 'Waterproof bag'],
            zh: ['泳衣', 'SPF50防晒霜', '浮潜面罩', '人字拖', '防水袋']
        },
        tags: ['phuket', 'krabi', 'beach', 'islands', 'snorkeling'],
        featured: true
    }
];

// Helper functions
function getItineraries() {
    return itinerariesData;
}

function getItineraryBySlug(slug) {
    return itinerariesData.find(itinerary => itinerary.slug === slug);
}

function getFeaturedItineraries(limit = 3) {
    return itinerariesData.filter(itinerary => itinerary.featured).slice(0, limit);
}

function getItinerariesByDestination(destination) {
    return itinerariesData.filter(itinerary =>
        itinerary.destination.en.toLowerCase().includes(destination.toLowerCase()) ||
        itinerary.destination.th.includes(destination)
    );
}

function getItinerariesByDuration(days) {
    return itinerariesData.filter(itinerary => itinerary.duration === days);
}
