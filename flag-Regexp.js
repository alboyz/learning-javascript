const panggilRegexp = (value) => {
    let str = "abcdefghijklmnopqrstuvwxyz"

    //akan bernilai -1 karena yang dicari adalah K besar
    //K yang dicari tidak diemukan
    console.log(str.search(/K/));
    //akan bernilai 10 karena berada di indeks 10
    //meskipun yang dicari K besar, nilai K tetap akan diemukan karena sudah ditambahkan tanda flag "i"
    console.log(str.search(/K/i));
    //akan benilai 10 karena k kecil ada di indeks 10
    console.log(str.search(/k/));
}
panggilRegexp()
