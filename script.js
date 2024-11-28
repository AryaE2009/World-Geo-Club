// Script for handling dynamic login/logout
document.addEventListener("DOMContentLoaded", () => {
    const authLink = document.getElementById("authLink");

    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
        authLink.innerHTML = '<a href="#" onclick="logout()">Log Out</a>';
    } else {
        authLink.innerHTML = '<a href="login.html">Log In</a>';
    }
});

// Logout function
function logout() {
    localStorage.setItem("isLoggedIn", "false");
    alert("You have logged out.");
    window.location.reload();
}
