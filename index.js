import DonutMaker from "./DonutMaker.js";

const donutMaker = new DonutMaker();
const donutdisplay = document.querySelector("#donutCountDisplay");

const donutClicker = document.querySelector("#donutMakerBtn");
donutClicker.addEventListener("click", () => {
  donutMaker.clickDonuts();
  donutdisplay.innerText = donutMaker.donutClicker;
});

const autoDisplay = document.querySelector("#autoCountDisplay");
const buyAutoClicker = document.querySelector("#autoClickerBtn");
const autoCostPrice = document.querySelector("#autoCost")
buyAutoClicker.addEventListener("click", () =>{
donutMaker.addNewClicker();
autoDisplay.innerText = donutMaker.autoClicker;
autoCostPrice.innerText = donutMaker.autoClickerPrice;

  
})

const multiplierDisplay = document.querySelector("#multiplierCountDisplay");
const buyMultiplier = document.querySelector("#multiplierBtn");
const multiplierCost = document.querySelector("#clickMultiplierCost");
buyMultiplier.addEventListener("click", () => {
donutMaker.addNewMultiplier();
multiplierDisplay.innerText = donutMaker.clickMultiplier;
multiplierCost.innerText = donutMaker.clickMultiplierPrice;

})

setInterval(() => {
   for (let i=0; i<donutMaker.autoClicker;i++){
    donutMaker.clickDonuts();
    donutdisplay.innerText = donutMaker.donutClicker;


    
  }


},1000)


    






