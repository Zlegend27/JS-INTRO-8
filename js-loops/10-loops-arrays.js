/*
Requirement:
-Create 2 arrays that stores numbers below.
First array->       [ 5, 8, 2, 1, 2 ]
Second array ->     [ 9, 3, 5, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will multiply the numbers of the same indexes from the first 2 arrays 
and output the third array as well.

Third array->       [ 45, 24, 10, 1, 0 ]
*/

const arr1 = [5, 8, 2, 1, 2];
const arr2 = [9, 3, 5, 1, 0];

const arr3 = [];

for (let i = 0; i <= arr1.length - 1; i++) {
    arr3.push(arr1[i] * arr2[i]);
}

console.log(arr3);

arr3.push(arr1[0] * arr2[0]);
arr3.push(arr1[1] * arr2[1]);
arr3.push(arr1[2] * arr2[2]);

for (const arr of arr3) {
    arr
}

/*
Please find the first even number from the below array
[-1, 1, 3, 0, 2, 6, 8] -> 0
*/

const nums = [-1, 1, 3, 0, 2, 6, 8];

for (num of nums) {
    if (num % 2 === 0) {
        console.log(num);
        break;
    }
}
 

// Find the first city that has the odd length  -> Chicago
const cities = ['Berlin', 'Rome', 'Chicago', 'Kiev', 'Istanbul', 'Tokyo'];
let city;

for (const citi of cities) {
    if (citi.length % 2 !== 0) {
        city = citi;
        break;
    }
} 
 
console.log(city); 

// Find all the cities that has length more than 5 -> [ 'Berlin', 'Chicago', 'Istanbul' ]
const cityWith6OrMore = [];

for(const citi of cities) {
    if(citi.length > 5) {
        cityWith6OrMore.push(citi);
    }
} 

console.log(cityWith6OrMore);

// Function version of similar question

function length6orMore(arr) { 
    const newArr = []
    for(const element of arr) {
        if(element.length > 5) newArr.push(element);
    } 
     
    return newArr;
} 
 
console.log(length6orMore(['Berlin', 'Rome', 'Chicago', 'Kiev', 'Istanbul', 'Tokyo']));