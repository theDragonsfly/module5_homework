let array = [1,1,9];
let isEqual = true;
let arrayLength = array.length;
for(let i = 1; i < arrayLength; ++i) {
    isEqual = array[i] === array[i-1];
}
console.log(isEqual);