function shoppingTime(memberId, money) {
  // you can only write your code here!
  var item = [['Sepatu Stacattu', 1500000], ['Baju Zoro', 500000], ['Baju H&N', 250000], ['Sweater Uniklooh', 175000], ['Casing Handphone', 50000]]
  var hasil = {
    memberId: '',
    money: money,
    listPurchased: '',
    changeMoney: 0
  }
  var uangSementara = money
  var itemSementara = []

  if (memberId === '' || memberId === undefined) {
    console.log('Mohon maaf, toko X hanya berlaku untuk member saja')
  } else if (memberId !== '' && money < 50000) {
    console.log('Mohon maaf, uang tidak cukup');
  } else {
    for (var i = 0; i < item.length; i++) {
      if (uangSementara - item[i][1] > 0) {
        uangSementara = uangSementara - item[i][1]
        itemSementara.push(item[i][0])
      } else if (uangSementara - item[i][1] === 0) {
        uangSementara = 0
        itemSementara.push(item[i][0])
      }
    }

    hasil.memberId = memberId
    hasil.listPurchased = itemSementara
    hasil.changeMoney = uangSementara
    console.log(hasil);
  }
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
