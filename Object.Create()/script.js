// object { prototype, method}
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

const methodMahasiswa = {
  makan: function (porsi) {
    this.energy2 += porsi;
    console.log(`Hello ${this.nama2}, Selamat makan`);
  },
  main: function (jam) {
    this.energy2 -= jam;
    console.log(`Hello ${this.nama2}, Selamat Main`);
  },

  tidur: function (jam) {
    this.energy2 += jam * 2;
    console.log(`Hello ${this.nama2}, Selamat Tidur`);
  },
};
function mahasiswa(nama, energy) {
  let mahasiswa = Object.create(methodMahasiswa);
  mahasiswa.nama2 = nama;
  mahasiswa.energy2 = energy;
  //   mahasiswa.makan = methodMahasiswa.makan;
  //   mahasiswa.main = methodMahasiswa.main;
  //   mahasiswa.tidur = methodMahasiswa.tidur;
  return mahasiswa;
}

let Ade = mahasiswa("Ade Muhammad Nur Fauzi", 100);
let Asus = mahasiswa("Asus", 100);

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
