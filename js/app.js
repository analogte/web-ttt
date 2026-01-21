// Thai Tourism Website - Main Application
// API Proxy Integration with Multilingual Support

// API Configuration (using Vercel serverless functions)
const API = {
    baseUrl: '/api'
};

// Application State
const appState = {
    currentLang: 'th',
    attractions: [],
    events: [],
    restaurants: [],
    hotels: [],
    currentPage: {
        attractions: 1,
        events: 1,
        restaurants: 1,
        hotels: 1
    },
    pageSize: 6
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initNavigation();
    initHeroSlider();
    initSearch();
    initModal();
    loadAllData();

    // Initialize map placeholder (Google Maps will call initMap when ready)
    setTimeout(() => {
        if (typeof google === 'undefined' && typeof initMap === 'function') {
            initMap(); // Show placeholder if Google Maps not loaded
        }
    }, 2000);
});

// ==================== Language System ====================

function initLanguage() {
    // Get saved language or default to Thai
    const savedLang = localStorage.getItem('preferredLang') || 'th';
    setLanguage(savedLang);

    // Language button click handlers
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
        });
    });
}

function setLanguage(lang) {
    appState.currentLang = lang;
    localStorage.setItem('preferredLang', lang);

    // Update body data attribute for font changes
    document.body.setAttribute('data-lang', lang);

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Translate all elements
    translatePage(lang);

    // Reload data with new language
    if (appState.attractions.length > 0) {
        renderAttractions();
        renderEvents();
        renderRestaurants();
        renderHotels();
    }

    // Re-render articles and itineraries with new language
    renderArticles();
    renderItineraries();
}

function translatePage(lang) {
    const trans = translations[lang];

    // Translate elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (trans[key]) {
            el.innerHTML = trans[key];
        }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset['i18nPlaceholder'];
        if (trans[key]) {
            el.placeholder = trans[key];
        }
    });

    // Update document title
    document.title = trans.site_title || 'Thailand Tourism';
}

function t(key) {
    return translations[appState.currentLang][key] || key;
}

// ==================== Navigation ====================

function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger?.classList.remove('active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==================== Hero Slider ====================

function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    function startSlider() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopSlider() {
        clearInterval(slideInterval);
    }

    // Dot click handlers
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopSlider();
            showSlide(index);
            startSlider();
        });
    });

    startSlider();
}

// ==================== API Integration ====================

async function fetchFromAPI(endpoint, params = {}) {
    const url = new URL(`${window.location.origin}${API.baseUrl}${endpoint}`);
    Object.keys(params).forEach(key => {
        if (params[key]) url.searchParams.append(key, params[key]);
    });

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept-Language': appState.currentLang === 'zh' ? 'zh-cn' : appState.currentLang,
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        return null;
    }
}

async function loadAllData() {
    // Show loading states
    showLoading('attractionsLoading', true);
    showLoading('eventsLoading', true);
    showLoading('restaurantsLoading', true);
    showLoading('hotelsLoading', true);

    // Render articles and itineraries immediately (they're local data)
    renderArticles();
    renderItineraries();

    // Load all data in parallel
    await Promise.all([
        loadAttractions(),
        loadEvents(),
        loadRestaurants(),
        loadHotels(),
        loadProvinces()
    ]);
}

async function loadAttractions() {
    const data = await fetchFromAPI('/attractions', {
        numberOfResult: appState.pageSize,
        pagenumber: appState.currentPage.attractions,
        categorycodes: 'ATTRACTION'
    });

    showLoading('attractionsLoading', false);

    if (data && data.result) {
        appState.attractions = data.result;
        renderAttractions();
    } else {
        // Fallback to sample data if API fails
        appState.attractions = getSampleAttractions();
        renderAttractions();
    }
}

async function loadEvents() {
    const data = await fetchFromAPI('/events', {
        numberOfResult: appState.pageSize
    });

    showLoading('eventsLoading', false);

    if (data && data.result) {
        appState.events = data.result;
        renderEvents();
    } else {
        appState.events = getSampleEvents();
        renderEvents();
    }
}

async function loadRestaurants() {
    const data = await fetchFromAPI('/restaurants', {
        numberOfResult: appState.pageSize
    });

    showLoading('restaurantsLoading', false);

    if (data && data.result) {
        appState.restaurants = data.result;
        renderRestaurants();
    } else {
        appState.restaurants = getSampleRestaurants();
        renderRestaurants();
    }
}

async function loadHotels() {
    const data = await fetchFromAPI('/hotels', {
        numberOfResult: appState.pageSize
    });

    showLoading('hotelsLoading', false);

    if (data && data.result) {
        appState.hotels = data.result;
        renderHotels();
    } else {
        appState.hotels = getSampleHotels();
        renderHotels();
    }
}

async function loadProvinces() {
    // Populate province dropdown
    const provinceSelect = document.getElementById('provinceSelect');
    const provinces = [
        'Bangkok', 'Chiang Mai', 'Chiang Rai', 'Phuket', 'Krabi',
        'Ayutthaya', 'Kanchanaburi', 'Hua Hin', 'Koh Samui', 'Sukhothai'
    ];

    provinces.forEach(province => {
        const option = document.createElement('option');
        option.value = province;
        const provTrans = provinceTranslations[appState.currentLang];
        option.textContent = provTrans[province] || province;
        provinceSelect.appendChild(option);
    });
}

// ==================== Render Functions ====================

function renderAttractions() {
    const grid = document.getElementById('attractionsGrid');
    grid.innerHTML = '';

    appState.attractions.forEach((item, index) => {
        const card = createCard(item, 'attraction', index);
        grid.appendChild(card);
    });
}

function renderEvents() {
    const grid = document.getElementById('eventsGrid');
    grid.innerHTML = '';

    appState.events.forEach((item, index) => {
        const card = createEventCard(item, index);
        grid.appendChild(card);
    });
}

function renderRestaurants() {
    const grid = document.getElementById('restaurantsGrid');
    grid.innerHTML = '';

    appState.restaurants.forEach((item, index) => {
        const card = createCard(item, 'restaurant', index);
        grid.appendChild(card);
    });
}

function renderHotels() {
    const grid = document.getElementById('hotelsGrid');
    grid.innerHTML = '';

    appState.hotels.forEach((item, index) => {
        const card = createCard(item, 'hotel', index);
        grid.appendChild(card);
    });
}

function renderArticles() {
    const grid = document.getElementById('articlesGrid');
    if (!grid) return;

    grid.innerHTML = '';

    // Get featured articles (limit to 3 for homepage)
    const articles = typeof getFeaturedArticles === 'function'
        ? getFeaturedArticles(3)
        : (typeof getArticles === 'function' ? getArticles().slice(0, 3) : []);

    if (articles.length === 0) {
        grid.innerHTML = `<p class="text-center" style="grid-column: 1/-1; color: #666;">${t('no_results')}</p>`;
        return;
    }

    articles.forEach((article, index) => {
        const card = createArticleCard(article, index);
        grid.appendChild(card);
    });
}

function createArticleCard(article, index) {
    const card = document.createElement('div');
    card.className = 'card article-card fade-in';
    card.style.animationDelay = `${index * 0.1}s`;

    const lang = appState.currentLang;
    const title = article.title[lang] || article.title.en;
    const excerpt = article.excerpt[lang] || article.excerpt.en;
    const thumbnail = article.thumbnail;
    const category = article.category[lang] || article.category.en;
    const readTime = article.readTime;
    const author = article.author;

    card.innerHTML = `
        <div class="card-image">
            <img src="${thumbnail}" alt="${title}" onerror="this.src='https://images.unsplash.com/photo-1528181304800-259b08848526?w=600'">
            <span class="card-badge">${category}</span>
        </div>
        <div class="card-content">
            <h3>${title}</h3>
            <p>${excerpt}</p>
            <div class="card-meta">
                <span><i class="fas fa-user"></i> ${author}</span>
                <span><i class="fas fa-clock"></i> ${readTime} ${lang === 'th' ? 'นาที' : lang === 'zh' ? '分钟' : 'min'}</span>
            </div>
        </div>
    `;

    card.addEventListener('click', () => {
        // Navigate to article page
        window.location.href = `article.html?slug=${article.slug}`;
    });

    return card;
}

function renderItineraries() {
    const grid = document.getElementById('itinerariesGrid');
    if (!grid) return;

    grid.innerHTML = '';

    // Get featured itineraries (limit to 3 for homepage)
    const itineraries = typeof getFeaturedItineraries === 'function'
        ? getFeaturedItineraries(3)
        : (typeof getItineraries === 'function' ? getItineraries().slice(0, 3) : []);

    if (itineraries.length === 0) {
        grid.innerHTML = `<p class="text-center" style="grid-column: 1/-1; color: #666;">${t('no_results')}</p>`;
        return;
    }

    itineraries.forEach((itinerary, index) => {
        const card = createItineraryCard(itinerary, index);
        grid.appendChild(card);
    });
}

function createItineraryCard(itinerary, index) {
    const card = document.createElement('div');
    card.className = 'card itinerary-card fade-in';
    card.style.animationDelay = `${index * 0.1}s`;

    const lang = appState.currentLang;
    const title = itinerary.title[lang] || itinerary.title.en;
    const description = itinerary.description[lang] || itinerary.description.en;
    const destination = itinerary.destination[lang] || itinerary.destination.en;
    const thumbnail = itinerary.thumbnail;
    const duration = itinerary.duration;
    const budget = itinerary.budget[lang] || itinerary.budget.en;
    const highlights = (itinerary.highlights[lang] || itinerary.highlights.en).slice(0, 3);

    const daysText = lang === 'th' ? 'วัน' : lang === 'zh' ? '天' : 'Days';
    const nightsText = lang === 'th' ? 'คืน' : lang === 'zh' ? '夜' : 'Nights';
    const viewText = lang === 'th' ? 'ดูรายละเอียด' : lang === 'zh' ? '查看详情' : 'View Details';

    card.innerHTML = `
        <div class="card-image">
            <img src="${thumbnail}" alt="${title}" onerror="this.src='https://images.unsplash.com/photo-1528181304800-259b08848526?w=600'">
            <span class="duration-badge"><i class="fas fa-calendar-alt"></i> ${duration} ${daysText} ${duration - 1} ${nightsText}</span>
            <span class="destination-badge">${destination}</span>
        </div>
        <div class="card-content">
            <h3>${title}</h3>
            <p>${description}</p>
            <div class="card-highlights">
                ${highlights.map(h => `<span class="highlight-chip">${h}</span>`).join('')}
            </div>
            <div class="card-footer">
                <span class="card-budget"><i class="fas fa-wallet"></i> ${budget}</span>
                <span class="card-cta">${viewText} <i class="fas fa-arrow-right"></i></span>
            </div>
        </div>
    `;

    card.addEventListener('click', () => {
        window.location.href = `itinerary.html?slug=${itinerary.slug}`;
    });

    return card;
}

function createCard(item, type, index) {
    const card = document.createElement('div');
    card.className = 'card fade-in';
    card.style.animationDelay = `${index * 0.1}s`;

    const name = getLocalizedText(item, 'place_name') || item.name || 'Unknown';
    const description = getLocalizedText(item, 'place_information') || item.description || '';
    const province = item.location?.province || item.province || '';
    const thumbnail = item.thumbnail_url || item.thumbnail || getDefaultImage(type);
    const category = item.category_description || getCategoryLabel(type);

    card.innerHTML = `
        <div class="card-image">
            <img src="${thumbnail}" alt="${name}" onerror="this.src='${getDefaultImage(type)}'">
            <span class="card-badge">${category}</span>
        </div>
        <div class="card-content">
            <h3>${name}</h3>
            <p>${truncateText(stripHtml(description), 100)}</p>
            <div class="card-meta">
                <span><i class="fas fa-map-marker-alt"></i> ${province}</span>
                ${type === 'hotel' ? `<span class="card-rating"><i class="fas fa-star"></i> ${item.standard || '4.5'}</span>` : ''}
            </div>
        </div>
    `;

    card.addEventListener('click', () => showDetail(item, type));

    return card;
}

function createEventCard(item, index) {
    const card = document.createElement('div');
    card.className = 'card event-card fade-in';
    card.style.animationDelay = `${index * 0.1}s`;

    const name = getLocalizedText(item, 'event_name') || item.name || 'Unknown';
    const description = getLocalizedText(item, 'event_detail') || item.description || '';
    const province = item.location?.province || item.province || '';
    const thumbnail = item.thumbnail_url || item.thumbnail || getDefaultImage('event');

    // Parse event date
    const startDate = item.event_start_date ? new Date(item.event_start_date) : new Date();
    const day = startDate.getDate();
    const month = startDate.toLocaleDateString(appState.currentLang === 'th' ? 'th-TH' : appState.currentLang === 'zh' ? 'zh-CN' : 'en-US', { month: 'short' });

    card.innerHTML = `
        <div class="card-image">
            <img src="${thumbnail}" alt="${name}" onerror="this.src='${getDefaultImage('event')}'">
            <div class="event-date">
                <span class="day">${day}</span>
                <span class="month">${month}</span>
            </div>
        </div>
        <div class="card-content">
            <h3>${name}</h3>
            <p>${truncateText(stripHtml(description), 100)}</p>
            <div class="card-meta">
                <span><i class="fas fa-map-marker-alt"></i> ${province}</span>
            </div>
        </div>
    `;

    card.addEventListener('click', () => showDetail(item, 'event'));

    return card;
}

// ==================== Modal ====================

function initModal() {
    const modal = document.getElementById('detailModal');
    const closeBtn = modal.querySelector('.close-modal');

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.classList.remove('active');
        }
    });
}

function showDetail(item, type) {
    const modal = document.getElementById('detailModal');
    const content = document.getElementById('modalContent');

    const name = getLocalizedText(item, type === 'event' ? 'event_name' : 'place_name') || item.name || 'Unknown';
    const description = getLocalizedText(item, type === 'event' ? 'event_detail' : 'place_information') || item.description || t('no_results');
    const province = item.location?.province || item.province || '';
    const address = item.location?.address || item.address || '';
    const thumbnail = item.thumbnail_url || item.thumbnail || getDefaultImage(type);
    const tel = item.contact?.phones?.[0] || item.tel || '';
    const openTime = item.opening_hours?.open_time || item.openingHours || '';
    const closeTime = item.opening_hours?.close_time || '';
    const fee = item.fee?.thai || item.fee || '';
    const lat = item.latitude || item.location?.latitude || 0;
    const lng = item.longitude || item.location?.longitude || 0;

    content.innerHTML = `
        <img src="${thumbnail}" alt="${name}" class="modal-image" onerror="this.src='${getDefaultImage(type)}'">
        <div class="modal-body">
            <h2>${name}</h2>
            <p>${stripHtml(description)}</p>

            <div class="modal-info">
                ${address || province ? `
                <div class="modal-info-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${address || province}</span>
                </div>
                ` : ''}

                ${tel ? `
                <div class="modal-info-item">
                    <i class="fas fa-phone"></i>
                    <span>${tel}</span>
                </div>
                ` : ''}

                ${openTime ? `
                <div class="modal-info-item">
                    <i class="fas fa-clock"></i>
                    <span>${openTime}${closeTime ? ' - ' + closeTime : ''}</span>
                </div>
                ` : ''}

                ${fee ? `
                <div class="modal-info-item">
                    <i class="fas fa-ticket-alt"></i>
                    <span>${fee}</span>
                </div>
                ` : ''}

                ${lat && lng ? `
                <div class="modal-info-item">
                    <i class="fas fa-directions"></i>
                    <a href="https://www.google.com/maps?q=${lat},${lng}" target="_blank" style="color: var(--primary-color);">${t('modal_map')}</a>
                </div>
                ` : ''}
            </div>
        </div>
    `;

    modal.classList.add('active');
}

// ==================== Search ====================

function initSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });

    // Load more button
    document.getElementById('loadMoreAttractions')?.addEventListener('click', () => {
        appState.currentPage.attractions++;
        loadAttractions();
    });
}

async function performSearch() {
    const keyword = document.getElementById('searchInput').value;
    const category = document.getElementById('categorySelect').value;
    const province = document.getElementById('provinceSelect').value;

    showLoading('attractionsLoading', true);

    const data = await fetchFromAPI('/search', {
        keyword: keyword,
        categorycodes: category,
        provinceName: province,
        numberOfResult: 12
    });

    showLoading('attractionsLoading', false);

    if (data && data.result) {
        appState.attractions = data.result;
        renderAttractions();

        // Scroll to results
        document.getElementById('attractions').scrollIntoView({ behavior: 'smooth' });
    } else {
        // Show no results message
        const grid = document.getElementById('attractionsGrid');
        grid.innerHTML = `<div class="text-center" style="grid-column: 1/-1; padding: 50px;">
            <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 20px;"></i>
            <p>${t('no_results')}</p>
        </div>`;
    }
}

// ==================== Sample Data (Fallback) ====================

function getSampleAttractions() {
    return [
        {
            name: appState.currentLang === 'th' ? 'วัดพระศรีรัตนศาสดาราม' : appState.currentLang === 'zh' ? '玉佛寺' : 'Temple of the Emerald Buddha',
            description: appState.currentLang === 'th' ? 'วัดพระแก้ว หรือวัดพระศรีรัตนศาสดาราม เป็นวัดที่สำคัญที่สุดในประเทศไทย ตั้งอยู่ในเขตพระบรมมหาราชวัง' : appState.currentLang === 'zh' ? '玉佛寺是泰国最重要的佛教寺庙，位于曼谷大皇宫内。' : 'The most sacred Buddhist temple in Thailand, located within the Grand Palace complex.',
            province: appState.currentLang === 'th' ? 'กรุงเทพมหานคร' : appState.currentLang === 'zh' ? '曼谷' : 'Bangkok',
            thumbnail: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=600',
            category_description: appState.currentLang === 'th' ? 'วัด' : appState.currentLang === 'zh' ? '寺庙' : 'Temple'
        },
        {
            name: appState.currentLang === 'th' ? 'เกาะพีพี' : appState.currentLang === 'zh' ? '皮皮岛' : 'Phi Phi Islands',
            description: appState.currentLang === 'th' ? 'หมู่เกาะที่สวยที่สุดแห่งหนึ่งของโลก ด้วยน้ำทะเลสีเทอร์ควอยซ์และหน้าผาหินปูนอันตระการตา' : appState.currentLang === 'zh' ? '世界上最美丽的岛屿之一，拥有碧绿的海水和壮观的石灰岩悬崖。' : 'One of the most beautiful islands in the world with turquoise waters and dramatic limestone cliffs.',
            province: appState.currentLang === 'th' ? 'กระบี่' : appState.currentLang === 'zh' ? '甲米' : 'Krabi',
            thumbnail: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=600',
            category_description: appState.currentLang === 'th' ? 'เกาะ' : appState.currentLang === 'zh' ? '岛屿' : 'Island'
        },
        {
            name: appState.currentLang === 'th' ? 'วัดร่องขุ่น' : appState.currentLang === 'zh' ? '白庙' : 'White Temple',
            description: appState.currentLang === 'th' ? 'วัดสีขาวที่สวยงามในเชียงราย ออกแบบโดยศิลปินแห่งชาติ เฉลิมชัย โฆษิตพิพัฒน์' : appState.currentLang === 'zh' ? '清莱美丽的白色寺庙，由国家艺术家Chalermchai Kositpipat设计。' : 'A stunning white temple in Chiang Rai designed by national artist Chalermchai Kositpipat.',
            province: appState.currentLang === 'th' ? 'เชียงราย' : appState.currentLang === 'zh' ? '清莱' : 'Chiang Rai',
            thumbnail: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600',
            category_description: appState.currentLang === 'th' ? 'วัด' : appState.currentLang === 'zh' ? '寺庙' : 'Temple'
        },
        {
            name: appState.currentLang === 'th' ? 'อุทยานประวัติศาสตร์อยุธยา' : appState.currentLang === 'zh' ? '大城历史公园' : 'Ayutthaya Historical Park',
            description: appState.currentLang === 'th' ? 'มรดกโลกที่เป็นซากปรักหักพังของอาณาจักรสยามโบราณ' : appState.currentLang === 'zh' ? '世界遗产，古暹罗王国的废墟遗址。' : 'UNESCO World Heritage Site featuring ruins of the ancient Siamese kingdom.',
            province: appState.currentLang === 'th' ? 'พระนครศรีอยุธยา' : appState.currentLang === 'zh' ? '大城府' : 'Ayutthaya',
            thumbnail: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=600',
            category_description: appState.currentLang === 'th' ? 'โบราณสถาน' : appState.currentLang === 'zh' ? '历史遗址' : 'Historical Site'
        },
        {
            name: appState.currentLang === 'th' ? 'หาดป่าตอง' : appState.currentLang === 'zh' ? '芭东海滩' : 'Patong Beach',
            description: appState.currentLang === 'th' ? 'หาดที่มีชื่อเสียงที่สุดในภูเก็ต เต็มไปด้วยกิจกรรมและความบันเทิง' : appState.currentLang === 'zh' ? '普吉岛最著名的海滩，充满活动和娱乐。' : 'The most famous beach in Phuket, full of activities and entertainment.',
            province: appState.currentLang === 'th' ? 'ภูเก็ต' : appState.currentLang === 'zh' ? '普吉岛' : 'Phuket',
            thumbnail: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=600',
            category_description: appState.currentLang === 'th' ? 'ชายหาด' : appState.currentLang === 'zh' ? '海滩' : 'Beach'
        },
        {
            name: appState.currentLang === 'th' ? 'ดอยสุเทพ' : appState.currentLang === 'zh' ? '素贴山' : 'Doi Suthep',
            description: appState.currentLang === 'th' ? 'วัดบนยอดเขาที่ศักดิ์สิทธิ์ที่สุดในภาคเหนือ มองเห็นวิวเมืองเชียงใหม่' : appState.currentLang === 'zh' ? '北部最神圣的山顶寺庙，可俯瞰清迈城市景观。' : 'The most sacred mountain temple in Northern Thailand with views over Chiang Mai.',
            province: appState.currentLang === 'th' ? 'เชียงใหม่' : appState.currentLang === 'zh' ? '清迈' : 'Chiang Mai',
            thumbnail: 'https://images.unsplash.com/photo-1598935898639-81629f717fcd?w=600',
            category_description: appState.currentLang === 'th' ? 'วัด' : appState.currentLang === 'zh' ? '寺庙' : 'Temple'
        }
    ];
}

function getSampleEvents() {
    return [
        {
            name: appState.currentLang === 'th' ? 'เทศกาลลอยกระทง' : appState.currentLang === 'zh' ? '水灯节' : 'Loy Krathong Festival',
            description: appState.currentLang === 'th' ? 'เทศกาลลอยกระทงที่จัดขึ้นในคืนวันเพ็ญเดือนสิบสอง เพื่อขอขมาพระแม่คงคา' : appState.currentLang === 'zh' ? '在农历十二月满月之夜举行的水灯节，向河神祈福。' : 'Festival of lights celebrated on the full moon night of the 12th lunar month.',
            province: appState.currentLang === 'th' ? 'ทั่วประเทศ' : appState.currentLang === 'zh' ? '全国' : 'Nationwide',
            thumbnail: 'https://images.unsplash.com/photo-1573391031921-cd0f7c2e4a92?w=600',
            event_start_date: '2024-11-15'
        },
        {
            name: appState.currentLang === 'th' ? 'เทศกาลสงกรานต์' : appState.currentLang === 'zh' ? '宋干节' : 'Songkran Festival',
            description: appState.currentLang === 'th' ? 'เทศกาลปีใหม่ไทยที่มีการสาดน้ำเพื่อความสนุกสนาน' : appState.currentLang === 'zh' ? '泰国新年节日，以泼水庆祝。' : 'Thai New Year celebration featuring water splashing festivities.',
            province: appState.currentLang === 'th' ? 'ทั่วประเทศ' : appState.currentLang === 'zh' ? '全国' : 'Nationwide',
            thumbnail: 'https://images.unsplash.com/photo-1576600006194-8e3f89c66f11?w=600',
            event_start_date: '2025-04-13'
        },
        {
            name: appState.currentLang === 'th' ? 'เทศกาลยี่เป็ง' : appState.currentLang === 'zh' ? '万人天灯节' : 'Yi Peng Lantern Festival',
            description: appState.currentLang === 'th' ? 'เทศกาลปล่อยโคมลอยขึ้นสู่ท้องฟ้า สวยงามตระการตา' : appState.currentLang === 'zh' ? '向天空放飞灯笼的壮观节日。' : 'Spectacular festival of releasing sky lanterns into the night sky.',
            province: appState.currentLang === 'th' ? 'เชียงใหม่' : appState.currentLang === 'zh' ? '清迈' : 'Chiang Mai',
            thumbnail: 'https://images.unsplash.com/photo-1541480110211-2e3cd8e35a2d?w=600',
            event_start_date: '2024-11-15'
        }
    ];
}

function getSampleRestaurants() {
    return [
        {
            name: appState.currentLang === 'th' ? 'ร้านอาหาร Gaggan' : appState.currentLang === 'zh' ? 'Gaggan餐厅' : 'Gaggan Restaurant',
            description: appState.currentLang === 'th' ? 'ร้านอาหารระดับมิชลิน 2 ดาว อาหารอินเดียโมเดิร์น' : appState.currentLang === 'zh' ? '米其林二星餐厅，现代印度菜。' : '2 Michelin star restaurant serving progressive Indian cuisine.',
            province: appState.currentLang === 'th' ? 'กรุงเทพมหานคร' : appState.currentLang === 'zh' ? '曼谷' : 'Bangkok',
            thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
            category_description: appState.currentLang === 'th' ? 'ร้านอาหารหรู' : appState.currentLang === 'zh' ? '高级餐厅' : 'Fine Dining'
        },
        {
            name: appState.currentLang === 'th' ? 'ตลาดนัดรถไฟรัชดา' : appState.currentLang === 'zh' ? '拉差达火车夜市' : 'Ratchada Train Night Market',
            description: appState.currentLang === 'th' ? 'ตลาดกลางคืนที่มีอาหารหลากหลายและบรรยากาศสนุกสนาน' : appState.currentLang === 'zh' ? '夜市，有各种美食和有趣的氛围。' : 'Night market with diverse food options and lively atmosphere.',
            province: appState.currentLang === 'th' ? 'กรุงเทพมหานคร' : appState.currentLang === 'zh' ? '曼谷' : 'Bangkok',
            thumbnail: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600',
            category_description: appState.currentLang === 'th' ? 'ตลาดนัด' : appState.currentLang === 'zh' ? '夜市' : 'Night Market'
        },
        {
            name: appState.currentLang === 'th' ? 'ร้านโภชนา' : appState.currentLang === 'zh' ? 'Pochana餐厅' : 'Pochana Restaurant',
            description: appState.currentLang === 'th' ? 'ร้านอาหารไทยต้นตำรับที่เปิดมานานกว่า 50 ปี' : appState.currentLang === 'zh' ? '经营超过50年的正宗泰国餐厅。' : 'Authentic Thai restaurant operating for over 50 years.',
            province: appState.currentLang === 'th' ? 'กรุงเทพมหานคร' : appState.currentLang === 'zh' ? '曼谷' : 'Bangkok',
            thumbnail: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600',
            category_description: appState.currentLang === 'th' ? 'อาหารไทย' : appState.currentLang === 'zh' ? '泰国菜' : 'Thai Food'
        }
    ];
}

function getSampleHotels() {
    return [
        {
            name: appState.currentLang === 'th' ? 'แมนดาริน โอเรียนเต็ล กรุงเทพฯ' : appState.currentLang === 'zh' ? '曼谷文华东方酒店' : 'Mandarin Oriental Bangkok',
            description: appState.currentLang === 'th' ? 'โรงแรมระดับตำนานริมแม่น้ำเจ้าพระยา ที่พักหรูหราระดับโลก' : appState.currentLang === 'zh' ? '湄南河畔的传奇酒店，世界级豪华住宿。' : 'Legendary hotel on the Chao Phraya River, world-class luxury accommodation.',
            province: appState.currentLang === 'th' ? 'กรุงเทพมหานคร' : appState.currentLang === 'zh' ? '曼谷' : 'Bangkok',
            thumbnail: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600',
            standard: '5',
            category_description: appState.currentLang === 'th' ? 'โรงแรมหรู' : appState.currentLang === 'zh' ? '豪华酒店' : 'Luxury Hotel'
        },
        {
            name: appState.currentLang === 'th' ? 'โรงแรมศรีลานนา เชียงใหม่' : appState.currentLang === 'zh' ? '清迈斯里兰纳酒店' : 'Sri Lanna Hotel Chiang Mai',
            description: appState.currentLang === 'th' ? 'โรงแรมบูติกสไตล์ล้านนา กลางเมืองเก่าเชียงใหม่' : appState.currentLang === 'zh' ? '位于清迈老城的兰纳风格精品酒店。' : 'Lanna-style boutique hotel in the heart of Chiang Mai old city.',
            province: appState.currentLang === 'th' ? 'เชียงใหม่' : appState.currentLang === 'zh' ? '清迈' : 'Chiang Mai',
            thumbnail: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600',
            standard: '4',
            category_description: appState.currentLang === 'th' ? 'โรงแรมบูติก' : appState.currentLang === 'zh' ? '精品酒店' : 'Boutique Hotel'
        },
        {
            name: appState.currentLang === 'th' ? 'ภูเก็ต มาริออท รีสอร์ท' : appState.currentLang === 'zh' ? '普吉岛万豪度假酒店' : 'Phuket Marriott Resort',
            description: appState.currentLang === 'th' ? 'รีสอร์ทหรูริมหาดในภูเก็ต สระว่ายน้ำและสปาระดับพรีเมียม' : appState.currentLang === 'zh' ? '普吉岛海滨豪华度假村，设有高级游泳池和水疗中心。' : 'Luxurious beachfront resort in Phuket with premium pools and spa.',
            province: appState.currentLang === 'th' ? 'ภูเก็ต' : appState.currentLang === 'zh' ? '普吉岛' : 'Phuket',
            thumbnail: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600',
            standard: '5',
            category_description: appState.currentLang === 'th' ? 'รีสอร์ท' : appState.currentLang === 'zh' ? '度假村' : 'Resort'
        }
    ];
}

// ==================== Utility Functions ====================

function showLoading(elementId, show) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.toggle('hidden', !show);
    }
}

function getLocalizedText(item, field) {
    if (!item) return '';

    // Try different language field formats
    const langSuffix = appState.currentLang === 'th' ? '' : `_${appState.currentLang}`;
    const fieldName = field + langSuffix;

    return item[fieldName] || item[field] || '';
}

function truncateText(text, maxLength) {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

function stripHtml(html) {
    if (!html) return '';
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
}

function getCategoryLabel(type) {
    const labels = {
        attraction: t('category_attraction'),
        restaurant: t('category_restaurant'),
        hotel: t('category_hotel'),
        event: t('nav_events')
    };
    return labels[type] || type;
}

function getDefaultImage(type) {
    const images = {
        attraction: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=600',
        restaurant: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
        hotel: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600',
        event: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600'
    };
    return images[type] || images.attraction;
}

// Contact form submission
document.getElementById('contactForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };

    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = t('loading');

    try {
        const response = await fetch(`${API.baseUrl}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            alert(appState.currentLang === 'th' ? 'ส่งข้อความเรียบร้อยแล้ว!' :
                  appState.currentLang === 'zh' ? '消息已发送！' : 'Message sent successfully!');
            this.reset();
        } else {
            throw new Error(result.error || 'Failed to send message');
        }
    } catch (error) {
        console.error('Contact form error:', error);
        alert(appState.currentLang === 'th' ? 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง' :
              appState.currentLang === 'zh' ? '发生错误，请重试' : 'An error occurred. Please try again.');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
});

// Region card click handler
document.querySelectorAll('.region-card').forEach(card => {
    card.addEventListener('click', async () => {
        const region = card.dataset.region;
        const provinceMap = {
            north: 'Chiang Mai',
            northeast: 'Nakhon Ratchasima',
            central: 'Bangkok',
            east: 'Pattaya',
            south: 'Phuket'
        };

        document.getElementById('provinceSelect').value = provinceMap[region] || '';
        performSearch();
    });
});
