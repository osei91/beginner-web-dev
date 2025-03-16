// Sample product list
const products = [
    { id: 1, name: "Laptop", price: 900,thumbnail:'./assets/laptop.webp' },
    { id: 2, name: "Phone", price: 500,thumbnail:'./assets/phone.webp' },
    { id: 3, name: "Headphones", price: 100,thumbnail:'./assets/headphone.webp' }
];

// Cart array to store added products
let cart = [];

// Select elements
const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");

// Function to display products
function displayProducts() {
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img height="200px" width="200px" src="${product.thumbnail}" alt="${product.name}"/>
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Function to add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Function to update cart UI
function updateCart() {
    cartItems.innerHTML = ""; // Clear previous items
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement("li");
        li.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItems.appendChild(li);
    });

    totalPrice.textContent = total; // Update total price
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Initialize shop
displayProducts();
