function calculsommediago(matrice) {
  let sommediago1 = 0;
  let sommediago2 = 0;
  for (let i = 0; i < matrice.length; i++) {
    sommediago1 += matrice[i][i];
    sommediago2 += matrice[i][matrice.length - i - 1];
  }
  return sommediago1 + sommediago2;
}
