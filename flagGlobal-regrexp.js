const panggilRegexp = () => {
  let str = 'abcdefghijklmnopqrstuvwxyz-abcdefghijklmnopqrstuvwxyz'
  //d akan dicocokan dengan str dengan semua string
  console.log(str.match(/d/g));
}
panggilRegexp()
