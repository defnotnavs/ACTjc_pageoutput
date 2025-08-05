// Starter data
const settings = {
  darkMode: true,
  notifications: false,
  autoSave: true,
  spellCheck: false,
  grammarCheck: true
};

// Output function to append messages to the body
const appendToBody = (message) => {
  const outputDiv = document.createElement('div');
  outputDiv.innerHTML = message;
  document.body.appendChild(outputDiv);
};

// Task 1: List all enabled settings
appendToBody("<strong>All Settings:</strong>");
Object.entries(settings).forEach(([key, value]) => {
  appendToBody(`${key}: ${value}`);
});

appendToBody("------------------------------------------------------");

// Task 2: Count how many settings are set to true
const trueCount = Object.values(settings).filter(v => v === true).length;
appendToBody(`<strong>Number of Enabled Settings:</strong> ${trueCount}`);

appendToBody("------------------------------------------------------");

// Task 3: Convert settings to an array and filter based on values
const enabledEntries = Object.entries(settings).filter(([key, value]) => value === true);
appendToBody("<strong>Enabled Settings Array:</strong>");
enabledEntries.forEach(([key, value]) => {
  appendToBody(`${key}: ${value}`);
});

appendToBody("------------------------------------------------------");

// Task 4: Rebuild the filtered settings object
const enabledSettings = Object.fromEntries(enabledEntries);
appendToBody("<strong>Rebuilt Enabled Settings Object:</strong>");
Object.entries(enabledSettings).forEach(([key, value]) => {
  appendToBody(`${key}: ${value}`);
});
