const etudiants = [
  {
    id: 1,
    nom: "Touboul",
    prenom: "Nicola",
    pays: "France",
    genre: "Mr",
  },
  {
    id: 2,
    nom: "Mickey",
    prenom: "Mouse",
    pays: "Russie",
    genre: "Mr",
  },
  {
    id: 3,
    nom: "Histane",
    prenom: "Salma",
    pays: "Chine",
    genre: "Mlle",
  },
  {
    id: 4,
    nom: "Martin",
    prenom: "Dona",
    pays: "Chine",
    genre: "Mr",
  },
  {
    id: 5,
    nom: "Kennedy",
    prenom: "Sarah",
    pays: "Chine",
    genre: "Mlle",
  },
];
const russes = [];
const prenom_fin_A = [];
const nom_debut_K_Femme = [];
const nom_debut_M_Homme = [];
let nbChinoise = 0;

for (let i = 0; i < etudiants.length; i++) {
  if (etudiants[i].pays === "Russie") {
    russes.push(etudiants[i]);
  }
}

for (let i = 0; i < etudiants.length; i++) {
  if (etudiants[i].pays === "Chine" && etudiants[i].genre === "Mlle") {
    nbChinoise++;
  }
}
console.log(`le nombre d'élèves chinoise est ${nbChinoise}`);

for (let i = 0; i < etudiants.length; i++) {
  if (etudiants[i].genre === "Mr" && etudiants[i].nom[0] === "M") {
    nom_debut_M_Homme.push(etudiants[i]);
  }
}
console.log("la liste des hommes ayant un nom qui commence par M: ");
console.log(nom_debut_M_Homme);
console.log("________");

for (let i = 0; i < etudiants.length; i++) {
  if (etudiants[i].genre === "Mlle" && etudiants[i].nom[0] === "K") {
    nom_debut_K_Femme.push(etudiants[i]);
  }
}
console.log("la liste des femmes ayant un nom qui commence par K: ");
console.log(nom_debut_K_Femme);
console.log("________");

for (let i = 0; i < etudiants.length; i++) {
  if (etudiants[i].prenom[etudiants[i].prenom.length - 1] === "a") {
    prenom_fin_A.push(etudiants[i]);
  }
}
console.log("la liste des élèves ayant un prénom qui fini par a: ");
console.log(prenom_fin_A);

for (let i = 0; i < etudiants.length; i++) {
  console.log(etudiants[i].nom);
}
