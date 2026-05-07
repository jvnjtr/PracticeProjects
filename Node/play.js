var name="jivan";
console.log(name);
var age=33;
var hasHobbies=false;

function userDetail(name, age, hasHobbies){
    return 'name is : ' + name + ' and age is : ' + age + ' and hasHobbies ' + hasHobbies;
}

console.log(userDetail('jivan',44,true))

let myname='vamp';
const newage=90;
// newage=34; this is not allowed

const userDetail1=function (name, age, hasHobbies){
    return 'name is : ' + name + ' and age is : ' + age + ' and hasHobbies ' + hasHobbies;
}
//here this is called  i am assigning one constant variable and assigning a annonymous function cause this function does not have a name

const userDetail2=(name, age, hasHobbies)=>{
    return 'name is : ' + name + ' and age is : ' + age + ' and hasHobbies ' + hasHobbies;
} // this is the shorter version of the above function using arraow function instead

const summation=(a,b)=>{
    return a+b;
}

console.log('sum is'+summation(3,4));

const summation2=(a,b)=>a+b;  // i am not wrting a cruly braces and not writing return
const incr=a=>a+1; // here i am using one argument so do not need ()
const newval=()=>3+4;
console.log(newval());