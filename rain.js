document.addEventListener("DOMContentLoaded", function() {
    const rainContainer = document.getElementById("rain-container");
  
    for (let i = 0; i < 100; i++) {
      const drop = document.createElement("div");
      drop.className = "raindrop";
      rainContainer.appendChild(drop);

      // Set random initial position for each raindrop
      drop.style.left = `${Math.random() * 100}vw`;

      // Set a random animation duration for each raindrop
      drop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
    }
});