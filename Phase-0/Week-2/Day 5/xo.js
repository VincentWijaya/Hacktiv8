function xo(str) {
  //-ALAGUE-
  // var splitO = str.split('o');
  // var splitX = str.split('x');
  //
  // if (splitO.length-1 !== splitX.length-1) {
  //   return false;
  // } else {
  //   return true;
  // }

  //Yang bener
  var splitO = 0;
  var splitX = 0;

  for (i = 0; i < str.length; i++) {
    if (str[i] === 'x') {
      splitO += 1;
    } else if (str[i] === 'o') {
      splitX += 1;
    } else {
      return 'Ngawur lu!';
    }
  }

  if (splitO === splitX) {
    return true;
  } else {
    return false;
  }

}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
