// Student Registration Form

let studentName = prompt("Student name");
let departmentName = prompt("Department Name");
const age = prompt("Age");

console.log(`Welcome : ${studentName}`);
console.log(`Department : ${departmentName}`);
console.log(`Age : ${age}`);

// console.clear();

//ATM Withdrawal System

let userBalance = 10000;
// let WithdrawlAmount = prompt("Withdrawl Amount");
let amount = prompt("Enter Amount");

if (amount <= userBalance && amount >= 100) {

    console.log("Transaction Successfull");
}
else if (amount <= 100) {
    console.log("Minimum Withdrawl Amount is 100rs ");
}
else {
    console.log("Insufficient Balance");
}

//Swiggy Discount Checker

let orderAmount = prompt("Enter the amount of Your Order ");

orderAmount > 499 ? console.log("Free Delivery Available") : console.log("Delivery Charges Applied")

//Instagram Login System

let userName = prompt("Enter your Username :");
let password = prompt("Enter Your Password :");

if (userName == "admin") {
    if (password = "1234") {
        console.log("login Successful");
    }
    else {
        console.log("Wrong Password");
    }
}
else {
    console.log("Invalid User");
}

//Traffic Signal System

let signal = prompt("Please Mention which Signal is On :");

switch (signal) {
    case "red":
        console.log("STOP");
        break;
    case "yellow":
        console.log("READY")
        break;
    case "green":
        console.log("GO");
        break;
    default:
        console.log("Inalid Signal");
}

//Employee Salary Calculator

function salaryCalculation(basicSalary, bonus) {
    return basicSalary + bonus;
}
console.log("Total Salary is :" + salaryCalculation(25000, 5000));

//E-Commerce Cart Total

let price = [100, 200, 300, 400];
let totPrice = 0;
for (let i = 0; i < price.length; i++) {
    totPrice = totPrice + price[i];
}
let avg = totPrice / price.length;
console.log("Total Price of Products :" + totPrice);
console.log("Average of Products :" + avg);

//WhatsApp Contact Book

let user = {
    name: prompt("Enter Your Name"),
    phone: prompt("Enter Your Contact Number"),
    status: prompt("Whats is the Status of Your Number")
};
for (let key in user) {
    console.log(key + " :" + user[key]);
}

//Movie Ticket Booking

function payment() {
    console.log("Payment Successful");

}
function bookTicket(callback) {
    console.log("Ticket Booked");
    callback();
}
bookTicket(payment);

//Food Delivery Time Tracker

function* tracking() {
    yield "Order Confirmed";
    yield "Preparing Food";
    yield "Out for Delivery";
    yield "Delivered";

}
let order = tracking();
console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);

