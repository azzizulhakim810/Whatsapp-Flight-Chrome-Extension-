fetch("https://icanhazdadjoke.com/slack")
  .then((res) => res.json())
  .then((jokeData) => {
    const jokeText = jokeData.attachments[0].text;
    const myJoke = document.getElementById("joke-body");
    myJoke.innerHTML = jokeText;
  });
