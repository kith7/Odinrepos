let inputNumber = document.querySelector(".input__value");
inputNumber.addEventListener("input", updateValue);
let numbers = document.querySelectorAll(".input-number");
let metersToFeet = document.getElementById("meters-to-feet");
let feetToMeters = document.getElementById("feet-to-meters");
let litersToGalons = document.getElementById("liters-to-gallons");
let galonsToLiters = document.getElementById("galons-to-liters");
let kilogramsToPounds = document.getElementById("kilograms-to-pounds");
let poundsToKilograms = document.getElementById("pounds-to-kilograms");

function updateValue(e) {
  numbers.forEach((number) => {
    number.textContent = inputNumber.value;
  });
  metersToFeet.textContent = (parseInt(inputNumber.value) / 3.2808).toFixed(3);
  feetToMeters.textContent = (parseInt(inputNumber.value) * 3.2808).toFixed(3);

  litersToGalons.textContent = (parseInt(inputNumber.value) / 0.264).toFixed(3);
  galonsToLiters.textContent = (parseInt(inputNumber.value) * 0.264).toFixed(3);

  kilogramsToPounds.textContent = (parseInt(inputNumber.value) / 2.204).toFixed(
    3
  );
  poundsToKilograms.textContent = (parseInt(inputNumber.value) * 2.204).toFixed(
    3
  );
}

//feet to meters  feet / 3.2808 =
// meters to feet meters * 3.2808

// input-number"
// meters-to-feet
// feet-to-meters
// liters-to-gallons
// galons-to-liters"
// kilograms-to-pounds
// pounds-to-kilograms
