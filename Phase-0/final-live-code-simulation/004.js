
/*
===========================
Initial Grouping Descending
==========================

[INSTRUCTION]
Disediakan sebuah function initialGroupingDescending yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialGroupingDescending akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan huruf depan harus terurut dari paling besar/descending dan dipisahkan ke dalam
array dua dimensi.

[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Output:
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]

Kamu tidak perlu peduli dengan urutan alphabet nama siapa yang keluar terlebih dahulu!

RULES:
- Dilarang menggunakan sintaks Set atau Regex
- Dilarang menggunakan built in function sort

*/

function initialGroupingDescending(studentsArr) {
  // Only Code Here
  var alphabet = 'ZYXWVUTSRQPONMLKJIHGFEDCBA'
  var hasil = []
  var arrHuruf = []

  for (var i = 0; i < alphabet.length; i++) {
    for (var j = 0; j < studentsArr.length; j++) {
      if (alphabet[i] === studentsArr[j][0] && arrHuruf.indexOf(alphabet[i]) === -1) {
        arrHuruf.push(alphabet[i])
      }
    }
  }

  for (var k = 0; k < arrHuruf.length; k++) {
    var temp = []
    temp.push(arrHuruf[k])
    for (var l = 0; l < studentsArr.length; l++) {
      if (arrHuruf[k] === studentsArr[l][0]) {
        temp.push(studentsArr[l])
      }
    }
    hasil.push(temp)
  }
  return hasil
}

console.log(initialGroupingDescending(['Budi', 'Badu', 'Joni', 'Jono']));
/*
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]
*/

console.log(initialGroupingDescending(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
[
  [ 'Y', 'Yusuf' ],
  [ 'M', 'Mickey' ],
  [ 'G', 'Gong' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ]
]
*/

console.log(initialGroupingDescending(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
[
  [ 'S', 'Stone', 'Sticker' ],
  [ 'R', 'Rock', 'Rocker' ],
  [ 'B', 'Brick' ]
]
*/
