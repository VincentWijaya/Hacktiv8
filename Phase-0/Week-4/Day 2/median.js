function cariMedian(arr) {
  // you can only write your code here!
  var panjang = arr.length
  var index = 0
  var hasil = 0

  if (panjang%2 === 1) {
    index = Math.floor(panjang/2)
    hasil = arr[index]
  } else if (panjang%2 === 0) {
    index = panjang/2
    hasil = (arr[index] + arr[index-1])/2
  }
  return hasil
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
