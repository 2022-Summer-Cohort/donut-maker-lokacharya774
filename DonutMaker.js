class DonutMaker {
  constructor() {
    this.donutClicker = 0;
    this.autoClicker = 0;
    this.autoClickerPrice = 100;
    this.clickMultiplier = 0;
    this.clickMultiplierPrice = 10;
  }

  getDonutClicker() {
    return this.donutClicker;
  }
  getClickerCount() {
    return this.donutClicker;
  }
  getMultiplierCount() {
    return this.clickMultiplier;
  }
  getAutoClicker() {
    return this.autoClicker;
  }
  getMultiplierCost() {
    return this.clickMulitplierPrice;
  }
  getautoClickerPrice() {
    return this.donutClickerPrice;
  }

  clickDonuts() {
    this.donutClicker += Math.pow(1.2, this.clickMultiplier)
  }
  addNewClicker() {
    if (this.donutClicker >= this.autoClickerPrice ) {
      this.autoClicker++;
      this.donutClicker -= this.autoClickerPrice;
      this.autoClickerPrice *= 1.2;
      this.autoClickerPrice = Math.round(this.autoClickerPrice);
    }
  }
  addNewMultiplier() {
    if (this.donutClicker >= this.clickMultiplierPrice){
      this.clickMultiplier++;
      this.donutClicker -= this.clickMultiplierPrice
      this.clickMultiplierPrice *= 1.1;
      this.clickMultiplierPrice = Math.round(this.clickMultiplierPrice);
    }
  }




}

export default DonutMaker;
