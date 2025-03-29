export default class WaterTracker{
    constructor() {
        this.totalWater = 0;
        this.water = [];
    }

    addWater(liter){
        this.totalWater += liter;
        this.water.push(liter);
        console.log(`Je hebt tot nu toe ${liter}l water gedronken. Totaal: ${this.totalWater}liter`);
    }

    getTotalWater(){
        return this.totalWater;
    } 
}

//const h3 = document.querySelector(".progres_container");
