function changeMe(arr) {
  // you can only write your code here!
  var hasil = {
    firstName: '',
    lastName: '',
    gender: '',
    age: ''
  }

  for (var i = 0; i < arr.length; i++) {
    hasil['firstName'] = arr[i][0]
  }
  console.log(hasil)
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
