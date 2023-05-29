// Ce script ne sert qu'à afficher les informations récoltés en registration, sur la page du profil
document.getElementById("full-name").textContent = localStorage.getItem("fullName");
document.getElementById("email").textContent = localStorage.getItem("email");
document.getElementById("password").textContent = localStorage.getItem("password");
