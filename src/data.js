const btnTop =document.querySelector(".scrollTopBtn");

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

//Function to create a link for each movie
export let createBtnLink = function (id){
  document.location.href = "./movies.html?id=" + id;
}

//Function to filter titles in finder
export const search = () =>{
  const searchbox = document.getElementById("searchBar").value.toUpperCase();
  
  const cards = document.querySelectorAll(".globalCard");
  const titles = document.querySelectorAll(".movieTitles");

  for (let i=0; i < titles.length; i++ ){
    let match = cards[i].querySelectorAll(".movieTitles")[0];
    if(match){
      let textValue = match.textContent || match.innerHTML
       if(textValue.toUpperCase().indexOf(searchbox) > -1){
         cards[i].stiyle.display = "";
       }else{
         cards[i].stiyle.display = "none";
       }
    }
  }
}



//Funcion de flecha scroll(regresa al inicio)
// const d =document,
// w = window;

// export function scrollTopBtn(btn){
//    const $scrollBtn = d.querySelector(btn);

//    w.addEventListener("scroll",() =>{
//    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
   
//    if(scrollTop > 1000){
//     $scrollBtn.classList.remove("hidden");
//    }else{
//     $scrollBtn.classList.add("hidden");
//    }
//   });
//    d.addEventListener("click",(e) =>{
//      if(e.target.matches(btn)){
//        w.scrollTo({
//          behavior:"smooth",
//          top:0,
//        });
//      }
//     })
// }