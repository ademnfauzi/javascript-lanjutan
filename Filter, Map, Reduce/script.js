// const angka = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// filter
// mencari angka >= 3
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//    if (angka[i] >= 3) {
//       newAngka.push(angka[i]);
//    }
// }
// console.log(newAngka);

// const newAngka = angka.filter(function (a) {
//    return a >= 3;
// });
// const newAngka = angka.filter((a) => a >= 3);
// console.log(newAngka);

// map
// const newAngka = angka.map((a) => a * 2);
// console.log(angka);
// console.log(newAngka);

// reduce
// const newAngka = angka.reduce(
//    (accumulator, currentValue) => accumulator + currentValue, 6
// //    default 6, angka pertama
// );
// console.log(newAngka);

// method chaining
// const hasil = angka
//    .filter((a) => a > 5)
//    .map((a) => a * 3)
//    .reduce((acc, cur) => acc + cur, 0);
// console.log(hasil);

// ambil semua element video
const videos = Array.from(document.querySelectorAll("[data-duraction]"));
// console.log(videos);
// pilih hanya javascript
let js = videos
   .filter((video) => video.textContent.includes("Javascript"))
   // ambil durasi masing - masing video
   //    data set untuk mengambil value pada suatu attribute dalam data
   .map((item) => item.dataset.duraction)

   // ubah durasi menjadi int/float lalu ubah menit menjadi detik
   .map((waktu) => {
      //    15.01 => [10, 01] split
      const parts = waktu.split(":").map((part) => parseFloat(part));
      return parts[0] * 60 + parts[1];
   })

   // jumlahkan semua detiknya
   .reduce((total, detik) => total + detik, 0);
// ubah formatnya menjadi normal (jam, menit, detik)
const jam = Math.floor(js / 3600);
js = js - jam * 3600;
const menit = Math.floor(js / 60);
const detik = js - menit * 60;
// simpan di dom
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

const jmlhVideo = videos.filter((video) =>
   video.textContent.includes("Javascript")
).length;
console.log(jmlhVideo);

const pSumVideos = document.querySelector(".jumlah-video");
pSumVideos.textContent = `${jmlhVideo} Video`;
