const favmovies = ("Avatar");
let guess = prompt("guess your movies");

while (guess !== favmovies) {
    if (guess == "quit") {
        console.log("you quit");
        break;
    }
    guess = prompt("wrong enter please repeat guess movies");
}
if (guess = favmovies) {
    console.log("congratulation!");
} else {
    console.log("you quit");
}

const car = [
    {
        name: "puchev",
        model: "Punch EV Smart 3.3",
        color: "black",
    },
    {
        name: "verna",
        model: 'verna Ex',
        color: "white",
    },
    {
        name: "kia",
        model: "kia sonet",
        color: "grey",
    }
]
console.log(car[1].name);

const person={
    name:"elon",
    age:59,
    city:"new jersy",
}
console.log(person.city="New york", person.country="United State");


let arr=[1,2,3];

let max=arr.reduce((max,el)=>{
     if(max<el){
        return el;
     }else{
        return max;
     }
});


let array=[10,20,30,40,50];

let mul=array.every((el)=>el%10==0);
console.log(mul);

let arra=[1,3,4,5,6];

let min=arra.reduce((min,el)=>{
    if(el>min){
        return min;
    }else{
        return el;
    }
});
console.log(min);


let getMin=(arra)=>{
    let min=arra.reduce((min,el)=>{
        if(el>min){
            return min;
        }else{
            return el;
        }
    });
      return min;
}
let arra1=[1,3,4,5,6];


 function sum(a,b=2){
      return a+b;
}
 function sum(b,a=2){
      return a+b;
}


function sum(...args){
    for(let i=0; i<args.length; i++){
        console.log("you gave us:",args[i]);
    }
}

function sums(){
    console.log(arguments);
    console.log(arguments.length);
    arguments.push(1);
}

function sum1(...args){
    return args.reduce ((sum,el)=>sum+el);
}
function min1(msg,...args){
    console.log(msg);
    return args.reduce ((min1,el)=>{
        if(min1>el){
            return el;
        }else{
            return min1;
        }
    });
}

let names=["abhay","bhavin","manan","jigo",'dhruv',"tushar","jaydeep"];

let [runner,winner,...other]=names;

let object={
    name:'rakesh',
    enrollment:12333333,
    state:'Gujarat',
    subject:'maths',
    marks:78,
};

let {  city ="mumbai" ,name, state  }=object;


