import WaterTracker from "./Tracker/Tracker.js";

document.getElementById('opslaan').addEventListener('click', (e) => {
    tracker.addWater(0.8); // Example: adding 0.8 liters
    localStorage.setItem('totalWater', JSON.stringify(tracker.getTotalWater()));
    console.log('Water intake saved to local storage.');
});
let totalWater = JSON.parse(localStorage.getItem("water")) || [];
console.log(water);
water.push(liter);
localStorage.setItem("totalWater", JSON.stringify(liter));