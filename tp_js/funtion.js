//fonctions
function addition(param1, param2) {
  const somme = param1 + param2;
  return somme;
}
function calculvitesse(distance, temps) {
  const vitesse = distance / temps;
  return vitesse;
  console.log(vitesse);
}
//utilisation
// const nbr1 = parseInt(prompt("saisir le premier nombre"));
// const nbr2 = parseInt(prompt("saisir le deuxième nombre"));

// const somme = addition(nbr, nbr2);

const dist = parseInt(prompt("entrez la distance parcourue"));
const temps = parseInt(prompt("entrez le temps"));

const vitesse = calculvitesse(dist, temps);
