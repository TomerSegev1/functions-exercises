// //exercise1
const calculate = (a, b) => {
    return a * b
}

// //exercise2
const sum = (a, b, c) => {
    return a + b + c
}

// //exercise3
const modulu = (a, b) => {
    return console.log(a % b)
}

// //exercise4
const devide = (a, b) => {
    if (b === 0) {
        return null && console.log("illegal")
    }
    else {
        return a / b
    }
}

// //exercise5
const factorial = (a) => {
    if (a === 0 || a === 1) {
        return 1;
    }
    for (index = (a - 1); index >= 1; index--) {
        a = a * index
    }
    return a
}

// //exercise6
const beep = (str) => {
    return str + "beep"
}

// //exercise7
const mul2nums = (a, b) => {
    if (a * b < 0) {
        return 0
    }
    else {
        return a * b
    }
}

// //exercise8
const mul2numswithout = (a, b) => {
    let sum = 0;
    for (index = 0; index < b; index++) {
        sum = sum + a
    }
    return sum
}

// //exercise9
const mulNums = (a, b) => {
    let sum = 0;
    for (i = 0; i < b; i++) {
        sum += a
    }
    return sum
}

const strongNums = (a, b) => {
    let sum = 1;
    for (index = 0; index < b; index++) {
        sum = mulNums(sum, a)
    }
    return sum
}

//exercise10
const pal = (a) => {
    let length = a.length
    for (i = 0; i < length / 2; i++) {
        if (a(i) !== a(length - 1 - i)) {
            return "no";
        }
    }
    return "yes";
}

// exercise11
const checkPassword = (password) => {
    let len = password.length
    for (i = 0; i < len; i++) {
        if (password.charAt(i) === Number) {
            return "weak"
        }
    }
}


//exercise12
const hey = (str) => {
    if (str === "hello") {
        return "welcome"
    }
}

const bye = (str) => {
    if (str === "goodbye") {
        return "See you again"
    }
}

const math = (str) => {
    let num1 = prompt("enter a number")
    let num2 = prompt("enter a number")
    if (str === "sum") {
        return num1
    }
}

//exercise13
const student = (student) => {
    student.name
    student.grdae
    student.avg
    if (student.grdae < 9 && student.avg > 85) {
        console.log(student.name + " Is a great young student")
    }
    else if (student.grdae < 9 && 75 <= student.avg < 85) {
        console.log(student.name + " Is an avarage young studnet")
    }
    else if (student.grdae < 9 && student.avg < 75) {
        console.log(student.name + " Is a bad young student")
    }
    else if (student.grdae >= 9 && student.avg > 80) {
        console.log(student.name + " Is a great highschool student")
    }
    else if (student.grdae >= 9 && 70 <= student.avg < 80) {
        console.log(student.name + " Is an avarage highschool student")
    }
    else if (student.grdae >= 9 && student.avg < 70) {
        console.log(student.name + " Is a bad highschool student")
    }
}

//exercise14
const rev = (num) => {
    return parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
}
console.log(rev(12345))

