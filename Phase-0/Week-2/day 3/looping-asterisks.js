//1. Menyusun Barisan Bintang

function barisBintang(rows1){
  for(i=0 ; i < rows1; i++){
    console.log('*');
  }
}

barisBintang(3);
console.log('---------------');

//2. Menyusun Barisan Bintang Dengan Nested Looping
function nestedLoop(rows2){
  for (var i = 0; i < rows2; i++) {
    var star = '';
    for (var j = 0; j < rows2; j++) {
      star = star + '*';
    }
    console.log(star);
  }
}

nestedLoop(4)
console.log('---------------');

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
function segitiga(rows3){
  for (var i = 0; i < rows3; i++) {
    var star = '*';
    for (var j = 0; j < i; j++) {
      star = star + '*';
    }
    console.log(star);
  }
}

segitiga(5);
