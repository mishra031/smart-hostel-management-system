// ===============================
// Hostel Management System Login
// ===============================

// Demo credentials (replace with DB/authentication later)
const credentials = {
  student: { id: "student123", pass: "student@123", redirect: "hams_second.html" },
  warden: { id: "warden123", pass: "warden@123", redirect: "warden22.html" },
  dc: { id: "dc123", pass: "dc@123", redirect: "DC_panel.html" }
};

// Login Button Event
document.getElementById("loginBtn").addEventListener("click", function (e) {
  e.preventDefault();

  let user = document.getElementById("userid").value.trim();
  let pass = document.getElementById("password").value.trim();

  if (!user || !pass) {
    alert("⚠️ Please enter both ID and Password!");
    return;
  }

  // Check all roles
  let loggedIn = false;
  for (let role in credentials) {
    let valid = credentials[role];
    if (user === valid.id && pass === valid.pass) {
      alert(`✅ Login Successful as ${role.toUpperCase()}`);
      window.location.href = valid.redirect;
      loggedIn = true;
      break;
    }
  }

  if (!loggedIn) {
    alert("❌ Invalid ID or Password!");
  }
});



// ===============================
// Logout Function (used in panels)
// ===============================
function logout() {
  alert("👋 Logged out successfully!");
  window.location.href = "hams_first.html"; // back to login page
}


// pasword hide or show
const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");

togglePassword.addEventListener("click", () => {
  const type = passwordField.type === "password" ? "text" : "password";
  passwordField.type = type;

  // eye ↔ eye-slash icon toggle
  togglePassword.classList.toggle("fa-eye");
  togglePassword.classList.toggle("fa-eye-slash");
});





