let marks=89;
if(marks >= 33){
    console.log("pass");
    if(marks >=75){
        console.log("greade is A");
    }else{
        console.log("greade is f");
    }
}else{
    console.log("better luck next time");
}

let marks3=45;
if(!(marks <=33)){
    console.log("pass");
    console.log("A+");
}

let i=1;
while(i<=5){
    if(i==3){
        break;
    }
    console.log(i);
    i++;
}

let heroes=[['spiderman','thor','ironman'],['ironman','flash','superman']];

for(let i=0; i<heroes.length; i++){
    console.log(i,heroes[i],heroes[i].length);
    for(let j=0; j<heroes[i].length; j++){
        console.log(`j=${j},${heroes[i][j]}`);
    }
}

let student=[['aman',79,'maths'],['bhautik',89,'science'],['rakesh',59,'english']];

for(let i=0; i<student.length; i++){
    console.log(`info of student # ${i+1}`)
    for(let j=0; j<student[i].length; j++){
        console.log(student[i][j]);
    }

}

let vegetable=[["brinjal",30,"per kg price"],["lemon",40,"per kg price"],["coliflower",50,"per kg price"]];
for(let i=0; i<vegetable.length; i++){
    console.log(`price of vegetable @${i+1}`)
    for(let j=0; j<vegetable[i].length; j++){
        console.log(vegetable[i][j]);
    }
}

// let laptop=[['lenovo',50000],['hp',56000],['dell',60000]];
// for(let i=0; i<laptop.length; i++){
//     console.log(`laptop price ${i+1}`)
//     for(let j=0; i<laptop[i].length; j++){
//         console.log(laptop[i][j]);
//     }
// }

let hero=[['spiderman','thor','ironman'],['ironman','flash','superman']];
for(list of hero){
    for(heroes of list){
        console.log(heroes);
    }
}


for(let i=5; i>=1; i--){
    for(let k=1; k<=5-i; k++){
        document.write("&nbsp;&nbsp;");
    }
    for(let j=1; j<=i; j++){
        document.write("*");
    }
    for(let l=1; l<=i-1; l++){
        document.write("*");
    }
    document.write("<br>");
 }