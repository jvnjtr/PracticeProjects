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

console.log(person.greet1());