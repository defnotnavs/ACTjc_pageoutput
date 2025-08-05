// Function to create a multiplier
const makeMultiplier = (factor) => {
    return (num) => num * factor;
};

// Function to create a greeter
const makeGreeter = (greeting) => {
    return (name) => `${greeting}, ${name}!`;
};

// Output function to append messages to the body
const appendToBody = (message) => {
    const outputDiv = document.createElement('div');
    outputDiv.innerHTML = message;
    document.body.appendChild(outputDiv);
};

// Displaying the results of makeMultiplier
appendToBody("<strong>Multiplier Function:</strong>");
const double = makeMultiplier(2);
appendToBody(`Double of 5: ${double(5)}`); // 10

// Displaying the results of makeGreeter
appendToBody("<strong>Greeter Function:</strong>");
const sayHi = makeGreeter("Hi");
appendToBody(sayHi("Mia")); // "Hi, Mia!"
