# Random-Joke-Generator
![Screenshot 2025-02-01 021628](https://github.com/user-attachments/assets/c9c10622-7507-48cd-83c9-4d5855187d88)

# Random Joke Generator

## Description
The **Random Joke Generator** is a simple web application that fetches and displays a random joke from an API. Users can click a button to generate a new joke instantly. The application is built using HTML, CSS, and JavaScript.

## Features
- Fetches random jokes from the JokeAPI.
- Smooth fade-in effect when displaying new jokes.
- Responsive design to fit different screen sizes.
- Simple and clean UI.

## Technologies Used
- HTML
- CSS
- JavaScript (ES6+)
- [JokeAPI](https://v2.jokeapi.dev/) for fetching jokes

## Setup and Usage
### Prerequisites
A modern web browser (Chrome, Firefox, Edge, Safari) is required to run the application.

### How to Run
1. Clone or download the repository.
2. Open the `index.html` file in a browser.
3. Click the "Get Random Joke" button to fetch and display a new joke.

## File Structure
```
Random-Joke-Generator/
│── index.html        # Main HTML file
│── style.css         # Styling for the webpage
│── app.js            # JavaScript logic
│── README.md         # Project documentation
```

## API Information
This project uses the [JokeAPI](https://v2.jokeapi.dev/), which provides a variety of jokes while filtering out inappropriate content.

## Code Explanation
- The `fetch()` API is used to retrieve a joke from the JokeAPI.
- A `try...catch` block ensures error handling when fetching jokes.
- The `fade` CSS class creates a smooth transition effect when displaying jokes.
- An event listener is added to the button to fetch and display a new joke when clicked.

## Future Enhancements
- Allow users to choose joke categories.
- Add a "Copy to Clipboard" button for sharing jokes.
- Implement a dark/light mode toggle.

## License
This project is open-source and free to use.

## Author
Developed by Nazim Chunare.


