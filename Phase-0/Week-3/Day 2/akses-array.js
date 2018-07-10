//input "hello world!"
//output "!dlrow olleh"
function balikString(str) {
  var strBaru = '';

  for (i = str.length - 1; i >= 0; i--) {
    strBaru += str[i];
  }
  return strBaru;
}

console.log(balikString("hellow world!"));
