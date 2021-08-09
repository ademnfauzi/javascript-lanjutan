const perkenalan = ["halo", "nama", "saya", "ademnfauzi"];
// const salam = perkenalan[0];
// console.log(salam);
// const [salam, satu, dua, nama] = perkenalan;
// const [salam, , , nama] = perkenalan;
// console.log(salam);
// console.log(satu);
// console.log(dua);
// console.log(nama);

// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// function coba() {
//    return [1, 2];
// }
// const [a, b] = coba();
// console.log(a);
// console.log(b);

// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// const mhs = {
//    nama: "ademnfauzi",
//    umur: 20,
// };
// const { nama, umur } = mhs;
// console.log(nama);
// console.log(umur);

// ({ nama, umur } = {
//    nama: "ademnfauzi",
//    umur: 20,
// });
// console.log(nama);
// console.log(umur);

// const mhs = {
//    nama: "ademnfauzi",
//    umur: 20,
// };
// const { nama: namaBaru, umur } = mhs;
// console.log(namaBaru);
// console.log(umur);

// const mhs = {
//    nama: "ademnfauzi",
//    umur: 20,
//    // email: "baru",
// };
// const { nama: namaBaru, umur, email = "ademnfauzi76@gmail.com" } = mhs;
// console.log(namaBaru);
// console.log(umur);
// console.log(email);

// const mhs = {
//    nama: "ademnfauzi",
//    umur: 20,
//    // email: "baru",
// };
// const { nama: namaBaru, umur, email: e = "ademnfauzi76@gmail.com" } = mhs;
// console.log(namaBaru);
// console.log(umur);
// console.log(e);

// const mhs = {
//    nama: "ademnfauzi",
//    umur: 20,
//    // email: "baru",
// };
// const { nama, ...values } = mhs;
// console.log(nama);
// console.log(values);

const mhs = {
   id: 123,
   nama: "ademnfauzi",
   umur: 20,
   // email: "baru",
};

function getId({ id }) {
   return id;
}

console.log(getId(mhs));
