const deretAngka = (n)=> {
  let hasilAngkaDeret =''
  //var i=1
  for (var i=1; i <= n; i++) {
    if (i%3===0) {
      hasilAngkaDeret+=' NIO '
    } else if (i%5===0) {
        hasilAngkaDeret+=' MIC'
      } else if (i%3&&i%5===0) {
        hasilAngkaDeret += 'NIOMIC '
      }
      else {
        hasilAngkaDeret += i +' '
      }
  }
  return hasilAngkaDeret
}

console.log(deretAngka (15));
console.log(typeof (n));
