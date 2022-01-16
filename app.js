let weightInput = document.getElementById("weight");
let kilocard = document.getElementById("kilocard");
let ouncecard = document.getElementById("ouncecard");
let gramcard = document.getElementById("gramcard");
let weightInPounds = weightInput.value;
weightInput.addEventListener("input", (e) => {
  let weightInPounds = weightInput.value;

  kilocard.innerHTML = `<h5>Kilograms:</h5>${weightInPounds / 2.2046}`;
  ouncecard.innerHTML = `<h5>Ounces:</h5>${weightInPounds * 16}`;
  gramcard.innerHTML = `<h5>Grams:</h5>${weightInPounds * 453.59237}`;
});
