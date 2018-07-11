function angkaPalindrome(num) {
  var angka = num.toString();

  if(num < 9){
    return num + 1;
  } else if (num === 9) {
    return 11;
  } else {
    while(angka !== angka.split('').reverse().join('')){
      angka = num.toString();
      num++;
    }
    return num;
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
