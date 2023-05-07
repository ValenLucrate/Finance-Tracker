const evaluateButton = document.querySelector("#evaluate-button");
const resultText = document.querySelector("#result-text");

evaluateButton.addEventListener("click", (event) => {
  event.preventDefault(); // prevent default form submission behavior

  const amount = parseFloat(document.querySelector("#amount").value);
  const roomRentPercentage = parseFloat(document.querySelector("#roomrent").value);
  const accessoriesPercentage = parseFloat(document.querySelector("#accessories").value);
  const emergencyPercentage = parseFloat(document.querySelector("#emergency").value);
  const savingPercentage = parseFloat(document.querySelector("#saving").value);
  const totalPercentage = roomRentPercentage + accessoriesPercentage + emergencyPercentage + savingPercentage;

  if (isNaN(amount) || isNaN(roomRentPercentage) || isNaN(accessoriesPercentage) || isNaN(emergencyPercentage) || isNaN(savingPercentage)) {
    resultText.innerText = "Please enter valid percentage values.";
  } else if (totalPercentage > 100) {
    resultText.innerText = "Total percentage cannot be more than 100.";
  } else {
    const roomRentAmount = (amount * roomRentPercentage) / 100;
    const accessoriesAmount = (amount * accessoriesPercentage) / 100;
    const emergencyAmount = (amount * emergencyPercentage) / 100;
    const savingAmount = (amount * savingPercentage) / 100;
    const totalExpenses = roomRentAmount + accessoriesAmount + emergencyAmount;
    const balanceAmount = amount - totalExpenses - savingAmount;

    resultText.innerHTML = `Out of ${amount}, you should spend:<br> 
                            - ${roomRentAmount.toFixed(2)} for room rent (${roomRentPercentage}%)<br> 
                            - ${accessoriesAmount.toFixed(2)} for accessories (${accessoriesPercentage}%)<br> 
                            - ${emergencyAmount.toFixed(2)} for emergency (${emergencyPercentage}%)<br> 
                            - save ${savingAmount.toFixed(2)} (${savingPercentage}%)<br> 
                            Your total expenses will be ${totalExpenses.toFixed(2)}.<br> 
                            Your balance amount will be ${balanceAmount.toFixed(2)}.`;
  }
});