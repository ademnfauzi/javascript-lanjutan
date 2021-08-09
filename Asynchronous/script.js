// // // function hello(nama) {
// // //    alert(`Halo, ${nama}`);
// // // }

// // function tampilkanPesan(callback) {
// //    const nama = prompt("Masukan nama:");
// //    callback(nama);
// // }

// // tampilkanPesan((nama) => {
// //    alert(`Halo, ${nama}`);
// // });

// const mhs = [
//    {
//       nama: "ademnfauzi",
//       npm: "183112700650075",
//       email: "ademnfauzi76@gmail.com",
//    },
//    {
//       nama: "tulisanpelajar",
//       npm: "18311270065001",
//       email: "tulisanpelajar76@gmail.com",
//    },
//    {
//       nama: "fauzi",
//       npm: "183112700650002",
//       email: "fauzi76@gmail.com",
//    },
// ];
// console.log("mulai");
// mhs.forEach((m) => {
//    for (let i = 0; i < 10000000; i++) {
//       let date = new Date();
//    }
//    console.log(m.nama);
// });
// console.log("selesai");
// function getDataMahasiswa(url, success, error) {
//    let xhr = new XMLHttpRequest();
//    xhr.onreadystatechange = function () {
//       // jika tersedia atau siap
//       if (xhr.readyState === 4) {
//          if (xhr.status === 200) {
//             success(xhr.response);
//          } else if (xhr.status === 404) {
//             error();
//          }
//       }
//    };

//    xhr.open("get", url);
//    xhr.send();
// }
// // function success(hasil) {
// //    console.log(hasil);
// // }
// // function error() {}
// // getDataMahasiswa("mahasiswa.json", success, error);
// console.log("mulai");
// getDataMahasiswa(
//    "mahasiswa.json",
//    (results) => {
//       // console.log(results);
//       const mhs = JSON.parse(results);
//       mhs.forEach((m) => console.log(m.nama));
//    },
//    () => {}
// );
// console.log("selesai");
console.log("mulai");
$.ajax({
   url: "mahasiswa.json",
   success: (mhs) => {
      mhs.forEach((m) => console.log(m.nama));
      console.log(mhs);
   },
   error: (e) => {
      console.log(e.responseText);
   },
});

console.log("selesai");
