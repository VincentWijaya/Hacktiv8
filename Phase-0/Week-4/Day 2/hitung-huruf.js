function hitungHuruf(kata) {
  // you can only write your code here!
  var splitted = kata.split(' ')
  var hasil = ''
  var banding = 0

  for (var i = 0; i < splitted.length; i++) {
    hasil = splitted[i]
    var count = 0
    for (var j = 0; j < splitted[i].length; j++) {
      var huruf = hasil[j];
      for (var k = 0; k < hasil.length; k++) {

        if (j !== k && huruf === hasil[k]) {
          count++
        }
      }
    }
    if (count > banding) {
      banding = count;
      splitted = hasil;
    }
  }

  if (banding > 0) {
    return splitted
  } else {
    return -1
  }

}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
