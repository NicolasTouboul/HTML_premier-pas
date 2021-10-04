let nbr;

while (nbr < 10 || nbr > 20) {
  nbr = prompt("entrez un nombre");
  if (nbr < 10) {
    alert("trop petit");
  } else if (nbr > 20) {
    alert("trop grand");
  } else {
    alert("bien joué");
  }
}
