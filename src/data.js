export const filmPosters = (movies) => {
  let movie = [movies.poster, movies.title, movies.description, movies.release_date, movies.rt_score, movies.id];
  return movie;
};

export const cutDescription = (description) => {
  let descriptionLength = description.length;
  if (descriptionLength > 400){
    return description.slice(0, 400) + "..."
  } else{
    return description
  }
};

//Funcion de flecha scroll(regresa al inicio)
const d=document,
w = window;

export function scrollTopBtn(btn){
  const $scrollBtn = d.querySelector(btn);

  w.addEventListener("scroll", e =>{
  let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
  if(scrollTop > 1000){
   $scrollBtn.classList.remove("hidden");
  }else{
   $scrollBtn.classList.add("hidden");
  }
 });
  d.addEventListener("click", e =>{
    if(e.target.matches(btn)){
      w.scrollTo({
        behavior:"smooth",
        top:0,
      });
    }
  })
}

//Function to create a link for each movie
export let createBtnLink = function (id){
  document.location.href = "./movies.html?id=" + id;
}