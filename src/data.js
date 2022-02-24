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

//Button srollTop 
//Show button
export function backToTop(){
  // window.scrollTo(0,0);
  window.scrollTo({
  top: 0,
  left: 0,
  behavior: "smooth"
    })
}
  
//hide button
export function hideBtn(){
  
  if(window.pageYOffset > 900){
    document.getElementById("scrollTop").classList.remove("hidden");
  }else{
    document.getElementById("scrollTop").classList.add("hidden")
  }
}
  