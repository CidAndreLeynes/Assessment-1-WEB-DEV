// Select elements
const petrolPriceInput = document.getElementById('petrol-price');
const litersPurchasedInput = document.getElementById('liters-purchased');
const calculateButton = document.getElementById('calculate-button');
const totalCostDisplay = document.getElementById('total-cost');

// Function to calculate total cost
function calculateTotalCost() {
  const petrolPrice = parseFloat(petrolPriceInput.value);
  const litersPurchased = parseFloat(litersPurchasedInput.value);

  const totalCost = petrolPrice * litersPurchased;
  totalCostDisplay.textContent = `Total Cost: $${totalCost.toFixed(2)}`; // Display with 2 decimal places
}

// Add event listener to button click
calculateButton.addEventListener('click', calculateTotalCost);
