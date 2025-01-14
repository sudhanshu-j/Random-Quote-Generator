# Random Quote Generator 💬

A simple web application that generates random quotes, allows you to read them aloud using text-to-speech, copy them to your clipboard, and share them on Twitter. This app utilizes the Web Speech API for speech synthesis, making it interactive and engaging. 🎙️

---

## Features ✨

- **Random Quote Generation**: Fetches a random quote and displays it on the page.

- **Text-to-Speech**: Allows you to listen to the quote being read aloud.

- **Copy to Clipboard**: Copy the displayed quote to your clipboard with a single click.

- **Share on Twitter**: Share your favorite quote directly on Twitter.

- **Responsive Design**: Fully responsive design that adapts to different screen sizes (from desktop to mobile devices).

---

<!-- ## Demo 🎥

[View the Demo](#) *(Link to demo if available)* -->

## Tech Stack ⚙️

- **HTML5** for the structure of the page.

- **CSS3** for styling, including a responsive layout using Flexbox.

- **JavaScript** for functionality, including fetching data from an API and speech synthesis.

- **Web Speech API** for text-to-speech functionality.

- **API**: [Quotable.io](https://api.quotable.io) for fetching random quotes.

---

## Installation 🚀

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/random-quote-generator.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd random-quote-generator
    ```

3. **Open the `index.html` file** in your browser.

   Or, you can simply deploy it using services like GitHub Pages, Netlify, or Vercel for live hosting. 🌐

---

## Usage 💻

1. **Get a New Quote**: Click the "New Quote" button to fetch and display a random quote from the Quotable API.

2. **Listen to the Quote**: Click the "Speak" button to hear the quote read aloud.

3. **Copy the Quote**: Click the "Copy" button to copy the quote to your clipboard and easily share it with friends.

4. **Share on Twitter**: Click the Twitter icon to share the quote directly on your Twitter feed. 🐦

---

## Code Explanation 📖

### HTML Structure (`index.html`) 📝

- **Header**: Displays the title of the page ("Quote of the Day").

- **Quote Section**: Contains the randomly fetched quote and the author's name.

- **Buttons Area**: Includes buttons for interacting with the quote — speech synthesis, copying the quote, and sharing on Twitter.

### CSS Styling (`style.css`) 🎨

- **Flexbox Layout**: Used for centering content and creating a responsive design that adapts to different screen sizes.

- **Custom CSS Variables**: Defines colors, font sizes, and other reusable values.

- **Responsive Design**: Adjusts the layout for smaller screens, such as mobile devices and tablets.

- **Hover Effects**: Adds interactive hover effects for buttons and icons.

### JavaScript Functionality (`script.js`) 💻

- **Speech Synthesis**: Utilizes the Web Speech API to read the quote aloud. The script handles the creation of a `SpeechSynthesisUtterance` and the speech playback.

- **Fetching Random Quote**: Fetches a random quote from the [Quotable API](https://api.quotable.io/random) and updates the page with the new quote.

- **Clipboard Copying**: Uses the `navigator.clipboard.writeText()` method to copy the quote to the clipboard when the user clicks the copy button.

- **Sharing on Twitter**: Generates a URL for posting the quote directly to Twitter via `window.open()`.

---

## How to Contribute 🤝

1. Fork the repository.

2. Create a new branch (`git checkout -b feature-name`).

3. Make your changes and commit them (`git commit -m 'Add new feature'`).

4. Push to your branch (`git push origin feature-name`).

5. Open a pull request.

---

<!-- ## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. -->

## Acknowledgments 🙏

- Thanks to the creators of the **[Quotable API](https://api.quotable.io)** for providing the random quote data.

- Special thanks to **MDN Web Docs** for their excellent documentation on [Speech Synthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance).
  
<!-- ## Screenshots 📸

### Desktop View 🖥️
![Desktop View](screenshots/desktop-view.png)

### Mobile View 📱
![Mobile View](screenshots/mobile-view.png) -->

---

🔧 **Feel free to contribute and improve this project!** 🚀

---

If you have any questions or suggestions, please open an issue in the repository. Happy coding! 🎉
