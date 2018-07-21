function changeVocals (str) {
  //code di sini
  var splitted = str.split('')
  var alphabet = 'bjvfpBJVFP'
  var vocal = 'aiueoAIUEO'
  var hasil = []

  for (var i = 0; i < splitted.length; i++) {
    for (var j = 0; j < vocal.length; j++) {
      if (splitted[i] === vocal[j]) {
        splitted[i] = alphabet[j]
      }
    }
    hasil.push(splitted[i])
  }
  return hasil
}

function reverseWord (str) {
  //code di sini
  var reverse = []

  for (var i = str.length - 1; i >= 0; i--) {
    reverse.push(str[i])
  }

  return reverse
}

function setLowerUpperCase (str) {
  //code di sini
  var hasil = ''

  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      hasil += str[i].toLowerCase()
    } else if (str[i] !== str[i].toUpperCase()) {
      hasil += str[i].toUpperCase()
    }
  }

  return hasil
}

function removeSpaces (str) {
  //code di sini
  var hasil = ''

  for (var i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      hasil += str[i]
    }
  }

  return hasil
}

function passwordGenerator (name) {
  //code di sini
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  } else {
      var ubahVocal = changeVocals(name)
      var balikHuruf = reverseWord(ubahVocal)
      var setUpperCase = setLowerUpperCase(balikHuruf)
      var hapusSpasi = removeSpaces(setUpperCase)

      return hapusSpasi
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
