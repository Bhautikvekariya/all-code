let url="https://icanhazdadjoke.com/api";

async function getjoke(){
    try{
        const config={headers: {Accept:" application/json"}}
        let res= await axois.get(url,config);
        console.log(res.data);
    }
    catch(e){
        console.log("error",e);
    }
}