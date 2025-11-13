let cart = [];

// Add to Cart
function addToCart(name, price) {
  cart.push({ name, price });
  alert(`${name} added to cart!`);
  updateCart();
}

// Update Cart Section
function updateCart() {
  const cartDiv = document.getElementById('cart-items');
  const totalDiv = document.getElementById('total');
  cartDiv.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    total += item.price;
    cartDiv.innerHTML += `<div>${item.name} - $${item.price.toFixed(2)}</div>`;
  });
  totalDiv.innerHTML = `Total: $${total.toFixed(2)}`;
}

// Checkout
function checkout() {
  if(cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Thank you for your order!");
  cart = [];
  updateCart();
}

// Page Switching
function showSection(id) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  document.querySelector(`.nav-link[data-target="${id}"]`).classList.add('active');
}

// Initialize Cart
document.addEventListener('DOMContentLoaded', updateCart);

// Nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    showSection(link.dataset.target);
  });
});
