const adminEmail = "admin@gmail.com";
const adminPassword = "12345";
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
  const email = document.getElementById("adminEmail").value.trim();
  const pass = document.getElementById("adminPass").value.trim();

  if (email === adminEmail && pass === adminPassword) {
    alert("Login successful!");
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "add-delete.html";
  } else {
    alert("Invalid admin credentials!");
  }
});

window.onload = () => {
  if (localStorage.getItem("isLoggedIn") === "true") {
    window.location.href = "add-delete.html";
  }
};
