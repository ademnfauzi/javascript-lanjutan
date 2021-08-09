// const tampilNama = function (nama) {
//    return `Halo, ${nama}`;
// };
// console.log(tampilNama("ademnfauzi"));

// const tampilNama = (nama) => {
//    return `Halo, ${nama}`;
// };
// console.log("ademnfauzi76");

// const tampilNama = (nama, waktu) => {
//    return `Selamat ${waktu}, Halo ${nama}`;
// };
// console.log(tampilNama("ademnfauzi", "Malam"));

// const tampilNama = (nama) => `Halo, ${nama}`;
// console.log("ademnfauzi");

// const tampilNama = () => `Hello World`;
// console.log(tampilNama());

// let mahasiswa = ["ade", "muhammad", "nur", "fauzi"];
// let jumlahHuruf = mahasiswa.map(function (nama) {
//    return nama.length;
// });

// let jumlahHuruf = mahasiswa.map((nama) => nama.length);

// let jumlahHuruf = mahasiswa.map((nama) => ({
//    nama: nama,
//    jumlah: nama.length,
// }));
// console.table(jumlahHuruf);

// const Mahasiswa = function () {
//    this.nama = "Ademnfauzi";
//    this.umur = 20;
//    this.sayHello = function () {
//       console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun`);
//    };
// };

// const ade = new Mahasiswa();
// console.log(ade);

// const Mahasiswa = function () {
//    this.nama = "Ademnfauzi";
//    this.umur = 20;
//    this.sayHello = () => {
//       console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun`);
//    };
// };

// const ade = new Mahasiswa();

// const mhs1 = {
//    nama: "ademnfauzi",
//    umur: 20,
//    sayHello: () => {
//       console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun`);
//    },
// };

// const Mahasiswa = function () {
//    this.nama = "Ademnfauzi";
//    this.umur = 20;
//    this.sayHello = () => {
//       console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun`);
//    };

//    setInterval(() => {
//       console.log(this.umur--);
//    }, 1000);
// };

// const ade = new Mahasiswa();

const box = document.querySelector(".box");
box.addEventListener("click", function () {
   let satu = "size";
   let dua = "caption";
   if (this.classList.contains(satu)) {
      // satu = temp;
      // satu = dua;
      // dua = temp;
      [satu, dua] = [dua, satu];
   }
   // let that = this;
   // console.log(this);
   this.classList.toggle(satu);
   setTimeout(() => {
      // that.classList.toggle("caption");
      this.classList.toggle(dua);
   }, 600);
});
