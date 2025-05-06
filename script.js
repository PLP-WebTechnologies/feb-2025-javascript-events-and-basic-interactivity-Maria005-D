// Button Click Event
document.getElementById("changeTextBtn").addEventListener("click", function() {
    this.textContent = "Welcome to JS&M Metals!";
    this.style.backgroundColor = "blue";
});

// Hover Event
document.getElementById("hoverDiv").addEventListener("mouseover", function() {
    this.style.backgroundColor = "lightcoral";
});
document.getElementById("hoverDiv").addEventListener("mouseout", function() {
    this.style.backgroundColor = "lightgray";
});

// Keypress Detection
document.getElementById("keypressInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        alert("You pressed Enter!");
    }
});

// Double Click Event
document.getElementById("changeTextBtn").addEventListener("dblclick", function() {
    alert("Double-click detected!");
});

// Image Gallery Navigation
let currentImageIndex = 0;
const images = ["https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=600"];

document.getElementById("nextBtn").addEventListener("click", function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("galleryImg").src = images[currentImageIndex];
});

document.getElementById("prevBtn").addEventListener("click", function() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById("galleryImg").src = images[currentImageIndex];
});

// Form Validation
document.getElementById("form").addEventListener("submit", function(event) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("All fields are required!");
        event.preventDefault();
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address!");
        event.preventDefault();
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long!");
        event.preventDefault();
    }
});
