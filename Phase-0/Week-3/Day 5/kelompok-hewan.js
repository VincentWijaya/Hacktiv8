function groupAnimals(animals) {
  // you can only write your code here!
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var newAnimals = []
  var tempArr = []
  var hasil = []

  for (var i = 0; i < alphabet.length; i++) {
    for (var j = 0; j < animals.length; j++) {
      if (alphabet[i] === animals[j][0]) {
        newAnimals.push(animals[j])
      }
    }
  }

  for (var k = 0; k < newAnimals.length; k++) {
    if (k === 0) {
      tempArr.push(newAnimals[k])
    } else if (k > 0 && newAnimals[k-1][0] === newAnimals[k][0]) {
      tempArr.push(newAnimals[k])
    } else if (k > 0 && newAnimals[k-1][0] !== newAnimals[k][0]) {
      hasil.push(tempArr)
      tempArr = []
      tempArr.push(newAnimals[k])
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
