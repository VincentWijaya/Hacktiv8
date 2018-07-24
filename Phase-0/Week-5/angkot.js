function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var hasil = []
  var naik = 0
  var turun = 0

  if (arrPenumpang.length === 0) return '[]'
  for (var i = 0; i < arrPenumpang.length; i++) {
    var temp = {
                  penumpang: arrPenumpang[i][0],
                  naikDari: arrPenumpang[i][1],
                  tujuan: arrPenumpang[i][2],
                  bayar: 0
                }
    for (var j = 0; j < rute.length; j++) {
      if (arrPenumpang[i][1] === rute[j]) {
        naik = j
      } else if (arrPenumpang[i][2] === rute[j]) {
        turun = j
      }
    }
    temp.bayar = (turun - naik) * 2000
    hasil.push(temp)
  }
  return hasil
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
