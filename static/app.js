const tipBtns = document.querySelectorAll(".tip-btn");
const customBtn = document.querySelector(".custom-input");
const noOfPersons = document.querySelector(".people-count");
const billAmount = document.querySelector(".bill-amount");
const tipPerson = document.querySelector(".tip-person");
const billPerson = document.querySelector(".bill-total");
const resetBtn = document.querySelector(".reset-btn");
const errorMessage = document.querySelector("#split-heading");

tipBtns.forEach((tip) => {
    // listen to buttton click
    tip.addEventListener("click", (e) => {
        let tip = e.currentTarget.innerHTML.split("%")[0];
        if (noOfPersons.value <= 0 || noOfPersons.value === ""){
            errorMessage.classList.add("error");
            noOfPersons.style.border = "2px solid red"
        }else{
            errorMessage.classList.remove("error");
            noOfPersons.style.border = "none"
            getFinalResult(tip, billAmount);
        }
        
    })
})



// listen to custom tip input
customBtn.addEventListener("input", () => {
    customValue = parseInt(customBtn.value);
    if (noOfPersons.value <= 0 || noOfPersons.value === ""){
        errorMessage.classList.add("error");
        noOfPersons.style.border = "2px solid red"
    }else{
        errorMessage.classList.remove("error");
        noOfPersons.style.border = "none"
        getFinalResult(customValue, billAmount);

    }
    
})

// reset
resetBtn.addEventListener("click", () => {
    location.reload()
})


function getFinalResult(tip, bill){
    let tipPercentage = tip / 100;
    let totalBill = parseFloat(bill.value);
    let peopleToSplit = parseInt(noOfPersons.value);
    let percentOfBill = tipPercentage * totalBill
    // tip amount per person round to two decimal places
    let tipPerPerson = Number(percentOfBill / peopleToSplit).toFixed(2);
    tipPerson.innerHTML = `$${tipPerPerson}`;
    // final bill person round to two decimal places
    let finalAmount = ((percentOfBill + totalBill) / peopleToSplit).toFixed(2);
    billPerson.innerHTML = `$${finalAmount}`;
}

