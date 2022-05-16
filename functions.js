//exercise1
// const calculate = (a, b) => {
//     return a*b
// }

//exercise2
// const sum = (a, b, c) => {
//         return a+b+c
//     }

//exercise3
// const calculate = (a, b) => {
//         return console.log(a % b)
//     }

//exercise4
// const devide = (a, b) => {
//     if (devide(a, 0)) {
//         return null && console.log("illegal") 
//     }
//     else {
//         return a / b
//     }
// }

//exercise5
// const factorial = (a) => {
//     if (a === 0 || a === 1){
//         return 1;
//     }
//     for(index = (a - 1); index >= 1; index--) {
//         a = a * index
//     }
//     return a
// }

//exercise6
// const beep = (str) => {
//     return str + "beep"
// }

//exercise7
const mul2nums = (a, b) => {
    if (a*b < 0) {
        return 0
    }
    else {
        return a*b
    }
}
console.log(mul2nums(2, -2))