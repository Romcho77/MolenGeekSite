import DATA from "./../JSON/molengeek.json" assert{type:"json"};

let bottone1 = document.querySelector("#bottone1")
let bottone2 = document.querySelector("#bottone2")
let section1 = document.querySelector(".section1")
let section2 = document.querySelector(".section2")
let section3 = document.querySelector(".section33")
let buttonReturn1 = document.querySelector(".buttonReturn1")
let buttonReturn2 = document.querySelector(".buttonReturn2")



// ! Button to Top

let goTop = document.querySelector("button")
goTop.addEventListener("click",()=>{
    document.documentElement.scrollTop = 0;
})


// ! Button to Top

// ? section 1>2
bottone1.addEventListener('click',()=>{
    section1.style.display = "none"
    section2.style.display = "block"
    buttonReturn1.style.display = "block"

})

buttonReturn1.addEventListener("click",()=>{
    section1.style.display = "block"
    section2.style.display = "none"
    buttonReturn1.style.display = "none"
})

// ? section 1>3
bottone2.addEventListener('click',()=>{
    section1.style.display = "none"
    section3.style.display = "block"
    buttonReturn2.style.display = "block"

})

buttonReturn2.addEventListener("click",()=>{
    section1.style.display = "block"
     section3.style.display = "none"
    buttonReturn2.style.display = "none"
})


let formulaire = DATA.molengeekInfo
let section6Right = document.querySelector(".sec6Right")
// for (const iterator in formulaire) {
//     // console.log(iterator);
//     console.log(Object.values(iterator).split(",", " "));
//     // console.log(iterator.valueOf(iterator));
// }
let div
let p
let span
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
