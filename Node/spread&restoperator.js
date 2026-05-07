const person={
    name: 'John',
    age: 21,
    greet:()=>{   // here this will not work in arrw functin you need to use the regular function
        return this.name + ' s age is ' + this.age;
    },
    greet1() { // Regular function syntax
        return this.name + "'s age is " + this.age;
    }
}

console.log(person.greet());
// how to copy the above object in to new object using spread operator
const newPerson={...person};// this ... is the spread operator
console.log(newPerson)
const detail=['jivna',33,'bbsr']
const newDetail=[...detail]
console.log(newDetail)

//////////////////////////// rest operator////////////////////
// to pass n no of arguments to a fucntion
const newArr=(...args) =>{
    return args;
}
console.log(newArr(1,2,3,4,5,4));
