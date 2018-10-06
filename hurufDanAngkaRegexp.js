const ambilHurufDanAngka = (value) => {
  // \w digunakan untuk mengambil semua karakter
  let ambilData = value.match(/\w/g)
  console.log("ambil huruf dan angka"+" "+(ambilData));
}

const ambilangka = (value) => {
  //\d digunakan untuk ambil angka
  let ambilData = value.match(/\d/g)
  console.log("ambil angka "+" "+(ambilData));
}

const ambilSpasi =(value)=> {
  //\s digunakan untuk mengambil spasi
  let ambilData =value.match(/\s/g)
  console.log("ambil spasi"+" "+(ambilData));
  console.log("banyaknya spasi"+" "+(ambilData.length));
}

ambilHurufDanAngka("Hari Ini Tanggal 6")
ambilangka("Hari Ini Tanggal 6")
ambilSpasi("Hari Ini Tanggal 6")
