const rayon = document.querySelector("#rayon");
const diametre = document.querySelector("#diametre");
const circ = document.querySelector("#circ");
const aire = document.querySelector("#aire");
const calcul = document.querySelector("#btn-submit");

calcul.addEventListener("click", function () {
  diametre = 2 * rayon.value;
  circ = 2 * Math.PI * rayon.value;
  aire = Math.PI * rayon.value ** 2;
  console.log(diametre.value);
  diametre.value = diametre;
});
