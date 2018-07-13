function angkaPalindrome(num) {
  // you can only write your code here!
  var palindrome = false
  var angka = ''

  while (palindrome === false) {
    num++
    angka = num.toString()
    var reverseAngka = ''

    for (var i = angka.length - 1; i >= 0; i--) {
      reverseAngka += angka[i]
    }

    palindrome = angka === reverseAngka
  }
  return num;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
