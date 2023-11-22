// spread operator in arrays

const numbers = [1, 2, 3];

// create a new array that stores 1, 2, 3, 4, 5, 6
const newArr = [...numbers, 4, 5, 6];

console.log(Math.max(...numbers));



// spread operator with objects

const table = {
    use: 'dining',
    material: 'wood'
}

const table2 = {
    ...table,
    isExtendable: true
}

const table3 = {
    ...table2,
    shape: 'round'
}

console.log(table3);