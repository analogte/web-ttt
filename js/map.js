// Google Maps Integration for Thailand Travel Guide
// Interactive map with markers, filters, and info windows

let map;
let markers = [];
let infoWindow;
let activeCategory = 'all';

// Thailand center coordinates
const THAILAND_CENTER = { lat: 13.7563, lng: 100.5018 };
const DEFAULT_ZOOM = 6;

// Initialize Google Maps
function initMap() {
    // Check if Google Maps is loaded
    if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
        console.log('Google Maps not loaded, showing placeholder');
        showMapPlaceholder();
        return;
    }

    const mapElement = document.getElementById('interactiveMap');
    if (!mapElement) return;

    // Create map
    map = new google.maps.Map(mapElement, {
        center: THAILAND_CENTER,
        zoom: DEFAULT_ZOOM,
        styles: getMapStyles(),
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        fullscreenControl: true,
        streetViewControl: false,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        }
    });

    // Create single info window
    infoWindow = new google.maps.InfoWindow();

    // Add markers
    addMarkers();

    // Initialize category filters
    initCategoryFilters();
}

// Add markers to map
function addMarkers() {
    const places = getMapPlaces();
    const lang = localStorage.getItem('preferredLang') || 'th';

    places.forEach(place => {
        const config = getCategoryConfig(place.category);

        // Create custom marker
        const marker = new google.maps.Marker({
            position: { lat: place.lat, lng: place.lng },
            map: map,
            title: place.name[lang] || place.name.en,
            icon: createMarkerIcon(config.color),
            animation: google.maps.Animation.DROP,
            category: place.category,
            placeData: place
        });

        // Add click listener
        marker.addListener('click', () => {
            showInfoWindow(marker, place, lang);
        });

        markers.push(marker);
    });
}

// Create custom marker icon
function createMarkerIcon(color) {
    return {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: color,
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeWeight: 2,
        scale: 10
    };
}

// Show info window
function showInfoWindow(marker, place, lang) {
    const name = place.name[lang] || place.name.en;
    const description = place.description[lang] || place.description.en;
    const config = getCategoryConfig(place.category);
    const categoryLabel = config.label[lang] || config.label.en;

    const viewText = lang === 'th' ? 'ดูเส้นทาง' : lang === 'zh' ? '查看路线' : 'Get Directions';

    const content = `
        <div class="map-info-window">
            <img src="${place.image}" alt="${name}" class="info-image">
            <div class="info-content">
                <span class="info-category" style="background: ${config.color}">${categoryLabel}</span>
                <h3 class="info-title">${name}</h3>
                <p class="info-description">${description}</p>
                <div class="info-meta">
                    <span class="info-rating"><i class="fas fa-star"></i> ${place.rating}</span>
                    <span class="info-province"><i class="fas fa-map-marker-alt"></i> ${place.province}</span>
                </div>
                <a href="https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}"
                   target="_blank" class="info-directions">
                    <i class="fas fa-directions"></i> ${viewText}
                </a>
            </div>
        </div>
    `;

    infoWindow.setContent(content);
    infoWindow.open(map, marker);

    // Center map on marker
    map.panTo(marker.getPosition());
}

// Initialize category filters
function initCategoryFilters() {
    const filterButtons = document.querySelectorAll('.map-filter-btn');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter markers
            const category = btn.dataset.category;
            filterMarkers(category);
        });
    });
}

// Filter markers by category
function filterMarkers(category) {
    activeCategory = category;

    markers.forEach(marker => {
        if (category === 'all' || marker.category === category) {
            marker.setVisible(true);
        } else {
            marker.setVisible(false);
        }
    });

    // Close info window
    if (infoWindow) {
        infoWindow.close();
    }
}

// Show map placeholder (when Google Maps not available)
function showMapPlaceholder() {
    const mapElement = document.getElementById('interactiveMap');
    if (!mapElement) return;

    const lang = localStorage.getItem('preferredLang') || 'th';
    const places = getMapPlaces();

    const titleText = lang === 'th' ? 'สถานที่ท่องเที่ยวยอดนิยม' :
                     lang === 'zh' ? '热门旅游景点' : 'Popular Tourist Spots';
    const noteText = lang === 'th' ? 'เพิ่ม Google Maps API Key เพื่อดูแผนที่แบบ Interactive' :
                    lang === 'zh' ? '添加Google Maps API密钥以查看交互式地图' :
                    'Add Google Maps API Key to view interactive map';

    let placesHTML = places.slice(0, 8).map(place => {
        const name = place.name[lang] || place.name.en;
        const config = getCategoryConfig(place.category);
        return `
            <div class="placeholder-place" onclick="openInGoogleMaps(${place.lat}, ${place.lng})">
                <img src="${place.image}" alt="${name}">
                <div class="placeholder-place-info">
                    <h4>${name}</h4>
                    <span style="color: ${config.color}"><i class="fas ${config.icon}"></i> ${place.province}</span>
                </div>
            </div>
        `;
    }).join('');

    mapElement.innerHTML = `
        <div class="map-placeholder">
            <div class="placeholder-header">
                <i class="fas fa-map-marked-alt"></i>
                <h3>${titleText}</h3>
                <p class="placeholder-note">${noteText}</p>
            </div>
            <div class="placeholder-places">
                ${placesHTML}
            </div>
        </div>
    `;
}

// Open location in Google Maps
function openInGoogleMaps(lat, lng) {
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
}

// Get map styles (custom styling)
function getMapStyles() {
    return [
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#444444" }]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{ "color": "#f2f2f2" }]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{ "visibility": "off" }]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [{ "color": "#c5e8c5" }, { "visibility": "on" }]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{ "saturation": -100 }, { "lightness": 45 }]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{ "visibility": "simplified" }]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{ "color": "#ffd54f" }]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{ "visibility": "off" }]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{ "color": "#b3d9ff" }, { "visibility": "on" }]
        }
    ];
}

// Update markers language
function updateMarkersLanguage() {
    const lang = localStorage.getItem('preferredLang') || 'th';

    markers.forEach(marker => {
        const place = marker.placeData;
        marker.setTitle(place.name[lang] || place.name.en);
    });
}

// Expose functions globally
window.initMap = initMap;
window.openInGoogleMaps = openInGoogleMaps;
