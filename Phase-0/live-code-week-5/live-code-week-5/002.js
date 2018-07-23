/**
CSV to Object
==============
Implementasikan function `csvToObject` untuk merubah string yang
diberikan menjadi sebuah object baru.
`csvToObject` menerima 2 parameter yaitu `keys` dan `values`
yang merupakan sebuah CSV (Comma Separated Values)
Keys & values di dalam object baru nantinya akan diambil dari kedua
parameter yang diberikan.
Contoh:
- Input: 'name,age', 'Aang,112'
  Output: { name: 'Aang', age: '112' }
- Input: 'title,description,content', 'Foobar,Foo and Bar,Foobar content'
  Output: { title: 'Foobar', description: 'Foo and Bar', content: 'Foobar Content' }
- Input: '', ''
  Output: { }
*/

function csvToObject (keys, values) {
  // write your code here
  if (keys !== '' || values !== '') {
    var kunci = keys.split(',')
    var isi = values.split(',')
    var hasil = {

    }

    for (var i = 0; i < kunci.length; i++) {

      hasil[kunci[i]]
      for (var j = 0; j < isi.length; j++) {
        if (i === j) {
          hasil[kunci[i]] = isi[j]
        }
      }

    }

    return hasil
  }
  return {}
}

console.log(csvToObject('name,phoneNumber', 'Dimitri,+666123654'));
// { name: 'Dimitri', phoneNumber: '+666123654' }

console.log(csvToObject('firstName,lastName,nationality', 'Sergei,Dragunov,Russia'));
// { firstName: 'Sergei', lastName: 'Dragunov', nationality: 'Russia' }

console.log(csvToObject('', ''));
// { }
