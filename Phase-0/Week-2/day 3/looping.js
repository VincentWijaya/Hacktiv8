//1. Melakukan Looping Menggunakan While
var i = 0;

console.log('LOOPING PERTAMA');
while(i < 20){
  i += 2;
  console.log(i + ' - I love coding');
}

console.log('LOOPING KEDUA');
while(i > 1){
  console.log(i + ' - I love coding');
  i-= 2;
}
console.log('\n');

//2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA');
for(b=1; b<=20; b++){
  console.log(b +' - '+ 'I love coding');
}

console.log('LOOPING KEDUA');
for(c=20; c>=1; c--){
  console.log(c +' - '+ 'I will become fullstack developer');
}
console.log('\n');

//3. Angka Ganjil dan Genap

//GANJIL-GENAP
for(d=1; d<=100; d++){
  if(d%2 ==0){
    console.log('Genap');
  } else{
    console.log('Ganjil');
  }
}
console.log('\n');

// +2 kelipatan 3
console.log('KELIPATAN 3');
for(e=1; e<=100; e+=2){
  if(e%3 == 0){
    console.log(e + ' KELIPATAN 3');
  } else{
    console.log('');
  }
}
console.log('-------------');
console.log('\n');

// +5 kelipatan 6
console.log('KELIPATAN 6');
for(f=1; f<=100; f+=5){
  if(f%6 == 0){
    console.log(f + ' KELIPATAN 6');
  } else{
    console.log('');
  }
}
console.log('-------------');
console.log('\n');

//+9 kelipatan 10
console.log('KELIPATAN 10');
for(g=1; g<=100; g+=9){
  if(g%10 == 0){
    console.log(g + ' KELIPATAN 10');
  } else{
    console.log('');
  }
}
