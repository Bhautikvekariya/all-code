let url = "http://universities.hipolabs.com/search?name=india";
let btn = document.querySelector("button");

// btn.addEventListener("click" ,async ()=>{
//      let country=document.querySelector("input").value;
//      console.log(country);
//      let colArr=await getColleges(country);
//      console.log(colArr); 
//      show(colArr);
// });

//     function show(colArr){
//         let list=document.querySelector("#list");
//         list.innerTextL=""
//        for(col of colArr){
//         console.log(col.name);
//         let li=document.createElement("li");
//         li.innerText=col.name;
//         list.appenChild(li);
//        }
//     }

// async function getColleges(){
//    try {  
//        let res= await axios.get(url+country);
//         return res.data;
//     }catch(e){
//         console.log("error -",e);
//         return [];
//     }
// }



btn.addEventListener("click", async () => {
    let state = document.querySelector("input").value;
    console.log(state);
    let colArr = await getColleges(state);
    console.log(colArr);
    show(colArr);
})

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for (col of colArr) {
        console.log(col.name);
        let li = dcoument.createElement("#list");
        li.innerText = col.name;
        list.appenChild(li);
    }
}
async function getColleges() {
    try {
        let result = await axios.get(url + state);
        return result.dasta;
    } catch (err) {
        console.log("error -", err);
        return [];
    }
}


for(let i=0; i<=5; i++){
    console.log(i);
}

for(let i=5; i>=0; i--){
    console.log(i);
}