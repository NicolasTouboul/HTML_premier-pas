let mail = prompt("Enregistrez une adresse email valide");
let mdp = prompt("Enregistrez un mot de passe");

do {
  var mailtent = prompt("Entrez votre adresse email");
  var mdptent = prompt("Entrez votre mot de passe");
  if (mail != mailtent || mdp != mdptent) {
    alert("réessayez");
  } else {
    alert("bien joué");
  }
} while (mail != mailtent || mdp != mdptent);
