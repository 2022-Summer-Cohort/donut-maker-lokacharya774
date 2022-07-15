class DonutMaker {
  constructor() {
    this.donutClicker = 0;
    this.autoClicker = 0;
    this.autoClickerPrice = 100;
    this.clickMultiplier = 0;
    this.clickMultiplierPrice = 10;
  }

  clickDonuts() {
    this.donutClicker++;
  }
  addNewClicker() {
    this.autoClicker++;
    this.donutClicker -= this.autoClickerPrice;
    this.autoClickerPrice *= 1.2;
    this.autoClickerPrice = Math.floor(this.autoClickerPrice);
  }
  addNewMultiplier() {
    this.donutMultiplier++;
    this.donutCount -= this.donutMultiplierPrice;
    this.clickMultiplierPrice *= 1.1;
    this.clickMultiplierPrice = Math.floor(this.clickMultiplierPrice);
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
}
export default DonutMaker;
