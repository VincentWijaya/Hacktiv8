/*

==================================
Array Mastery: Find Not Relative
==================================

Diberikan sebuah function findNotRelative yang menerima 2 parameter berupa array of number.
Output adalah array berupa kumpulan angka yang ada di array pertama tetapi tidak ada di array kedua.

Contoh 1:
input: [ 3, 6, 10, 12, 15 ] dan [ 1, 3, 5, 10, 16 ]
output: [ 6, 12, 15]

Contoh 2:
input: [ 10, 20, 36, 59 ] dan [ 5, 10, 15, 59 ]
output: [20, 36]

RULES:
 - WAJIB MENGGUNAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN .map, .filter atau .reduce!

*/

/* PSEUDOCODE

STORE 'hasil' with empty array
STORE 'i' with 0
STORE 'j' with 0

FOR 'i' < arr1
  STORE 'condition' = true
  FOR 'j' < arr2
    IF 'arr1[i]' = 'arr2[j]'
      'condition' = false
  IF 'condition' = true
    STORE 'hasil' with 'arr1[i]'
DISPLAY 'hasil'
*/

function findNotRelative(arr1, arr2) {
  // your code here
  var result = []
  var condition = true

  for (var i = 0; i < arr1.length; i++) {
    condition = true
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        condition = false
      }
    }
    if (condition === true) {
      result.push(arr1[i])
    }
  }
  return result
}

console.log(findNotRelative([ 3, 6, 10, 12, 15 ], [ 1, 3, 5, 10, 16 ])); // [ 6, 12, 15]
console.log(findNotRelative([ 10, 20, 36, 59 ], [ 5, 10, 15, 59 ])); //[20, 36]
console.log(findNotRelative([ 1, 2, 3], [2, 1, 3])); //[]
