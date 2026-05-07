const hobbies=['cookin','reading','travelling'];
//now this array has more built in functions to catch up
console.log(hobbies.map(hobby=>'hobby is :' + hobby)); 
// here map function creates a new array
// the origional array is 
console.log(hobbies);
for(let hobi of hobbies){
    console.log(hobi);
}