// Starter data
const cart = [
  { name: "Pen", price: 20, quantity: 3 },
  { name: "Notebook", price: 50, quantity: 2 },
  { name: "Pencil", price: 10, quantity: 5 }
];

// Output function to append messages to the body
const appendToBody = (message) => {
  const outputDiv = document.createElement('div');
  outputDiv.innerHTML = message;
  document.body.appendChild(outputDiv);
};

// Task 1: Calculate total price for each item
const prices = cart.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
}));

appendToBody("<strong>Total Prices for Each Item:</strong>");
prices.forEach(item => {
  appendToBody(`${item.name} --- ₱${item.totalPrice}`);
});

appendToBody("------------------------------------------------------");

// Task 2: Generate a new array of item descriptions
const descriptions = cart.map(item => `${item.name} - ₱${item.price}`);
appendToBody("<strong>Item Descriptions:</strong>");
descriptions.forEach(desc => {
  appendToBody(desc);
});

appendToBody("------------------------------------------------------");

// Task 3: Compute the total cart value using reduce()
const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
appendToBody(`<strong>The total price is:</strong> ₱${totalPrice}`);

appendToBody("------------------------------------------------------");
