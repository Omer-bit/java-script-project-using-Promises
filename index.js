const gamePurchase =new Promise((reject,resolve)=>{
    setTimeout(()=>{
        
        
        const error=false
        
        if(error){
            reject("Insufficient balance")
        }
        else{
            resolve("Thank you for buying")
        }


    },3000)
    }
)
gamePurchase
.then((success)=>console.log(success))
.catch((failed)=>console.log(failed))