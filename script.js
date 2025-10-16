// ==============================
// GLOBAL VARIABLES
// ==============================

const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const heroCtaBtn = document.getElementById('heroCtaBtn');


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

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// Close menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target) && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});


// ==============================
// SMOOTH SCROLL FOR NAVIGATION
// ==============================

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
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
            window.location.href = 'catalog.html';
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
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Focus trap for mobile menu when open
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
