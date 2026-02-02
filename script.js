// Get elements safely
const form = document.querySelector("form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// Show existing user button if credentials exist
const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

if (existingBtn && savedUsername && savedPassword) {
  existingBtn.style.display = "inline-block";
}

// Handle form submit (ONLY if form exists)
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    alert(`Logged in as ${username}`);

    if (checkbox.checked) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      if (existingBtn) existingBtn.style.display = "inline-block";
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      if (existingBtn) existingBtn.style.display = "none";
    }
  });
}

// Handle existing user login (ONLY if button exists)
if (existingBtn) {
  existingBtn.addEventListener("click", function () {
    const savedUser = localStorage.getItem("username");
    alert(`Logged in as ${savedUser}`);
  });
}