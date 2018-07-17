function persegi(num) {
  for (var i = 0; i < num; i++) {
    var result = ''
    for (var j = 0; j < num; j++) {
      if (i === 0 || i === num-1) {
        result += '* '
      } else if (j === 0 || j === num-1) {
        result += '* '
      } else {
        result += '  '
      }
    }
    console.log(result);
  }
}

persegi(10)
