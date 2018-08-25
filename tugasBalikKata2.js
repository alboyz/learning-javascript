function balikKata(kata) {
  var newString =""
  for (var i =  kata.length-1; i>=0; i--) {
    newString += kata[i]
  }
  return newString
}
// testCase
console.log(balikKata("Niomic!"))
console.log(balikKata("JavaScript"))
console.log(balikKata("alohahola"))
console.log(balikKata("Jawa_Barat"))
