document.addEventListener("DOMContentLoaded", function () {
    const headerText = "Network Protocols & Security";
    const headerElement = document.getElementById("header-title");

    typeWriter(headerElement, headerText);
});

function typeWriter(element, text) {
    let i = 0;
    const speed = 100; // typing speed in milliseconds

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}
