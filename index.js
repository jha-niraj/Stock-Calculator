const prices = document.querySelectorAll(".main-input");
const calculateBtn = document.querySelector(".analyseBtn");
const dialogBox = document.getElementById("dialog-box");
const showcase = document.getElementById("showcase");

calculateBtn.addEventListener("click", calculateStocks);

function calculateStocks() {
    const purchasePrice = document.getElementById("purchasePrice").value;
    const stocks = document.getElementById("stocks").value;
    const currentPrice = document.getElementById("currentPrice").value;
    
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const message = document.getElementById("message");

    if(purchasePrice == currentPrice) {
        title.innerHTML = "Bhai tera nasib hi kharab hai!!!";
    } else if(purchasePrice < currentPrice) {
        let profit = currentPrice - purchasePrice;
        let profitPercent = profit / 100;
        title.innerHTML = "Bhai, Kamal kardiya!!!";
        description.innerHTML = "Total Profit: ${profit} <br> Profit Percentage: ${profitPercent}";
        message.innerHTML = "Bhai party kab de raha hai";
    } else {
        let loss = purchasePrice - currentPrice;
        let lossPercent = loss / 100;
        title.innerHTML = "Bhai, tera katgaya!!!";
        description.innerHTML = "Total Loss: ${loss} <br> Loss Percentage: ${lossPercent}";
        message.innerHTML = "Koi na bhai, lage raho!!!";
    }
}


