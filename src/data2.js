
export const  average = (rating) =>{
   let fs = (rating*5)/100
   return fs;
}

export const createElements = (classSection, elementTitle, array, divId) =>{
   let elementSection = document.querySelector(classSection);
   let title = document.createElement("h2");
   title.innerHTML = elementTitle;
   elementSection.insertBefore(title, elementSection.firstChild);
   
   for(let element of array){
      let card = document.createElement("figure")
      let elementImg = document.createElement("img");
      elementImg.setAttribute("src", element.img);
      let elementName = document.createElement("figcaption");
      elementName.innerHTML = element.name;
      card.appendChild(elementImg); 
      card.appendChild(elementName)

      let elementList = document.getElementById(divId);
      elementList.appendChild(card)
   }
}
