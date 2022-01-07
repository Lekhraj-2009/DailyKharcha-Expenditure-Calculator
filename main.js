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

//Setting variables to 0, if null
if (savings == null){
    savings = 0;
    localStorage.setItem("savings", savings);
}
if (exp_day == null){
    exp_day = 0;
    localStorage.setItem("exp_day", exp_day);
}
if (exp_week == null){
    exp_week = 0;
    localStorage.setItem("exp_week", exp_week);
}
if (exp_month == null){
    exp_month = 0;
    localStorage.setItem("exp_month", exp_month);
}
if (exp_total == null){
    exp_total = 0;
    localStorage.setItem("exp_total", exp_total);
}
if (household == null){
    household = 0;
    localStorage.setItem("household", household);
}
if (groceries == null){
    groceries = 0;
    localStorage.setItem("groceries", groceries);
}
if (overheads == null){
    overheads = 0;
    localStorage.setItem("overheads", overheads);
}
if (education == null){
    education = 0;
    localStorage.setItem("education", education);
}
if (accessories == null){
    accessories = 0;
    localStorage.setItem("accessories", accessories);
}
if (loans == null){
    loans = 0;
    localStorage.setItem("loans", loans);
}
if (traveling == null){
    traveling = 0;
    localStorage.setItem("traveling", traveling);
}
if (health == null){
    health = 0;
    localStorage.setItem("health", health);
}
if (maintenance == null){
    maintenance = 0;
    localStorage.setItem("maintenance", maintenance);
}
if (entertainment == null){
    entertainment = 0;
    localStorage.setItem("entertainment", entertainment);
}
if (investments == null){
    investments = 0;
    localStorage.setItem("investments", investments);
}
if (others == null){
    others = 0;
    localStorage.setItem("others", others);
}

var array = [
    "savings = "+savings,
    "exp_day = "+exp_day,
    "exp_week = "+exp_week,
    "exp_month = "+exp_month,
    "exp_total = "+exp_total,
    "household = "+household,
    "groceries = "+groceries,
    "overheads = "+overheads,
    "education = "+education,
    "accessories = "+accessories,
    "loans = "+loans,
    "traveling = "+traveling,
    "health = "+health,
    "maintenance = "+maintenance,
    "entertainment = "+entertainment,
    "investments = "+investments,
    "others = "+others
];
console.log(array);

function chkInternetStatus(){
    if(navigator.onLine == false) {
        alert("Oops! Please check your internet connection");
    }
}

function proceed(){
    document.getElementById("loader").style.display = "block";
    document.getElementById("waiting").style.display = "block";

    setTimeout(function(){
        document.getElementById("waiting").innerHTML = "Please Wait...";
    }, 1000);

    setTimeout(function(){
        document.getElementById("waiting").innerHTML = "Loading...";
    }, 1950);
    
    setTimeout(function(){
        window.location = "main-page.html";
        document.getElementById("loader").style.display = "none";
        document.getElementById("waiting").style.display = "none";
        document.getElementById("waiting").innerHTML = "";
    }, 3000);
}