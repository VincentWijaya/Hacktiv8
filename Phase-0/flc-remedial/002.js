/**
Multi Dimensional XO
====================
Implementasikan function `multiDimensionalXO` untuk membuat
array `size` x `size`. Array akan diisi dengan huruf 'x' atau huruf 'o'.
# Contoh I/O
- Input: 3
  Output: [ [ 'x', 'o', 'x' ], [ 'o', 'x', 'o' ], [ 'x', 'o', 'x' ] ]
Pastikan kamu mengisi selang-seling, lihatlah pattern dari output di test case!
# Kondisi khusus
- Jika `size` lebih kecil dari 1, tampilkan 'Invalid input'
*/

function multiDimensionalXO(size) {

  var newArr = [];
  var odanx = '';
  var counter = 0;
  var counterXO = 0;

  if (size < 1) {
    return "Invalid input"
  } else {
    for (var j = 0; j < size; j++) {
      newArr.push([])

      for (var k = 0; k < size; k++) {
        counter++

        if (counter % 2 === 0) {
          newArr[j].push('o')
        } else if (counter % 2 !== 0) {
          newArr[j].push('x')
        }
      }

    }
  }
  return newArr
}

console.log(multiDimensionalXO(3));
// [ [ 'x', 'o', 'x' ], [ 'o', 'x', 'o' ], [ 'x', 'o', 'x' ] ]

console.log(multiDimensionalXO(5));
// /*
// [ [ 'x', 'o', 'x', 'o', 'x' ],
//   [ 'o', 'x', 'o', 'x', 'o' ],
//   [ 'x', 'o', 'x', 'o', 'x' ],
//   [ 'o', 'x', 'o', 'x', 'o' ],
//   [ 'x', 'o', 'x', 'o', 'x' ] ]
// */

// console.log(multiDimensionalXO(6));
// /*
// [ [ 'x', 'o', 'x', 'o', 'x', 'o' ],
//   [ 'x', 'o', 'x', 'o', 'x', 'o' ],
//   [ 'x', 'o', 'x', 'o', 'x', 'o' ],
//   [ 'x', 'o', 'x', 'o', 'x', 'o' ],
//   [ 'x', 'o', 'x', 'o', 'x', 'o' ],
//   [ 'x', 'o', 'x', 'o', 'x', 'o' ] ]
// */

// console.log(multiDimensionalXO(0));
// // Invalid input
