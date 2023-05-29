// Récupère l'évènement du formulaire de création de profil
// Ici, nous utilisons le LocalStorage pour stocker les données du profil. Lorsque le formulaire est soumis, les valeurs sont enregistrées dans le LocalStorage avec les clés correspondantes. Ensuite, dans la page profile.html, nous récupérons les données du LocalStorage et les affichons dans les éléments HTML appropriés.
// Ainsi, lorsque l'utilisateur remplit le formulaire de création de profil, les données seront stockées dans le LocalStorage et affichées dans la page profile.html pour une visualisation ultérieure.
// Aussi nous avons créé une fonction storeUser afin de sauvegarder les profils créés

const registrationForm = document.getElementById("registration-form");

// Ecoute la soumission du form
registrationForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche le rechargement de la page
  // Récupère les valeurs du formulaire
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Affiche les données dans la page profile.html
  // Plusieurs méthodes, telles que le stockage dans le LocalStorage ou l'envoi à un serveur pour traitement
  // Ici nous allons utiliser le LocalStorage
  localStorage.setItem("firstName", firstName);
  localStorage.setItem("lastName", lastName);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  // On créer une fonction pour stocker les informations de l'utilisateur
  function storeUser(firstName, lastName, email, password) {
    // Vérifie si des utilisateurs existent déjà dans le localStorage
    let users = localStorage.getItem("users");
    if (!users) {
      // Si aucun utilisateur n'existe, créer un tableau vide
      users = [];
    } else {
      users = JSON.parse(users);
    }
    // Créer un nouvel objet pour représenter l'utilisateur
    let user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    // Ajoute le nouvel user au tableau des userS
    users.push(user);
    // Converti le tableau d'utilisateurs en chaine JSON
    let usersJSON = JSON.stringify(users);
    // On stock la chaine dans le localstorage
    localStorage.setItem("users", usersJSON);
    // On stock l'email pour que, à la création du profil, les infos s'affichent aussi sur la page sans avoir besoin de se connecter
    localStorage.setItem("loggedInEmail", email);
  }

  storeUser(firstName, lastName, email, password);
  // Redirection vers la page profile.html
  window.location.href = "profile.html";
});
