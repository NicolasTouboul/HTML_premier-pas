const etudiants = [
  {
    id: 1,
    nom: "Touboul",
    prenom: "Nicolas",
    pays: "France",
    genre: "Mr",
  },
  {
    id: 2,
    nom: "Bossard",
    prenom: "Benjamin",
    pays: "Chine",
    genre: "Mr",
  },
  {
    id: 3,
    nom: "Histane",
    prenom: "Salma",
    pays: "Russie",
    genre: "Mlle",
  },
];

const russes = [];
const prenom_fin_A = [];
const nom_debut_K_F = [];
const nom_debut_M_H = [];
let nbChinois = 0;

for (let i = 0; i < etudiants.length; i++) {
  if (etudiants[i].pays === "Russie") {
    russes.push(etudiants[i]);
  }
}

for (let i = 0; i < etudiants.length; i++) {
  if (etudiants[i].pays === "Chine") {
    nbChinois++;
  }
}
console.log(nbChinois);

for (let i = 0; i < etudiants.length; i++) {
  if (etudiants[i].genre === "Mr" && etudiants[i].nom[0] === "M") {
    nom_debut_M_H.push(etudiants[i]);
  }
}

for (let i = 0; i < etudiants.length; i++) {
  if (etudiants[i].genre === "Mlle" && etudiants[i].nom[0] === "K") {
    nom_debut_K_F.push(etudiants[i]);
  }
}

for (let i = 0; i < etudiants.length; i++) {
  if (etudiants[i].prenom[etudiants[i].prenom.length - 1] === "a") {
    prenom_fin_A.push(etudiants[i]);
  }
}

for (let i = 0; i < etudiants.length; i++) {
  console.log(etudiants[i].nom);
}
