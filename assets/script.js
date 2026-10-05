// Restaurant click handler

try {
  const restaurantCards = document.querySelectorAll(".restaurant-card");

  Array.from(restaurantCards).forEach(card => {
    card.addEventListener("click", (event) => {
    alert("This would go to an external business website");
  });

});

} catch { }

// Weather handler

const weatherStates = new Map([
  ["Low: 20C; High: 38C; Sunny", "assets/images/sunny.png"],
  ["Low: 17C; High: 30C; Cloudy", "assets/images/cloudy.png"],
  ["Low: 19C; High: 35C; Rainy", "assets/images/rainy.png"]
]);

const weatherKeys= Array.from(weatherStates.keys());

try {
  let weatherTitle = document.getElementById('weatherHeadline');
  let weatherDate = document.querySelector('input[type="date"]');
  weatherDate.addEventListener("change", (event) => {
    let weatherCount = weatherStates.size;
    let weatherIndex = Math.floor(Math.random() * (weatherCount + 1));
    let weatherText = (weatherIndex - 1 < 0) ? weatherKeys[weatherIndex] : weatherKeys[weatherIndex -1];
    let weatherImage = weatherStates.get(weatherText);
    weatherTitle.innerHTML = "Weather Info for " + weatherDate.value;
    document.getElementById('weatherText').innerHTML = weatherText;
    document.getElementById('weatherImage').src = weatherImage;
  });

} catch { }

// Alert when the contact form is submitted

try {
  const contactForm = document.getElementById('contactForm');

contactForm.addEventListener("submit", (event) => {
  alert("Thank you! We'll contact you soon!");
  event.preventDefault();
});
} catch { }





