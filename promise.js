const Data = new Promise((resolve, reject) => {
    //console.log("Promise is pending");
    if(false){
        resolve("Promise is resolved"); 
       } 
       else{
        reject("Promise is rejected");}
});
Data.then((res) =>{
    console.log(res);
    
})
.catch((rej) =>{
    console.log(rej);
});
