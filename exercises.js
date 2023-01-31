//3-1 flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

let flatten = arrays.reduce((total, amount)=> {
    return total.concat(amount)
}, [])

console.log(flatten)



//3-2 loop
function loop(value, test, update, body) {
    for (let i = value; test(i); i = update(i)) {
      body(i)
    }
  }
loop(3, n => n > 0, n => n - 1, console.log);



//3-3 and 3-4 
function everyLoop(array, test) 
{
    for (let element of array) {
        if (test(element)=== false) {
            return false
        }
    }
    return true
}

function everySome(array, test) 
{
    return array.some(test)
} 

console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true