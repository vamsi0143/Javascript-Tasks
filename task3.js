//Printing Numbers

let i;
for (i = 1; i <= 20; i++) {
    console.log(i);

}
//Printing Odd Numbers

let a;
for (a = 0; a <= 50; a++) {
    if (a % 2 == 1) {
        console.log(a);
    }
}
console.clear();
//Printing 7th Table

for (let k = 1; k <= 10; k++) {
    let res = 7 * k;
    if (res % 7 == 0) {
        console.log("7*" + k + " = " + res);
    }
}

// Reverse Counting

let x = 20;
while (x >= 0) {
    console.log(x);
    x--
}

// Printing Sum of Numbers

let sum = 0;
let z;
for (z = 1; z <= 100; z++) {
    sum = sum + z;
}
console.log("Total Sum of Nums is : " + sum);

//Print Array Values

let fruits = ["Apple", "Banana", "Pappaya", "Orange"];

for (let j = 0; j < fruits.length; j++) {
    console.log(fruits[j]);
}

//Count Even Numbers

let g;
let count = 0;
for (g = 1; g <= 50; g++) {
    if (g % 2 == 0) {
        count++;
    }
}
console.log("Total Even nums are: " + count);

// Star program

for (let h = 1; h <= 5; h++) {
    let star = " ";
    for (l = 1; l <= h; l++) {
        star = star + "*";
    }
    console.log(star);
}

//Print Welcome using function

function Welcome() {
    console.log("Welcome to Javascript");
}
Welcome();

//Print the name using function with parameter

function param(name) {
    console.log("Hello!" + " " + name);
}
param("Vamsi");

//Adding 2 Numbers

function add(a1, b1) {
    return a1 + b1;
}
let res1 = add(10, 20);
console.log(" Adding 2 Nums are  : " + res1);

//Adding bonus to Salary

function getSalary() {
    return 50000;
}
function getBonus() {
    return 5000;
}
let totSalary = getSalary() + getBonus();
console.log("Total Salary With Bonus : " + totSalary);

//Using For in print key and values

let student = {
    name: "vamsi",
    course: "Javascript",
    marks: 95
};
for (let std in student) {
    console.log(std, " : " + student[std]);
}

//Find the Largest Num using function

function largest(ab, bc) {

    if (ab > bc) {
        return ab;
    }
    else {
        return bc;
    }
}
console.log("Biggest Num is : " + largest(10, 50));

//Employee Task

let employee = {
    empName: "Vamsi",
    department: "Developer",
    salary: 50000
}
function salWithBonus(emp, bonus) {
    let totalSalry = emp.salary + bonus;
    console.log("Employee Name : " + emp.empName);
    console.log("Employee Deparment : " + emp.department);
    console.log("Employee Salary : " + emp.salary);
    console.log("Total Salary After Bonus : " + totalSalry);
}
salWithBonus(employee, 5000);



