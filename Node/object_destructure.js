const person={
    name: 'John',
    age: 21,
    greet:()=>{   // here this will not work in arrw functin you need to use the regular function
        return this.name + ' s age is ' + this.age;
    },
    greet1() { // Regular function syntax
        return this.name + "'s age is " + this.age;
    }
};

const newarr=({name})=>{
    console.log(name);
}
newarr(person);

const {name, age}=person;
console.log(name, age);
const arr=['jivan',33]
const [name1, age1]=arr
console.log(name1, age1)