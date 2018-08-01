/*
================
SENSOR SENTENCE
================
description: Sebuah fungsi yang akan mendeteksi apakah kalimat tersebut merupakan kalimat yang
tidak baik dan akan mengembalikan nilai kalimat yang telah di sensor

rules:
1. Wajib menggunakan Pseudocode/ Algoritma
2. tidak boleh menggunakan built in function .filter(), .map(), .split(), .findIndex(), indexOf(), .join()
3. tidak boleh menggunakan REGEX, seperti .match, .replace


examples:
JIKA INPUT KALIMAT = 'HAHAHA PAYAH LOOO' dan INPUT SENSOR = 'PAYAH'
MAKA OUTPUT = 'HAHAHA ***** LOOO'

*/

/*
Pseudocode

STORE hasil with empty string
STORE arrtemp with empty array
STORE temp with empty string

STORE i with 0

FOR i less than sentence length
  IF sentence[i] not equals to space
    STORE temp with sentence[i]
  IF sentence[i] equals to space
    STORE arrtemp with temp and ' '
    SET temp to empty string
SET i with i add by 1

STORE j with 0

FOR j less than arrtemp length
  IF arrtemp[j] equals to words
    STORE ganti with empty string
    STORE k with 0
    FOR k less than arrtemp[j] length
      STORE ganti with '*'
    STORE k with k add by 1
STORE j with j add by 1

STORE l with 0

FOR l less than arrtemp length
  STORE hasil with arrTemp[l]
STORE l with l add by 1

DISPLAY hasil
*/


function sensorSentence ( sentence, words ) {
  // Your code here
  var hasil = ''
  var arrtemp = []
  var temp = ''

  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      temp += sentence[i]
    }

    if (sentence[i] === ' ' || sentence[i+1] === undefined) {
      arrtemp.push(temp)
      arrtemp.push(' ')
      temp = ''
    }

  }

  for (var j = 0; j < arrtemp.length; j++) {
    if (arrtemp[j] === words) {
      var ganti = ''
      for (var k = 0; k < arrtemp[j].length; k++) {
        ganti += '*'
      }
      arrtemp[j] = ganti
    }
  }

  for (var l = 0; l < arrtemp.length; l++) {
    hasil += arrtemp[l]
  }
  return hasil
}


console.log(sensorSentence('Hey you are a murderer', 'murderer')) // Hey you are a ********

console.log(sensorSentence('I will kill you later, i swear', 'kill')) // I will **** you later, i swear

console.log(sensorSentence("Oh my god, holy cow! i can't believe it", "cow!")) // Oh my god, holy **** i can't believe it

console.log(sensorSentence("Aku ingin pindah ke meikartu", "meikartu")) // Aku ingin pindah ke ********

console.log(sensorSentence('HAHA HEHE HIHI HUHU HOHO', 'WEY')) // 'HAHA HEHE HIHI HUHU HOHO'

console.log(sensorSentence('', '')) // ''
