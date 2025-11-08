const logoutBtn = document.getElementById("logoutBtn");
const themeToggle = document.getElementById("themeToggle");
const addBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deleteBtn");

// Login protection
if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "index.html";
}

// Add customer
addBtn.addEventListener("click", () => {
  const id = document.getElementById("custId").value.trim();
  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const email = document.getElementById("custEmail").value.trim();

  if (!id || !name || !phone || !email) {
    alert("Please fill all fields!");
    return;
  }

  let customers = JSON.parse(localStorage.getItem("customers")) || [];
  if (customers.find(c => c.id == id)) {
    alert("Customer ID already exists!");
    return;
  }

  customers.push({ id, name, phone, email });
  localStorage.setItem("customers", JSON.stringify(customers));
  alert("✅ Customer added successfully!");
});

// Delete customer
deleteBtn.addEventListener("click", () => {
  const id = document.getElementById("deleteId").value.trim();
  let customers = JSON.parse(localStorage.getItem("customers")) || [];
  const index = customers.findIndex(c => c.id == id);

  if (index === -1) {
    alert("❌ Customer not found!");
    return;
  }

  customers.splice(index, 1);
  localStorage.setItem("customers", JSON.stringify(customers));
  alert("🗑️ Customer deleted successfully!");
});

// Logout
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "index.html";
});

// Theme toggle
themeToggle.addEventListener("click", () => {
  const body = document.body;
  body.classList.toggle("light");
  body.classList.toggle("dark");
  const theme = body.classList.contains("light") ? "light" : "dark";
  localStorage.setItem("theme", theme);
  themeToggle.textContent = theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode";
});

window.onload = () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.body.classList.add(savedTheme);
  themeToggle.textContent = savedTheme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode";
};
