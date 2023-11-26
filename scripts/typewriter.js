document.addEventListener("DOMContentLoaded", function () {
    const pageTitle = document.title;
    const headerElement = document.getElementById("header-title");
    let headerText;

    if (pageTitle == "CprE 530 - Network & Security") {
        headerText = "Network Protocols & Security";
    } else if (pageTitle == "CprE 530 - Network & Security - TCP/IP Model") {
        headerText = "TCP/IP Model";
    } else if (pageTitle == "CprE 530 - Network & Security - Network Layers") {
        headerText = "Network Layers";
    } else if (pageTitle == "CprE 530 - Network & Security - Network Security") {
        headerText = "Network Security";
    } else {
        headerText = "Default";
    }

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
