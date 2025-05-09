import WaterTracker from './Tracker/Tracker.js';

document.addEventListener('DOMContentLoaded', function () {
  const tracker = new WaterTracker();

  const opslaanBtn = document.getElementById('opslaan');
  const litersText = document.getElementById('liters');

  if (opslaanBtn) {
    opslaanBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const literValue = parseFloat(litersText?.textContent || "0.8"); // fallback
      tracker.addWater(literValue);
      alert(`Toegevoegd: ${literValue}L`);
    });
  }

  // Kleur toevoegen aan dagwaarden
  const dataDiv = document.querySelector('.waterdata p');
  if (dataDiv) {
    const parentDiv = dataDiv.parentElement;
    const waterValues = dataDiv.textContent.match(/[\d.]+/g) || [];
    parentDiv.textContent = ''; // wis originele tekst

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