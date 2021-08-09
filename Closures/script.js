// 2.1 Execution Context, hoisting, dan scope
// console.log(nama);
// var nama = "Ade";

// creation phase pada global context

// var nama = "Ade";
// var umur = 21;

// console.log(hello());
// function hello() {
//   return `Halo, nama saya ${nama}, saya berumur ${umur} tahun`;
// }

// var nama = "Ade";
// var username = "ademnfauzi";

// function cetak(username) {
//   var instagramURL = "https://instagram.com/";
//   return instagramURL + username;
// }

// console.log(cetak("asus"));

// function a() {
//   console.log("ini a");

//   function b() {
//     console.log("ini b");

//     function c() {
//       console.log("ini c");
//     }
//     c();
//   }
//   b();
// }
// a();

// function init() {
//    //  let nama = "ademnfauzi";
//    return function tampilNama(nama) {
//       console.log(nama);
//    };
// }
// let panggilNama = init();
// panggilNama("ademnfauzi");
// panggilNama("unas");

// function ucapkanSalam(waktu) {
//    return function (nama) {
//       console.log(`Halo ${nama}, Selamat ${waktu}`);
//    };
// }
// let SelamatPagi = ucapkanSalam("Pagi");
// let SelamatSiang = ucapkanSalam("Siang");
// let SelamatMalam = ucapkanSalam("Malam");

// // SelamatPagi("ademnfauzi");
// console.dir(SelamatPagi);

let add = (function () {
   let counter = 0;
   return function () {
      return ++counter;
   };
})();
counter = 100;
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
