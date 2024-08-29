// Accessing DOM element

const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");
const authorName = document.querySelector(".name");
const speechBtn = document.querySelector(".speech");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");

// Speech Synthesis object initialization
let synth;
if (!("speechSynthesis" in window)) {
  alert("Your browser does not support text-to-speech.");
} else {
  synth = window.speechSynthesis;
}

synth = speechSynthesis; // speech synthesis object

// Fetch a random quote from the API
function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading Quote...";
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      quoteText.innerText = data.content;
      authorName.innerText = data.author;
      // console.log(data);
      quoteBtn.classList.remove("loading");
      quoteBtn.innerText = "New Quote";
    });
}

// Add event listener for speech button

speechBtn.addEventListener("click", () => {
  if (!quoteBtn.classList.contains("loading")) {
    let utterance = new SpeechSynthesisUtterance(
      `${quoteText.innerText} by ${authorName.innerText}`
    );
    synth.speak(utterance);
    setInterval(() => {
      !synth.speaking
        ? speechBtn.classList.remove("active")
        : speechBtn.classList.add("active");
    }, 10);
  }
});

// Copy quote to clipboard

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteText.innerText);
  alert("Quote copied to clipboard!");
});

// Share quote on Twitter

twitterBtn.addEventListener("click", () => {
  let tweetUrl = `https://x.com/intent/post?text=${quoteText.innerText} - ${authorName.innerText}`;
  window.open(tweetUrl, "_blank");
});

// Add event listener for quote button
quoteBtn.addEventListener("click", randomQuote);

// SpeechSynthesisUtterance :- The SpeechSynthesisUtterance interface of the Web Speech API represents a speech request. It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.)

// https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance
