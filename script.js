function isPrimo(a) {
  if (a <= 0) {
    console.log(" tu numero no sirve");
    return;
  }
  if (a % 2 == 0) {
    console.log("el numero es par");
  } else {
    console.log("el número no es par");
  }
}

isPrimo(0);
