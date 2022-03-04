// Syntax Function
// Function Declaration
function myFunction() {
    console.log(`Ini Function Declaration`)
}

// Function Expression
let myFunction2 = function () {
    console.log(`Ini Function Expression`)
}

// Function Expression with arrow function
let myFunction3 = () => {
    console.log(`Arrow Function`)
}

// Call Function
// myFunction()
// myFunction2()
// myFunction3()

let greeting = () => {
    let name1 = "Andra "
    let name2 = "Andaru"
    let namaLengkap = name1 + name2


    console.log(namaLengkap)
}

greeting()

// // With Parameter
// let hello = (a, b) => {
//     console.log(`Hello ${a + b}`)
// }

// hello(`Yusuf `, `Hilman`)
// hello(`Hilman `, `Yusuf`)

// // Return
// // Return digunakan ketika kita mau memakai sebuah hasil dari function
// // Return juga untuk menghentikan proses dari si function
// let number1 = () => {
//     let a = 2 ** 2
//     return a
//     console.log(`Jalan`)
// }

// let number2 = () => {
//     let b = 3 ** 2
//     return b
// }

// console.log(number1() * number2())

// // Parameter And Return
// let sum = (input1, input2) => {
//     return input1 + input2
// }

// console.log(sum(2, 5))

// // Parameter or Argument
// // Parameter => adalah variabel yang kita buat SAAT MEMBUAT FUNCTION
// // Argument => adalah value yang kita buat SAAT MEMANGGIL FUNCTION

// // Default Parameter
// let tambah = (a, b, c = 5) => {
//     return a + b + c
// }

// console.log(tambah(3, 4))


// // Callback Function
// let minus = (a, b) => {
//     // a = 20
//     // b = 10 (hasil return dari function angka())
//     return a - b
// }

// let angka = () => {
//     return 10
// }
// // Ketika function dipanggil menjadi argument, maka itu adalah callback function
// console.log(minus(20, angka()))

// // Calling Other Function 
// let addition = (a, b) => {
//     return a + b
// }

// let substraction = (a, b) => {
//     return a - b
// }

// let multiplication = (a, b) => {
//     return a * b
// }

// let division = (a, b) => {
//     return a / b
// }

// let showResult = (a, b) => {
//     console.log(addition(a, b))
//     console.log(substraction(a, b))
//     console.log(multiplication(a, b))
//     console.log(division(a, b))

// }

// showResult(10, 5)

// // Recursive Function
// // Function yang memanggil dirinya sendiri
// let countdown = (counter) => {
//     console.log(counter)
//     counter--
//     if (counter >= 0) {
//         countdown(counter)
//     }
// }

// countdown(3)


