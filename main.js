const users = {
  "Sergio": { password: "vSergiors", role: "admin" },
  "admin": { password: "vSergiors", role: "admin" },
  "lethanix": { password: "vSergiors", role: "staff" }
};

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const errorMsg = document.getElementById("errorMsg");
      if (users[username] && users[username].password === password) {
        sessionStorage.setItem("user", username);
        window.location.href = "panel.html";
      } else {
        errorMsg.textContent = "Usuario o contraseña incorrectos.";
      }
    });
  }

  const user = sessionStorage.getItem("user");
  if (user && document.getElementById("menu")) {
    document.getElementById("menu").textContent = "Menú de " + user;
  }
});
