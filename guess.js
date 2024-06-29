let max=prompt("enter the max number");

let random=Math.floor(Math.random()*max)+1;

let guess=prompt("guess the number");

while(true){
    if(guess=='quite'){
        console.log("user quitting");
        break;
    }

    if(guess==random){
        console.log("you are right congratulaiton! ", random);
        break;
    }else if(guess < random){
        guess=prompt("hint: your guess number is too small, please try again");
        
    }else{
       guess= prompt("hint: your guess number is too large, please try again");
    }
}
let clear=setInterval(()=>{
    console.log("hello world");
},2000);

setTimeout(()=>{
    clearInterval(clear);
},10000);


const arrayAverage=function(array){
    let total=0;
    for(let number of array){
        total+=number;
    }
    return total/array.length;
}

let arr=[5,10,15,20];
console.log(arrayAverage(arr));


const arrayaverage=(arr)=>{
 let total=0;
 for(let number of arr){
    total+=number;
 }
 return total/arr.length;
}
let arr1=[2,4,6,8,10];
console.log(arrayaverage(arr1));



const Even=(num)=>{
    if(num%2==0){
        console.log("even");
    }else{
        console.log("not");
    }
}
Even(2);

const object={
    message:"hello world",
    logmessage(){
        console.log(this.message);
    }
};
setTimeout(object.logmessage,1000);

// let arr2=[1,2,3,4,5];

// let print=function (el){
//     console.log(el);
// }
// arr2.forEach(print);

let arr2=[1,2,3,4,5];

arr2.forEach((el)=>{
      console.log(el);
})


let arr3=[1,23,3,4,5];

arr3.forEach(function(el){
    console.log(el);
});


let object1=[
    {
        name:'aman',
        marks:45,
    },
    {
        name:"dhruv",
        marks:78,
    },
    {
        name:"kashyap",
        marks:56,
    },
]

object1.forEach((student)=>{
    console.log(student.name);
})

let num=[1,2,3,4,5];

let double=num.map((n)=>{
    return n*n;
});

let student=[
    {
        name:'aman',
        marks:45,
    },
    {
        name:"dhruv",
        marks:78,
    },
    {
        name:"kashyap",
        marks:56,
    },
]

let gpa=student.map((el)=>{
     return el.marks/10;
});


let nums=[1,2,3,4,5,6,7,8,9,10];

let ans=nums.filter((el)=>{
    return el%2==0;
})