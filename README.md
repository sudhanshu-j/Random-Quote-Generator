# Random Quote Generator

Project Overview

    The Random Quote Generator is a web application that dynamically generates random quotes fetched from the Quotable API. 
    The application features functionalities such as a "Copy Quote" button, a "Text-to-Speech" button, and a "Tweet Quote" 
    button. These features allow users to copy the quote to the clipboard, hear the quote using the browser’s text-to-speech 
    functionality, and share the quote on Twitter, all with a simple click.

Features

    • Random Quote Generation: Fetches random quotes along with the author's name from the Quotable API.
    
    • Copy Quote: Allows users to copy the displayed quote to the clipboard for easy sharing or saving.
    
    • Text-to-Speech: Uses the browser’s Speech Synthesis API to convert the displayed quote into speech.
    
    • Tweet Quote: Allows users to share the current quote directly to Twitter with a pre-populated tweet.
    
    • Responsive Design: Ensures compatibility across different devices and screen sizes.

Technologies Used

    • HTML: Structures the content on the web page.
    
    • CSS: Styles the application, ensuring a clean and responsive layout.
    
    • JavaScript: Handles the interactive functionalities like API calls, copying text, text-to-speech, and posting to Twitter.
    
    • Quotable API: Provides random quotes and author names via a simple API call.
    
    • Speech Synthesis API: Converts text into spoken words.
    
    • Twitter Web Intent: Allows users to share quotes on Twitter.

How to Run the Project

    1. Clone the Repository
    
        Clone the project to your local machine using:
            git clone https://github.com/your-username/random-quote-generator.git

    2. Navigate to the Project Directory
    
        Change directory to the project folder:
           cd random-quote-generator

    3. Open the index.html File 
    
        Open the index.html file in your web browser by double-clicking it or dragging it into a browser window.

    4. Interact with the Application

       • New Quote: Click the "New Quote" button to fetch a random quote.
       
       • Copy Quote: Click the "Copy Icon" button to copy the displayed quote to the clipboard.
       
       • Speak Quote: Click the "Speaker Icon" button to hear the quote being read aloud.
       
       • Tweet Quote: Click the "X Icon" button to share the current quote on Twitter.

File Structure

         random-quote-generator/
         
           ├── index.html
           ├── styles.css
           └── script.js

    • index.html: The HTML structure of the application.
    
    • styles.css: CSS styles for layout, buttons, and responsiveness.
    
    • script.js: JavaScript for fetching quotes, copying text, enabling text-to-speech, and sharing on Twitter.

Code Overview

    1. index.html

       • Contains a section for displaying the quote and author.
   
       • Buttons for generating a new quote, copying the quote, triggering text-to-speech, and tweeting the quote.

    2. styles.css

       • Provides styling for a responsive layout.
       
       • Styles buttons and quote display areas.

    3. script.js

      • Fetch Random Quotes: Uses fetch() to retrieve a random quote from the Quotable API:
            fetch('https://api.quotable.io/random')

      • Copy Functionality: Uses navigator.clipboard.writeText() to copy the current quote to the clipboard:
            navigator.clipboard.writeText(quoteText);

      • Text-to-Speech: Uses the SpeechSynthesisUtterance object to convert the quote into speech:
            let speech = new SpeechSynthesisUtterance(quoteText);
              window.speechSynthesis.speak(speech);

      • Tweeting: Opens Twitter's Web Intent with the quote pre-populated:
             let tweetUrl = `https://x.com/intent/post?text=${quoteText.innerText} - ${authorName.innerText}`;
                window.open(tweetUrl, "_blank");

API Reference

    This project uses the Quotable API to fetch random quotes. The API endpoint provides a JSON response with:

       • content: The actual quote text.
   
       • author: The name of the author who said the quote.

Example response:

    { "_id": "some-id",
  
      "content": "Life is what happens when you're busy making other plans.",
  
      "author": "John Lennon" }

    
