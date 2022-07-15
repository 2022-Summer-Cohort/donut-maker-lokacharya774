import DonutMaker from "./DonutMaker.js";

const donutMaker = new DonutMaker();
const donutdisplay = document.querySelector("#donutCountDisplay");

const donutClicker = document.querySelector("#donutMakerBtn");
donutClicker.addEventListener("click", () => {
  donutMaker.clickDonuts();
  donutdisplay.innerText = donutMaker.donutClicker;
});

const autoClicker = document.querySelector("#autoClickerBtn");
autoClicker.addEventListener("click",() =>{
    

} )
