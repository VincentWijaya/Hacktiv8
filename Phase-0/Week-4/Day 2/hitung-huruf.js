function hitungHuruf(kata) {
  // you can only write your code here!
  var splitted = kata.split(' ')
  var hasil = ''
  var unik = ''
  var count = []

  for (var i = 0; i < splitted.length; i++) {
    for (var j = 0; j < splitted[i].length; j++) {
      var index = unik.indexOf(splitted[i][j])
      if (index === -1) {
        unik += splitted[i][j]
        count.push(1)
      } else if (index !== -1) {
        count[index] = count[index] + 1
      }
    }
  }
  return unik
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
// console.log(hitungHuruf('I am a passionate developer')); // passionate
// console.log(hitungHuruf('aku adalah anak gembala')); // adalah
// console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
// console.log(hitungHuruf('mengayuh perahu di danau')); // danau
