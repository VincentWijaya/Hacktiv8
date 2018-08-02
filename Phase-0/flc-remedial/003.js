// Parsing Social Media
//
// Divisi marketing akan mencoba mengiklankan perusahaan mereka didalam social media,
// mereka memiliki beberapa iklan yang sudah disesuaikan dengan beberapa social media.
// Divisi marketing juga memiliki data calon customer yang menjadi target market mereka.
// Tetapi mereka kesulitan mengkelompokan calon customer berdasarkan rentang umur dan
// social media apa saja yang calon pelanggan miliki.

let data = [
  ['Nama', 'Umur', 'Asal', 'MediaSosial'],
  ['Tobias', 21, 'Jakarta', 'Twitter;Facebook'],
  ['Kevin', 18, 'Bandung', 'Instagram;LinkedIn;Facebook'],
  ['Syldie', 25, 'Malang', 'Google+;Instagram;Twitter'],
  ['Chandra', 31, 'Surabaya', 'Facebook;Instagram;Twitter'],
  ['Fuad', 24, 'Jakarta', 'Path;LinkedIn;Google+']
]

// buatlah function getMillenials yang menerima parameter berupa array dimana function
// ini akan mengembalikan array of object yang menampilkan calon customer yang berumur
// 20-29 tahun

function getMillenials(data) {
  // your code here
  var hasil = []

  for (var i = 0; i < data.length; i++) {
    var temp = {
      Nama: '',
      Umur: '',
      Asal: '',
      MediaSocial: ''
    }

    if (data[i][1] >= 20 && data[i][1] < 30) {
      var nama = data[i][0]
      var umur = data[i][1]
      var asal = data[i][2]
      var medsos = data[i][3].split(';')

      temp.Nama = nama
      temp.Umur = umur
      temp.Asal = asal
      temp.MediaSocial = medsos

      hasil.push(temp)
    }
  }

  return hasil
}


console.log(getMillenials(data));
	// [ { Nama: 'Tobias',
  //   Umur: 21,
  //   Asal: 'Jakarta',
  //   MediaSosial: [ 'Twitter', 'Facebook' ] },
  // { Nama: 'Syldie',
  //   Umur: 25,
  //   Asal: 'Malang',
  //   MediaSosial: [ 'Google+', 'Instagram', 'Twitter' ] },
  // { Nama: 'Fuad',
  //   Umur: 24,
  //   Asal: 'Jakarta',
  //   MediaSosial: [ 'Path', 'LinkedIn', 'Google+' ] } ]
