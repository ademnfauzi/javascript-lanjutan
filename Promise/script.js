// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//    if (xhr.status === 200) {
//       if (xhr.readyState === 4) {
//          console.log(JSON.parse(xhr.response));
//       }
//    } else {
//       console.log(xhr.responseText);
//    }
// };
// xhr.open("get", "http://www.omdbapi.com/?apikey=b647c704&s=Avengers");
// xhr.send();

// fetch("http://www.omdbapi.com/?apikey=b647c704&s=avengers")
//    .then((response) => response.json())
//    .then((response) => console.log(response));

// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//    if (ditepati) {
//       resolve("Janji telah ditepati");
//    } else {
//       reject("Ingkar janji");
//    }
// });

// janji1
//    .then((response) => console.log("OK : " + response))
//    .catch((response) => console.log("NOT OK :" + response));

// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//    if (ditepati) {
//       setTimeout(() => {
//          resolve("Ditepati setelah beberapa waktu!");
//       }, 2000);
//    } else {
//       setTimeout(() => {
//          reject("Tidak Ditepati setelah beberapa waktu!");
//       }, 2000);
//    }
// });
// console.log("mulai");
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//    .finally(() => console.log("selesai menunggu"))
//    .then((response) => console.log("OK : " + response))
//    .catch((response) => console.log("NOT OK :" + response));
// console.log("selesai");

const film = new Promise((resolve) => {
   setTimeout(() => {
      resolve([
         {
            judul: "Avengers",
            Year: "2021",
         },
      ]);
   }, 2000);
});

const cuaca = new Promise((resolve) => {
   setTimeout(() => {
      resolve([
         {
            Kota: "Jakarta",
            Keterangan: "Cerah",
         },
      ]);
   }, 1000);
});
// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

Promise.all([film, cuaca])
   // .then((response) => console.log(response));
   .then((response) => {
      const [film, cuaca] = response;
      console.log(film);
      console.log(cuaca);
   });
