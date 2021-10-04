let liste1 = [];
let liste2 = [];
let liste3 = [];

let taille_liste = parseInt(prompt("veuillez entrer la taille des listes"));

for (i = 0; i < taille_liste; i++) {
  liste1.push(parseInt(prompt("entrez un nombre dans la 1ère liste")));
  liste2.push(parseInt(prompt("entrez un nombre dans la 2ème liste")));
  liste3[i] = liste1[i] + liste2[i];
}
console.log(liste1);
console.log(liste2);
console.log(liste3);
