//Creating a Function

function welcomeUser(name) {
    console.log("Welcome " + name);
}
welcomeUser("Vamsi");

//Square Number

function squareNumber(Number) {
    return Number * Number;

}
console.log("Square Number of 5 is : " + squareNumber(5));

//Object Function

let emp = {
    name: "Rahul",
    salary: 50000
};
function employeeBonus(bonus) {
    console.log(emp.name);
    console.log("Salary With Bonus :" + (emp.salary + bonus));
}
employeeBonus(5000);

//Scope Checking


function scopeCheck() {
    if (true) {
        var x = "Var Variable";
        let y = "Let Variable";
        const z = "Const Variable";
        console.log(x);
        console.log(y);
        console.log(z);
    }
    console.log(x);

    // console.log(y); 

    // console.log(z);


}
scopeCheck();

//Arrow Function

// Convert this into arrow function:
// function add(a,b){
//    console.log(a+b);
// }


let add = (a, b) => {
    console.log(a + b);
}
add(20, 30)

//Callback Function

function multiply(c, d) {
    return c * d;
}
function calculator(Callback, n1, n2) {
    console.log(Callback(n1, n2));
}
calculator(multiply, 5, 2);

//Generator Function

function* offers() {
    yield "50% OFF"
    yield "Free Delivery"
    yield "Cashback"

}
let a1 = offers();
console.log(a1.next().value);
console.log(a1.next().value);
console.log(a1.next().value);

//Default Parameter

function student(name, course = "Javascript") {
    console.log("Name :" + name);
    console.log("Course :" + course);
}
student("vamsi")

//Currying

function multi(d1) {
    return function (d2) {
        return function (d3) {
            return d1 * d2 * d3;
        }
    }
}
console.log(multi(2)(3)(4));

//Spread Operator

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let mergeArr = [...arr1, ...arr2]
console.log(mergeArr);

//Object Spread

let obj1 = {
    name: "Navi"
};

let obj2 = {
    role2: "Developer"
};

let mergeObj = { ...obj1, ...obj2 }
console.log(mergeObj);

//Rest Operator

function numbers(...num) {
    console.log(num);

    let sum = 0;
    for (i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    console.log(sum);
}
numbers(1, 2, 3, 4);

// Student Mnagement System

let stds = [
    {
        name: "Krish",
        marks: [85, 75]
    },
    {
        name: "Suri",
        marks: [75, 90]
    }
];

function studentDetails() {
    for (let i = 0; i < stds.length; i++) {
        console.log("Name :", stds[i].name);
        console.log("Marks :", stds[i].marks);
    }
}

function calculateMarks(marks) {
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total = total + marks[i];
    }
    return total;
}

function addBonus(total) {
    return total + 20;
}

function result(callback, total) {
    return callback(total);
}
studentDetails();
for (let i = 0; i < stds.length; i++) {
    let total = calculateMarks(stds[i].marks);
    console.log(stds[i].name);
    console.log("Total Marks :", total);

    console.log("After Bonus :", result(addBonus, total));
}

