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
