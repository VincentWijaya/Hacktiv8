function checkAB(num) {
  // you can only write your code here!
  var temp = ''
  var hasil = false

  for (var i = 0; i < num.length; i++) {
    if (num[i] === 'a') {
      temp += num[i+1] + num[i+2] + num[i+3] + num[i+4]
    }
  }

  for (var j = 0; j < temp.length; j++) {
    if (temp[j] === 'b') {
      return true
    }
  }

  return hasil
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
