let calculator = {
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    },
    div: function (a, b) {
        return a / b;
    },
    mod: function (a, b) {
        return a % b;
    }
}

let cal = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    },
    mul(a, b) {
        return a * b;
    }
};


let arr = [1, 4, 6, 8, 10, 11, 45];
let num = 5;

function getElement(arr, num) {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}


let str = "abcdabcdefgggh";

function uniq(str) {
    let ans = '';
    return str;
}

uniq();


let str1 = "apnacollege";
function countVowels(str1) {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1.charAt(i) == "a" || str1.charAt(i) == "e" || str1.charAt(i) == "i" || str1.charAt(i) == "o" || str1.charAt(i) == "u") {
            count++;
        }
    }
    return count;
}

let start = 1;
let end = 5;

function generateRandom(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}
generateRandom(start, end);

const student = {
    name: "hardik",
    age: 21,
    math: 67,
    english: 56,
    physics: 78,

    getAvg() {
        let avg = (this.math + this.english + this.physics) / 3;
        console.log(`${this.name} got avg marks: ${avg}`);
    }
}


try {
    console.log(a);
} catch {
    console.log("the error are the catch of a");
}

const sum = (a, b) => {
    console.log(a + b);
};


const cube = (n) => {
    return n * n * n;
};

const square = (n) => {
    return n * n;
};


const pow = (a, b) => {
    return a ** b;
};

const hello = () => {
    console.log("hello");
};

const sum1 = (a, b) => (
    a + b
);

const cube1 = (n) => (
    n * n * n
);

const square1 = (n) => (
    n * n
);

const cube2 = (n) => {
    return n * n * n;
};


console.log("hello world");

setTimeout(() => {
    console.log("code with harry");
}, 3000);

console.log("good word");


let id = setInterval(() => {
    console.log("hello world");
}, 1000);

console.log(id);

let id1 = setInterval(() => {
    console.log("good morning");
}, 2000);
console.log(id1);

let student1={
    name:"aman",
    marks:75,
    prop:this,

    getName: function(){
        console.log(this)
        return this.name;
    },
    getMarks: ()=>{
        console.log(this);
        return this.marks;
    },

    getInfo: function (){
        setTimeout(()=>{      //for arrow function parent this means studnet
            console.log(this);
        },1000);
    },
    getInfo2: function(){
        setTimeout(function (){      //for function are use for window means you call the your function 
            console.log(this);
        },1000);
    }
}

const arrowsquare=(n)=>{
    return n*n;
};

let nums=[1,2,3,4,4,56];

let res=nums.reduce((rel,el)=>{
    console.log(rel);
  return  rel+el;
});
console.log(res);

let array=[1,23,4,5,6,6,7,5,4];

let max=0;

for(let i=0; i<array.length; i++){
    if(max<array[i]){
        max=array[i];
    }
}

console.log(max);


