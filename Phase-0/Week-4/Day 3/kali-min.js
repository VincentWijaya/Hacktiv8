function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var tampung = []
  var digit = 99

  for (var i = 0; i <= angka; i++) {
    for (var j = 0; j <= angka; j++) {
      if (i * j === angka) {
        tampung.push(i + '' + j)
      }
    }
  }

  for (var k = 0; k < tampung.length; k++) {
    if (digit > tampung[k].length) {
      digit = tampung[k].length
    }
  }
  return digit
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
