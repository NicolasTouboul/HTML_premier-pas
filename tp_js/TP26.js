//CLASSES
class Student {
  constructor(nom, prenom, age, genre, pays, option, isEditable, listCours) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.genre = genre;
    this.pays = pays;
    this.option = option;
    this.isEditable = isEditable;
    this.listCours = listCours;
  }
}

//Fonctions student
Student.prototype.changeFirstName = function (newFirstName) {
  this.nom = newFirstName;
};

Student.prototype.changeLastName = function (newLastName) {
  this.prenom = newLastName;
};

Student.prototype.changeOption = function (newOption) {
  this.option = newOption;
};

Student.prototype.tostring = function () {
  console.log(
    `Nom : ${this.nom}\nPrenom : ${this.prenom}\nAge : ${this.age}\nGenre : ${
      this.genre
    }\nPays : ${this.pays}\nOption : ${this.option}\nModiable : ${
      this.isEditable ? "Oui" : "Non"
    }\nListe des cours : ${this.listCours}`
  );
};

//AJOUT COURS
const btnCours = document.querySelector("#btn-cours");
const listCours = document.querySelector("#liste-cours");
let coursChild = [];

btnCours.addEventListener("click", newCours);

function newCours() {
  const ajoutCours = document.querySelector("#ajout-cours");
  const newLi = document.createElement("li");
  newLi.innerText = ajoutCours.value;
  ajoutCours.value = "";
  coursChild.push(newLi);
  listCours.appendChild(newLi);
}

//RECUPERATION FORMULAIRE
let etudiants = [];

function newEtudiant() {
  const nom = document.querySelector("#nom");
  const prenom = document.querySelector("#prenom");
  const age = document.querySelector("#age");
  const genreM = document.querySelector("#genre-m");
  const genreF = document.querySelector("#genre-f");
  const pays = document.querySelector("#pays");
  const option = document.querySelector("#option");
  const isEditable = document.querySelector("#modifiable-true");
  const cours = [];
  const editable = isEditable.checked;
  const genre = genreM.checked == true ? "M" : genreF.checked ? "F" : "";

  listCours.querySelectorAll("li").forEach((element) => {
    cours.push(element.innerText);
  });

  etudiants.push(
    new Student(
      nom.value,
      prenom.value,
      age.value,
      genre,
      pays.value,
      option.value,
      editable,
      cours
    )
  );
}

//Tableau Etudiant
const tableauEtudiants = document.querySelector("#tableau-etudiants");

function etudiantTab() {
  const newTr = document.createElement("tr");
  const newTdNom = document.createElement("td");
  const newTdPrenom = document.createElement("td");
  const newTdAge = document.createElement("td");
  const newTdGenre = document.createElement("td");
  const newTdPays = document.createElement("td");
  const newTdOption = document.createElement("td");
  const newTdModifiable = document.createElement("td");
  const newTdCours = document.createElement("td");
  const btnSupp = document.createElement("button");
  btnSupp.innerText = "Supprimer";
  const btnVoir = document.createElement("button");
  btnVoir.innerText = "Voir";

  for (let i = 0; i < etudiants.length; i++) {
    newTdNom.innerText = etudiants[i].nom;
    newTdPrenom.innerText = etudiants[i].prenom;
    newTdAge.innerText = etudiants[i].age;
    newTdGenre.innerText = etudiants[i].genre;
    newTdPays.innerText = etudiants[i].pays;
    newTdOption.innerText = etudiants[i].option;
    newTdModifiable.innerText = etudiants[i].isEditable == true ? "Oui" : "Non";
    newTdCours.innerText = etudiants[i].listCours.toString();

    tableauEtudiants
      .appendChild(newTr)
      .append(
        newTdNom,
        newTdPrenom,
        newTdAge,
        newTdGenre,
        newTdPays,
        newTdOption,
        newTdModifiable,
        newTdCours,
        btnVoir,
        btnSupp
      );
  }
}

//Appuis bouton valider
const btnValider = document.querySelector("#btn-valider");

btnValider.addEventListener("click", validation);

function validation() {
  const champsValides = validationChamps();
  if (champsValides) {
    newEtudiant();
    etudiantTab();
    coursChild.forEach((element) => {
      listCours.removeChild(element);
    });
    coursChild = [];
    console.log(etudiants[etudiants.length - 1].tostring());
    document.querySelector("#fiche-inscription").reset();
  }

  //Validation des champs
  const msgsErr = [];

  function validationChamps() {
    let nomCh = true;
    for (let i = 0; i < document.querySelector("#nom").value.length; i++) {
      if (parseInt(document.querySelector("#nom").value[i]) > 0) {
        nomCh = false;
        break;
      }
    }
    document.querySelector("#nom").value.length >= 5
      ? (nomCh = nomCh)
      : (nomCh = false);

    for (let i = 0; i < document.querySelector("#prenom").value.length; i++) {
      if (parseInt(document.querySelector("#prenom").value[i]) > 0) {
        nomCh = false;
        break;
      }
    }
    document.querySelector("#prenom").value.length >= 5
      ? (nomCh = nomCh)
      : (nomCh = false);

    // const nomCh =
    //   (document.querySelector("#nom").value.length <= 5) || document.querySelector("#nom").value. ? false : true;
    const prenomCh =
      document.querySelector("#prenom").value.length == 0 ? false : true;
    const ageCh =
      document.querySelector("#age").value.length == 0 ? false : true;
    const genreCh =
      document.querySelector("#genre-m").checked ||
      document.querySelector("#genre-f").checked
        ? true
        : false;
    const paysCh =
      document.querySelector("#pays").value.length == 0 ? false : true;
    const optionCh =
      document.querySelector("#option").value.length == 0 ? false : true;
    const isEditableCh =
      document.querySelector("#modifiable-true").checked ||
      document.querySelector("#modifiable-false").checked
        ? true
        : false;
    const coursCh = coursChild.length == 0 ? false : true;

    const errFormulaire = document.querySelector("#err-formulaire");

    //validation individuelle
    //Nom Prénom
    const nomErr = document.querySelector("#nom-err");
    if (!nomCh || !prenomCh) {
      nomErr.innerText =
        "Veuillez entrer au minimum 5 charactère sans chiffres.";
      nomErr.classList.add("msg-err");
    } else {
      nomErr.innerText = "";
    }

    //Age

    //   document.querySelector("#age")
    //   document.querySelector("#genre-m")
    //   document.querySelector("#genre-f")
    //   document.querySelector("#pays")
    //   document.querySelector("#option")
    //   document.querySelector("#modifiable-true")
    // prenomCh
    // ageCh
    // genreCh
    // paysCh
    // optionCh
    // isEditableCh
    // coursCh

    //Validation collective
    if (
      nomCh &&
      prenomCh &&
      ageCh &&
      genreCh &&
      paysCh &&
      optionCh &&
      isEditableCh &&
      coursCh
    ) {
      errFormulaire.innerText = "";
      return true;
    } else {
      errFormulaire.innerText = "Veuillez remplir tous les champs !";
      errFormulaire.classList.add("msg-err");
      return false;
    }
  }
}
