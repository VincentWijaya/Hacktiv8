/*
================
Format Uang (KBBI)
================

[INSTRUCTIONS]

formatUang adalah sebuah function yang menerima satu parameter berupa number.
function akan mereturn sebuah sebuah string yang merupakan format uang (KBBI) seperti:
Rp1.500,00

[RULE]
- Wajib menggunakan Pseudocode/Algoritma
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!

[EXAMPLE]
formatUang(2000)

output: Rp2.000,00
*/

/*

STORE hasil with 'Rp.'
STORE split with number convert to array
STORE temp with empty toString
STORE i with split length substract by 1

FOR i greater than or equals to 0
  IF i equals to split length substract by 1
    STORE temp with '00,' AND split[i]
  ELSE IF i equals to split length substract by 4 OR i equals to plit length substract by 7
    STORE temp with '.' AND split[i]
  ELSE
    STORE temp with split[i]
STORE i with i substract by 1

STORE arrTemp with temp convert to array
STORE j with arrTemp length substract by 1

FOR j greater than or equals to 0
   STORE hasil with arrTemp[j]
STORE j with j substract by 1

DISPLAY hasil

*/

function formatUang(number) {
  //code here
  var hasil = 'Rp.'
  var split = number.toString().split('')
  var temp = ''

  for (var i = split.length - 1; i >= 0; i--) {
    if (i === split.length - 1) {
      temp += '00,' +split[i]
    } else if (i === split.length - 4 || i === split.length - 7) {
      temp += '.' + split[i]
    } else {
      temp += split[i]
    }
  }

  var arrTemp = temp.split('')

  for (var j = arrTemp.length - 1; j >= 0; j--) {
    hasil+= arrTemp[j]
  }
  return hasil
}

console.log(formatUang(7500)); // Rp7.500,00
console.log(formatUang(250)); // Rp250,00
console.log(formatUang(100000)); // Rp100.000,00
console.log(formatUang(1000000)); // Rp1.000.000,00
console.log(formatUang(4999999)); // Rp4.999.999,00
