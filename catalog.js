// ==============================
// CATALOG FUNCTIONALITY
// ==============================

// Global variables
let allProducts = [];
let filteredProducts = [];
let cart = JSON.parse(localStorage.getItem('roballenCart')) || [];
let currentFilter = 'all';
let currentSort = 'featured';

// DOM elements
const filterButtons = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sort');
const productsGrid = document.getElementById('productsGrid');
const cartCount = document.querySelector('.cart-count');
const loadMoreBtn = document.getElementById('loadMoreBtn');

// Initialize catalog
document.addEventListener('DOMContentLoaded', () => {
    initializeCatalog();
    updateCartDisplay();
    setupEventListeners();
    handleURLParams();
});

// ==============================
// INITIALIZATION
// ==============================

function initializeCatalog() {
    // Get all products from DOM
    allProducts = Array.from(document.querySelectorAll('.product-item'));
    filteredProducts = [...allProducts];
    
    // Add data attributes for filtering
    allProducts.forEach((product, index) => {
        const category = product.dataset.category;
        const price = parseInt(product.dataset.price);
        const featured = product.dataset.featured === 'true';
        
        // Add additional data attributes
        product.dataset.index = index;
        product.dataset.name = product.querySelector('.product-name').textContent;
        
        // Add animation delay
        product.style.animationDelay = `${index * 0.1}s`;
        product.classList.add('fade-in');
    });
    
    console.log(`Catalog initialized with ${allProducts.length} products`);
}

function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            setActiveFilter(filter);
            filterProducts(filter);
        });
    });
    
    // Sort select
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            sortProducts(currentSort);
        });
    }
    
    // Add to cart buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            e.preventDefault();
            e.stopPropagation();
            addToCart(e.target);
        }
    });
    
    // Quick view buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-quick-view')) {
            e.preventDefault();
            e.stopPropagation();
            showQuickView(e.target.closest('.product-item'));
        }
    });
    
    // Load more button
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreProducts);
    }
    
    // Cart icon click
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', showCart);
    }
}

function handleURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter');
    
    if (filterParam) {
        setActiveFilter(filterParam);
        filterProducts(filterParam);
    }
}

// ==============================
// FILTERING FUNCTIONALITY
// ==============================

function setActiveFilter(filter) {
    // Update active button
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        }
    });
    
    currentFilter = filter;
    
    // Update URL without page reload
    const url = new URL(window.location);
    if (filter === 'all') {
        url.searchParams.delete('filter');
    } else {
        url.searchParams.set('filter', filter);
    }
    window.history.replaceState({}, '', url);
}

function filterProducts(filter) {
    const startTime = performance.now();
    
    allProducts.forEach(product => {
        const category = product.dataset.category;
        const shouldShow = filter === 'all' || category === filter;
        
        if (shouldShow) {
            product.classList.remove('hidden');
            product.style.display = 'block';
        } else {
            product.classList.add('hidden');
            setTimeout(() => {
                if (product.classList.contains('hidden')) {
                    product.style.display = 'none';
                }
            }, 300);
        }
    });
    
    // Update filtered products array
    filteredProducts = allProducts.filter(product => 
        !product.classList.contains('hidden')
    );
    
    // Update product count
    updateProductCount();
    
    // Sort after filtering
    sortProducts(currentSort);
    
    const endTime = performance.now();
    console.log(`Filtering took ${endTime - startTime} milliseconds`);
}

function updateProductCount() {
    const count = filteredProducts.length;
    const countElement = document.querySelector('.product-count');
    
    if (!countElement) {
        const countDiv = document.createElement('div');
        countDiv.className = 'product-count';
        productsGrid.parentNode.insertBefore(countDiv, productsGrid.nextSibling);
    }
    
    const countDiv = document.querySelector('.product-count');
    countDiv.textContent = `Mostrando ${count} producto${count !== 1 ? 's' : ''}`;
    
    // Show no results message if needed
    if (count === 0) {
        showNoResults();
    } else {
        hideNoResults();
    }
}

function showNoResults() {
    let noResults = document.querySelector('.no-results');
    
    if (!noResults) {
        noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = `
            <i class="fas fa-search"></i>
            <h3>No se encontraron productos</h3>
            <p>Intenta con otra categoría o ajusta los filtros</p>
        `;
        productsGrid.parentNode.insertBefore(noResults, productsGrid.nextSibling);
    }
    
    noResults.style.display = 'block';
}

function hideNoResults() {
    const noResults = document.querySelector('.no-results');
    if (noResults) {
        noResults.style.display = 'none';
    }
}

// ==============================
// SORTING FUNCTIONALITY
// ==============================

function sortProducts(sortType) {
    const startTime = performance.now();
    
    // Create array of visible products with their data
    const productsToSort = filteredProducts.map(product => ({
        element: product,
        name: product.dataset.name,
        price: parseInt(product.dataset.price),
        featured: product.dataset.featured === 'true',
        category: product.dataset.category
    }));
    
    // Sort based on type
    switch (sortType) {
        case 'price-low':
            productsToSort.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            productsToSort.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            productsToSort.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'newest':
            productsToSort.sort((a, b) => b.element.dataset.index - a.element.dataset.index);
            break;
        case 'featured':
        default:
            productsToSort.sort((a, b) => {
                if (a.featured && !b.featured) return -1;
                if (!a.featured && b.featured) return 1;
                return a.element.dataset.index - b.element.dataset.index;
            });
            break;
    }
    
    // Reorder DOM elements
    productsToSort.forEach((item, index) => {
        item.element.style.order = index;
        item.element.style.animationDelay = `${index * 0.05}s`;
    });
    
    const endTime = performance.now();
    console.log(`Sorting took ${endTime - startTime} milliseconds`);
}

// ==============================
// CART FUNCTIONALITY
// ==============================

function addToCart(button) {
    const productItem = button.closest('.product-item');
    const productName = button.dataset.product;
    const productPrice = parseInt(button.dataset.price);
    const productImage = productItem.querySelector('.product-image').src;
    
    // Find existing item in cart
    const existingItem = cart.find(item => item.name === productName);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        });
    }
    
    // Save to localStorage
    localStorage.setItem('roballenCart', JSON.stringify(cart));
    
    // Update cart display
    updateCartDisplay();
    
    // Button feedback
    showAddToCartFeedback(button);
    
    // Show notification
    showCartNotification(productName);
    
    console.log(`Added to cart: ${productName}`);
}

function showAddToCartFeedback(button) {
    const originalText = button.innerHTML;
    
    button.classList.add('added');
    button.innerHTML = '<i class="fas fa-check"></i> Agregado';
    button.disabled = true;
    
    setTimeout(() => {
        button.classList.remove('added');
        button.innerHTML = originalText;
        button.disabled = false;
    }, 2000);
}

function showCartNotification(productName) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>${productName} agregado al carrito</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #4CAF50, #45a049);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        font-family: var(--font-heading);
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function updateCartDisplay() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (cartCount) {
        if (totalItems > 0) {
            cartCount.textContent = totalItems;
            cartCount.classList.add('active');
        } else {
            cartCount.classList.remove('active');
        }
    }
}

function showCart() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    // Create cart modal
    const cartModal = document.createElement('div');
    cartModal.className = 'cart-modal';
    cartModal.innerHTML = `
        <div class="cart-modal-content">
            <div class="cart-modal-header">
                <h3>Carrito de Compras</h3>
                <button class="cart-close">&times;</button>
            </div>
            <div class="cart-items">
                ${cart.map(item => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="cart-item-info">
                            <h4>${item.name}</h4>
                            <p>$${item.price.toLocaleString()} MXN</p>
                        </div>
                        <div class="cart-item-quantity">
                            <button class="qty-btn" data-action="decrease" data-name="${item.name}">-</button>
                            <span>${item.quantity}</span>
                            <button class="qty-btn" data-action="increase" data-name="${item.name}">+</button>
                        </div>
                        <button class="remove-item" data-name="${item.name}">&times;</button>
                    </div>
                `).join('')}
            </div>
            <div class="cart-total">
                <strong>Total: $${getCartTotal().toLocaleString()} MXN</strong>
            </div>
            <div class="cart-actions">
                <button class="btn btn-outline" id="clearCart">Vaciar Carrito</button>
                <button class="btn btn-primary" id="checkout">Proceder al Pago</button>
            </div>
        </div>
    `;
    
    // Add modal styles
    cartModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const modalContent = cartModal.querySelector('.cart-modal-content');
    modalContent.style.cssText = `
        background: white;
        border-radius: 12px;
        max-width: 600px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        transform: scale(0.8);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(cartModal);
    
    // Animate in
    setTimeout(() => {
        cartModal.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
    }, 10);
    
    // Event listeners for modal
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            closeCartModal(cartModal);
        }
    });
    
    cartModal.querySelector('.cart-close').addEventListener('click', () => {
        closeCartModal(cartModal);
    });
    
    // Quantity buttons
    cartModal.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const action = e.target.dataset.action;
            const name = e.target.dataset.name;
            updateCartQuantity(name, action);
            closeCartModal(cartModal);
            showCart(); // Refresh modal
        });
    });
    
    // Remove item buttons
    cartModal.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const name = e.target.dataset.name;
            removeFromCart(name);
            closeCartModal(cartModal);
            showCart(); // Refresh modal
        });
    });
    
    // Clear cart button
    cartModal.querySelector('#clearCart').addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
            clearCart();
            closeCartModal(cartModal);
        }
    });
    
    // Checkout button
    cartModal.querySelector('#checkout').addEventListener('click', () => {
        alert('¡Gracias por tu compra! Esta es una demostración.');
        clearCart();
        closeCartModal(cartModal);
    });
}

function closeCartModal(modal) {
    modal.style.opacity = '0';
    modal.querySelector('.cart-modal-content').style.transform = 'scale(0.8)';
    setTimeout(() => {
        document.body.removeChild(modal);
    }, 300);
}

function updateCartQuantity(name, action) {
    const item = cart.find(item => item.name === name);
    if (item) {
        if (action === 'increase') {
            item.quantity += 1;
        } else if (action === 'decrease' && item.quantity > 1) {
            item.quantity -= 1;
        }
        localStorage.setItem('roballenCart', JSON.stringify(cart));
        updateCartDisplay();
    }
}

function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    localStorage.setItem('roballenCart', JSON.stringify(cart));
    updateCartDisplay();
}

function clearCart() {
    cart = [];
    localStorage.setItem('roballenCart', JSON.stringify(cart));
    updateCartDisplay();
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// ==============================
// QUICK VIEW FUNCTIONALITY
// ==============================

function showQuickView(productItem) {
    const productName = productItem.querySelector('.product-name').textContent;
    const productDescription = productItem.querySelector('.product-description').textContent;
    const productPrice = productItem.querySelector('.product-price').textContent;
    const productImage = productItem.querySelector('.product-image').src;
    const productFeatures = Array.from(productItem.querySelectorAll('.product-features span')).map(span => span.textContent);
    
    // Create quick view modal
    const quickViewModal = document.createElement('div');
    quickViewModal.className = 'quick-view-modal';
    quickViewModal.innerHTML = `
        <div class="quick-view-content">
            <div class="quick-view-close">&times;</div>
            <div class="quick-view-grid">
                <div class="quick-view-image">
                    <img src="${productImage}" alt="${productName}">
                </div>
                <div class="quick-view-info">
                    <h2>${productName}</h2>
                    <p class="quick-view-description">${productDescription}</p>
                    <div class="quick-view-features">
                        <h4>Características:</h4>
                        <ul>
                            ${productFeatures.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="quick-view-price">${productPrice}</div>
                    <div class="quick-view-actions">
                        <button class="btn btn-primary add-to-cart-quick" data-product="${productName}" data-price="${productItem.dataset.price}">
                            Agregar al Carrito
                        </button>
                        <button class="btn btn-outline">Ver Detalles Completos</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles
    quickViewModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const modalContent = quickViewModal.querySelector('.quick-view-content');
    modalContent.style.cssText = `
        background: white;
        border-radius: 12px;
        max-width: 900px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
        transform: scale(0.8);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(quickViewModal);
    
    // Animate in
    setTimeout(() => {
        quickViewModal.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
    }, 10);
    
    // Event listeners
    quickViewModal.addEventListener('click', (e) => {
        if (e.target === quickViewModal) {
            closeQuickView(quickViewModal);
        }
    });
    
    quickViewModal.querySelector('.quick-view-close').addEventListener('click', () => {
        closeQuickView(quickViewModal);
    });
    
    // Add to cart from quick view
    quickViewModal.querySelector('.add-to-cart-quick').addEventListener('click', (e) => {
        const button = e.target;
        const productName = button.dataset.product;
        const productPrice = parseInt(button.dataset.price);
        
        // Add to cart logic
        const existingItem = cart.find(item => item.name === productName);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                name: productName,
                price: productPrice,
                image: productImage,
                quantity: 1
            });
        }
        
        localStorage.setItem('roballenCart', JSON.stringify(cart));
        updateCartDisplay();
        showAddToCartFeedback(button);
        showCartNotification(productName);
        
        setTimeout(() => {
            closeQuickView(quickViewModal);
        }, 1500);
    });
}

function closeQuickView(modal) {
    modal.style.opacity = '0';
    modal.querySelector('.quick-view-content').style.transform = 'scale(0.8)';
    setTimeout(() => {
        document.body.removeChild(modal);
    }, 300);
}

// ==============================
// LOAD MORE FUNCTIONALITY
// ==============================

function loadMoreProducts() {
    // This would typically load more products from a server
    // For demo purposes, we'll just show a message
    loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Cargando...';
    loadMoreBtn.disabled = true;
    
    setTimeout(() => {
        loadMoreBtn.innerHTML = '<span>No hay más productos</span>';
        loadMoreBtn.style.opacity = '0.5';
    }, 2000);
}

// ==============================
// PERFORMANCE MONITORING
// ==============================

// Monitor scroll performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    
    scrollTimeout = setTimeout(() => {
        // Throttled scroll handling
    }, 16); // ~60fps
});

// ==============================
// CONSOLE LOGS
// ==============================

console.log('%c🛒 Catálogo Rob Allen Mexico', 'font-size: 18px; color: #62B6CB; font-weight: bold;');
console.log('%cFuncionalidades: Filtros, Ordenamiento, Carrito, Vista Rápida', 'font-size: 12px; color: #1B4965;');


