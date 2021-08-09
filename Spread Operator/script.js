// const mhs = ["ademnfauzi", "tulisan", "pelajar"];
// const dosen = ["Ade", "Fauzi"];
// const orang = [...mhs, "Aji", ...dosen];
// const orang = mhs.concat(dosen);
// console.log(...mhs);
// console.log(...mhs[0]);
// console.log(orang);

// const mhs = ["ademnfauzi", "tulisan", "pelajar"];
// const mhs1 = mhs;
// mhs1[0] = "Fajarudin";
// console.log(mhs);
// console.log(mhs1);

// const mhs = ["ademnfauzi", "tulisan", "pelajar"];
// const mhs1 = [...mhs];
// mhs1[0] = "Fajarudin";
// console.log(mhs);
// console.log(mhs1);

// const liMhs = document.querySelectorAll("li");
// console.log(liMhs[0].textContent);
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//    mhs.push(liMhs[i].textContent);
// }
// console.log(liMhs);
// console.log(mhs);

// const mhs = [...liMhs].map((m) => m.textContent);
// console.log(mhs);

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
nama.innerHTML = huruf;
console.log(huruf);
