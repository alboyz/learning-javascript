function balikKata(kata) {
  var output = [];
  while (kata.length) {
    output.push(kata.pop());
  }

  return output;
}
// // testCase
// console.log(balikKata("Niomic!"))
// console.log(balikKata("JavaScript"))
// console.log(balikKata("alohahola"))
// console.log(balikKata("Jawa_Barat"))
console.log(balikKata(['n','i','o','m','i','c','!']));
