function cariModus(arr) {
  // you can only write your code here!
  var hasil = 0
  var sorted = []
  var patokan = 1

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      sorted.push(arr[i])
    } else if (sorted === [1] && arr[i] > patokan) {
      patokan = arr[i]
      sorted.push(arr[i])
    }
  }
  return sorted
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
