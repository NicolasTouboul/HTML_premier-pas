const taille_tableau = parseInt(prompt("Entrez la taille du tableau"));
let tableau = [];
let sum = 0;

for (j = 0; j < taille_tableau; j++) {
  tableau.push(parseInt(prompt("entrez un nombre")));
}

for (i = 0; i < tableau.length; i++) {
  sum += tableau[i];
}
console.log(sum / taille_tableau);
