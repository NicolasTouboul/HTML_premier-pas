function Etudiant(nom, prenom, age, genre, pays, option, cours) {
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;
  this.genre = genre;
  this.pays = pays;
  this.option = option;
  this.cours = cours;
}

const etudiants = [];
const nbcours = parseInt(prompt("Combien de cours différents ?"));
const nbetudiant = parseInt(prompt("Combien d'étudiants faut il inscrire ?"));

for (let i = 1; i <= nbetudiant; i++) {
  let nom = prompt("Nom: ");
  let prenom = prompt("Prénom: ");
  let age = parseInt(prompt("Âge: "));
  let genre = prompt("Civilité: ");
  let pays = prompt("Nationalité: ");
  let option = prompt("Options: ");
  let cours = [];
  for (j = 1; j <= nbcours; j++) {
    cours.push(prompt("Liste des cours"));
  }
  let etudiant = new Etudiant(nom, prenom, age, genre, pays, option, cours);
  etudiants.push(etudiant);
}
for (let i = 0; i < etudiants.length; i++) {
  console.log(etudiants[i]);
}

Etudiant.prototype.changeNom = function (nouveauNom) {
  return (this.nom = nouveauNom);
};
Etudiant.prototype.changePrenom = function (nouveauPrenom) {
  return (this.prenom = nouveauPrenom);
};
Etudiant.prototype.changeOption = function (nouvOption) {
  return (this.option = nouvOption);
};

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
