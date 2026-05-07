const person={
    name: "John",
    age: 21,
    greet:()=>{
        console.log("hi i am"+ this.name);
    }
}
console.log(person.greet());

// now here the use of this is showing error because the this is representating to the global variables
// to make it native to the object make the normal function
const person1={
    name: "John",
    age: 21,
    greet(){
        console.log("hi i am"+ this.name);
    }
}
console.log(person1.greet());