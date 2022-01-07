//Savings
savings = localStorage.getItem("savings");

//Expenses
exp_day = localStorage.getItem("exp_day");
exp_week = localStorage.getItem("exp_week");
exp_month = localStorage.getItem("exp_month");
exp_total = localStorage.getItem("exp_total");

//Expense Categories
household = localStorage.getItem("household");
groceries = localStorage.getItem("groceries");
overheads = localStorage.getItem("overheads");
education = localStorage.getItem("education");
accessories = localStorage.getItem("accessories");
loans = localStorage.getItem("loans");
traveling = localStorage.getItem("traveling");
health = localStorage.getItem("health");
maintenance = localStorage.getItem("maintenance");
entertainment = localStorage.getItem("entertainment");
investments = localStorage.getItem("investments");
others = localStorage.getItem("others");

document.getElementById("cash_in_hand").value = "Rs. "+savings;
document.getElementById("exp_day").value = "Rs. "+exp_day;
document.getElementById("exp_week").value = "Rs. "+exp_week;
document.getElementById("exp_month").value = "Rs. "+exp_month;
document.getElementById("exp_total").value = "Rs. "+exp_total;

function add_savings(){
    income = document.getElementById("input_savings").value;

    if (income == ""){
        income = 0;
        document.getElementById("input_savings").value = "";
        window.alert("Please enter a valid amount!");
    } else if (income <= 0){
        income = 0;
        document.getElementById("input_savings").value = "";
        window.alert("Please enter a valid amount!");
    } else {
        savings = parseInt(savings)+parseInt(income);
        localStorage.setItem("savings", savings);
        document.getElementById("cash_in_hand").value = "Rs. "+savings;

        document.getElementById("exp_day").value = "Rs. "+exp_day;
        document.getElementById("exp_week").value = "Rs. "+exp_week;
        document.getElementById("exp_month").value = "Rs. "+exp_month;
        document.getElementById("exp_total").value = "Rs. "+exp_total;

        income = 0;
        document.getElementById("input_savings").value = "";
    }
}

function exp_page(){
    window.location = "add-exp.html";
}
function list_page(){
    window.location = "exp-list.html";
}

function share(){
    
}

function confirm(){
    window.location = "index.html";
}