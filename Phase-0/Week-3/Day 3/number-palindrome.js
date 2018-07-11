function angkaPalindrome(num) {
  num++
  var angka = num.toString();

  while(angka !== angka.split('').reverse().join('')){
    num++;
    angka = num.toString();
  }

  return num;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
console.log(angkaPalindrome(101));
