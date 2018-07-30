/**

How Many Gifts
==============

Anastasia meminta Sergei untuk membeli daftar oleh-oleh saat trip berikutnya, sekarang Sergei ingin tahu berapa jumlah oleh-oleh PALING BANYAK yang bisa dia beli.

Implementasikan function dibawah untuk membantu Sergei:

function howManyGifts(maxBudget, gifts)
  Parameter pertama adalah budget Sergei, yang kedua adalah sebuah Array yang berisi harga setiap oleh-oleh. Function ini harus mengembalikan nilai yang mewakili jumlah maksimum oleh-oleh yang Sergei dapat beli.


Contoh:
Maximum budget: 25000
Daftar harga oleh-oleh: [20000, 5000, 10000, 6000, 4000 ]
Maka akan mengembalikan 4 karena bisa membeli oleh-oleh dengan harga 5000, 10000, 6000, 4000

Asumsi:
- Semua angka akan memiliki nilai >= 0, dan array tidak akan pernah kosong.

RULE:
 WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE

*/
/*PSEUDOCODE
  SORT 'gifts' with nilai terkecil ke nilai terbesar
  STORE 'sort' with SORT RESULT VALUE
  STORE 'totalBarang' with 0
  STORE 'i' with 0

  FOR 'i' < panjang isi 'sort'
    IF 'maxBudget' >= 'sort[i]'
      SET 'maxBudget' = 'maxBudget' - 'sort[i]'
      SET 'totalBarang' = 'totalBarang' + 1
    SET 'i' = 'i' + 1

  RETURN TOTAL BARANG
*/

function howManyGifts(maxBudget, gifts){
  // Code here
  var sort = gifts.sort(function (a,b) {return a-b })
  var counter = 0

  for (var i = 0; i < sort.length; i++) {
    if (maxBudget >= sort[i]) {
      maxBudget -= sort[i]
      counter++
    }
  }
  return counter
}

console.log(howManyGifts(30000, [15000, 12000, 5000, 3000, 10000])); // 4
console.log(howManyGifts(10000, [2000, 2000, 3000, 1000, 2000, 10000])); // 5
console.log(howManyGifts(4000, [7500, 1500, 2000, 3000])); // 2
console.log(howManyGifts(50000, [25000, 25000, 10000, 15000])); // 3
console.log(howManyGifts(0, [10000, 3000])); // 0
