const age = prompt("Quel âge a l'enfant ?");

if (7 <= age && age <= 9) {
  alert("L'enfant est Poussin");
} else if (10 <= age && age <= 11) {
  alert("L'enfant est Pupille");
} else if (12 <= age && age <= 13) {
  alert("L'enfant est Benjamin");
} else if (14 <= age && age <= 15) {
  alert("L'enfant est Minime");
} else if (16 <= age && age <= 17) {
  alert("L'enfant est Cadet");
} else {
  alert("Ne peut pas être dans une catégorie");
}
