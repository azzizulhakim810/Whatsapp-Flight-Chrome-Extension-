// Fetch the joke & show to extension
/* fetch("https://icanhazdadjoke.com/slack")
  .then((res) => res.json())
  .then((jokeData) => {
    const jokeText = jokeData.attachments[0].text;
    const myJoke = document.getElementById("joke-body");
    myJoke.innerHTML = jokeText;
  }); */

// Show Cookies
/* chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // const arrayOfCookie = message?.cookies
  // .split(";")
  // .map((cookie) => cookie.split("="));

  //   const makePair = arrayOfCookie.reduce(
  //   (accumulator, [key, value]) => ({
  //     ...accumulator,
  //     [key.trim()]: decodeURIComponent(value),
  //   }),
  //   {}
  // );

  // const eachCookie = message?.cookies.split(";").map((cookie) => cookie);

  const cookieContainer = document.getElementById("cookies");
  cookieContainer.innerHTML = message.cookies;
}); */

/* chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.cookies) {
    // console.log(message.cookies);
    const cookieContainer = document.getElementById("cookies");
    cookieContainer.textContent = JSON.stringify(message.cookies, null, 2);
  }
}); */
