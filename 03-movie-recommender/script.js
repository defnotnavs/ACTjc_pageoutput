// Starter data
const movies = [
  { title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { title: "Frozen", genre: "Animation", rating: 7.5 },
  { title: "The Godfather", genre: "Crime", rating: 9.2 },
  { title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// Output function to append messages to the body
const appendToBody = (message) => {
  const outputDiv = document.createElement('div');
  outputDiv.innerHTML = message;
  document.body.appendChild(outputDiv);
};

// Task 1: Display all movie titles in uppercase
const upperCaseTitles = movies.map(movie => movie.title.toUpperCase());
appendToBody("<strong>Movie Titles (Uppercase):</strong> " + upperCaseTitles.join(', '));

// Task 2: Filter and display movies with rating ≥ 8
const highRatedMovies = movies.filter(movie => movie.rating >= 8);
appendToBody("<strong>Movies with Rating ≥ 8:</strong>");
highRatedMovies.forEach(movie => {
  appendToBody(`${movie.title} (${movie.genre}) - ${movie.rating} ⭐`);
});

// Task 3: Calculate the average rating using reduce()
const totalRating = movies.reduce((sum, movie) => sum + movie.rating, 0);
const averageRating = totalRating / movies.length;
appendToBody(`<strong>Average Rating:</strong> ${averageRating.toFixed(2)} ⭐`);

// Task 4: Function to display movie details using destructuring
const displayMovie = ({ title, genre, rating }) => {
  return `${title} (${genre}) - ${rating} ⭐`;
};
appendToBody("<strong>Movie Details:</strong>");
movies.forEach(movie => {
  appendToBody(displayMovie(movie));
});
