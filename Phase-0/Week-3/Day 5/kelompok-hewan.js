function groupAnimals(animals) {
  // you can only write your code here!
  animals.sort();
  var firstAlphabet = animals[0][0]
  var resultArr = []
  var tempArr = []

  for (var i = 0; i < animals.length; i++) {
    if (animals[i][0] === firstAlphabet) {
      tempArr.push(animals[i])
    } else {
      resultArr.push(tempArr)
      tempArr = []
      firstAlphabet = animals[i][0]
      tempArr.push(animals[i])
    }
  }
  resultArr.push(tempArr)
  return resultArr
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
