/*
Title Givers
==============
Name :_____________

[INSTRUCTIONS]
Title givers akan menerima dua parameter dimana parameter pertama merupakan array yang berisi nama.
Dan pada bagian kedua, adalah title yang akan di berikan kepada pemilik nama di array yang di berikan.
Jika title yang di berikan di mulai dengan koma `,` maka title akan di tuliskan.
Jika tidak, maka title akan di tuliskan di depan dan dipisahkan dengan spasi ` `.
Contoh ada pada test case.

[RULE]
- Wajib menyertakan pseudocode atau algorithma!
- Dilarang menggunakan sintaks .map()!
*/

/*
  1. Menerima sebuah array dengan nama targetArr
  2. Menerima sebuah string dengan nama title
  3. Buat variabel hasil dengan tipe Array
  4. Looping 'targetArr' dari 'targetArr[pertama]' sampai 'targetArr[terakhir]'
    a. Cek, apakah indeks pertama dari 'title' adalah ','
      a.1 Jika ya, set targetArr[sekarang] dengan targetArr[sekarang] ditambah title
      a.2 Jika tidak, set targetArr[sekarang] dengan title ditambah targetArr[sekarang]
    b. Masukkan targetArr[sekarang] kedalam array 'hasil'
  5. Tampilkan hasil
*/

function titleGivers (targetArr, title) {
  // write your code here
  var hasil = []

  for (var i = 0; i < targetArr.length; i++) {
    if (title[0] === ',') {
      targetArr[i] = targetArr[i] + title
    } else {
      targetArr[i] = title + ' ' + targetArr[i]
    }
    hasil.push(targetArr[i])
  }
  return hasil
}

console.log(titleGivers (['Awtian Akbar', 'Kobayakawa Sena', 'Yoichi Hiruma'], 'Mr.'));
// Output
// [ 'Mr. Awtian Akbar',
//   'Mr. Kobayakawa Sena',
//   'Mr. Yoichi Hiruma' ]
console.log(titleGivers (['Dre', 'Brock', 'Leorio'], 'Dr.'));
// Output
// [ 'Dr. Dre', 'Dr. Brock', 'Dr. Leorio' ]
console.log(titleGivers (['Boush', 'Squee', 'Spleen' , 'Spoon'], ', ST'));
// Output
// [ 'Boush, ST', 'Squee, ST', 'Spleen, ST', 'Spoon, ST' ]
