import WaterTracker from './Tracker/Tracker.js';

document.addEventListener('DOMContentLoaded', () => {
  const tracker = new WaterTracker();

  // Totaal water tonen op index.html
  const totaalElement = document.getElementById('totaalWater');
  if (totaalElement) {
    totaalElement.textContent = `${tracker.getTotalWater()}L`;
  }

// Reset-knop op index.html
const resetBtn = document.getElementById('reset');
if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    tracker.resetWater(); // reset lokaal geheugen
    if (totaalElement) totaalElement.textContent = '0L'; // update visuele weergave
    alert("Waterinname is gereset.");

    // Eventueel: reset andere elementen zoals grafieken/overzichten etc.
    const dataDiv = document.querySelector('.waterdata p');
    if (dataDiv) {
      dataDiv.textContent = ''; // maak visueel leeg
    }
  });
}

  // Water toevoegen op details.html
  const input = document.getElementById('waterInput');
  const saveBtn = document.getElementById('saveWater');
  const litersDisplay = document.getElementById('liters');

  if (saveBtn && input) {
    saveBtn.addEventListener('click', () => {
      const value = parseFloat(input.value);
      if (!isNaN(value) && value > 0) {
        tracker.addWater(value);
        if (litersDisplay) litersDisplay.textContent = `${tracker.getTotalWater()}L`;
        input.value = '';
        alert(`${value}L toegevoegd!`);
      } else {
        alert("Voer een geldig aantal liter in.");
      }
    });

    // Bij laden juiste waarde tonen op details
    if (litersDisplay) litersDisplay.textContent = `${tracker.getTotalWater()}L`;
  }

  // Kleurfunctionaliteit index.html
  const dataDiv = document.querySelector('.waterdata p');
  if (dataDiv) {
    const parentDiv = dataDiv.parentElement;
    const waterValues = dataDiv.textContent.match(/[\d.]+/g) || [];
    parentDiv.textContent = '';

    waterValues.forEach(value => {
      const val = parseFloat(value);
      const span = document.createElement('span');
      span.textContent = `${val}L `;

      if (val < 1) {
        span.classList.add('red');
      } else if (val < 1.5) {
        span.classList.add('orange');
      } else {
        span.classList.add('green');
      }

      parentDiv.appendChild(span);
    });
  }
});
