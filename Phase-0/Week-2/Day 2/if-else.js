var nama = 'ADDD';
var peran = '';

if(nama !== '' && peran === '' ){
    console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!');
} else if(peran === 'Ksatria'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log('Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!');
} else if(peran === 'Tabib'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log('Halo tabib ' + nama + ', kamu akan membantu temanmu yang terluka.');
} else if(peran === 'Penyihir'){
    console.log('Selamat datang di Dunia Proxytia, ' + nama);
    console.log('Halo penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
} else{
    console.log('Nama harus diisi!');
}
