// create a function called averageInArray and pass a parameter called array
// initialize a sum variable at 0
// create a for of loop that iterates through each element of array
// inside the loop add the element to the sum variable
// do this for every element
// outside the for loop return sum / array.length

const averageInArray = array => {
    let sum = 0;
    for (const num of array){
        sum += num;
    }
    return sum / array.length;
};
console.log(averageInArray([1,2,3,4]));