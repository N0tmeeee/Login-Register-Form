function login(event) {
  // Prevent default form submission if triggered by a form submit event
  if (event) event.preventDefault();

  // 1. Get input values from DOM
  const usernameInput = document.getElementById("usernameInput").value;
  const passwordInput = document.getElementById("passwordInput").value;

  // 2. Retrieve expected credentials (e.g., saved during registration or set as defaults)
  const savedUser = localStorage.getItem("registeredUser") || "admin";
  const savedPass = localStorage.getItem("registeredPass") || "password123";

  // 3. Compare values using strict equality
  if (usernameInput === savedUser && passwordInput === savedPass) {
    window.location.href = "page1.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
}
