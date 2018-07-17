/*
==================================
Array Mastery: Fish Filter
==================================
[INSTRUKSI]
Fish Filter merupakan fungsi untuk menyaring data kumpulan spesies laut dan akan mengembalikan spesies
yang berisi kumpulan ikan dalam bentuk string
[CONTOH]
input: ['ikan indosiar', 'gurita', 'cumi-cumi', 'ikan bandeng']
output: ikan indosiar, dan ikan bandeng
[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .splice, .slice, .filter, dan .reduce!
*/

function fishFilter(fishes) {
  // Code here
  var hasil = ''
  var ikan = 'ik'
  var temp = []

  for (var i = 0; i < fishes.length; i++) {
    if (fishes[i][0] === ikan[0] && fishes[i][1] === ikan[1] ) {
      temp.push(fishes[i])
    }
  }

  if (temp !== []) {
    for (var j = 0; j <= temp.length; j++) {
      if (j < temp.length - 1) {
        hasil += temp[j] + ', '
      } else if (j === temp.length - 1) {
        hasil += 'dan ' + temp[j]
      }
    }
  } else {
    return 'tidak ada data'
  }

  return hasil
}

// TEST CASES
console.log(fishFilter(['ikan indosiar', 'gurita', 'cumi-cumi', 'ikan bandeng'])); // ikan indosiar, dan ikan bandeng
console.log(fishFilter(['gurita', 'ikan kerapu', 'ikan hiu'])); // ikan kerapu, dan Ikan hiu
console.log(fishFilter(['bintang laut', 'spongebob', 'patrick', 'ikan paus', 'ikan hiu', 'ikan tongkol'])); // ikan paus, ikan hiu, dan ikan tongkol
console.log(fishFilter(['gurita', 'udang'])); // tidak ada data
