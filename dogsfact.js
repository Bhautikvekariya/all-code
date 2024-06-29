let url="https://dog.ceo/api/breeds/image/random";
let btn=document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let link=await getimg();
    let img=document.querySelector("#result");
     img.setAttribute("src",link);
     console.log(link);
})

async function getimg(){
 try{
    let res=await axios.get(url);
    return res.data.message;
 }
 catch(e){
    return "No img found";
 }
}