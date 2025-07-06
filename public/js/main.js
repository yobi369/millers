// Fetch products from API
async function fetchProducts() {
    try {
        const response = await fetch('/api/products');
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Display products in the grid
function displayProducts(products) {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${JSON.stringify(product)})">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Call fetchProducts when page loads
document.addEventListener('DOMContentLoaded', fetchProducts);