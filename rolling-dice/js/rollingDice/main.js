
    const rollOfTheDie = () => {

      const dieValue = () => Math.floor(Math.random() * 6) + 1;

      let i = 0;
      for (const i = 0; i < 10; i++) {

          let die1 = dieValue();
          let die2 = dieValue();    

        
         

   
      
      
        return message = `${dieString} + ${dieString} == ${die1 + die2}`
    }
    
    // if (die1 === die2) {
    //     message += " Doubles!"
    }

      


    

console.log(rollOfTheDie())