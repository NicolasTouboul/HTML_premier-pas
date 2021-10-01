let i = 0;

for (let i = 1; i <= 100; i = i + 2) {
  console.log(i);
}

//post incrément

let a = 1;
let b = 1;

//a=b
//b +=1
a = b++;

//pre incre
//b += 1
//a=b
a = ++b;

//Boucle sur des chaines
const noms = "Nicolas Touboul";
for (let i = 0; i < noms.length; i++) {
  console.log(noms[i]);
}

//while{}

let monmdp;

while (mdp.length < 8) {
  monmdp = prompt("Veuillez saisir un mdp: ");
  if (monmdp.length < 8) {
    alert(
      "Le mot de passe est trop court, veuillez saisir un mot de passe d'au moins 8 caractères"
    );
  } else {
    alert("Mot de passe enregistré");
  }
}

//do{} while()

do {
  monmdp = prompt("Veuillez saisir un mdp: ");
  if (monmdp.length < 8) {
    alert(
      "Le mot de passe est trop court, veuillez saisir un mot de passe d'au moins 8 caractères"
    );
  } else {
    alert("Mot de passe enregistré");
  }
} while (mdp.length < 8);
