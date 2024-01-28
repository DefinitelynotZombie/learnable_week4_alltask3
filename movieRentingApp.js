const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Movie {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

const moviesAvailable = [
  new Movie(1, "Spiderman", 9.99),
  new Movie(2, "Game of Thrones", 14.99),
  new Movie(3, "Merlin", 19.99),
];

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    this.items.push({ product, quantity });
  }

  getTotal() {
    // Calculate the total cost of items in the shopping cart
    return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }
}

function displayProducts() {
  console.log("Available movies:");
  // Displaying available movies with their IDs, names, and prices
  moviesAvailable.forEach((movie) => {
    console.log(`[${movie.id}] ${movie.name} - $${movie.price}`);
  });
}

function movieApp() {
  console.log("Welcome to my movie renting App!");

  // Display instructions
  console.log("Instructions:");
  console.log("1. View movies");
  console.log("2. Add to Cart");
  console.log("3. View Cart");
  console.log("4. Checkout");
  console.log("5. Exit");

  // Using the `rl` interface for user input
  rl.on('line', (line) => {
    switch (line.trim()) {
      case '1':
        displayProducts();
        break;

      case '2':
        rl.question("Enter the movie ID: ", (productId) => {
          rl.question("Enter the quantity: ", (quantity) => {
            addToCart(parseInt(productId, 10), parseInt(quantity, 10));
            rl.prompt();
          });
        });
        break;

      case '3':
        viewCart();
        break;

      case '4':
        console.log("Thank you for renting with us!");
        rl.close();
        break;

      case '5':
        // Continue the loop for other cases
        rl.prompt();
        break;

      default:
        console.log("Invalid choice. Please enter a number between 1 and 5.");
        rl.prompt();
    }
  });

  // Display the initial prompt
  rl.prompt();
}

function addToCart(productId, quantity) {
  // Find the selected product by ID
  const selectedProduct = moviesAvailable.find((movie) => movie.id === productId);

  // Check if the product is available
  if (selectedProduct) {
    // Add the selected product and quantity to the shopping cart
    shoppingCart.addItem(selectedProduct, quantity);
    console.log(`Added ${quantity} ${selectedProduct.name}(s) to the cart.`);
  } else {
    console.log("Product not found. Please enter a valid product ID.");
  }
}

function viewCart() {
  console.log("Shopping Cart:");
  shoppingCart.items.forEach((item) => {
    console.log(`[${item.product.id}] ${item.product.name} - Quantity: ${item.quantity}`);
  });
  console.log(`Total: $${shoppingCart.getTotal().toFixed(2)}`);
}

// Create an instance of the shopping cart
const shoppingCart = new ShoppingCart();

// Start the movie app
movieApp();
