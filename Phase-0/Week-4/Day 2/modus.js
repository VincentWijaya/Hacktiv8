function cariModus(arr) {
  // you can only write your code here!
  var hasil = 0
  var unik = [] // [10, 4, 5, 2]
  var count = []// [1, 2, 1, 1]

  for (var i = 0; i < arr.length; i++) {
    var index = unik.indexOf(arr[i])
    if (index === -1) {
      unik.push(arr[i])
      count.push(1)
    } else if (index !== -1) {
      count[index] = count[index] + 1
    }
  }

  for (var j = 0; j < count.length; j++) {
    if (count[j] > 1 && unik.length > 1) {
      hasil = unik[j]
      break
    }
  }

  if (hasil === 0) {
    return -1
  } else {
    return hasil
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
