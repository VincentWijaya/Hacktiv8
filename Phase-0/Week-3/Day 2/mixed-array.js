//contoh input
//["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
//contoh output
//["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]

function dataHandling2(input) {
  input.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
  input.splice(4, 1, 'Pria', 'SMA Internasional Metro');
  console.log(input);

  var tgl = input[3].split('/');
  var bulan = tgl[1];
  var bulanBaru = '';
  switch (bulan) {
    case '01':
      bulanBaru = 'Januari';
      break;
    case '02':
      bulanBaru = 'Februari';
      break;
    case '03':
      bulanBaru = 'Maret';
      break;
    case '04':
      bulanBaru = 'April';
      break;
    case '05':
      bulanBaru = 'Mei';
      break;
    case '06':
      bulanBaru = 'Juni';
      break;
    case '07':
      bulanBaru = 'Juli';
      break;
    case '08':
      bulanBaru = 'Agustus';
      break;
    case '09':
      bulanBaru = 'September';
      break;
    case '10':
      bulanBaru = 'Oktober';
      break;
    case '11':
      bulanBaru = 'November';
      break;
    case '12':
      bulanBaru = 'Desember';
      break;
    default:
      bulanBaru = 'Periksa kembali bulan yang dimasukkan!';
      break;
  }
  console.log(bulanBaru);

  var sortTgl = tgl.sort(function(a, b){return b-a});
  console.log(sortTgl);

  var joinTgl = input[3].split('/').join('-');
  console.log(joinTgl);

  var nama = input[1].slice(0, 14);
  return nama;
}

console.log(dataHandling2(["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]));
