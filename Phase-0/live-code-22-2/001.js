/**
Reverse Even
Implementasikan function reverseEven untuk membalikkan setiap elemen string dengan urutan ganjil
yang ada di dalamnya.
Contoh:
- input: ['awtian', 'raijin', 'thunderkeg']
  output: ['naitwa', 'raijin', 'gekrednuht']
- input: ['draco', 'luna', 'riddle', 'hagrid']
  output: ['ocard', 'luna', 'elddir', 'hagrid']
- input: []
  output: []
Aturan coding:
WAJIB MENYERTAKAN ALGORITHMA DAN PSEUDOCODE
Dilarang menggunakan built-in function:
- .map()
- .filter()
- .reduce()
- .reverse()
- .split()
- .join()
*/

/*
ALGORITMA

1. Buat variabel string dengan nama 'reverse'
2. Buat variabel dengan nama 'hasil' berbentuk Array
3. Menerima data berupa array dengan nama 'arr'
4. Looping 'arr' dari arr[pertama] sampai arr[terakhir]
  a.Cek arr[sekarang]
    a.1 Jika genap, maka lakukan looping isi elemen arr[sekarang] dari kanan kekiri
       masukan setiap elemennya kedalam 'reverse', setelah looping selesai push hasil 'reverse'
       ke dalam array 'hasil'
    a.2 Selain itu, push arr[sekarang] kedalam array 'hasil'
*/

function reverseEven (arr) {
  // Code disini
  var reverse = ''
  var hasil = []

  for (var i = 0; i < arr.length; i++) {
    reverse = ''
    if (i%2 === 0) {
      for (var j = arr[i].length - 1; j >= 0; j--) {
        reverse += arr[i][j]
      }
      hasil.push(reverse)
    } else {
      hasil.push(arr[i])
    }
  }

  return hasil
}

console.log(reverseEven(['clinkz', 'jahrakal', 'kael']));
// [ 'zknilc', 'jahrakal', 'leak' ]

console.log(reverseEven(['moonfang', 'nightshade', 'lightbringer', 'strygwyr']));
// [ 'gnafnoom', 'nightshade', 'regnirbthgil', 'strygwyr' ]

console.log(reverseEven([]));
// []
