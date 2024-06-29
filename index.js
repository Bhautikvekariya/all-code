let btn=document.querySelector("button");
// let h1=document.queryselector("h1");
let url = "https://catfact.ninja/fact";

btn.addEventListener("click",async ()=>{
     let res= await getFacts();
     console.log(res);
     let p=document.querySelector("p");
     p.innerText=res;
})
// async function getdata(){
//      let res=await fetch(url);
//      let data1=await res.json();
//      console.log(data1.fact);

//      let res2=await fetch(url);
//      let data2=await res2.json();
//      console.log(data2.fact);
// }

async function getFacts(){
    try{
        
        let res1= await axios.get(url);
        return res1.data.fact;
    }
    catch(e){
        return "no data"
    }
}
