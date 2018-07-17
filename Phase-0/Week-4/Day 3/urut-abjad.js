function urutkanAbjad(str) {
  // you can only write your code here!
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var hasil = ''

  for (var i = 0; i < alphabet.length; i++) {
    for (var j = 0; j < str.length; j++) {
      if (alphabet[i] === str[j]) {
        hasil += alphabet[i]
      }
    }
  }
  return hasil 
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
