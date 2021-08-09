// function kalkulasi(a, b) {
//    return [a + b, a * b, a - b, a / b];
// }
// console.log(kalkulasi(2, 3));
// console.log(kalkulasi(2, 3)[0]);
// console.log(kalkulasi(2, 3)[1]);

// const [jumlah, kali] = kalkulasi(2, 3);
// console.log(jumlah);
// console.log(kali);
// const [tambah, kali, kurang, bagi = "tidak ada"] = kalkulasi(5, 6);
// console.log(bagi);

// function kalkulasi(a, b) {
//    return {
//       tambah: a + b,
//       kurang: a - b,
//    };
// }
// const { kurang, tambah } = kalkulasi(9, 8);
// console.log(kurang);
// console.log(tambah);

const mhs1 = {
   nama: "ademnfauzi",
   umur: 20,
   nilai: {
      tugas: 80,
      uts: 90,
      uas: 81,
   },
};
function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
   return `Halo, nama saya ${nama}, saya berumur ${umur} tahun. Dan nilai UAS nya adalah : ${uas}`;
}
console.log(cetakMhs(mhs1));
