export default class WaterTracker {
    constructor() {
      const saved = JSON.parse(localStorage.getItem("water")) || [];
      this.water = saved;
      this.totalWater = saved.reduce((acc, val) => acc + val, 0);
    }
  
    addWater(liter) {
      this.water.push(liter);
      this.totalWater += liter;
      localStorage.setItem("water", JSON.stringify(this.water));
      console.log(`Totaal water: ${this.totalWater} liter`);
    }
  
    getTotalWater() {
      return this.totalWater.toFixed(1); // bijv. "2.3"
    }
  }