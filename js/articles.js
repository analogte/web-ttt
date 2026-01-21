// Articles Data for Thailand Travel Guide
// Supports: Thai (th), English (en), Chinese (zh)

const articlesData = [
    {
        id: 1,
        slug: "top-10-temples-thailand",
        category: "attractions",
        image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=800",
        readTime: 8,
        date: "2026-01-15",
        featured: true,
        th: {
            title: "10 วัดสวยที่สุดในประเทศไทยที่ต้องไปสักครั้ง",
            excerpt: "รวมวัดที่สวยงามและศักดิ์สิทธิ์ที่สุดในประเทศไทย ตั้งแต่วัดพระแก้วไปจนถึงวัดร่องขุ่น",
            content: `
                <p>ประเทศไทยขึ้นชื่อเรื่องวัดวาอารามที่สวยงามและมีความสำคัญทางประวัติศาสตร์ วันนี้เรามารวม 10 วัดที่ต้องไปเยือนให้ได้</p>

                <h3>1. วัดพระศรีรัตนศาสดาราม (วัดพระแก้ว)</h3>
                <p>วัดที่สำคัญที่สุดในประเทศไทย ตั้งอยู่ในเขตพระบรมมหาราชวัง เป็นที่ประดิษฐานพระแก้วมรกต พระพุทธรูปคู่บ้านคู่เมือง</p>

                <h3>2. วัดอรุณราชวรารามฯ (วัดแจ้ง)</h3>
                <p>วัดริมแม่น้ำเจ้าพระยาที่มีพระปรางค์องค์ใหญ่สูงตระหง่าน เป็นสัญลักษณ์ของกรุงเทพฯ ยามค่ำคืนสวยงามมาก</p>

                <h3>3. วัดร่องขุ่น จ.เชียงราย</h3>
                <p>วัดสีขาวบริสุทธิ์ที่ออกแบบโดยอาจารย์เฉลิมชัย โฆษิตพิพัฒน์ ศิลปินแห่งชาติ เป็นงานศิลปะร่วมสมัยที่สวยงามตระการตา</p>

                <h3>4. วัดพระธาตุดอยสุเทพ จ.เชียงใหม่</h3>
                <p>วัดศักดิ์สิทธิ์บนยอดดอยสุเทพ มองเห็นวิวเมืองเชียงใหม่ได้ทั้งเมือง เป็นสถานที่แสวงบุญสำคัญของชาวเหนือ</p>

                <h3>5. วัดพระมหาธาตุวรมหาวิหาร จ.นครศรีธรรมราช</h3>
                <p>วัดที่มีเจดีย์ทรงระฆังคว่ำอันเป็นเอกลักษณ์ เป็นศูนย์กลางพุทธศาสนาของภาคใต้</p>

                <h3>6. วัดเบญจมบพิตรดุสิตวนารามฯ</h3>
                <p>วัดหินอ่อนที่สวยที่สุดในประเทศไทย สร้างด้วยหินอ่อนจากอิตาลี มีพระพุทธรูปสำคัญจากทั่วประเทศ</p>

                <h3>7. วัดโพธิ์ (วัดพระเชตุพนฯ)</h3>
                <p>วัดที่มีพระพุทธไสยาสน์องค์ใหญ่ที่สุดในกรุงเทพฯ และเป็นต้นกำเนิดของการนวดแผนไทย</p>

                <h3>8. วัดพระศรีสรรเพชญ์ จ.พระนครศรีอยุธยา</h3>
                <p>วัดหลวงประจำพระราชวังโบราณอยุธยา มีเจดีย์สามองค์เรียงรายที่สง่างาม</p>

                <h3>9. วัดร่องเสือเต้น จ.เชียงราย</h3>
                <p>วัดสีน้ำเงินที่ออกแบบโดยลูกศิษย์อาจารย์เฉลิมชัย สวยงามแปลกตาไม่เหมือนใคร</p>

                <h3>10. วัดพระธาตุพนม จ.นครพนม</h3>
                <p>พระธาตุศักดิ์สิทธิ์ริมแม่น้ำโขง เป็นศูนย์รวมจิตใจของชาวอีสาน</p>

                <h3>เคล็ดลับการเที่ยววัด</h3>
                <ul>
                    <li>แต่งกายสุภาพ ปิดไหล่และเข่า</li>
                    <li>ถอดรองเท้าก่อนเข้าโบสถ์/วิหาร</li>
                    <li>ไม่ชี้เท้าไปที่พระพุทธรูป</li>
                    <li>เคารพสถานที่และไม่ส่งเสียงดัง</li>
                </ul>
            `
        },
        en: {
            title: "Top 10 Most Beautiful Temples in Thailand You Must Visit",
            excerpt: "A collection of the most beautiful and sacred temples in Thailand, from Wat Phra Kaew to the White Temple.",
            content: `
                <p>Thailand is famous for its stunning temples with historical significance. Here are 10 temples you must visit.</p>

                <h3>1. Wat Phra Kaew (Temple of the Emerald Buddha)</h3>
                <p>The most important temple in Thailand, located within the Grand Palace compound. Home to the Emerald Buddha, the most revered Buddha image in the country.</p>

                <h3>2. Wat Arun (Temple of Dawn)</h3>
                <p>A riverside temple with a magnificent spire that has become a symbol of Bangkok. Especially beautiful at night when illuminated.</p>

                <h3>3. Wat Rong Khun, Chiang Rai</h3>
                <p>The pure white temple designed by national artist Chalermchai Kositpipat. A stunning contemporary art masterpiece.</p>

                <h3>4. Wat Phra That Doi Suthep, Chiang Mai</h3>
                <p>Sacred temple on Doi Suthep mountain with panoramic views of Chiang Mai city. An important pilgrimage site for Northern Thais.</p>

                <h3>5. Wat Phra Mahathat, Nakhon Si Thammarat</h3>
                <p>Temple with a distinctive bell-shaped chedi, the center of Buddhism in Southern Thailand.</p>

                <h3>6. Wat Benchamabophit (The Marble Temple)</h3>
                <p>The most beautiful marble temple in Thailand, built with Italian Carrara marble.</p>

                <h3>7. Wat Pho (Temple of the Reclining Buddha)</h3>
                <p>Home to the largest reclining Buddha in Bangkok and birthplace of Thai massage.</p>

                <h3>8. Wat Phra Si Sanphet, Ayutthaya</h3>
                <p>The royal temple of the ancient Ayutthaya palace with three elegant chedis in a row.</p>

                <h3>9. Wat Rong Suea Ten, Chiang Rai</h3>
                <p>The Blue Temple designed by a student of Chalermchai, uniquely beautiful.</p>

                <h3>10. Wat Phra That Phanom, Nakhon Phanom</h3>
                <p>Sacred temple by the Mekong River, spiritual center for Isan people.</p>

                <h3>Temple Etiquette Tips</h3>
                <ul>
                    <li>Dress modestly - cover shoulders and knees</li>
                    <li>Remove shoes before entering buildings</li>
                    <li>Never point feet at Buddha images</li>
                    <li>Be respectful and keep quiet</li>
                </ul>
            `
        },
        zh: {
            title: "泰国最美的10座寺庙必去之地",
            excerpt: "汇集泰国最美丽、最神圣的寺庙，从玉佛寺到白庙。",
            content: `
                <p>泰国以其令人惊叹的寺庙和历史意义而闻名。以下是您必须参观的10座寺庙。</p>

                <h3>1. 玉佛寺</h3>
                <p>泰国最重要的寺庙，位于大皇宫内。供奉着翡翠佛，是泰国最受尊敬的佛像。</p>

                <h3>2. 黎明寺（郑王庙）</h3>
                <p>河畔寺庙，拥有壮观的高塔，已成为曼谷的象征。夜间照明时特别美丽。</p>

                <h3>3. 白庙（清莱）</h3>
                <p>由国家艺术家Chalermchai Kositpipat设计的纯白色寺庙，是令人惊叹的当代艺术杰作。</p>

                <h3>4. 素贴山双龙寺（清迈）</h3>
                <p>位于素贴山上的神圣寺庙，可俯瞰清迈市全景。是泰北人重要的朝圣地。</p>

                <h3>5. 玛哈泰寺（洛坤）</h3>
                <p>拥有独特钟形佛塔的寺庙，是泰国南部佛教中心。</p>

                <h3>6. 云石寺</h3>
                <p>泰国最美丽的大理石寺庙，使用意大利卡拉拉大理石建造。</p>

                <h3>7. 卧佛寺</h3>
                <p>拥有曼谷最大卧佛的寺庙，也是泰式按摩的发源地。</p>

                <h3>8. 帕席桑碧寺（大城）</h3>
                <p>古代大城王宫的皇家寺庙，三座优雅的佛塔并排而立。</p>

                <h3>9. 蓝庙（清莱）</h3>
                <p>由Chalermchai学生设计的蓝色寺庙，独特而美丽。</p>

                <h3>10. 帕侬寺（那空帕农）</h3>
                <p>湄公河畔的神圣寺庙，是伊森人的精神中心。</p>

                <h3>寺庙礼仪提示</h3>
                <ul>
                    <li>穿着得体 - 遮盖肩膀和膝盖</li>
                    <li>进入建筑物前脱鞋</li>
                    <li>不要将脚指向佛像</li>
                    <li>保持尊重和安静</li>
                </ul>
            `
        }
    },
    {
        id: 2,
        slug: "best-thai-food-must-try",
        category: "food",
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800",
        readTime: 6,
        date: "2026-01-14",
        featured: true,
        th: {
            title: "10 อาหารไทยที่ต้องลองเมื่อมาเมืองไทย",
            excerpt: "รวมเมนูอาหารไทยยอดนิยมที่นักท่องเที่ยวต้องลิ้มลอง ตั้งแต่ผัดไทยไปจนถึงต้มยำกุ้ง",
            content: `
                <p>อาหารไทยเป็นหนึ่งในอาหารที่ดีที่สุดในโลก ด้วยรสชาติที่เข้มข้น หลากหลาย และสมดุล นี่คือ 10 เมนูที่ต้องลอง</p>

                <h3>1. ผัดไทย</h3>
                <p>เส้นผัดกับไข่ เต้าหู้ กุ้งหรือไก่ ปรุงรสด้วยน้ำมะขาม ใส่ถั่วลิสงบด เป็นเมนูที่โด่งดังที่สุดของไทย</p>

                <h3>2. ต้มยำกุ้ง</h3>
                <p>ซุปรสจัดจ้านที่ผสมผสานรสเปรี้ยว เผ็ด เค็ม หวาน ใส่กุ้ง เห็ด ข่า ตะไคร้ ใบมะกรูด</p>

                <h3>3. แกงเขียวหวาน</h3>
                <p>แกงกะทิสีเขียวรสหอมหวาน ใส่ไก่หรือลูกชิ้นปลา มะเขือ พริกชี้ฟ้า ใบโหระพา</p>

                <h3>4. ส้มตำ</h3>
                <p>สลัดมะละกอดิบตำกับมะเขือเทศ ถั่วฝักยาว กุ้งแห้ง ปูเค็ม รสจัดจ้านแบบอีสาน</p>

                <h3>5. ข้าวผัด</h3>
                <p>ข้าวผัดแบบไทยที่มีรสชาติเฉพาะตัว ใส่ไข่ หอม กระเทียม ปรุงรสด้วยซีอิ๊วและน้ำปลา</p>

                <h3>6. มัสมั่น</h3>
                <p>แกงกะทิรสหวานนุ่มนวล ใส่เนื้อหรือไก่ มันฝรั่ง ถั่วลิสง หอมใหญ่ เครื่องเทศหอมกรุ่น</p>

                <h3>7. ผัดกะเพรา</h3>
                <p>เมนูข้าวราดแกงยอดนิยม เนื้อสับผัดกับใบกะเพราและพริก ทานคู่กับไข่ดาว</p>

                <h3>8. ข้าวเหนียวมะม่วง</h3>
                <p>ของหวานชื่อดัง ข้าวเหนียวนึ่งราดกะทิหวาน ทานคู่กับมะม่วงสุกหอมหวาน</p>

                <h3>9. ต้มข่าไก่</h3>
                <p>ซุปกะทิรสเข้มข้น ใส่ไก่ ข่า เห็ด มะเขือเทศ ใบมะกรูด รสชาตินุ่มนวลกว่าต้มยำ</p>

                <h3>10. ลาบ</h3>
                <p>สลัดเนื้อสับสไตล์อีสาน ปรุงรสด้วยน้ำปลา มะนาว พริกป่น ข้าวคั่ว สะระแหน่</p>

                <h3>เคล็ดลับการกินอาหารไทย</h3>
                <ul>
                    <li>เริ่มจากรสไม่เผ็ดก่อน แล้วค่อยเพิ่ม</li>
                    <li>ทานอาหารริมทางเพื่อรสชาติแท้ๆ</li>
                    <li>ดื่มน้ำเปล่าหรือน้ำมะพร้าวแก้เผ็ด</li>
                    <li>อย่าลืมลองของหวานไทยด้วย</li>
                </ul>
            `
        },
        en: {
            title: "10 Thai Dishes You Must Try When Visiting Thailand",
            excerpt: "A collection of popular Thai dishes that tourists must taste, from Pad Thai to Tom Yum Goong.",
            content: `
                <p>Thai cuisine is considered one of the best in the world with its intense, diverse, and balanced flavors. Here are 10 must-try dishes.</p>

                <h3>1. Pad Thai</h3>
                <p>Stir-fried rice noodles with eggs, tofu, shrimp or chicken, seasoned with tamarind, topped with crushed peanuts. Thailand's most famous dish.</p>

                <h3>2. Tom Yum Goong</h3>
                <p>A spicy soup combining sour, spicy, salty, and sweet flavors with shrimp, mushrooms, galangal, lemongrass, and kaffir lime leaves.</p>

                <h3>3. Green Curry</h3>
                <p>Sweet and aromatic green coconut curry with chicken or fish balls, eggplant, chili, and Thai basil.</p>

                <h3>4. Som Tam (Papaya Salad)</h3>
                <p>Shredded green papaya salad with tomatoes, long beans, dried shrimp, salted crab. Isan-style spicy flavors.</p>

                <h3>5. Khao Pad (Fried Rice)</h3>
                <p>Thai-style fried rice with its unique taste, with eggs, onions, garlic, seasoned with soy sauce and fish sauce.</p>

                <h3>6. Massaman Curry</h3>
                <p>Sweet and mild coconut curry with beef or chicken, potatoes, peanuts, onions, and fragrant spices.</p>

                <h3>7. Pad Kra Pao (Basil Stir-fry)</h3>
                <p>Popular rice dish with minced meat stir-fried with holy basil and chili, served with fried egg.</p>

                <h3>8. Mango Sticky Rice</h3>
                <p>Famous dessert of steamed glutinous rice with sweet coconut cream, served with ripe sweet mango.</p>

                <h3>9. Tom Kha Gai</h3>
                <p>Rich coconut soup with chicken, galangal, mushrooms, tomatoes, kaffir lime leaves. Milder than Tom Yum.</p>

                <h3>10. Larb</h3>
                <p>Isan-style minced meat salad seasoned with fish sauce, lime, chili powder, roasted rice, and mint.</p>

                <h3>Tips for Eating Thai Food</h3>
                <ul>
                    <li>Start with non-spicy dishes first, then increase</li>
                    <li>Try street food for authentic flavors</li>
                    <li>Drink water or coconut water to cool down</li>
                    <li>Don't forget to try Thai desserts too</li>
                </ul>
            `
        },
        zh: {
            title: "来泰国必尝的10道泰国菜",
            excerpt: "汇集游客必尝的热门泰国菜，从泰式炒河粉到冬阴功汤。",
            content: `
                <p>泰国菜被认为是世界上最好的菜系之一，口味浓郁、多样且平衡。以下是10道必尝菜品。</p>

                <h3>1. 泰式炒河粉</h3>
                <p>用鸡蛋、豆腐、虾或鸡肉炒的米粉，用罗望子调味，撒上碎花生。泰国最著名的菜。</p>

                <h3>2. 冬阴功汤</h3>
                <p>结合酸、辣、咸、甜味道的辣汤，配以虾、蘑菇、南姜、香茅和青柠叶。</p>

                <h3>3. 绿咖喱</h3>
                <p>甜美芳香的绿色椰奶咖喱，配鸡肉或鱼丸、茄子、辣椒和九层塔。</p>

                <h3>4. 青木瓜沙拉</h3>
                <p>切丝的青木瓜沙拉，配番茄、长豆、虾干、咸蟹。伊森风味的辣味。</p>

                <h3>5. 泰式炒饭</h3>
                <p>具有独特风味的泰式炒饭，配鸡蛋、洋葱、大蒜，用酱油和鱼露调味。</p>

                <h3>6. 马沙文咖喱</h3>
                <p>甜美温和的椰奶咖喱，配牛肉或鸡肉、土豆、花生、洋葱和香料。</p>

                <h3>7. 打抛猪肉饭</h3>
                <p>受欢迎的米饭菜，肉末与罗勒和辣椒一起炒，配煎蛋。</p>

                <h3>8. 芒果糯米饭</h3>
                <p>著名甜点，蒸糯米配甜椰奶，配成熟的甜芒果。</p>

                <h3>9. 椰奶鸡汤</h3>
                <p>浓郁的椰奶汤配鸡肉、南姜、蘑菇、番茄、青柠叶。比冬阴功温和。</p>

                <h3>10. 拉普</h3>
                <p>伊森风格的肉末沙拉，用鱼露、酸橙、辣椒粉、烤米和薄荷调味。</p>

                <h3>吃泰国菜的小贴士</h3>
                <ul>
                    <li>先从不辣的菜开始，然后逐渐增加</li>
                    <li>尝试街头食品以获得正宗风味</li>
                    <li>喝水或椰子水来降温</li>
                    <li>别忘了尝试泰国甜点</li>
                </ul>
            `
        }
    },
    {
        id: 3,
        slug: "3-days-bangkok-itinerary",
        category: "itinerary",
        image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800",
        readTime: 10,
        date: "2026-01-13",
        featured: true,
        th: {
            title: "เที่ยวกรุงเทพฯ 3 วัน 2 คืน แบบจัดเต็ม!",
            excerpt: "แผนเที่ยวกรุงเทพมหานคร 3 วัน ครบทุกไฮไลท์ ตั้งแต่วัด ตลาด ห้าง จนถึงสตรีทฟู้ด",
            content: `
                <p>กรุงเทพมหานครเป็นเมืองที่มีสิ่งน่าสนใจมากมาย 3 วันอาจไม่พอ แต่เราจะพาคุณเที่ยวให้คุ้มที่สุด!</p>

                <h3>วันที่ 1: วัดและพระราชวัง</h3>
                <h4>เช้า (08:00 - 12:00)</h4>
                <ul>
                    <li><strong>พระบรมมหาราชวัง + วัดพระแก้ว</strong> - มาถึงแต่เช้าหนีคนเยอะ ใช้เวลา 2-3 ชม. ค่าเข้า 500 บาท</li>
                    <li>แต่งกายสุภาพ (ขายาว/กระโปรงยาว ปิดไหล่)</li>
                </ul>

                <h4>กลางวัน (12:00 - 14:00)</h4>
                <ul>
                    <li>ทานอาหารที่ <strong>ท่าเตียน</strong> หรือ <strong>ท่าช้าง</strong></li>
                    <li>ลองผัดไทยท่าเตียน ร้านดังระดับตำนาน</li>
                </ul>

                <h4>บ่าย (14:00 - 17:00)</h4>
                <ul>
                    <li><strong>วัดโพธิ์</strong> - ชมพระพุทธไสยาสน์องค์ใหญ่ ค่าเข้า 200 บาท</li>
                    <li><strong>วัดอรุณ</strong> - ข้ามเรือไป 4 บาท ค่าเข้า 100 บาท ขึ้นพระปรางค์ชมวิว</li>
                </ul>

                <h4>เย็น-ค่ำ (17:00 - 21:00)</h4>
                <ul>
                    <li>นั่งเรือกลับมา ชม <strong>วัดอรุณยามพระอาทิตย์ตก</strong></li>
                    <li>ทานอาหารเย็นที่ <strong>เยาวราช</strong> - ลองติ่มซำ, หอยทอด, ก๋วยเตี๋ยว</li>
                </ul>

                <h3>วันที่ 2: ช้อปปิ้งและตลาด</h3>
                <h4>เช้า (09:00 - 12:00)</h4>
                <ul>
                    <li><strong>ตลาดนัดจตุจักร</strong> (เสาร์-อาทิตย์) - ตลาดนัดที่ใหญ่ที่สุดในโลก</li>
                    <li>หรือ <strong>ตลาดนัดรถไฟรัชดา</strong> (ทุกวัน) ถ้าไม่ใช่วันหยุด</li>
                </ul>

                <h4>กลางวัน (12:00 - 14:00)</h4>
                <ul>
                    <li>ทานอาหารในตลาด หรือไป <strong>Terminal 21</strong></li>
                </ul>

                <h4>บ่าย (14:00 - 18:00)</h4>
                <ul>
                    <li><strong>สยามพารากอน / CentralWorld</strong> - ช้อปปิ้งและหนีร้อน</li>
                    <li><strong>มาบุญครอง (MBK)</strong> - ของฝาก ราคาประหยัด</li>
                </ul>

                <h4>เย็น-ค่ำ (18:00 - 22:00)</h4>
                <ul>
                    <li><strong>ถนนข้าวสาร</strong> - บรรยากาศยามค่ำ สตรีทฟู้ด บาร์</li>
                    <li>หรือ <strong>Asiatique</strong> - ริมแม่น้ำ ช้อปปิ้ง+อาหาร</li>
                </ul>

                <h3>วันที่ 3: ธรรมชาติและวัฒนธรรม</h3>
                <h4>เช้า (07:00 - 10:00)</h4>
                <ul>
                    <li><strong>ตลาดน้ำดำเนินสะดวก</strong> หรือ <strong>ตลาดน้ำอัมพวา</strong> (ต้องไปแต่เช้า)</li>
                    <li>นั่งเรือชมบรรยากาศ ซื้อของกินจากเรือ</li>
                </ul>

                <h4>กลางวัน (11:00 - 14:00)</h4>
                <ul>
                    <li><strong>ตลาดร่มหุบ (แม่กลอง)</strong> - ตลาดบนรางรถไฟ!</li>
                    <li>ดูรถไฟวิ่งผ่านตลาด (รอบ 08:30, 11:10, 14:30, 17:40)</li>
                </ul>

                <h4>บ่าย (15:00 - 18:00)</h4>
                <ul>
                    <li>กลับกรุงเทพ แวะ <strong>ICONSIAM</strong> - ห้างหรูริมน้ำ</li>
                    <li>ชมโซน <strong>SOOKSIAM</strong> - ตลาดน้ำในห้าง</li>
                </ul>

                <h4>เย็น (18:00 - 21:00)</h4>
                <ul>
                    <li>ทานอาหารมื้อสุดท้าย ที่ร้านอาหารริมแม่น้ำ</li>
                    <li>ล่องเรือดินเนอร์ (ถ้ามีเวลา)</li>
                </ul>

                <h3>งบประมาณโดยประมาณ</h3>
                <ul>
                    <li>ค่าเข้าชม: ~1,000 บาท</li>
                    <li>อาหาร: 500-1,000 บาท/วัน</li>
                    <li>เดินทาง: 300-500 บาท/วัน</li>
                    <li>รวม: ~5,000-8,000 บาท (ไม่รวมที่พัก)</li>
                </ul>
            `
        },
        en: {
            title: "3 Days in Bangkok - Complete Itinerary!",
            excerpt: "A 3-day Bangkok travel plan covering all highlights from temples to markets, malls to street food.",
            content: `
                <p>Bangkok has so much to offer that 3 days may not be enough, but we'll help you make the most of it!</p>

                <h3>Day 1: Temples and Palace</h3>
                <h4>Morning (08:00 - 12:00)</h4>
                <ul>
                    <li><strong>Grand Palace + Wat Phra Kaew</strong> - Arrive early to avoid crowds. 2-3 hours. Entry: 500 THB</li>
                    <li>Dress modestly (long pants/skirt, covered shoulders)</li>
                </ul>

                <h4>Lunch (12:00 - 14:00)</h4>
                <ul>
                    <li>Eat at <strong>Tha Tien</strong> or <strong>Tha Chang</strong> pier area</li>
                    <li>Try the legendary Pad Thai Tha Tien</li>
                </ul>

                <h4>Afternoon (14:00 - 17:00)</h4>
                <ul>
                    <li><strong>Wat Pho</strong> - See the giant Reclining Buddha. Entry: 200 THB</li>
                    <li><strong>Wat Arun</strong> - Cross by ferry 4 THB. Entry: 100 THB. Climb the spire for views</li>
                </ul>

                <h4>Evening (17:00 - 21:00)</h4>
                <ul>
                    <li>Take the boat back, watch <strong>Wat Arun at sunset</strong></li>
                    <li>Dinner at <strong>Chinatown (Yaowarat)</strong> - Try dim sum, oyster omelet, noodles</li>
                </ul>

                <h3>Day 2: Shopping and Markets</h3>
                <h4>Morning (09:00 - 12:00)</h4>
                <ul>
                    <li><strong>Chatuchak Weekend Market</strong> (Sat-Sun) - World's largest weekend market</li>
                    <li>Or <strong>Ratchada Train Night Market</strong> (daily) on weekdays</li>
                </ul>

                <h4>Lunch (12:00 - 14:00)</h4>
                <ul>
                    <li>Eat in the market or head to <strong>Terminal 21</strong></li>
                </ul>

                <h4>Afternoon (14:00 - 18:00)</h4>
                <ul>
                    <li><strong>Siam Paragon / CentralWorld</strong> - Shopping and escape the heat</li>
                    <li><strong>MBK Center</strong> - Souvenirs at budget prices</li>
                </ul>

                <h4>Evening (18:00 - 22:00)</h4>
                <ul>
                    <li><strong>Khao San Road</strong> - Night atmosphere, street food, bars</li>
                    <li>Or <strong>Asiatique</strong> - Riverside shopping and dining</li>
                </ul>

                <h3>Day 3: Nature and Culture</h3>
                <h4>Morning (07:00 - 10:00)</h4>
                <ul>
                    <li><strong>Damnoen Saduak</strong> or <strong>Amphawa Floating Market</strong> (go early!)</li>
                    <li>Boat ride through canals, buy food from boats</li>
                </ul>

                <h4>Midday (11:00 - 14:00)</h4>
                <ul>
                    <li><strong>Maeklong Railway Market</strong> - Market on train tracks!</li>
                    <li>Watch the train pass through (08:30, 11:10, 14:30, 17:40)</li>
                </ul>

                <h4>Afternoon (15:00 - 18:00)</h4>
                <ul>
                    <li>Return to Bangkok, visit <strong>ICONSIAM</strong> - Luxury riverside mall</li>
                    <li>Explore <strong>SOOKSIAM</strong> - Indoor floating market zone</li>
                </ul>

                <h4>Evening (18:00 - 21:00)</h4>
                <ul>
                    <li>Final dinner at a riverside restaurant</li>
                    <li>Dinner cruise (if time permits)</li>
                </ul>

                <h3>Estimated Budget</h3>
                <ul>
                    <li>Entrance fees: ~1,000 THB</li>
                    <li>Food: 500-1,000 THB/day</li>
                    <li>Transport: 300-500 THB/day</li>
                    <li>Total: ~5,000-8,000 THB (excluding accommodation)</li>
                </ul>
            `
        },
        zh: {
            title: "曼谷3天完整行程攻略！",
            excerpt: "曼谷3天旅行计划，涵盖所有亮点，从寺庙到市场，购物中心到街头美食。",
            content: `
                <p>曼谷有太多值得看的地方，3天可能不够，但我们会帮您充分利用时间！</p>

                <h3>第1天：寺庙和宫殿</h3>
                <h4>上午 (08:00 - 12:00)</h4>
                <ul>
                    <li><strong>大皇宫 + 玉佛寺</strong> - 早到避开人群。2-3小时。门票：500泰铢</li>
                    <li>穿着得体（长裤/长裙，遮盖肩膀）</li>
                </ul>

                <h4>午餐 (12:00 - 14:00)</h4>
                <ul>
                    <li>在<strong>塔提恩</strong>或<strong>塔昌</strong>码头区用餐</li>
                    <li>尝试传奇的塔提恩泰式炒河粉</li>
                </ul>

                <h4>下午 (14:00 - 17:00)</h4>
                <ul>
                    <li><strong>卧佛寺</strong> - 观看巨大的卧佛。门票：200泰铢</li>
                    <li><strong>黎明寺</strong> - 乘渡轮4泰铢。门票：100泰铢。登塔观景</li>
                </ul>

                <h4>晚上 (17:00 - 21:00)</h4>
                <ul>
                    <li>乘船返回，观看<strong>黎明寺日落</strong></li>
                    <li>在<strong>唐人街（耀华力路）</strong>晚餐 - 尝试点心、蚝煎、面条</li>
                </ul>

                <h3>第2天：购物和市场</h3>
                <h4>上午 (09:00 - 12:00)</h4>
                <ul>
                    <li><strong>乍都乍周末市场</strong>（周六日）- 世界最大的周末市场</li>
                    <li>或工作日去<strong>拉差达火车夜市</strong>（每天开放）</li>
                </ul>

                <h4>午餐 (12:00 - 14:00)</h4>
                <ul>
                    <li>在市场内用餐或去<strong>Terminal 21</strong></li>
                </ul>

                <h4>下午 (14:00 - 18:00)</h4>
                <ul>
                    <li><strong>暹罗百丽宫 / Central World</strong> - 购物避暑</li>
                    <li><strong>MBK购物中心</strong> - 实惠的纪念品</li>
                </ul>

                <h4>晚上 (18:00 - 22:00)</h4>
                <ul>
                    <li><strong>考山路</strong> - 夜晚氛围、街头美食、酒吧</li>
                    <li>或<strong>Asiatique</strong> - 河畔购物和美食</li>
                </ul>

                <h3>第3天：自然和文化</h3>
                <h4>上午 (07:00 - 10:00)</h4>
                <ul>
                    <li><strong>丹嫩沙多</strong>或<strong>安帕瓦水上市场</strong>（要早去！）</li>
                    <li>乘船游览运河，从船上购买食物</li>
                </ul>

                <h4>中午 (11:00 - 14:00)</h4>
                <ul>
                    <li><strong>美功铁道市场</strong> - 火车轨道上的市场！</li>
                    <li>观看火车穿过（08:30, 11:10, 14:30, 17:40）</li>
                </ul>

                <h4>下午 (15:00 - 18:00)</h4>
                <ul>
                    <li>返回曼谷，参观<strong>ICONSIAM</strong> - 河畔豪华商场</li>
                    <li>探索<strong>SOOKSIAM</strong> - 室内水上市场区</li>
                </ul>

                <h4>晚上 (18:00 - 21:00)</h4>
                <ul>
                    <li>在河畔餐厅享用最后的晚餐</li>
                    <li>晚餐游船（如果有时间）</li>
                </ul>

                <h3>预计预算</h3>
                <ul>
                    <li>门票：约1,000泰铢</li>
                    <li>餐饮：500-1,000泰铢/天</li>
                    <li>交通：300-500泰铢/天</li>
                    <li>总计：约5,000-8,000泰铢（不含住宿）</li>
                </ul>
            `
        }
    },
    {
        id: 4,
        slug: "best-beaches-thailand",
        category: "attractions",
        image: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=800",
        readTime: 7,
        date: "2026-01-12",
        featured: false,
        th: {
            title: "7 ชายหาดสวยที่สุดในประเทศไทย",
            excerpt: "รวมชายหาดสวยระดับโลกที่ต้องไปสักครั้งในชีวิต ตั้งแต่ภูเก็ตไปจนถึงตราด",
            content: `
                <p>ประเทศไทยมีชายหาดสวยมากมาย วันนี้เรามา 7 ชายหาดที่สวยที่สุด</p>

                <h3>1. หาดไร่เลย์ จ.กระบี่</h3>
                <p>หาดที่ล้อมรอบด้วยหน้าผาหินปูน เข้าถึงได้โดยเรือเท่านั้น เหมาะสำหรับปีนผาและพายเรือคายัค</p>

                <h3>2. หาดมาหยา จ.กระบี่</h3>
                <p>หาดที่โด่งดังจากภาพยนตร์ The Beach น้ำทะเลสีเทอร์ควอยซ์ใสราวกระจก</p>

                <h3>3. หาดทรายขาว จ.ตราด (เกาะช้าง)</h3>
                <p>หาดทรายขาวละเอียดยาวเหยียด บรรยากาศสงบเหมาะพักผ่อน</p>

                <h3>4. หาดกะตะ จ.ภูเก็ต</h3>
                <p>หาดที่เหมาะทั้งว่ายน้ำและเล่นเซิร์ฟ มีร้านอาหารและบาร์ริมหาดมากมาย</p>

                <h3>5. หาดเชิงมน จ.สมุย</h3>
                <p>หาดเงียบสงบทางเหนือของเกาะสมุย มองเห็นเกาะพะงันได้ในวันที่อากาศดี</p>

                <h3>6. หาดพระนาง จ.กระบี่</h3>
                <p>หาดที่สวยที่สุดแห่งหนึ่งของโลก มีถ้ำพระนางที่ศักดิ์สิทธิ์</p>

                <h3>7. หาดสลัด จ.ตราด (เกาะกูด)</h3>
                <p>หาดที่เงียบสงบบนเกาะกูด น้ำใสมาก เหมาะดำน้ำตื้น</p>
            `
        },
        en: {
            title: "7 Most Beautiful Beaches in Thailand",
            excerpt: "World-class beaches you must visit at least once, from Phuket to Trat.",
            content: `
                <p>Thailand has many beautiful beaches. Here are 7 of the most stunning ones.</p>

                <h3>1. Railay Beach, Krabi</h3>
                <p>A beach surrounded by limestone cliffs, accessible only by boat. Perfect for rock climbing and kayaking.</p>

                <h3>2. Maya Bay, Krabi</h3>
                <p>Famous from the movie "The Beach" with crystal clear turquoise waters.</p>

                <h3>3. White Sand Beach, Trat (Koh Chang)</h3>
                <p>Long stretch of fine white sand with peaceful atmosphere for relaxation.</p>

                <h3>4. Kata Beach, Phuket</h3>
                <p>Great for swimming and surfing with many beachside restaurants and bars.</p>

                <h3>5. Choeng Mon Beach, Samui</h3>
                <p>Quiet beach in northern Samui with views of Koh Phangan on clear days.</p>

                <h3>6. Phra Nang Beach, Krabi</h3>
                <p>One of the world's most beautiful beaches with the sacred Phra Nang Cave.</p>

                <h3>7. Salad Beach, Trat (Koh Kood)</h3>
                <p>Peaceful beach on Koh Kood with crystal clear water, perfect for snorkeling.</p>
            `
        },
        zh: {
            title: "泰国最美的7个海滩",
            excerpt: "一生必去一次的世界级海滩，从普吉岛到达叻府。",
            content: `
                <p>泰国有许多美丽的海滩。这里是7个最令人惊叹的海滩。</p>

                <h3>1. 莱利海滩，甲米</h3>
                <p>被石灰岩悬崖环绕的海滩，只能乘船到达。适合攀岩和皮划艇。</p>

                <h3>2. 玛雅湾，甲米</h3>
                <p>因电影《海滩》而闻名，拥有水晶般清澈的碧绿海水。</p>

                <h3>3. 白沙滩，达叻（象岛）</h3>
                <p>细白沙滩绵延数里，氛围宁静，适合放松。</p>

                <h3>4. 卡塔海滩，普吉岛</h3>
                <p>适合游泳和冲浪，有许多海滨餐厅和酒吧。</p>

                <h3>5. 春蒙海滩，苏梅岛</h3>
                <p>苏梅岛北部的宁静海滩，天气晴朗时可看到帕岸岛。</p>

                <h3>6. 帕南海滩，甲米</h3>
                <p>世界上最美丽的海滩之一，有神圣的帕南洞穴。</p>

                <h3>7. 沙拉海滩，达叻（阁骨岛）</h3>
                <p>阁骨岛上宁静的海滩，水晶般清澈的海水，适合浮潜。</p>
            `
        }
    },
    {
        id: 5,
        slug: "thai-temple-etiquette",
        category: "tips",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800",
        readTime: 5,
        date: "2026-01-10",
        featured: false,
        th: {
            title: "มารยาทในการเข้าวัดไทย สิ่งที่ควรรู้",
            excerpt: "เรียนรู้ข้อควรปฏิบัติเมื่อเข้าวัดไทย เพื่อแสดงความเคารพและท่องเที่ยวอย่างมีวัฒนธรรม",
            content: `
                <p>วัดเป็นสถานที่ศักดิ์สิทธิ์สำหรับชาวไทย การแสดงความเคารพเป็นสิ่งสำคัญ</p>

                <h3>การแต่งกาย</h3>
                <ul>
                    <li>สวมเสื้อที่ปิดไหล่และแขน</li>
                    <li>สวมกางเกงขายาวหรือกระโปรงยาวคลุมเข่า</li>
                    <li>หลีกเลี่ยงเสื้อผ้ารัดรูปหรือโปร่งใส</li>
                </ul>

                <h3>พฤติกรรมในวัด</h3>
                <ul>
                    <li>ถอดรองเท้าก่อนเข้าโบสถ์/วิหาร</li>
                    <li>ไม่ชี้นิ้วหรือเท้าไปที่พระพุทธรูป</li>
                    <li>ไม่พูดเสียงดังหรือหัวเราะ</li>
                    <li>ผู้หญิงห้ามสัมผัสพระภิกษุ</li>
                </ul>

                <h3>การถ่ายรูป</h3>
                <ul>
                    <li>ขออนุญาตก่อนถ่ายรูปพระพุทธรูป</li>
                    <li>ไม่ถ่ายรูปหันหลังให้พระพุทธรูป</li>
                    <li>บางวัดห้ามถ่ายรูปภายในโบสถ์</li>
                </ul>
            `
        },
        en: {
            title: "Thai Temple Etiquette: What You Need to Know",
            excerpt: "Learn proper behavior when visiting Thai temples to show respect and travel culturally.",
            content: `
                <p>Temples are sacred places for Thai people. Showing respect is essential.</p>

                <h3>Dress Code</h3>
                <ul>
                    <li>Wear shirts that cover shoulders and arms</li>
                    <li>Wear long pants or skirts that cover knees</li>
                    <li>Avoid tight or see-through clothing</li>
                </ul>

                <h3>Behavior in Temples</h3>
                <ul>
                    <li>Remove shoes before entering buildings</li>
                    <li>Never point fingers or feet at Buddha images</li>
                    <li>Don't speak loudly or laugh</li>
                    <li>Women must not touch monks</li>
                </ul>

                <h3>Photography</h3>
                <ul>
                    <li>Ask permission before photographing Buddha images</li>
                    <li>Don't take photos with your back to Buddha images</li>
                    <li>Some temples prohibit photography inside</li>
                </ul>
            `
        },
        zh: {
            title: "泰国寺庙礼仪：您需要知道的事",
            excerpt: "学习参观泰国寺庙时的正确行为，以示尊重并文明旅游。",
            content: `
                <p>寺庙对泰国人来说是神圣的地方。表示尊重至关重要。</p>

                <h3>着装要求</h3>
                <ul>
                    <li>穿遮盖肩膀和手臂的衬衫</li>
                    <li>穿遮盖膝盖的长裤或长裙</li>
                    <li>避免紧身或透明的衣服</li>
                </ul>

                <h3>寺庙内的行为</h3>
                <ul>
                    <li>进入建筑物前脱鞋</li>
                    <li>不要用手指或脚指向佛像</li>
                    <li>不要大声说话或笑</li>
                    <li>女性不得触摸僧侣</li>
                </ul>

                <h3>拍照</h3>
                <ul>
                    <li>拍摄佛像前请先征求许可</li>
                    <li>不要背对佛像拍照</li>
                    <li>有些寺庙禁止在室内拍照</li>
                </ul>
            `
        }
    }
];

// Category labels
const categoryLabels = {
    th: {
        attractions: "สถานที่ท่องเที่ยว",
        food: "อาหาร",
        itinerary: "แผนการเดินทาง",
        tips: "เคล็ดลับ",
        culture: "วัฒนธรรม"
    },
    en: {
        attractions: "Attractions",
        food: "Food",
        itinerary: "Itinerary",
        tips: "Tips",
        culture: "Culture"
    },
    zh: {
        attractions: "景点",
        food: "美食",
        itinerary: "行程",
        tips: "小贴士",
        culture: "文化"
    }
};

// Get articles for current language
function getArticles(lang = 'th') {
    return articlesData.map(article => ({
        id: article.id,
        slug: article.slug,
        category: article.category,
        categoryLabel: categoryLabels[lang][article.category],
        image: article.image,
        readTime: article.readTime,
        date: article.date,
        featured: article.featured,
        ...article[lang]
    }));
}

// Get single article by slug
function getArticleBySlug(slug, lang = 'th') {
    const article = articlesData.find(a => a.slug === slug);
    if (!article) return null;

    return {
        id: article.id,
        slug: article.slug,
        category: article.category,
        categoryLabel: categoryLabels[lang][article.category],
        image: article.image,
        readTime: article.readTime,
        date: article.date,
        featured: article.featured,
        ...article[lang]
    };
}

// Get featured articles
function getFeaturedArticles(lang = 'th', limit = 3) {
    return getArticles(lang).filter(a => a.featured).slice(0, limit);
}
