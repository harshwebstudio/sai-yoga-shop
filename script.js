/* =====================================================
   PREMIUM E-COMMERCE WEBSITE
   SCRIPT.JS — PART 1/2
   32 PRODUCTS DATABASE
===================================================== */

"use strict";

/* =====================================================
   PRODUCT DATABASE — 32 PRODUCTS
===================================================== */

const products = [

    {
        id: 1,
        name: "Premium Classic T-Shirt",
        category: "Fashion",
        price: 799,
        oldPrice: 999,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
        badge: "BEST SELLER",
        description: "Premium everyday classic t-shirt."
    },

    {
        id: 2,
        name: "Oversized Streetwear T-Shirt",
        category: "Fashion",
        price: 999,
        oldPrice: 1299,
        image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1",
        badge: "TRENDING",
        description: "Modern oversized streetwear style."
    },

    {
        id: 3,
        name: "Premium Hoodie",
        category: "Fashion",
        price: 1499,
        oldPrice: 1899,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
        badge: "POPULAR",
        description: "Comfortable premium cotton hoodie."
    },

    {
        id: 4,
        name: "Classic Denim Jacket",
        category: "Fashion",
        price: 2199,
        oldPrice: 2799,
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0",
        badge: "NEW",
        description: "Premium denim jacket for everyday styling."
    },

    {
        id: 5,
        name: "Urban Cargo Pants",
        category: "Fashion",
        price: 1299,
        oldPrice: 1599,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
        badge: "HOT",
        description: "Comfortable urban cargo pants."
    },

    {
        id: 6,
        name: "Premium Sneakers",
        category: "Footwear",
        price: 2499,
        oldPrice: 3299,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        badge: "BEST SELLER",
        description: "Stylish everyday premium sneakers."
    },

    {
        id: 7,
        name: "Urban Running Shoes",
        category: "Footwear",
        price: 1999,
        oldPrice: 2499,
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
        badge: "SPORT",
        description: "Lightweight shoes for active lifestyles."
    },

    {
        id: 8,
        name: "Classic Leather Wallet",
        category: "Accessories",
        price: 699,
        oldPrice: 899,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93",
        badge: "NEW",
        description: "Minimal premium leather wallet."
    },

    {
        id: 9,
        name: "Premium Sunglasses",
        category: "Accessories",
        price: 899,
        oldPrice: 1199,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
        badge: "TRENDING",
        description: "Modern sunglasses with premium styling."
    },

    {
        id: 10,
        name: "Minimalist Wrist Watch",
        category: "Accessories",
        price: 1799,
        oldPrice: 2299,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
        badge: "POPULAR",
        description: "Clean and elegant minimalist watch."
    },

    {
        id: 11,
        name: "Premium Backpack",
        category: "Bags",
        price: 1599,
        oldPrice: 1999,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
        badge: "BEST SELLER",
        description: "Spacious backpack for work and travel."
    },

    {
        id: 12,
        name: "Travel Duffel Bag",
        category: "Bags",
        price: 1899,
        oldPrice: 2399,
        image: "https://images.unsplash.com/photo-1553062407-5c8f2f2d6a0c",
        badge: "TRAVEL",
        description: "Durable travel duffel bag."
    },

    {
        id: 13,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 2999,
        oldPrice: 3999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        badge: "HOT",
        description: "Immersive wireless audio experience."
    },

    {
        id: 14,
        name: "Smart Watch Pro",
        category: "Electronics",
        price: 3499,
        oldPrice: 4499,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        badge: "NEW",
        description: "Smart features with premium design."
    },

    {
        id: 15,
        name: "Portable Bluetooth Speaker",
        category: "Electronics",
        price: 1599,
        oldPrice: 1999,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
        badge: "POPULAR",
        description: "Compact speaker with powerful sound."
    },

    {
        id: 16,
        name: "Wireless Earbuds",
        category: "Electronics",
        price: 1299,
        oldPrice: 1799,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
        badge: "BEST SELLER",
        description: "Compact wireless earbuds."
    },

    {
        id: 17,
        name: "Premium Coffee Mug",
        category: "Lifestyle",
        price: 499,
        oldPrice: 699,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a",
        badge: "NEW",
        description: "Elegant ceramic coffee mug."
    },

    {
        id: 18,
        name: "Aroma Scented Candle",
        category: "Lifestyle",
        price: 599,
        oldPrice: 799,
        image: "https://images.unsplash.com/photo-1603006905003-be475563bc59",
        badge: "POPULAR",
        description: "Relaxing scented candle for your space."
    },

    {
        id: 19,
        name: "Premium Desk Lamp",
        category: "Lifestyle",
        price: 1199,
        oldPrice: 1499,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
        badge: "HOME",
        description: "Modern lamp for workspaces."
    },

    {
        id: 20,
        name: "Minimal Desk Organizer",
        category: "Lifestyle",
        price: 699,
        oldPrice: 899,
        image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85",
        badge: "NEW",
        description: "Keep your workspace organized."
    },

    {
        id: 21,
        name: "Premium Water Bottle",
        category: "Lifestyle",
        price: 799,
        oldPrice: 999,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
        badge: "HOT",
        description: "Reusable premium water bottle."
    },

    {
        id: 22,
        name: "Fitness Resistance Bands",
        category: "Fitness",
        price: 599,
        oldPrice: 799,
        image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc",
        badge: "FITNESS",
        description: "Versatile resistance bands for workouts."
    },

    {
        id: 23,
        name: "Yoga Mat Pro",
        category: "Fitness",
        price: 999,
        oldPrice: 1299,
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f",
        badge: "POPULAR",
        description: "Comfortable non-slip yoga mat."
    },

    {
        id: 24,
        name: "Gym Training Gloves",
        category: "Fitness",
        price: 499,
        oldPrice: 699,
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e",
        badge: "GYM",
        description: "Comfortable gloves for training."
    },

    {
        id: 25,
        name: "Premium Travel Bottle",
        category: "Travel",
        price: 899,
        oldPrice: 1199,
        image: "https://images.unsplash.com/photo-1544003484-3cd181d17917",
        badge: "TRAVEL",
        description: "Lightweight travel companion."
    },

    {
        id: 26,
        name: "Travel Organizer Set",
        category: "Travel",
        price: 799,
        oldPrice: 1099,
        image: "https://images.unsplash.com/photo-1553531384-cc64ac80f931",
        badge: "NEW",
        description: "Organize your essentials while travelling."
    },

    {
        id: 27,
        name: "Premium Notebook",
        category: "Stationery",
        price: 399,
        oldPrice: 499,
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db",
        badge: "STUDY",
        description: "Premium notebook for notes and ideas."
    },

    {
        id: 28,
        name: "Executive Pen Set",
        category: "Stationery",
        price: 599,
        oldPrice: 799,
        image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe",
        badge: "PREMIUM",
        description: "Elegant pen set for everyday writing."
    },

    {
        id: 29,
        name: "Minimal Phone Stand",
        category: "Accessories",
        price: 399,
        oldPrice: 599,
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb",
        badge: "NEW",
        description: "Minimal stand for your smartphone."
    },

    {
        id: 30,
        name: "Premium Phone Case",
        category: "Accessories",
        price: 499,
        oldPrice: 699,
        image: "https://images.unsplash.com/photo-1601593346740-925612772716",
        badge: "POPULAR",
        description: "Stylish protective phone case."
    },

    {
        id: 31,
        name: "LED Room Light",
        category: "Home",
        price: 899,
        oldPrice: 1199,
        image: "https://images.unsplash.com/photo-1550985543-f47f0c9e1c90",
        badge: "HOME",
        description: "Modern ambient lighting for your room."
    },

    {
        id: 32,
        name: "Premium Home Decor Set",
        category: "Home",
        price: 1999,
        oldPrice: 2499,
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
        badge: "PREMIUM",
        description: "Elegant decor set for modern homes."
    }

];

/* =====================================================
   GLOBAL VARIABLES
===================================================== */

let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

let selectedCategory = "All";

const productContainer =
    document.querySelector("#products-container") ||
    document.querySelector(".products-grid");

const cartCount =
    document.querySelector("#cart-count") ||
    document.querySelector(".cart-count");

/* =====================================================
   FORMAT PRICE
===================================================== */

function formatPrice(price) {
    return "₹" + price.toLocaleString("en-IN");
}

/* =====================================================
   SAVE CART
===================================================== */

function saveCart() {
    localStorage.setItem(
        "shoppingCart",
        JSON.stringify(cart)
    );

    updateCartCount();
}

/* =====================================================
   UPDATE CART COUNT
===================================================== */

function updateCartCount() {

    if (!cartCount) return;

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    cartCount.textContent = totalItems;
}

/* =====================================================
   PRODUCT CARD
===================================================== */

function createProductCard(product) {

    return `
        <article class="product-card">

            <div class="product-image">

                ${
                    product.badge
                    ? `<span class="product-badge">
                        ${product.badge}
                       </span>`
                    : ""
                }

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

            </div>

            <div class="product-info">

                <div class="product-category">
                    ${product.category}
                </div>

                <h3 class="product-title">
                    ${product.name}
                </h3>

                <p class="product-description">
                    ${product.description}
                </p>

                <div class="product-bottom">

                    <div class="product-price">

                        ${formatPrice(product.price)}

                        ${
                            product.oldPrice
                            ? `<span class="old-price">
                                ${formatPrice(product.oldPrice)}
                               </span>`
                            : ""
                        }

                    </div>

                    <button
                        class="add-cart"
                        onclick="addToCart(${product.id})"
                        aria-label="Add ${product.name} to cart"
                    >
                        +
                    </button>

                </div>

            </div>

        </article>
    `;
}

/* =====================================================
   DISPLAY PRODUCTS
===================================================== */

function displayProducts(list = products) {

    if (!productContainer) return;

    if (!list.length) {

        productContainer.innerHTML = `
            <div class="empty-state">
                <h2>No products found</h2>
                <p>Try another category or search.</p>
            </div>
        `;

        return;
    }

    productContainer.innerHTML =
        list.map(createProductCard).join("");
}

/* =====================================================
   CATEGORY FILTER
===================================================== */

function filterByCategory(category) {

    selectedCategory = category;

    if (category === "All") {
        displayProducts(products);
        return;
    }

    const filtered = products.filter(
        product =>
            product.category.toLowerCase() ===
            category.toLowerCase()
    );

    displayProducts(filtered);
}

/* =====================================================
   SEARCH PRODUCTS
===================================================== */

function searchProducts(searchText) {

    const query = searchText
        .toLowerCase()
        .trim();

    if (!query) {
        displayProducts(products);
        return;
    }

    const results = products.filter(product =>

        product.name.toLowerCase().includes(query) ||

        product.category.toLowerCase().includes(query) ||

        product.description.toLowerCase().includes(query)

    );

    displayProducts(results);
}

/* =====================================================
   ADD TO CART
===================================================== */

function addToCart(productId) {

    const product = products.find(
        item => item.id === productId
    );

    if (!product) return;

    const existing = cart.find(
        item => item.id === productId
    );

    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });

    }

    saveCart();

    showNotification(
        `${product.name} added to cart`
    );
      }
/* =====================================================
   SCRIPT.JS — PART 2/2
   CART + SEARCH + MOBILE MENU + UI
===================================================== */

/* =====================================================
   REMOVE FROM CART
===================================================== */

function removeFromCart(productId) {

    cart = cart.filter(
        item => item.id !== productId
    );

    saveCart();

    renderCart();

    showNotification("Product removed from cart");
}

/* =====================================================
   CHANGE QUANTITY
===================================================== */

function changeQuantity(productId, change) {

    const item = cart.find(
        product => product.id === productId
    );

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    saveCart();

    renderCart();
}

/* =====================================================
   CART TOTAL
===================================================== */

function getCartTotal() {

    return cart.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );
}

/* =====================================================
   RENDER CART
===================================================== */

function renderCart() {

    const cartContainer =
        document.querySelector("#cart-items") ||
        document.querySelector(".cart-items");

    const subtotalElement =
        document.querySelector("#cart-subtotal");

    const totalElement =
        document.querySelector("#cart-total");

    if (!cartContainer) return;

    if (!cart.length) {

        cartContainer.innerHTML = `
            <div class="empty-state">
                <h2>Your cart is empty</h2>
                <p>Add some products to continue shopping.</p>
            </div>
        `;

        if (subtotalElement) {
            subtotalElement.textContent = "₹0";
        }

        if (totalElement) {
            totalElement.textContent = "₹0";
        }

        return;
    }

    cartContainer.innerHTML = cart.map(item => `

        <div class="cart-item">

            <img
                src="${item.image}"
                alt="${item.name}"
            >

            <div>

                <h3>${item.name}</h3>

                <p>
                    ${formatPrice(item.price)}
                </p>

                <div class="quantity-box">

                    <button
                        onclick="changeQuantity(${item.id}, -1)"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="changeQuantity(${item.id}, 1)"
                    >
                        +
                    </button>

                </div>

            </div>

            <div class="item-actions">

                <strong>
                    ${formatPrice(
                        item.price * item.quantity
                    )}
                </strong>

                <br>

                <button
                    class="remove-item"
                    onclick="removeFromCart(${item.id})"
                >
                    Remove
                </button>

            </div>

        </div>

    `).join("");

    const total = getCartTotal();

    if (subtotalElement) {
        subtotalElement.textContent =
            formatPrice(total);
    }

    if (totalElement) {
        totalElement.textContent =
            formatPrice(total);
    }
}

/* =====================================================
   CLEAR CART
===================================================== */

function clearCart() {

    cart = [];

    saveCart();

    renderCart();

    showNotification("Cart cleared");
}

/* =====================================================
   NOTIFICATION
===================================================== */

function showNotification(message) {

    let notification =
        document.querySelector(".notification");

    if (!notification) {

        notification =
            document.createElement("div");

        notification.className =
            "notification";

        document.body.appendChild(notification);
    }

    notification.textContent = message;

    notification.classList.add("show");

    setTimeout(() => {

        notification.classList.remove("show");

    }, 2500);
}

/* =====================================================
   MOBILE MENU
===================================================== */

function setupMobileMenu() {

    const menuToggle =
        document.querySelector(".menu-toggle");

    const navMenu =
        document.querySelector(".nav-links");

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const isOpen =
            navMenu.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.textContent =
            isOpen ? "×" : "☰";
    });

    navMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });
}

/* =====================================================
   SEARCH SETUP
===================================================== */

function setupSearch() {

    const searchInput =
        document.querySelector("#product-search") ||
        document.querySelector(".product-search");

    if (!searchInput) return;

    searchInput.addEventListener(
        "input",
        event => {
            searchProducts(event.target.value);
        }
    );
}

/* =====================================================
   CATEGORY BUTTONS
===================================================== */

function setupCategoryButtons() {

    const buttons =
        document.querySelectorAll(
            "[data-category]"
        );

    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const category =
                    button.dataset.category;

                filterByCategory(category);

                buttons.forEach(btn =>
                    btn.classList.remove("active")
                );

                button.classList.add("active");
            }
        );

    });
}

/* =====================================================
   BACK TO TOP
===================================================== */

function setupBackToTop() {

    let button =
        document.querySelector(".back-to-top");

    if (!button) {

        button =
            document.createElement("button");

        button.className =
            "back-to-top";

        button.innerHTML = "↑";

        button.setAttribute(
            "aria-label",
            "Back to top"
        );

        document.body.appendChild(button);
    }

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            button.classList.add("show");

        } else {

            button.classList.remove("show");
        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}

/* =====================================================
   PRODUCT COUNT
===================================================== */

function updateProductCount() {

    const countElements =
        document.querySelectorAll(
            "[data-product-count]"
        );

    countElements.forEach(element => {

        element.textContent =
            products.length;

    });
}

/* =====================================================
   INITIALIZE WEBSITE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        displayProducts();

        renderCart();

        updateCartCount();

        updateProductCount();

        setupMobileMenu();

        setupSearch();

        setupCategoryButtons();

        setupBackToTop();

    }
);

/* =====================================================
   GLOBAL FUNCTIONS
===================================================== */

window.products = products;

window.addToCart = addToCart;

window.removeFromCart = removeFromCart;

window.changeQuantity = changeQuantity;

window.clearCart = clearCart;

window.filterByCategory = filterByCategory;

window.searchProducts = searchProducts;
