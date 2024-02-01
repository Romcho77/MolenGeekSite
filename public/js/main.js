import DATA from "./../JSON/molengeek.json" assert{type:"json"};

let bottone = document.querySelector("#bottone1")
let section1 = document.querySelector(".section1")
let section2 = document.querySelector(".section2")
let buttonReturn = document.querySelector(".buttonReturn")

// ! Button to Top


// When the user scrolls down 20px from the top of the document, show the button


let goTop = document.querySelector("button")
goTop.addEventListener("click",()=>{
    document.documentElement.scrollTop = 0;
})


// ! Button to Top




//? buttons to change section 1 and 2 
bottone.addEventListener('click',()=>{
    section1.style.display = "none"
    section2.style.display = "block"
    buttonReturn.style.display = "block"

})

buttonReturn.addEventListener("click",()=>{
    section1.style.display = "block"
    section2.style.display = "none"
    buttonReturn.style.display = "none"
})

    

//? buttons to change section 1 and 2 


let seanceInfo = DATA.formations.seancesInfos
let section4 = document.querySelector(".section4")

let div
let p
let span

for (const key of seanceInfo) {
    div = document.createElement("div")
    div.setAttribute("class","event1 center")
    span = document.createElement("span")
    p = document.createElement("p")
    p.setAttribute("class","eventText center")
    span.setAttribute("class","eventDate center")
    p.innerText = key.nom
    span.innerText = key.date
    div.appendChild(span)
    div.appendChild(p)
    section4.appendChild(div)
        
    
}

let formulaire = DATA.molengeekInfo
let section6Right = document.querySelector(".sec6Right")
// for (const iterator in formulaire) {
//     // console.log(iterator);
//     console.log(Object.values(iterator).split(",", " "));
//     // console.log(iterator.valueOf(iterator));
// }

for (const info in formulaire) {
    console.log(formulaire[info]);
    p = document.createElement("p")
    p.innerText = formulaire[info]
    section6Right.appendChild(p)
  }



let slides = document.querySelectorAll(".slide")
let partenaires = DATA.partenaires
let counter = 0

for (const image in partenaires) {
    slides[counter].querySelector("img").src = partenaires[image].logo
    counter++
}




