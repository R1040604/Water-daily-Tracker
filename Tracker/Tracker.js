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
document.addEventListener('DOMContentLoaded', function() {
    const infoDiv = document.querySelector('.info div');
    const waterAmounts = infoDiv.textContent.split(/\s+/);

    waterAmounts.forEach(amount => {
        let colorClass = '';
        const value = parseFloat(amount);

        if (value >= 0 && value < 1) {
            colorClass = 'red';
        } else if (value >= 1 && value < 1.5) {
            colorClass = 'orange';
        } else if (value >= 1.5 && value <= 2) {
            colorClass = 'green';
        }

        const span = document.createElement('span');
        span.textContent = amount;
        span.classList.add(colorClass);
        infoDiv.appendChild(span);
    });

    infoDiv.textContent = ''; // Clear original text
});

//const h3 = document.querySelector(".progres_container");
