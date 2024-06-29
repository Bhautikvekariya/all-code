for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        document.write(i+" ");
    }
    document.write("<br>")
}

for (let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        document.write(j+" ");
    }
    document.write("<br>");
}

let count=1;
for(let i=1; i<=4; i++){
    for(let j=1; j<=i; j++){
         document.write(count+" ");
         count++;
    }
    document.write("<br>");
}


for(let i=1; i<=4; i++){
    for(let j=4; j>=i; j--){
        document.write("&nbsp");
    }
    for(let k=1; k<=i; k++){
        document.write(i+" ");
    }
    document.write("<br>")
}

for (let i=1; i<=4; i++){
    for(let j=4; j>=i; j--){
        document.write("&nbsp");

    }
    for(let k=1; k<=i; k++){
        document.write(k+" ");
    }
    document.write("<br>");
}

let count1=1;
for(let i=1; i<=4; i++){
for(let j=4; j>=i; j--){
    document.write("&nbsp");
}
for(let k=1; k<=i; k++){
    document.write(count1+" ");
    count1++;
}
document.write("<br>");
}

let count2=1;
for(let i=1; i<=4; i++)
    {
        for(let j=4; j>=i; j--){
            document.write("&nbsp");
        }
        for(let k=1; k<=i; k++, count2++){
            document.write(count2+" ");
        }
        document.write("<br>");
    }

 for(let i=1; i<=5; i=i+1){
    for(let j=1; j<=i; j=j+1){
        document.write("*");
    }
    document.write("<br/>");
 }   

 for(let i=1; i<=5; i++){
    for(let j=5; j>=i; j--){
        document.write("&nbsp");
    }
    for(let k=1; k<=i; k++){
        document.write("*"+" ");
    }
    document.write("<br>");
 }

 let i,j,k;
 for(let i=1; i<=5; i++){
    for(let k=1; k<=5-i; k++){
        document.write("&nbsp;&nbsp;");
    }
    for(let j=1; j<=i; j++){
        document.write("*");
    }
    document.write("<br>");
 }

 let p,q,r, x=10;
 for(let p=1; p<=x; p++){
    for(let r=1; r<=x-p; r++){
        document.write("&nbsp;&nbsp;");
    }
    for(let q=1; q<=p; q++){
        document.write("*");
    }
    document.write("<br>");
 }

 for(let i=5; i>=1; i--){
    for(let k=1; k<=5-i; k++){
        document.write("&nbsp;&nbsp");
    }
    for(let j=1; j<=i; j++){
        document.write("*");
    }
    document.write("<br>");
 }

 let x1=10;
for(let i=x1; i>=1; i--){
    for(let k=1; k<=x1-i; k++){
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

let x2=6;
for(let i=1; i<=x2; i++){
    for(let j=1; j<=x2-i; j++){
        document.write("&nbsp;&nbsp;");
    }
    for(let k=1; k<=i; k++){
        document.write("*");
    }
    for(let l=1; l<=i-1; l++){
        document.write("*");
    }
    document.write("<br>");
}

let x3=6; 
for(let i=x3-1; i>=1; i--){
    for(let j=1; j<=x3-i; j++){
        document.write("&nbsp;&nbsp;");
    }
    for(let k=1; k<=i; k++){
        document.write("*");
    }
    for(let l=1; l<=i-1; l++){
        document.write("*");
    }
    document.write("<br>");
}
