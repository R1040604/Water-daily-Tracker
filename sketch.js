import WaterTracker from "./Tracker/Tracker.js";

const tracker = new WaterTracker();
document.getElementById('opslaan').addEventListener('click', (e) => {
    e.preventDefault();
    tracker.addWater(0.8); // Example: adding 0.8 liters
    localStorage.setItem('totalWater', JSON.stringify(tracker.getTotalWater()));
    console.log('Water intake saved to local storage.');
});
let totalWater = JSON.parse(localStorage.getItem("water")) || [];
tracker.totalWater = totalWater;
document.getElementById('#opslaan').textContent = `${tracker.getTotalWater()}L`;
