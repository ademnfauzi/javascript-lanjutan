// 1. object literal

// let mahasiswa = {
//   nama: "Ade Muhammad Nur Fauzi",
//   energy: 100,
//   makan: function (porsi) {
//     this.energy = this.energy + porsi;
//     console.log(`Halo ${this.nama}, Selamat makan `);
//   },
// };

// let mahasiswa2 = {
//   nama: "Asus",
//   energy: 100,
//   makan: function (porsi) {
//     this.energy = this.energy + porsi;
//     console.log(`Halo ${this.nama}, Selamat makan `);
//   },
// };

// 2. object Declaration
// function mahasiswa(nama, energy) {
//   let mahasiswa = {};
//   mahasiswa.nama2 = nama;
//   mahasiswa.energy2 = energy;
//   mahasiswa.makan = function (porsi) {
//     this.energy2 += porsi;
//     console.log(`Hello ${this.nama2}, Selamat makan`);
//   };

//   mahasiswa.main = function (jam) {
//     this.energy2 -= jam;
//     console.log(`Hello ${this.nama2}, Selamat Main`);
//   };

//   return mahasiswa;
// }

// let Ade = mahasiswa("Ade Muhammad Nur Fauzi", 100);
// let Asus = mahasiswa("Asus", 100);

// 3. construction function
// keyword new
// function mahasiswa(nama, energy) {
//   this.nama2 = nama;
//   this.energy2 = energy;
//   this.makan = function (porsi) {
//     this.energy2 += porsi;
//     console.log(`Hello ${this.nama2}, Selamat makan`);
//   };

//   this.main = function (jam) {
//     this.energy2 -= jam;
//     console.log(`Hello ${this.nama2}, Selamat Main`);
//   };
// }

// let Ade = new mahasiswa("Ade Muhammad Nur Fauzi", 100);
