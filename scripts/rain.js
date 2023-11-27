// inspiration: https://dev.to/erins5927/create-a-rain-effect-in-html-5-with-javascript-and-css-dfm

document.addEventListener("DOMContentLoaded", function() {
    const rainContainer = document.getElementById("rain-container");
  
    for (let i = 0; i < 100; i++) {
      const drop = document.createElement("div");
      drop.className = "raindrop";
      rainContainer.appendChild(drop);

      // Sets the position of my green droplets
      drop.style.left = `${Math.random() * 100}vw`;

      // sets the lifespan
      drop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
    }
});