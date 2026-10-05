// Function to handle registration on index.html
function register(event) {
  if (event) event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const passwordConfirm = document.getElementById("passwordConfirm").value;

  const userCON = /^[\w]{8,}$/; // At least 8 word characters
  const passCON = /^[\w]+$/; // Word characters

  if (!userCON.test(username)) {
    alert("Username must be at least 8 characters long.");
    return;
  }

  if (!passCON.test(password)) {
    alert("Please enter a valid password.");
    return;
  }

  if (password !== passwordConfirm) {
    alert("Passwords do not match. Please try again.");
    return;
  }

  // Store credentials temporarily for demo validation
  localStorage.setItem("registeredUser", username);
  localStorage.setItem("registeredPass", password);

  alert("Registration successful! Redirecting to login...");
  window.location.href = "html/login.html"; // Redirect from root to html/login.html
}

// Function to handle login on html/login.html
function login(event) {
  if (event) event.preventDefault();

  const usernameInput = document.getElementById("usernameInput").value;
  const passwordInput = document.getElementById("passwordInput").value;

  const savedUser = localStorage.getItem("registeredUser") || "admin";
  const savedPass = localStorage.getItem("registeredPass") || "password123";

  if (usernameInput === savedUser && passwordInput === savedPass) {
    window.location.href = "page1.html"; // Staying inside html/ folder
  } else {
    alert("Invalid username or password. Please try again.");
  }
}

// Function to handle navigation from html/page1.html to html/page2.html
function page2() {
  window.location.href = "page2.html"; // Staying inside html/ folder
}
