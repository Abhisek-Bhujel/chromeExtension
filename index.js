let image = document.getElementById("backgroundImage");
const url = "https://source.unsplash.com/random/1920x1080/?anime";

const getImage = async () => {
  try {
    let response = await fetch(url);

    if (response.ok) {
      let imageUrl = response.url;
      image.src = imageUrl;
    } else {
      console.error("Failed to fetch image");
    }
  } catch (error) {
    console.error("Error fetching image:", error);
  }
};

getImage();

const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

console.log(hours);

const setHours = document.getElementById("hour");
setHours.innerText = hours;
const setMinute = document.getElementById("minute");
setMinute.innerText = minutes;
const setSecond = document.getElementById("second");
setSecond.innerText = seconds;

const quoteURL = "https://api.quotable.io/random";
const quoteHolder = document.getElementById("quotes");
const getQuote = async () => {
  let response = await fetch(quoteURL);
  let quote = await response.json();
  let quoteText = quote.content;
  quoteHolder.innerText = '"' + quoteText + '"';
};

getQuote();

document.getElementById("start").addEventListener("click", function () {
  document.getElementById("widget1").classList.add("startAnimation");
});
document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("widget1").classList.remove("startAnimation");
});