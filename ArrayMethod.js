// Array Method 
// forEach => Untuk me-looping isi array
let arr = [`Banana`, `Orange`, `Apple`]
arr.forEach(item => {
    console.log(item)
})

// forEach 2 Dimension
let arr1 = [['Apel', 1], ['Mangga', 2]]
arr1.forEach(item => {
    item.forEach(item2 => {
        console.log(item2)
    })
})

// Map => untuk merubah data di dalam array
let arr2 = [1, 2, 3, 4, 5]
let newArr2 = arr2.map(item => {
    return item * 2
})

console.log(newArr2)

// Map => untuk merubah data di dalam array
let arr4 = [2, 4, 6, 8, 10].map(item => {
    return item * 2
})

console.log(arr4)


// Filter => untuk menyaring data di dalam array
let arr3 = [`car`, 'fan', 'mouse', `monitor`]
let newArray3 = arr3.filter(item => {
    return item.includes(`a`)
})
console.log(newArray3)

