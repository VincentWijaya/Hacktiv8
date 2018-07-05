function xo(str) {
  var splitO = str.split('o');
  var splitX = str.split('x');

  if (splitO.length-1 !== splitX.length-1) {
    return false;
  } else {
    return true;
  }

}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
