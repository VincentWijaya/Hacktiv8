function pasanganTerbesar(num) {
  // you can only write your code here!
  var numberAsli = num.toString();
  var terbesarSementara = 0;
  for (var i = 0; i < numberAsli.length; i++) {
    if (numberAsli[i] + numberAsli[i+1] > terbesarSementara) {
      terbesarSementara = numberAsli[i] + numberAsli[i+1];
    }
  }
  return terbesarSementara;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
