// ==============================
// GLOBAL VARIABLES
// ==============================

const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const navMenuLeft = document.getElementById('navMenuLeft');
const navMenuRight = document.getElementById('navMenuRight');
const navLinks = document.querySelectorAll('.nav-link');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const heroCtaBtn = document.getElementById('heroCtaBtn');

// Language Selector Elements
const languageBtnDesktop = document.getElementById('languageBtnDesktop');
const languageBtnMobile = document.getElementById('languageBtnMobile');
const languageDropdownDesktop = document.getElementById('languageDropdownDesktop');
const languageDropdownMobile = document.getElementById('languageDropdownMobile');
const languageSelectorDesktop = document.querySelector('.language-selector-desktop');
const languageSelectorMobile = document.querySelector('.language-selector-mobile');
const currentFlagDesktop = document.getElementById('currentFlagDesktop');
const currentFlagMobile = document.getElementById('currentFlagMobile');
const countryName = document.getElementById('countryName');
const countryNameMobile = document.getElementById('countryNameMobile');

// ==============================
// TRANSLATIONS (i18n)
// ==============================

const translations = {
    es: {
        nav: {
            home: 'Inicio',
            products: 'Productos',
            distributors: 'Distribuidores',
            contact: 'Contacto'
        },
        hero: {
            title: 'ROB ALLEN MEXICO',
            subtitle: 'Equipo de Pesca Submarina de Alto Rendimiento',
            description: 'Arpones profesionales, focos de buceo y accesorios para cazadores submarinos exigentes',
            cta: 'Explora Nuestros Productos'
        },
        products: {
            title: 'Productos Destacados',
            subtitle: 'Equipamiento profesional para los mejores cazadores submarinos'
        },
        about: {
            label: '¿Por qué elegirnos?',
            title: 'Pasión por el Buceo, Compromiso con la Calidad',
            description1: 'En Rob Allen Mexico, somos más que una tienda de equipo. Somos una comunidad de apasionados por la pesca submarina que entiende las necesidades de cada cazador submarino.',
            description2: 'Ofrecemos únicamente productos de la más alta calidad, probados en las condiciones más exigentes del océano. Nuestro equipo está diseñado para durar y rendir al máximo nivel.'
        },
        testimonials: {
            title: 'Lo Que Dicen Nuestros Clientes',
            subtitle: 'Experiencias reales de cazadores submarinos profesionales'
        },
        cta: {
            title: '¿Listo para la Mejor Experiencia de Pesca Submarina?',
            description: 'Únete a nuestra comunidad y recibe ofertas exclusivas, consejos de expertos y las últimas novedades en equipamiento profesional.',
            btn1: 'Ver Catálogo Completo',
            btn2: 'Suscríbete al Newsletter'
        }
    },
    en: {
        nav: {
            home: 'Home',
            products: 'Products',
            distributors: 'Distributors',
            contact: 'Contact'
        },
        hero: {
            title: 'ROB ALLEN USA',
            subtitle: 'High Performance Spearfishing Equipment',
            description: 'Professional spearguns, dive lights and accessories for demanding spearfishermen',
            cta: 'Explore Our Products'
        },
        products: {
            title: 'Featured Products',
            subtitle: 'Professional equipment for the best spearfishermen'
        },
        about: {
            label: 'Why Choose Us?',
            title: 'Passion for Diving, Commitment to Quality',
            description1: 'At Rob Allen USA, we are more than an equipment store. We are a community of spearfishing enthusiasts who understand the needs of every spearfisherman.',
            description2: 'We offer only the highest quality products, tested in the most demanding ocean conditions. Our equipment is designed to last and perform at the highest level.'
        },
        testimonials: {
            title: 'What Our Customers Say',
            subtitle: 'Real experiences from professional spearfishermen'
        },
        cta: {
            title: 'Ready for the Best Spearfishing Experience?',
            description: 'Join our community and receive exclusive offers, expert advice and the latest news in professional equipment.',
            btn1: 'View Full Catalog',
            btn2: 'Subscribe to Newsletter'
        }
    },
    pt: {
        nav: {
            home: 'Início',
            products: 'Produtos',
            distributors: 'Distribuidores',
            contact: 'Contato'
        },
        hero: {
            title: 'ROB ALLEN BRASIL',
            subtitle: 'Equipamento de Pesca Submarina de Alto Desempenho',
            description: 'Arpões profissionais, lanternas de mergulho e acessórios para pescadores submarinos exigentes',
            cta: 'Explore Nossos Produtos'
        },
        products: {
            title: 'Produtos em Destaque',
            subtitle: 'Equipamento profissional para os melhores pescadores submarinos'
        },
        about: {
            label: 'Por que nos escolher?',
            title: 'Paixão pelo Mergulho, Compromisso com a Qualidade',
            description1: 'Na Rob Allen Brasil, somos mais do que uma loja de equipamentos. Somos uma comunidade de entusiastas da pesca submarina que entende as necessidades de cada pescador submarino.',
            description2: 'Oferecemos apenas produtos da mais alta qualidade, testados nas condições mais exigentes do oceano. Nossos equipamentos são projetados para durar e ter o melhor desempenho.'
        },
        testimonials: {
            title: 'O Que Nossos Clientes Dizem',
            subtitle: 'Experiências reais de pescadores submarinos profissionais'
        },
        cta: {
            title: 'Pronto para a Melhor Experiência de Pesca Submarina?',
            description: 'Junte-se à nossa comunidade e receba ofertas exclusivas, conselhos de especialistas e as últimas novidades em equipamentos profissionais.',
            btn1: 'Ver Catálogo Completo',
            btn2: 'Inscrever-se no Newsletter'
        }
    },
    'en-au': {
        nav: {
            home: 'Home',
            products: 'Products',
            distributors: 'Distributors',
            contact: 'Contact'
        },
        hero: {
            title: 'ROB ALLEN AUSTRALIA',
            subtitle: 'High Performance Spearfishing Equipment',
            description: 'Professional spearguns, dive lights and accessories for demanding spearfishermen',
            cta: 'Explore Our Products'
        },
        products: {
            title: 'Featured Products',
            subtitle: 'Professional equipment for the best spearfishermen'
        },
        about: {
            label: 'Why Choose Us?',
            title: 'Passion for Diving, Commitment to Quality',
            description1: 'At Rob Allen Australia, we are more than an equipment store. We are a community of spearfishing enthusiasts who understand the needs of every spearfisherman.',
            description2: 'We offer only the highest quality products, tested in the most demanding ocean conditions. Our equipment is designed to last and perform at the highest level.'
        },
        testimonials: {
            title: 'What Our Customers Say',
            subtitle: 'Real experiences from professional spearfishermen'
        },
        cta: {
            title: 'Ready for the Best Spearfishing Experience?',
            description: 'Join our community and receive exclusive offers, expert advice and the latest news in professional equipment.',
            btn1: 'View Full Catalog',
            btn2: 'Subscribe to Newsletter'
        }
    }
};

// Current language
let currentLang = localStorage.getItem('language') || 'es';

// Language mapping to countries
const languageCountryMap = {
    'es': { country: 'MEXICO', flag: '🇲🇽' },
    'en': { country: 'USA', flag: '🇺🇸' },
    'pt': { country: 'BRASIL', flag: '🇧🇷' },
    'en-au': { country: 'AUSTRALIA', flag: '🇦🇺' }
};

// ==============================
// LANGUAGE SYSTEM
// ==============================

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update country name and flag
    const langData = languageCountryMap[lang];
    if (countryName) {
        countryName.textContent = langData.country;
    }
    if (countryNameMobile) {
        countryNameMobile.textContent = langData.country;
    }
    if (currentFlagDesktop) {
        currentFlagDesktop.textContent = langData.flag;
    }
    if (currentFlagMobile) {
        currentFlagMobile.textContent = langData.flag;
    }
    
    // Update all translations
    const t = translations[lang];
    if (!t) return;
    
    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = t;
        
        for (let k of keys) {
            value = value[k];
            if (!value) break;
        }
        
        if (value) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.value = value;
            } else if (element.tagName === 'BUTTON' && element.querySelector('span')) {
                element.querySelector('span').textContent = value;
            } else {
                // Check if we need to preserve HTML tags
                const originalHTML = element.innerHTML;
                if (originalHTML.includes('<strong>') || originalHTML.includes('<b>')) {
                    // Preserve strong tags by replacing Rob Allen country name with strong tag
                    const countryNames = ['MEXICO', 'USA', 'BRASIL', 'AUSTRALIA'];
                    countryNames.forEach(country => {
                        if (value.includes(country)) {
                            value = value.replace(country, `<strong>${country}</strong>`);
                        }
                    });
                    // Also handle "Rob Allen" brand name
                    if (value.includes('Rob Allen')) {
                        value = value.replace(/Rob Allen ([A-Z]+)/g, '<strong>Rob Allen $1</strong>');
                    }
                }
                element.innerHTML = value;
            }
        }
    });
    
    // Update page title
    document.title = `Rob Allen ${langData.country} - ${t.hero.subtitle}`;
    
    // Update HTML lang attribute
    document.documentElement.lang = lang.split('-')[0];
}

// Initialize language on page load
changeLanguage(currentLang);

// Language selector toggle - handle both mobile and desktop
function setupLanguageSelector(btn, dropdown, selector) {
    if (btn && dropdown && selector) {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            selector.classList.toggle('active');
        });
        
        // Handle language selection
        const languageOptions = dropdown.querySelectorAll('.language-option');
        languageOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const lang = option.getAttribute('data-lang');
                changeLanguage(lang);
                // Close all selectors
                if (languageSelectorDesktop) languageSelectorDesktop.classList.remove('active');
                if (languageSelectorMobile) languageSelectorMobile.classList.remove('active');
            });
        });
    }
}

// Setup both mobile and desktop selectors
if (languageBtnDesktop && languageDropdownDesktop && languageSelectorDesktop) {
    setupLanguageSelector(languageBtnDesktop, languageDropdownDesktop, languageSelectorDesktop);
}
if (languageBtnMobile && languageDropdownMobile && languageSelectorMobile) {
    setupLanguageSelector(languageBtnMobile, languageDropdownMobile, languageSelectorMobile);
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (languageSelectorDesktop && !languageSelectorDesktop.contains(e.target)) {
        languageSelectorDesktop.classList.remove('active');
    }
    if (languageSelectorMobile && !languageSelectorMobile.contains(e.target)) {
        languageSelectorMobile.classList.remove('active');
    }
});


// ==============================
// STICKY HEADER ON SCROLL
// ==============================

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add scrolled class for styling
    if (scrollTop > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Hide/show header on scroll direction (optional - keeping visible always for better UX)
    // Uncomment below if you want auto-hide behavior
    /*
    if (scrollTop > lastScrollTop && scrollTop > 200) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    */
    
    lastScrollTop = scrollTop;
});


// ==============================
// HAMBURGER MENU TOGGLE
// ==============================

// Mobile Menu Toggle
if (hamburger && mobileMenuOverlay && mobileMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = 'hidden';
    });
}

if (mobileMenuClose && mobileMenuOverlay) {
    mobileMenuClose.addEventListener('click', () => {
        closeMobileMenu();
    });
}

if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', (e) => {
        if (e.target === mobileMenuOverlay) {
            closeMobileMenu();
        }
    });
}

function closeMobileMenu() {
    if (hamburger) hamburger.classList.remove('active');
    if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('active');
    if (mobileMenu) mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Mobile dropdown menu toggle
const mobileDropdowns = document.querySelectorAll('.mobile-has-dropdown');
mobileDropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('.mobile-nav-link');
    if (link) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.classList.toggle('active');
        });
    }
});

// Close mobile menu when clicking on a link
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
    });
});

// Close menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Don't close menu if it's a dropdown parent on mobile
        const parentLi = link.closest('.has-dropdown');
        if (parentLi && window.innerWidth <= 768) {
            e.preventDefault();
            parentLi.classList.toggle('active');
            return;
        }
        
        if (hamburger) hamburger.classList.remove('active');
        if (navMenuLeft) navMenuLeft.classList.remove('active');
        if (navMenuRight) navMenuRight.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const isMenuActive = (navMenuLeft?.classList.contains('active') || navMenuRight?.classList.contains('active'));
    const isClickInsideMenu = (navMenuLeft?.contains(e.target) || navMenuRight?.contains(e.target));
    const isClickOnHamburger = hamburger?.contains(e.target);
    
    if (isMenuActive && !isClickInsideMenu && !isClickOnHamburger) {
        if (hamburger) hamburger.classList.remove('active');
        if (navMenuLeft) navMenuLeft.classList.remove('active');
        if (navMenuRight) navMenuRight.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});


// ==============================
// SMOOTH SCROLL FOR NAVIGATION
// ==============================

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        
        // Only prevent default for anchor links (starting with #)
        // Allow regular page links to work normally
        if (targetId && targetId.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
        // If it's not an anchor link (like catalog.html), let it navigate normally
    });
});


// ==============================
// HERO CTA BUTTON SCROLL
// ==============================

if (heroCtaBtn) {
    heroCtaBtn.addEventListener('click', () => {
        // Navigate to catalog page
        window.location.href = 'catalog.html';
    });
}


// ==============================
// PARALLAX EFFECT ON HERO
// ==============================

const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    if (hero) {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        if (scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    }
});


// ==============================
// INTERSECTION OBSERVER - ANIMATE ON SCROLL
// ==============================

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve after animation for performance
            animateOnScroll.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with .animate-on-scroll class
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
elementsToAnimate.forEach(element => {
    animateOnScroll.observe(element);
});


// ==============================
// PRODUCT CARDS INTERACTIONS
// ==============================

const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    // Add click event to product cards
    card.addEventListener('click', (e) => {
        // Don't trigger if clicking on buttons
        if (!e.target.closest('.btn')) {
            const productName = card.querySelector('.product-name').textContent;
            console.log(`Viewing product: ${productName}`);
            // Add your navigation logic here
        }
    });
    
    // Button interactions
    const addToCartBtn = card.querySelector('.btn-secondary');
    const viewDetailsBtn = card.querySelector('.btn-view');
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productName = card.querySelector('.product-name').textContent;
            
            // Add visual feedback
            addToCartBtn.innerHTML = '<i class="fas fa-check"></i> Agregado';
            addToCartBtn.style.background = '#4CAF50';
            addToCartBtn.style.borderColor = '#4CAF50';
            
            setTimeout(() => {
                addToCartBtn.innerHTML = 'Agregar al Carrito';
                addToCartBtn.style.background = '';
                addToCartBtn.style.borderColor = '';
            }, 2000);
            
            console.log(`Added to cart: ${productName}`);
        });
    }
    
    if (viewDetailsBtn) {
        viewDetailsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productName = card.querySelector('.product-name').textContent;
            console.log(`View details: ${productName}`);
            // Add navigation to product detail page
        });
    }
});


// ==============================
// BUTTON RIPPLE EFFECT
// ==============================

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Ripple CSS (injected dynamically)
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);


// ==============================
// LAZY LOADING IMAGES
// ==============================

const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => {
    imageObserver.observe(img);
});


// ==============================
// NEWSLETTER FORM HANDLING (if needed)
// ==============================

const newsletterBtns = document.querySelectorAll('.cta-buttons .btn-outline');

newsletterBtns.forEach(btn => {
    if (btn.textContent.includes('Newsletter') || btn.textContent.includes('Suscríbete')) {
        btn.addEventListener('click', () => {
            // Show newsletter form modal or redirect
            const email = prompt('Ingresa tu correo electrónico:');
            if (email && validateEmail(email)) {
                alert('¡Gracias por suscribirte! Te enviaremos nuestras mejores ofertas.');
                console.log(`Newsletter subscription: ${email}`);
            } else if (email) {
                alert('Por favor ingresa un correo válido.');
            }
        });
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


// ==============================
// CATALOG BUTTON HANDLING
// ==============================

const catalogBtns = document.querySelectorAll('.cta-buttons .btn-primary');

catalogBtns.forEach(btn => {
    if (btn.textContent.includes('Catálogo')) {
        btn.addEventListener('click', () => {
            // Navigate to catalog page
            window.location.href = '../CATALOGO/catalog.html';
        });
    }
});


// ==============================
// TESTIMONIALS CAROUSEL (Optional Enhancement)
// ==============================

// If you want to add auto-rotation for testimonials
let currentTestimonialIndex = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');

function rotateTestimonials() {
    if (testimonialCards.length > 1) {
        testimonialCards.forEach((card, index) => {
            card.style.opacity = index === currentTestimonialIndex ? '1' : '0.7';
            card.style.transform = index === currentTestimonialIndex ? 'scale(1.02)' : 'scale(1)';
        });
        
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialCards.length;
    }
}

// Uncomment to enable auto-rotation every 5 seconds
// setInterval(rotateTestimonials, 5000);


// ==============================
// PERFORMANCE MONITORING
// ==============================

window.addEventListener('load', () => {
    // Log page load time
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log(`Page loaded in ${loadTime}ms`);
    
    // Add loaded class to body for any CSS animations
    document.body.classList.add('loaded');
});


// ==============================
// CAROUSEL FUNCTIONALITY - SIMPLE AND WORKING
// ==============================

const carouselTrack = document.getElementById('carouselTrack');
const carouselPrevBtn = document.getElementById('carouselPrev');
const carouselNextBtn = document.getElementById('carouselNext');

if (carouselTrack && carouselPrevBtn && carouselNextBtn) {
    let currentIndex = 0;
    let isAnimating = false;
    const slides = carouselTrack.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    
    // Calculate how many slides to show based on screen width
    function getSlidesToShow() {
        const width = window.innerWidth;
        if (width <= 768) return 1; // Móvil: 1 producto COMPLETO
        if (width <= 1024) return 2;
        return 4;
    }
    
    function getSlideWidth() {
        const slidesToShow = getSlidesToShow();
        const containerWidth = carouselTrack.parentElement.offsetWidth;
        const gap = 16; // 1rem = 16px
        return (containerWidth - (gap * (slidesToShow - 1))) / slidesToShow;
    }
    
    function updateCarousel() {
        if (isAnimating) return;
        
        // Limitar índice
        if (currentIndex < 0) {
            currentIndex = 0;
            return;
        }
        
        const slidesToShow = getSlidesToShow();
        const maxIndex = Math.max(0, totalSlides - slidesToShow);
        
        if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
        }
        
        isAnimating = true;
        const slideWidth = getSlideWidth();
        const gap = 16;
        const translateX = -(currentIndex * (slideWidth + gap));
        
        carouselTrack.style.transition = 'transform 0.5s ease-out';
        carouselTrack.style.transform = `translateX(${translateX}px)`;
        
        // Update button states
        carouselPrevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        carouselPrevBtn.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
        carouselNextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
        carouselNextBtn.style.pointerEvents = currentIndex >= maxIndex ? 'none' : 'auto';
        
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }
    
    // Next button
    carouselNextBtn.addEventListener('click', () => {
        if (isAnimating) return;
        const slidesToShow = getSlidesToShow();
        const maxIndex = Math.max(0, totalSlides - slidesToShow);
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    // Previous button
    carouselPrevBtn.addEventListener('click', () => {
        if (isAnimating) return;
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    // Touch/Swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    let isDragging = false;
    let startTranslate = 0;
    
    carouselTrack.addEventListener('touchstart', (e) => {
        if (isAnimating) return;
        touchStartX = e.changedTouches[0].screenX;
        isDragging = true;
        startTranslate = currentIndex;
        carouselTrack.style.transition = 'none';
    }, { passive: true });
    
    carouselTrack.addEventListener('touchmove', (e) => {
        if (!isDragging || isAnimating) return;
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        const slideWidth = getSlideWidth();
        const gap = 16;
        const currentTranslate = -(startTranslate * (slideWidth + gap));
        const newTranslate = currentTranslate - diff;
        carouselTrack.style.transform = `translateX(${newTranslate}px)`;
    }, { passive: true });
    
    carouselTrack.addEventListener('touchend', (e) => {
        if (!isDragging || isAnimating) return;
        isDragging = false;
        carouselTrack.style.transition = 'transform 0.5s ease-out';
        touchEndX = e.changedTouches[0].screenX;
        
        const swipeThreshold = 50;
        const swipeDistance = Math.abs(touchStartX - touchEndX);
        
        if (swipeDistance < swipeThreshold) {
            updateCarousel();
            return;
        }
        
        if (touchStartX - touchEndX > swipeThreshold) {
            // Swipe left - next
            const slidesToShow = getSlidesToShow();
            const maxIndex = Math.max(0, totalSlides - slidesToShow);
            if (currentIndex < maxIndex) {
                currentIndex++;
            }
        } else if (touchEndX - touchStartX > swipeThreshold) {
            // Swipe right - previous
            if (currentIndex > 0) {
                currentIndex--;
            }
        }
        
        updateCarousel();
    }, { passive: true });
    
    // Update on window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            currentIndex = Math.min(currentIndex, Math.max(0, totalSlides - getSlidesToShow()));
            updateCarousel();
        }, 100);
    });
    
    // Initialize carousel
    updateCarousel();
    
    // Make carousel products clickable
    const carouselProducts = document.querySelectorAll('.carousel-product');
    carouselProducts.forEach(product => {
        product.addEventListener('click', (e) => {
            if (e.target.closest('.carousel-product-btn')) {
                return;
            }
            window.location.href = `catalog.html?cat=carbon-series`;
        });
    });
}


// ==============================
// SHOPPING CART FUNCTIONALITY
// ==============================

let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartBtn = document.getElementById('cartBtn');
const cartOverlay = document.getElementById('cartOverlay');
const cartPopup = document.getElementById('cartPopup');
const cartClose = document.getElementById('cartClose');
const cartBadge = document.getElementById('cartBadge');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartFooter = document.getElementById('cartFooter');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartTotal = document.getElementById('cartTotal');

// Add to cart function (global)
window.addToCart = function(id, name, price, image) {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: id,
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }
    
    updateCart();
    showCartNotification();
}

// Remove from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

// Update quantity
function updateQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(id);
            return;
        }
        updateCart();
    }
}

// Update cart display
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartBadge) {
        cartBadge.textContent = totalItems;
        cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
    }
    const mobileCartBadge = document.getElementById('mobileCartBadge');
    if (mobileCartBadge) {
        mobileCartBadge.textContent = totalItems;
        mobileCartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
    }
    
    // Update cart items
    if (cart.length === 0) {
        if (cartEmpty) cartEmpty.style.display = 'flex';
        if (cartItems) cartItems.classList.remove('active');
        if (cartFooter) cartFooter.style.display = 'none';
    } else {
        if (cartEmpty) cartEmpty.style.display = 'none';
        if (cartItems) {
            cartItems.classList.add('active');
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item" data-item-id="${item.id}">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-info">
                        <h4 class="cart-item-name">${item.name}</h4>
                        <div class="cart-item-price">$${item.price.toLocaleString('es-MX')} MXN</div>
                        <div class="cart-item-controls">
                            <div class="cart-item-quantity">
                                <button onclick="updateQuantity(${item.id}, -1)">-</button>
                                <span>${item.quantity}</span>
                                <button onclick="updateQuantity(${item.id}, 1)">+</button>
                            </div>
                            <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Remove">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
        if (cartFooter) cartFooter.style.display = 'block';
        
        // Update totals
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        if (cartSubtotal) cartSubtotal.textContent = `$${subtotal.toLocaleString('es-MX')} MXN`;
        if (cartTotal) cartTotal.textContent = `$${subtotal.toLocaleString('es-MX')} MXN`;
    }
}

// Show cart notification
function showCartNotification() {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = '<i class="fas fa-check"></i> Producto agregado al carrito';
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Open cart
if (cartBtn && cartOverlay) {
    cartBtn.addEventListener('click', () => {
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Close cart
function closeCart() {
    if (cartOverlay) cartOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

if (cartClose) {
    cartClose.addEventListener('click', closeCart);
}

if (cartOverlay) {
    cartOverlay.addEventListener('click', (e) => {
        if (e.target === cartOverlay) {
            closeCart();
        }
    });
}

// Make updateQuantity and removeFromCart global
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;

// Initialize cart on page load
updateCart();

// Cart notification styles
const cartNotificationStyle = document.createElement('style');
cartNotificationStyle.textContent = `
    .cart-notification {
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #4CAF50, #45a049);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        z-index: 10002;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 600;
        transform: translateX(400px);
        opacity: 0;
        transition: all 0.3s ease;
    }
    .cart-notification.show {
        transform: translateX(0);
        opacity: 1;
    }
    .cart-notification i {
        font-size: 1.2rem;
    }
`;
document.head.appendChild(cartNotificationStyle);

// ==============================
// CONSOLE WELCOME MESSAGE
// ==============================

console.log('%c🌊 Rob Allen Mexico', 'font-size: 24px; color: #62B6CB; font-weight: bold;');
console.log('%c🔱 Equipo de Pesca Submarina de Alto Rendimiento', 'font-size: 14px; color: #1B4965;');
console.log('%c💻 Desarrollado con pasión por el océano', 'font-size: 12px; color: #0A2540;');


// ==============================
// ACCESSIBILITY ENHANCEMENTS
// ==============================

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && mobileMenuOverlay?.classList.contains('active')) {
        closeMobileMenu();
    }
});

// Focus trap for mobile menu when open
const navMenus = [navMenuLeft, navMenuRight].filter(Boolean);
navMenus.forEach(navMenu => {
    if (navMenu) {
        const focusableElements = navMenu.querySelectorAll('a, button');
        if (focusableElements.length > 0) {
            const firstFocusable = focusableElements[0];
            const lastFocusable = focusableElements[focusableElements.length - 1];
            
            navMenu.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    if (e.shiftKey && document.activeElement === firstFocusable) {
                        e.preventDefault();
                        lastFocusable.focus();
                    } else if (!e.shiftKey && document.activeElement === lastFocusable) {
                        e.preventDefault();
                        firstFocusable.focus();
                    }
                }
            });
        }
    }
});
