// const mhs = ["ademnfauzi", "tulisanpelajar"];
// for (let i = 0; i < mhs.length; i++) {
//    console.log(mhs[i]);
// }

// mhs.forEach((m) => console.log(m));

// for (const m of mhs) {
//    console.log(m);
// }

// const nama = "ademnfauzi";
// for (const n of nama) {
//    console.log(n);
// }

// const mhs = ["ademnfauzi", "tulisanpelajar"];
// mhs.forEach((m, i) => {
//    console.log(`${m} adalah mahasiswa ke ${i + 1}`);
// });

// for (const [i, m] of mhs.entries()) {
//    console.log(`${m} adalah mahasiswa ke ${i + 1}`);
// }

// const liNama = document.querySelectorAll(".nama");
// console.log(liNama);

// liNama.forEach((n) => console.log(n.textContent));
// for (n of liNama) {
//    console.log(n.innerHTML);
// }

// function jumlahkanAngka() {
//    // console.log(arguments);
//    // return [1, 2, 3, 4, 5].reduce((a, i) => a + i);
//    let jumlah = 0;
//    // [1, 3, 4].forEach((a) => (jumlah += 0));
//    // return jumlah;
//    for (a of arguments) {
//       jumlah += a;
//    }
//    return jumlah;
// }
// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

const mhs = {
   nama: "ademnfauzi",
   umur: 20,
};
// for (m of mhs) {
//    // console.log(m); //error
// }
for (m in mhs) {
   console.log(m);
   console.log(mhs[m]);
}
