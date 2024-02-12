const prices = document.querySelectorAll(".main-input");
const calculateBtn = document.querySelector(".analyseBtn");
const dialogBox = document.getElementById("dialog-box");

const title = document.getElementById("title");
const description = document.getElementById("description");
const message = document.getElementById("message");

calculateBtn.addEventListener("click", calculateStocks);

// Remember always to take input in the function, if not done might lead to logical error.
// And try to parse the value of the input so that the string value to the int value, so that it is easy to calculate.
function calculateStocks() {
    const purchasePrice = parseFloat(document.getElementById("purchasePrice").value);
    const stocks = parseFloat(document.getElementById("stocks").value);
    const currentPrice = parseFloat(document.getElementById("currentPrice").value);

    if(purchasePrice == 0 || stocks == 0 || currentPrice == 0) {
        title.innerHTML = "Fill in valid inputs!!!";
        description.innerText = "";
        message.innerText = "";
    } else if(purchasePrice == currentPrice) {
        title.innerHTML = "Ohh, No Profit no Loss!!!";
        description.innerText = "";
        message.innerText = "";
    } else if(purchasePrice * stocks > currentPrice * stocks) {
        let loss = Math.abs(purchasePrice * stocks - currentPrice * stocks);
        let lossPercent = loss / (purchasePrice * stocks) * 100;
        title.innerHTML = "You are in Loss!!!";
        description.innerText = `Total Loss: ${loss} Loss Percentage: ${lossPercent}%`;
        message.innerText = "Koi na bhai, lage raho!!!";
    } else if(purchasePrice * stocks < currentPrice * stocks) {
        let profit = currentPrice * stocks - purchasePrice * stocks;
        let profitPercent = profit / (purchasePrice * stocks) * 100;
        title.innerHTML = "Bhai, Kamal kardiya!!!";
        description.innerText = `Total Profit: ${profit} Profit Percentage: ${profitPercent}%`;
        message.innerText = "Bhai party kab de raha hai";
    }
}


