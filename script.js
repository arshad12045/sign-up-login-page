function signup() {
  const username = document.getElementById('signup-username')?.value.trim();
  const password = document.getElementById('signup-password')?.value;

  if (!username || !password) {
    showMessage("Please fill in all fields.");
    return;
  }

  if (localStorage.getItem(username)) {
    showMessage("Username already exists. Try logging in.");
  } else {
    localStorage.setItem(username, password);
    showMessage("Signup successful. You can now log in.");
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1500);
  }
}

function login() {
  const username = document.getElementById('login-username')?.value.trim();
  const password = document.getElementById('login-password')?.value;

  if (!username || !password) {
    showMessage("Please fill in all fields.");
    return;
  }

  const storedPassword = localStorage.getItem(username);

  if (storedPassword && storedPassword === password) {
    showMessage("Login successful. Welcome, " + username + "!");
    setTimeout(() => {
      alert("Logged in successfully!");
    }, 1000);
  } else {
    showMessage("Invalid username or password.");
  }
}

function showMessage(message) {
  const msgDiv = document.getElementById('message');
  if (msgDiv) {
    msgDiv.textContent = message;
  }
}
