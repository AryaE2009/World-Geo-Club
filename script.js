document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
    const authLink = document.getElementById("authLink");

    // Sign-Up Handling
    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username && password) {
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
                localStorage.setItem("isLoggedIn", "true");
                alert("Account created successfully! Logging you in...");
                window.location.href = "index.html";
            } else {
                alert("Please fill in all fields.");
            }
        });
    }

    // Check Login Status
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (authLink) {
        if (isLoggedIn === "true") {
            authLink.innerHTML = `<a href="#" onclick="logout()">Log Out</a>`;
        } else {
            authLink.innerHTML = `<a href="signup.html">Log In</a>`;
        }
    }
});

// Logout Function
function logout() {
    localStorage.setItem("isLoggedIn", "false");
    alert("You have logged out.");
    window.location.href = "signup.html";
}
