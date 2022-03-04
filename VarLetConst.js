// Var
// Scope => Function
function a() {
    var name = `frengky`
}
console.log(a)

// Mutable => True
var mobil = `toyota`
mobil = `ferari`
console.log(mobil)

// Let
// Scope => function, looping, conditional
let i = 0
while (i < 2) {
    let gelas = `besar`
    i++
}
console.log(gelas)

// Mutable => True

// Const
// Scope => function, looping, conditional
let j = 0
while (j < 2) {
    const handuk = `besar`
    j++
}
console.log(handuk)

// Mutable => False
const single = false
single = true
console.log(single)

