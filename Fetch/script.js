// $(".search-button").on("click", function () {
//    $.ajax({
//       url:
//          "http://www.omdbapi.com/?apikey=b647c704&s=" +
//          $(".input-keyword").val(),
//       success: (results) => {
//          // console.log(results);
//          const movies = results.Search;
//          let cards = "";
//          movies.forEach((m) => {
//             cards += showCards(m);
//          });
//          $(".movie-container").html(cards);

//          $(".modal-detail-button").on("click", function () {
//             // console.log($(this).data("imdbid"));
//             $.ajax({
//                url:
//                   "http://www.omdbapi.com/?apikey=b647c704&i=" +
//                   $(this).data("imdbid"),
//                success: (m) => {
//                   console.log(m);
//                   const movieDetail = showMovieDetail(m);

//                   $(".modal-body").html(movieDetail);
//                },
//             });
//          });
//       },
//       error: (e) => {
//          console.log(e.responseText);
//       },
//    });
// });
const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function () {
   const inputKeyword = document.querySelector(".input-keyword");
   fetch("http://www.omdbapi.com/?apikey=b647c704&s=" + inputKeyword.value)
      .then((response) => response.json())
      .then((response) => {
         const movies = response.Search;
         let cards = "";
         movies.forEach((m) => (cards += showCards(m)));
         const movieContainer = document.querySelector(".movie-container");
         movieContainer.innerHTML = cards;

         const modalDetailButton = document.querySelectorAll(
            ".modal-detail-button"
         );
         modalDetailButton.forEach((btn) => {
            btn.addEventListener("click", function () {
               // console.log(this);
               const imdbid = this.dataset.imdbid;
               // console.log(imdbid);
               fetch("http://www.omdbapi.com/?apikey=b647c704&i=" + imdbid)
                  .then((response) => response.json())
                  .then((m) => {
                     const movieDetail = showMovieDetail(m);
                     const modalBody = document.querySelector(".modal-body");
                     modalBody.innerHTML = movieDetail;
                  });
            });
         });
      });
});

function showCards(m) {
   return `<div class="col-md-4 my-5">
                        <div class="card">
                           <img src="${m.Poster}" class="card-img-top" />
                           <div class="card-body">
                              <h5 class="card-title">${m.Title}</h5>
                              <h6 class="card-subtitle mb-2 text-muted">
                                 ${m.Year}
                              </h6>
                              <a href="${m.imdbID}" class="btn btn-primary modal-detail-button" data-bs-toggle="modal"
                              data-bs-target="#movieDetailModel" data-imdbid="${m.imdbID}">Show Details</a>
                           </div>
                        </div>
                     </div>`;
}

function showMovieDetail(m) {
   return `<div class="container-fluid">
                                       <div class="row">
                                          <div class="col-md-3">
                                             <img src="${m.Poster}" class="img-fluid" alt="" srcset="" />
                                          </div>
                                          <div class="col-md">
                                             <ul class="list-group">
                                                <li class="list-group-item"><h4> ${m.Title}</h4></li>
                                                <li class="list-group-item">
                                                   <strong>Director :${m.Director} </strong>
                                                </li>
                                                <li class="list-group-item">
                                                   <strong>Actors : ${m.Actors}</strong>
                                                </li>
                                                <li class="list-group-item">Genre : ${m.Genre}</li>
                                                <li class="list-group-item">Ratings : ${m.imdbRating}</li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>`;
}
