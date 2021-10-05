// const TVA = 0.2;
// const article = {
//   nom: "t-shirt",
//   reference: "xyz00pp2",
//   prixHT: 15,
//   calculerPrixTTC() {
//     return this.prixHT * (1 + TVA);
//   },
// };

const mobile = {
  distance: parseInt(prompt("la dist")),
  temps: parseInt(prompt("le temps")),
  calculervitesse() {
    return this.distance / this.temps;
  },
};

console.log(`distance parcourue : ${mobile.distance}`);
console.log(`le tempstemps : ${mobile.temps}`);
console.log(`la vitesse ${mobile.calculervitesse()}`);
