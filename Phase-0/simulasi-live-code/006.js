/*

Diberikan sebuah function angka terbesar yang menerima satu parameter berupa array.
fungsi ini akan mengembalikan atau me return nilai berupa angka terbesar dari array.
Jika array kosong maka akan mengembalikan nilai -1

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function palindromeRecursive
- Dilarang mengubah tipe data parameter

*/

function angkaTerbesar(sentence) {
  // you can only write your code here!
  nums = sentence.slice();

  if (nums.length == 0) return -1

  if (nums.length == 1) return nums[0]

  if (nums[0] < nums[1]) {
    nums.splice(0, 1)
  } else {
    nums.splice(1, 1)
  }

  return angkaTerbesar(nums)
}

// TEST CASES
console.log(angkaTerbesar([2, 3, 7, 6, 5])) // 7
console.log(angkaTerbesar([9, 3, 7, 4, 1])) // 9
console.log(angkaTerbesar([2, 1, 7, 2, 8])) // 8
console.log(angkaTerbesar([])) // -1
