let mail = prompt("Enregistrez une adresse email valide");
let mdp = prompt("Enregistrez un mot de passe");
let mailtent;
let mdptent;
let nbtentative = 0;

while (mail != mailtent || mdp != mdptent) {
  nbtentative = nbtentative + 1;
  mailtent = prompt("Entrez votre adresse email");
  mdptent = prompt("Entrez votre mot de passe");
  alert("Identifiants incorrect");
  if (nbtentative > 5) {
    alert(
      `Vous avez saisi des mauvais identifiants 5 fois, votre compte est bloqué`
    );
    break;
  } else if (mailtent === mail && mdptent === mdp) {
    alert("Bienvenu dans votre espace client");
  }
}
