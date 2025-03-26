export default class WaterTracker{
    constructor() {
        this.totalWater = 0;
        this.water = [];
    }
    
    addWater(liter){
        this.totalWater += amount;
        console.log(`Je hebt tot nu toe ${liter}l water gedronken. Totaal: ${this.totalWater}liter`);
    }
    
    getTotalWater(){
        return this.totalWater;
    }
}
document.addEventListener('info', () => {
    const waterAmounts = document.querySelectorAll('.info div p');
  
    waterAmounts.forEach(amount => {
      const value = parseFloat(amount.textContent);
      if (value < 1) {
        amount.classList.add('red');
      } else if (value >= 1 && value <= 1.5) {
        amount.classList.add('orange');
      } else if (value > 1.5) {
        amount.classList.add('green');
      }
    });
  });
//const h3 = document.querySelector(".progres_container");
