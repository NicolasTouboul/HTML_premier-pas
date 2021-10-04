let nbr_debut = parseInt(prompt("Entrez un premier nombre"));
let nbr_fin = parseInt(prompt("Entrez un deuxième nombre"));
let tab_debut = parseInt(prompt("Entrez un troisième nombre"));
let tab_fin = parseInt(prompt("Entrez un quatrième nombre"));

for (let i = nbr_debut; i <= nbr_fin; i++) {
  for (let j = tab_debut; j <= tab_fin; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log("___");
}
