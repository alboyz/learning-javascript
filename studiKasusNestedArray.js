function panggilNestedArray (value) {
  for (var i = 0; i < value.length; i++) {
    console.log('id :', value[i][0])
    console.log('name :', value[i][1])
    console.log('company :', value[i][2])
    console.log('\n')
  }

}
var nestedArray = [
  [1,'Mark zuckerberg', 'Facebook'],
  [2, 'Elon Musk', 'Tesla'],
  [3, 'Bill Gate','Microsoft'],
  [4, 'Steve Job', 'Apple']
]

panggilNestedArray()
