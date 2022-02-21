const btnTop =document.querySelector(".scrollTopBtn");


//Create an array with different characteristics
export const filmPosters = (movies) => {
  let movie = [movies.poster, movies.title, movies.description, movies.release_date, movies.rt_score, movies.id];
  return movie;
};


//Cut the description up to 400 characters
export const cutDescription = (description) => {
  let descriptionLength = description.length;
  if (descriptionLength > 400){
    return description.slice(0, 400) + "..."
  } else{
    return description
  }
};

//Create a link for each movie
export const createBtnLink = function (id){
  document.location.href = "./movies.html?id=" + id;
}

export function backToTop(){
  // window.scrollTo(0,0);
  window.scrollTo({
  top: 0,
  left: 0,
  behavior: "smooth"
    })
  }
  
export function hideBtn(){
  if(window.pageYOffset > 900){
    btnTop.classList.remove("hidden");
  }else{
    btnTop.classList.add("hidden")
  }
  }
  
  // Search in the array
// export const searhInTheArray = function (array, inputSearch){
//   array.filter(inputSearch => inputSearch === array[2]);
// }
