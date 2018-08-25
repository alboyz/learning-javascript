const deretAngka =(n) => {
  let hasilAngkaDeret = ''
  for (var i = 1; i <= n; i++) {
    if ((i%3===0) && (i%5===0) ) {
      hasilAngkaDeret += 'NIOMIC'
    } else if (i%3===0) {
      hasilAngkaDeret += 'NIO '
    } else if (i%5===0) {
      hasilAngkaDeret +='MIC'
    }else {
      hasilAngkaDeret += i +' '
    }
  }
  return hasilAngkaDeret
}
console.log(deretAngka (10));
console.log(deretAngka (20));
console.log(deretAngka (30));
