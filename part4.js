// let arr=[1,2,3,4,5,6,2,3];
// let num=2;

// for(let i=0; i<arr.length; i++){
//     if(arr[i]==num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

let number = 287152;
let count = 0;

while (number !== 0) {
    // Increment the count for each digit
    // Remove the last digit from the number
    number = Math.floor(number / 10);
    count++;
}

console.log("Number of digits:", count); // Output: Number of digits: 6

let num = 287152;
let sum=0;

while(num!==0){
    sum+=num%10;
   num=Math.floor(num/10);
    
}
console.log("sum of the number:",sum);


let n = 7; // Change this value to calculate the factorial for a different number
let factorial = 1;

if (n === 0) {
    factorial = 1;
} else {
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
}

console.log(`${n}! (factorial of ${n}) = ${factorial}`);

let arr=[19,23,56,24,79,34];
let largest=0;

for(let i=0; i<=arr.length; i++){
    if(largest <arr[i]){

        largest=arr[i];
    }
}

console.log(`arry of the largest number:`,largest);

let twitter={
    username:"elon",
    content:'To an exciting & inspiring future!',
    likes:"35k",
    reports:"4.4k",
    views:16
}
twitter["username"];

const classInfo={
    aman:{
        grade:"A",
        city:"mumbai",
    },
    kashyap:{
        grade:"c",
        city:"junagadh",
    },
    bhautik:{
        grade:"A+",
        city:"bangaluru",
    }
}



const classInfo1=[
    {
        name:"kashyap",
        grade:"A",
        city:"mumbai",
    },
     {
        name:"rakesh",
        grade:"c",
        city:"junagadh",
    },
    {
        name:"elon",
        grade:"A+",
        city:"bangaluru",
    }
]