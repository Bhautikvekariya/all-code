let num=[2,4,5,6,7];

let square=num.map((num)=>num*num);
console.log(square);

let sum=num.reduce((acc,el)=> acc+el);
console.log(sum);

let avg=sum/num.length;
console.log(avg);


let number=[1,3,4,5,6,7];

console.log(number.map((number)=>number+5));

let string=["apna",'colleg','modi','bjp'];
console.log(string.map((string)=>string.toUpperCase()));


const objectmerge=(obj1,obj2)=>
    ({...obj1,...obj2});
objectmerge({a:1,b:2},{c:3,d:4});
