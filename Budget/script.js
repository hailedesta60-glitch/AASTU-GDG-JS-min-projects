document.getElementById("check").addEventListener("click", function() {
    const budget = parseFloat(document.getElementById("budget").value);
    const saving = parseFloat(document.getElementById("saving").value) || 0;
    const price = parseFloat(document.getElementById("price").value);
    const quantity = parseFloat(document.getElementById("quantity").value);
    let result = document.getElementById("result");

if (isNaN(budget) || isNaN(price) || isNaN(quantity)) {
        result.style.color = "red";
        result.innerHTML = "Please enter all required fields correctly.";
        return;
    }
    let totalMoney = budget + saving;
    let totalExpense = price * quantity;

if (totalMoney >= totalExpense) {
        result.style.color = "green";
        result.innerHTML = `
            Total Money Available: $${totalMoney.toFixed(2)} <br>
            Total Expense: $${totalExpense.toFixed(2)} <br>
            ✅ You can afford it!
        `;
    }else if(totalMoney === totalExpense){
        result.style.color = "brown"
        result.style.fontSize ="23px"
        result.innerHTML = 'your totalmoney and your total expense is the same so do not buy this one becuase you don have money to affored for food.lol'
      }
     else {
        result.style.color = "red";
        result.innerHTML = `
            Total Money Available: $${totalMoney.toFixed(2)} <br>
            Total Expense: $${totalExpense.toFixed(2)} <br>
            ❌ You cannot afford it.
        `;
    }
})

