// Récupère l'évènement du formulaire de création de profil
// Ici, nous utilisons le LocalStorage pour stocker les données du profil. Lorsque le formulaire est soumis, les valeurs sont enregistrées dans le LocalStorage avec les clés correspondantes. Ensuite, dans la page profile.html, nous récupérons les données du LocalStorage et les affichons dans les éléments HTML appropriés.
// Ainsi, lorsque l'utilisateur remplit le formulaire de création de profil, les données seront stockées dans le LocalStorage et affichées dans la page profile.html pour une visualisation ultérieure.

const registrationForm = document.getElementById("registration-form");

// Ecoute la soumission du form
registrationForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche le rechargement de la page
  // Récupère les valeurs du formulaire
  const fullName = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;
  const passWord = document.getElementById("password").value;

  // Affiche les données dans la page profile.html
  // Plusieurs méthodes, telles que le stockage dans le LocalStorage ou l'envoi à un serveur pour traitement
  // Ici nous allons utiliser le LocalStorage
  localStorage.setItem("fullName", fullName);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  // Redirection vers la page profile.html
  window.location.href = "profile.html";
});
