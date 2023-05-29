// Récupère l'email de l'utilisateur connecté depuis le localStorage
let loggedInEmail = localStorage.getItem("loggedInEmail");
// Récupère les utilisateurs du localStorage
let users = localStorage.getItem("users");
if (users) {
  // Convertit la chaîne JSON en tableau d'utilisateurs
  users = JSON.parse(users);

  // Recherche l'utilisateur connecté dans le tableau
  let loggedInUser = users.find((user) => user.email === loggedInEmail);
  if (loggedInUser) {
    // Affiche les informations de l'utilisateur connecté
    document.getElementById("first-name").textContent = loggedInUser.firstName;
    document.getElementById("last-name").textContent = loggedInUser.lastName;
    document.getElementById("email").textContent = loggedInUser.email;
    document.getElementById("password").textContent = loggedInUser.password;
  }
}
