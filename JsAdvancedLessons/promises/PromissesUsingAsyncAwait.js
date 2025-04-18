console.log("Chaining promises with async operation:");


async function asyncChainExample(params) {
  
    let number = params;

    await new Promise((resolve, reject) => {
        setTimeout(() => {
           console.log(number);
            number = number * 2;
             resolve(); 
        }, 1000);
       
    });

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(number);
         number = number * 2;
     resolve() ;
      }, 1000);
     
    });

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(number);
         number = number * 3;
      resolve() ;
      }, 1000);
       
    });
} 

asyncChainExample(10);