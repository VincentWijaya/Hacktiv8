function groupAnimals(animals) {
  // you can only write your code here!
  var hasil = []
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var sortedArr = []
  var tempArr = []

  for (var i = 0; i < alphabet.length; i++) {
    for (var j = 0; j < animals.length; j++) {
      if (alphabet[i] === animals[j][0]) {
        sortedArr.push(animals[j])
      }
    }
  }

  for (var k = 0; k < sortedArr.length; k++) {
    if (k === 0) {
      tempArr.push(sortedArr[k])
    } else if (k > 0 && sortedArr[k][0] === sortedArr[k-1][0]) {
      tempArr.push(sortedArr[k])
    } else if (k > 0 && sortedArr[k][0] !== sortedArr[k-1][0]) {
      hasil.push(tempArr)
      tempArr = []
      tempArr.push(sortedArr[k])
    }
  }
  hasil.push(tempArr)
  return hasil
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
