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

//Chart
doughnut_chart = "https://quickchart.io/chart?c={type:'doughnut',data:{labels:['Household','Groceries','Overheads','Education','Accessories','Loans','Traveling','Health','Maintenance','Entertainment','Investments','Others'],datasets:[{data:["+household+","+groceries+","+overheads+","+education+","+accessories+","+loans+","+traveling+","+health+","+maintenance+","+entertainment+","+investments+","+others+"]}]},options:{plugins:{doughnutlabel:{labels:[{text:'Rs. "+exp_total+"',font:{size:20}},{text:'Total Expenditure'}]}}}}";
document.getElementById("chart").src = doughnut_chart;

function exp_household(){
    document.getElementById("amount").value = "Rs. "+household;
}
function exp_groceries(){
    document.getElementById("amount").value = "Rs. "+groceries;
}
function exp_overheads(){
    document.getElementById("amount").value = "Rs. "+overheads;
}
function exp_education(){
    document.getElementById("amount").value = "Rs. "+education;
}
function exp_accessories(){
    document.getElementById("amount").value = "Rs. "+accessories;
}
function exp_loans(){
    document.getElementById("amount").value = "Rs. "+loans;
}
function exp_traveling(){
    document.getElementById("amount").value = "Rs. "+traveling;
}
function exp_health(){
    document.getElementById("amount").value = "Rs. "+health;
}
function exp_maintenance(){
    document.getElementById("amount").value = "Rs. "+maintenance;
}
function exp_entertainment(){
    document.getElementById("amount").value = "Rs. "+entertainment;
}
function exp_investments(){
    document.getElementById("amount").value = "Rs. "+investments;
}
function exp_others(){
    document.getElementById("amount").value = "Rs. "+others;
}

function back(){
    window.location = "main-page.html";
    document.getElementById("amount").value = "";
    document.getElementById("chart").src = null;
}