// Fetch the joke & show to extension
/* fetch("https://icanhazdadjoke.com/slack")
  .then((res) => res.json())
  .then((jokeData) => {
    const jokeText = jokeData.attachments[0].text;
    const myJoke = document.getElementById("joke-body");
    myJoke.innerHTML = jokeText;
  }); */

// Show Cookies
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  const cookieContainer = document.getElementById("cookies");
  cookieContainer.innerText = message.cookies;
});
