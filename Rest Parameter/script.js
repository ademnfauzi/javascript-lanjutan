// function myFunc(a, b, ...myArgs) {
//    //    return myArgs;
//    //    return arguments;
//    //    return Array.from(arguments);
// }
// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//    //    let total = 0;
//    //    for (const a of angka) {
//    //       total += a;
//    //    }
//    //    return total;
//    return angka.reduce((a, b) => a + b);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));

// const kel1 = ["ademnfauzi", "ade", "muhammad", "nur", "fauzi"];
// const [ketua, wakil, ...anggota] = kel1;
// console.log(ketua);
// console.log(wakil);
// console.log(anggota);

// const team = {
//    pm: "ademnfauzi",
//    frontEnd: "ade",
//    backEnd: "fauzi",
// };
// const { pm, ...myTeam } = team;
// console.log(pm);

function filterby(type, ...values) {
   return values.filter((v) => typeof v === type);
}
console.log(filterby("boolean", 1, 2, 3, "ademnfauzi", false));
