// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function color(){
  const primary = "red, blue, yellow";
  console.log(`The primary colors are ${primary}`);
  
    function secondaryColors(){
    const secondary = "purple, orange, green";
    console.log(`When you mix ${primary} you get ${secondary}`);
      
        function tertiaryColors(){
            const tertiary = "red-orange, yellow-orange, yellow-green, blue-green, blue-violet, and red-violet"
            console.log(`When you mix ${primary} and ${secondary} you can make the colors ${tertiary}`)
        }
      tertiaryColors()
    } 
  secondaryColors()
} 
color()

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
