// Écoute la soumission du formulaire de connexion
let loggedInEmail;

document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche le rechargement de la page

  // Récupère les valeurs du formulaire
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Vérifie les identifiants en les comparant avec les données stockées dans le LocalStorage
  const users = JSON.parse(localStorage.getItem("users"));
  const user = users.find(function (u) {
    return u.email === email && u.password === password;
  });

  if (user) {
    // Si les identifiants sont corrects, redirige vers la page profile.html
    window.location.href = "profile.html";
    localStorage.setItem("loggedInEmail", email); // Stock l'email de l'utilisateur connecté
  } else {
    // Si les identifiants sont incorrects, affiche un message d'erreur
    alert("Identifiants incorrects");
  }
});
