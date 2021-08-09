// const nama = "ademnfauzi";
// const umur = 20;
// console.log(`Halo nama saya ${nama}, umur saya ${umur}`);
// console.log("Halo nama saya " + nama + " umur saya" + umur);

// console.log(`${2 + 3}`);
// console.log(`${alert("halo")}`);

// const x = 10;
// console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

// const mhs = {
//    nama: "ademnfauzi",
//    umur: 20,
//    npm: "183112700650075",
//    email: "ademnfauzi76@gmail.com",
// };
// const el = `<div class="mhs">
//    <h2>${mhs.nama}</h2>
//    <span>${mhs.npm}</span>
// </div>`;
// console.log(el);

// const mhs = [
//    {
//       nama: "ademnfauzi",
//       email: "ademnfauzi76@gmail.com",
//    },
//    {
//       nama: "tulisanPelajar",
//       email: "tulisanpelajar07@gmail.com",
//    },
//    {
//       nama: "ademnfauzi2",
//       email: "ademnfauzi762@gmail.com",
//    },
// ];
// const el = `<div class="mhs">
//    ${mhs
//       .map(
//          (m) => `
//       <ul>
//          <li>${m.nama}</li>
//          <li>${m.email}</li>
//       </ul>
//    `
//       )
//       .join("")}
// </div>`;

// const lagu = {
//    judul: "Tetap Dalam Jiwa",
//    penyanyi: "Isyana Sarasvati",
//    feat: "Rayi Putra",
// };

// const el = `
// <ul>
//    <li>${lagu.judul}</li>
//    <li>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
// </ul>
// `;

// const mhs = {
//    nama: "ademnfauzi",
//    semester: 5,
//    matkul: [
//       "Rekayasa Web",
//       "Analisis dan Perancangan Sistem Informasi",
//       "Pemograman Sistem Interaktif",
//       "Perancangan Sistem Berorientasi Objek",
//    ],
// };
// function cetakMataKuliah(matkul) {
//    return `
//       <ol>
//          ${matkul
//             .map(
//                (mk) => `<li>
//             ${mk}
//          </li>`
//             )
//             .join("")}
//       </ol>
//    `;
// }

// const el = `<div class="mhs">
//    <span class="semester">${mhs.nama}</span>
//    <h4>Mata Kuliah : </h4>
//    ${cetakMataKuliah(mhs.matkul)}
// </div>`;
// document.body.innerHTML = el;
// const nama = "ademnfauzi";
// const umur = 20;

// function coba(strings, ...values) {
//    // return values;
//    // let result = "";
//    // strings.forEach((str, i) => {
//    //    result += `${str}${values[i] || ""}`;
//    // });
//    // return result;

//    return strings.reduce(
//       (result, str, i) => `${result}${str}${values[i] || ""}`
//    );
// }

// const str = coba`Halo nama saya ${nama}, umur ${umur} tahun`;
// console.log(str);

const nama = "ademnfauzi";
const umur = 20;
const email = "ademnfauzi76";

function higlight(strings, ...values) {
   return strings.reduce(
      (result, str, i) =>
         `${result}${str}<span class="hl">${values[i] || ""}</span>`,
      ""
   );
}

const str = higlight`Halo nama saya ${nama}, umur ${umur} tahun, email saya adalah ${email}`;
console.log(str);
document.body.innerHTML = str;
