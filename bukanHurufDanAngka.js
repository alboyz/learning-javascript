const ambilHurufDanAngka = (value) => {
  // \W digunakan untuk mengambil bukan semua karakter
  let ambilData = value.match(/\W/g)
  console.log("ambil huruf dan angka"+" "+(ambilData));
}

const ambilangka = (value) => {
  //\D digunakan untuk ambil bukan angka
  let ambilData = value.match(/\D/g)
  console.log("ambil angka "+" "+(ambilData));
}

const ambilSpasi =(value)=> {
  //\s digunakan untuk mengambil bukan spasi
  let ambilData =value.match(/\S/g)
  console.log("ambil spasi"+" "+(ambilData));
//  console.log("banyaknya spasi"+" "+(ambilData.length));
}

ambilHurufDanAngka("Hari Ini Tanggal 6")
ambilangka("Hari Ini Tanggal 6")
ambilSpasi("Hari Ini Tanggal 6")
