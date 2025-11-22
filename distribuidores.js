// ==============================
// DISTRIBUIDORES PAGE FUNCTIONALITY
// ==============================

// Global Variables
const searchInput = document.getElementById('searchInput');
const continentBtns = document.querySelectorAll('.continent-btn');
const distributorCards = document.querySelectorAll('.distributor-card');
const noResults = document.getElementById('noResults');
const mapModal = document.getElementById('mapModal');
const closeMapModal = document.getElementById('closeMapModal');
const mapModalTitle = document.getElementById('mapModalTitle');
const viewMapBtns = document.querySelectorAll('.btn-view-map');

let map = null;
let marker = null;

// ==============================
// SEARCH FUNCTIONALITY
// ==============================

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        filterCards();
    });
}

// ==============================
// CONTINENT FILTER
// ==============================

continentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        continentBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Filter cards
        filterCards();
    });
});

// ==============================
// FILTER CARDS FUNCTION
// ==============================

function filterCards() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const activeContinent = document.querySelector('.continent-btn.active');
    const selectedContinent = activeContinent ? activeContinent.dataset.continent : 'all';
    
    let visibleCount = 0;
    
    distributorCards.forEach(card => {
        const continent = card.dataset.continent;
        const country = card.dataset.country.toLowerCase();
        const cardText = card.textContent.toLowerCase();
        
        // Check if card matches continent filter
        const continentMatch = selectedContinent === 'all' || continent === selectedContinent;
        
        // Check if card matches search term
        const searchMatch = searchTerm === '' || 
                          country.includes(searchTerm) || 
                          cardText.includes(searchTerm);
        
        // Show or hide card
        if (continentMatch && searchMatch) {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });
    
    // Show "no results" message if needed
    if (noResults) {
        if (visibleCount === 0) {
            noResults.style.display = 'block';
        } else {
            noResults.style.display = 'none';
        }
    }
}

// ==============================
// MAP MODAL FUNCTIONALITY
// ==============================

// Initialize map when modal opens
function initMap(lat, lng, name) {
    // Remove existing map if any
    if (map) {
        map.remove();
        map = null;
    }
    
    // Create new map
    map = L.map('map').setView([lat, lng], 13);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);
    
    // Add marker
    marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup(`<b>${name}</b>`).openPopup();
    
    // Fix map display issue
    setTimeout(() => {
        map.invalidateSize();
    }, 100);
}

// View map buttons
viewMapBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const lat = parseFloat(btn.dataset.lat);
        const lng = parseFloat(btn.dataset.lng);
        const name = btn.dataset.name;
        
        // Update modal title
        if (mapModalTitle) {
            mapModalTitle.textContent = name;
        }
        
        // Show modal
        if (mapModal) {
            mapModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        // Initialize map
        initMap(lat, lng, name);
    });
});

// Close map modal
if (closeMapModal) {
    closeMapModal.addEventListener('click', closeModal);
}

// Close modal when clicking outside
if (mapModal) {
    mapModal.addEventListener('click', (e) => {
        if (e.target === mapModal) {
            closeModal();
        }
    });
}

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mapModal && mapModal.classList.contains('active')) {
        closeModal();
    }
});

function closeModal() {
    if (mapModal) {
        mapModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // Clean up map
    if (map) {
        map.remove();
        map = null;
    }
}

// ==============================
// SMOOTH SCROLL FOR NAVIGATION
// ==============================

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Only handle internal links
        if (href && href.startsWith('#')) {
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const header = document.querySelector('.header');
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ==============================
// SCROLL ANIMATIONS
// ==============================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all distributor cards
distributorCards.forEach(card => {
    observer.observe(card);
});

// ==============================
// STATS COUNTER
// ==============================

function updateStatsCounter() {
    const visibleCards = document.querySelectorAll('.distributor-card:not(.hidden)');
    console.log(`Mostrando ${visibleCards.length} distribuidores`);
}

// Update counter on filter change
if (searchInput) {
    searchInput.addEventListener('input', updateStatsCounter);
}

continentBtns.forEach(btn => {
    btn.addEventListener('click', updateStatsCounter);
});

// ==============================
// PERFORMANCE OPTIMIZATION
// ==============================

// Debounce search input
let searchTimeout;
const originalSearchHandler = searchInput ? searchInput.oninput : null;

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            filterCards();
            updateStatsCounter();
        }, 300);
    }, true);
}

// ==============================
// PAGE LOAD ANIMATIONS
// ==============================

window.addEventListener('load', () => {
    console.log('%c🌍 Rob Allen Distribuidores', 'font-size: 20px; color: #62B6CB; font-weight: bold;');
    console.log('%cRed global de distribuidores autorizados', 'font-size: 12px; color: #0A2540;');
    
    // Trigger initial filter
    filterCards();
    updateStatsCounter();
});

// ==============================
// ACCESSIBILITY ENHANCEMENTS
// ==============================

// Keyboard navigation for continent buttons
continentBtns.forEach((btn, index) => {
    btn.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            const nextBtn = continentBtns[index + 1] || continentBtns[0];
            nextBtn.focus();
            nextBtn.click();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            const prevBtn = continentBtns[index - 1] || continentBtns[continentBtns.length - 1];
            prevBtn.focus();
            prevBtn.click();
        }
    });
});

// ==============================
// MOBILE MENU HANDLING
// ==============================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && 
            !hamburger.contains(e.target) && 
            navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// ==============================
// PRINT FUNCTIONALITY
// ==============================

function printDistributors() {
    window.print();
}

// Add print styles
const printStyles = `
    @media print {
        .header, .search-section, .footer, .btn-view-map {
            display: none;
        }
        
        .distributor-card {
            page-break-inside: avoid;
            box-shadow: none;
            border: 1px solid #ddd;
        }
        
        .distributors-hero {
            padding: 2rem 0;
            margin-top: 0;
        }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = printStyles;
document.head.appendChild(styleSheet);

