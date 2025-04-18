
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (users[user] && users[user].password === pass) {
    localStorage.setItem("loggedUser", user);
    localStorage.setItem("role", users[user].role);
    window.location.href = "panel.html";
  } else {
    document.getElementById("error-msg").innerText = "Credenciales incorrectas";
  }
}
