

console.log("Let's roll some dice, baby! \n---------------------------")



    const rollOfTheDie = () => {
      
      let dieValue = () => Math.floor(Math.random() * 6) + 1;
      for (let i = 0; i < 10; i++) {
      
        let die1 = dieValue();
        let die2 = dieValue();
        let dieString1 = "";
        let dieString2 = "";
          switch (die1)
          {
            
              case 1:
                 dieString1= "one";  
                 break;
              case 2:
                 dieString1 = "two";
                 break;
              case 3:
                 dieString1 = "three";
                 break;
              case 4:
                 dieString1 = "four";
                 break;
              case 5:
                 dieString1 = "five";
                 break;
              case 6:
                 dieString1 = "six";
                 break;
                  }
            
          switch (die2)
          {
         
              case 1:
                  dieString2= "one"; 
                  break;
              case 2:
                  dieString2 = "two";
                  break;
              case 3:
                  dieString2 = "three";
                  break;
              case 4:
                  dieString2 = "four";
                  break;
              case 5:
                  dieString2 = "five";
                  break;
              case 6:
                  dieString2 = "six";
                  break;
          }
  
           let message = `${dieString1} + ${dieString2} == ${die1 + die2}`
            if (die1 === die2) {
              message += `  DOUBLES!`
            }
            console.log(message)
         
        }
      
    }

      


    

rollOfTheDie()


