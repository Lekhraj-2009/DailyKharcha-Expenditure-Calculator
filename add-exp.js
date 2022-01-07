amount = 0;

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

function confirm(){
    document.getElementById("amount").value = "";
    window.location = "main-page.html";
}

function display_alert(){
    document.getElementById("amount").value = "";
    document.getElementById("alert-amt").style.display = "block";
    window.setTimeout(function(){
        document.getElementById("alert-amt").style.display = "none";
    }, 6000);
}

function success(){
    window.alert("Your entry has been successfully added!");
    window.location = "main-page.html";

    amount = 0;
    document.getElementById("amount").value = "";
}

//Functions for Category Buttons

function add_household(){
    amount = document.getElementById("amount").value;
    if (amount == ""){
        display_alert();
    } else if (amount <= 0){
        display_alert();
    } else {
        household = parseInt(household)+parseInt(amount);
        localStorage.setItem("household", household);

        savings = parseInt(savings)-parseInt(household);
        localStorage.setItem("savings", savings);

        exp_day = parseInt(exp_day)+parseInt(household);
        localStorage.setItem("exp_day", exp_day);

        exp_week = parseInt(exp_week)+parseInt(household);
        localStorage.setItem("exp_week", exp_week);

        exp_month = parseInt(exp_month)+parseInt(household);
        localStorage.setItem("exp_month", exp_month);

        exp_total = parseInt(exp_total)+parseInt(household);
        localStorage.setItem("exp_total", exp_total);

        success();
    }
}
function add_groceries(){
    amount = document.getElementById("amount").value;
    if (amount == ""){
        display_alert();
    } else if (amount <= 0){
        display_alert();
    } else {
        groceries = parseInt(groceries)+parseInt(amount);
        localStorage.setItem("groceries", groceries);

        savings = parseInt(savings)-parseInt(groceries);
        localStorage.setItem("savings", savings);

        exp_day = parseInt(exp_day)+parseInt(groceries);
        localStorage.setItem("exp_day", exp_day);

        exp_week = parseInt(exp_week)+parseInt(groceries);
        localStorage.setItem("exp_week", exp_week);

        exp_month = parseInt(exp_month)+parseInt(groceries);
        localStorage.setItem("exp_month", exp_month);

        exp_total = parseInt(exp_total)+parseInt(groceries);
        localStorage.setItem("exp_total", exp_total);

        success();
    }
}
function add_overheads(){
    amount = document.getElementById("amount").value;
    if (amount == ""){
        display_alert();
    } else if (amount <= 0){
        display_alert();
    } else {
        overheads = parseInt(overheads)+parseInt(amount);
        localStorage.setItem("overheads", overheads);

        savings = parseInt(savings)-parseInt(overheads);
        localStorage.setItem("savings", savings);

        exp_day = parseInt(exp_day)+parseInt(overheads);
        localStorage.setItem("exp_day", exp_day);

        exp_week = parseInt(exp_week)+parseInt(overheads);
        localStorage.setItem("exp_week", exp_week);

        exp_month = parseInt(exp_month)+parseInt(overheads);
        localStorage.setItem("exp_month", exp_month);

        exp_total = parseInt(exp_total)+parseInt(overheads);
        localStorage.setItem("exp_total", exp_total);

        success();
    }
}
function add_education(){
    amount = document.getElementById("amount").value;
    if (amount == ""){
        display_alert();
    } else if (amount <= 0){
        display_alert();
    } else {
        education = parseInt(education)+parseInt(amount);
        localStorage.setItem("education", education);

        savings = parseInt(savings)-parseInt(education);
        localStorage.setItem("savings", savings);

        exp_day = parseInt(exp_day)+parseInt(education);
        localStorage.setItem("exp_day", exp_day);

        exp_week = parseInt(exp_week)+parseInt(education);
        localStorage.setItem("exp_week", exp_week);

        exp_month = parseInt(exp_month)+parseInt(education);
        localStorage.setItem("exp_month", exp_month);

        exp_total = parseInt(exp_total)+parseInt(education);
        localStorage.setItem("exp_total", exp_total);

        success();
    }
}
function add_accessories(){
    amount = document.getElementById("amount").value;
    if (amount == ""){
        display_alert();
    } else if (amount <= 0){
        display_alert();
    } else {
        accessories = parseInt(accessories)+parseInt(amount);
        localStorage.setItem("accessories", accessories);

        savings = parseInt(savings)-parseInt(accessories);
        localStorage.setItem("savings", savings);

        exp_day = parseInt(exp_day)+parseInt(accessories);
        localStorage.setItem("exp_day", exp_day);

        exp_week = parseInt(exp_week)+parseInt(accessories);
        localStorage.setItem("exp_week", exp_week);

        exp_month = parseInt(exp_month)+parseInt(accessories);
        localStorage.setItem("exp_month", exp_month);

        exp_total = parseInt(exp_total)+parseInt(accessories);
        localStorage.setItem("exp_total", exp_total);

        success();
    }
}
function add_loans(){
    amount = document.getElementById("amount").value;
    if (amount == ""){
        display_alert();
    } else if (amount <= 0){
        display_alert();
    } else {
        loans = parseInt(loans)+parseInt(amount);
        localStorage.setItem("loans", loans);

        savings = parseInt(savings)-parseInt(loans);
        localStorage.setItem("savings", savings);

        exp_day = parseInt(exp_day)+parseInt(loans);
        localStorage.setItem("exp_day", exp_day);

        exp_week = parseInt(exp_week)+parseInt(loans);
        localStorage.setItem("exp_week", exp_week);

        exp_month = parseInt(exp_month)+parseInt(loans);
        localStorage.setItem("exp_month", exp_month);

        exp_total = parseInt(exp_total)+parseInt(loans);
        localStorage.setItem("exp_total", exp_total);

        success();
    }
}
function add_traveling(){
    amount = document.getElementById("amount").value;
    if (amount == ""){
        display_alert();
    } else if (amount <= 0){
        display_alert();
    } else {
        traveling = parseInt(traveling)+parseInt(amount);
        localStorage.setItem("traveling", traveling);

        savings = parseInt(savings)-parseInt(traveling);
        localStorage.setItem("savings", savings);

        exp_day = parseInt(exp_day)+parseInt(traveling);
        localStorage.setItem("exp_day", exp_day);

        exp_week = parseInt(exp_week)+parseInt(traveling);
        localStorage.setItem("exp_week", exp_week);

        exp_month = parseInt(exp_month)+parseInt(traveling);
        localStorage.setItem("exp_month", exp_month);

        exp_total = parseInt(exp_total)+parseInt(traveling);
        localStorage.setItem("exp_total", exp_total);

        success();
    }
}
function add_health(){
    amount = document.getElementById("amount").value;
    if (amount == ""){
        display_alert();
    } else if (amount <= 0){
        display_alert();
    } else {
        health = parseInt(health)+parseInt(amount);
        localStorage.setItem("health", health);

        savings = parseInt(savings)-parseInt(health);
        localStorage.setItem("savings", savings);

        exp_day = parseInt(exp_day)+parseInt(health);
        localStorage.setItem("exp_day", exp_day);

        exp_week = parseInt(exp_week)+parseInt(health);
        localStorage.setItem("exp_week", exp_week);

        exp_month = parseInt(exp_month)+parseInt(health);
        localStorage.setItem("exp_month", exp_month);

        exp_total = parseInt(exp_total)+parseInt(health);
        localStorage.setItem("exp_total", exp_total);

        success();
    }
}
function add_maintenance(){
    amount = document.getElementById("amount").value;
    if (amount == ""){
        display_alert();
    } else if (amount <= 0){
        display_alert();
    } else {
        maintenance = parseInt(maintenance)+parseInt(amount);
        localStorage.setItem("maintenance", maintenance);

        savings = parseInt(savings)-parseInt(maintenance);
        localStorage.setItem("savings", savings);

        exp_day = parseInt(exp_day)+parseInt(maintenance);
        localStorage.setItem("exp_day", exp_day);

        exp_week = parseInt(exp_week)+parseInt(maintenance);
        localStorage.setItem("exp_week", exp_week);

        exp_month = parseInt(exp_month)+parseInt(maintenance);
        localStorage.setItem("exp_month", exp_month);

        exp_total = parseInt(exp_total)+parseInt(maintenance);
        localStorage.setItem("exp_total", exp_total);

        success();
    }
}
function add_entertainment(){
    amount = document.getElementById("amount").value;
    if (amount == ""){
        display_alert();
    } else if (amount <= 0){
        display_alert();
    } else {
        entertainment = parseInt(entertainment)+parseInt(amount);
        localStorage.setItem("entertainment", entertainment);

        savings = parseInt(savings)-parseInt(entertainment);
        localStorage.setItem("savings", savings);

        exp_day = parseInt(exp_day)+parseInt(entertainment);
        localStorage.setItem("exp_day", exp_day);

        exp_week = parseInt(exp_week)+parseInt(entertainment);
        localStorage.setItem("exp_week", exp_week);

        exp_month = parseInt(exp_month)+parseInt(entertainment);
        localStorage.setItem("exp_month", exp_month);

        exp_total = parseInt(exp_total)+parseInt(entertainment);
        localStorage.setItem("exp_total", exp_total);

        success();
    }
}
function add_investments(){
    amount = document.getElementById("amount").value;
    if (amount == ""){
        display_alert();
    } else if (amount <= 0){
        display_alert();
    } else {
        investments = parseInt(investments)+parseInt(amount);
        localStorage.setItem("investments", investments);

        savings = parseInt(savings)-parseInt(investments);
        localStorage.setItem("savings", savings);

        exp_day = parseInt(exp_day)+parseInt(investments);
        localStorage.setItem("exp_day", exp_day);

        exp_week = parseInt(exp_week)+parseInt(investments);
        localStorage.setItem("exp_week", exp_week);

        exp_month = parseInt(exp_month)+parseInt(investments);
        localStorage.setItem("exp_month", exp_month);

        exp_total = parseInt(exp_total)+parseInt(investments);
        localStorage.setItem("exp_total", exp_total);

        success();
    }
}
function add_others(){
    amount = document.getElementById("amount").value;
    if (amount == ""){
        display_alert();
    } else if (amount <= 0){
        display_alert();
    } else {
        others = parseInt(others)+parseInt(amount);
        localStorage.setItem("others", others);

        savings = parseInt(savings)-parseInt(others);
        localStorage.setItem("savings", savings);

        exp_day = parseInt(exp_day)+parseInt(others);
        localStorage.setItem("exp_day", exp_day);

        exp_week = parseInt(exp_week)+parseInt(others);
        localStorage.setItem("exp_week", exp_week);

        exp_month = parseInt(exp_month)+parseInt(others);
        localStorage.setItem("exp_month", exp_month);

        exp_total = parseInt(exp_total)+parseInt(others);
        localStorage.setItem("exp_total", exp_total);

        success();
    }
}