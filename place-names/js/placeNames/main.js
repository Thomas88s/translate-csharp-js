
const names = [
    "Nashville", "Hong Kong", "The back yard", "Earth",
     "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
 ];
 
 console.log("All Pace Names");
 
 for (const name of names) {
   console.log(name);
 }

 console.log("\n 'The' Place Names")

 const foundThe = names.filter(n => n.startsWith('The'));
 
 for (foundName of foundThe) {
     console.log(foundName)
 }