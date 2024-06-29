function sum(){
    let a=10;
    let b=12;
    let c=a+b;
    console.log(`sum of the number: ${c}`);
}
sum();

function print(){
    for(let i=0; i<=5; i++){
        console.log(`outer loop ${i+1}`);
        for(let j=0; j<=5; j++){
            console.log(j);
        }
    }
}
print();

function num(){
    for(let i=5; i>=1; i--){
        console.log(i);
    }
}
num();

function isAdult(){
    let age=19;
    if(age==18){
        console.log(`the man is adult`);
    }else{
        console.log(`the man is oldman`);
    }
}

isAdult();

function peom(){
    console.log("Twinkle twinkle little star.");
    console.log("How I wonder what you are.");
    console.log("Up above the world so high.");
    console.log("Like a diamond in the sky.");
    console.log("Twinkle twinkle little star.");
    console.log("How I wonder what you are.");
}
peom();

function dice(){
    let dice=Math.floor(Math.random()*6)+1;
    console.log(dice);
}
dice();

function info(name,age){
     console.log(`${name}'s age is ${age}`);
}
info("bhautik",20);

function sum(num1, num2){
 
     console.log(num1+num2);
     console.log(num1-num2);
     console.log(num1*num2);
     console.log(num1**num2);
     console.log(num1/num2);
     console.log(num1%num2);

}
sum(20,10);

function avg(a,b,c){
    let avg=(a+b+c)/3;
    console.log(avg);
}
avg(1,2,3);

function mul(n){
    for(let i=n; i<n*10; i+=n){
        console.log(i);    }
}
mul(11);

function sum(a,b){
    return a+b;
}
// sum(sum(1,2),3);
console.log(sum(1,2));


function drive(age){
    if(age>=18){
        return "you can drive";
    }else{
        return "you can't drive";
    }
}
drive(12);

function vote(age){
    if(age>=18){
        return "you can vote";
    }else{
        return "you can't vote";
    }
}

function number(n){
 let sum=0;
 for(let i=1; i<=n; i++){
    sum += i;
 }
 return sum;
}

let arr=["hi","hello","bye!"];

function concat(arr){
    let result='';
    for(let i=1; i<arr.length; i++){
        result += arr[i];
    }
    return result;
}

function scop (a,b){
    let sum=a+b;
    console.log(sum);

}

scop(1,2);

function outerscop(){
    let x=2;
    let y=4;
    function innerscop(){
        console.log(x);
        console.log(y);
    }
    innerscop();
}
outerscop();

 let greet="hello";                         //global scop
function changegreet(){   
    let greet="Namaste";                   //fucnton scop
    console.log(greet);
    function innergreet(){           
        console.log(greet);                //laxical scop 
    }
      innergreet();
}

console.log(greet);
changegreet();

let sum1=function (a,b){
    return a+b;
}


function multipleGreet(func,count){
        for(let i=1; i<=count; i++){
           func();
        }
}

let greet2=function (){
    console.log("hello");
}

multipleGreet(function(){console.log("namaste")},4);


function oddEventtest(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }else if(request=="even"){
        return function (n){
            console.log(n%2==0);
        }
    }else{
        console.log("wrong request");
    }
}