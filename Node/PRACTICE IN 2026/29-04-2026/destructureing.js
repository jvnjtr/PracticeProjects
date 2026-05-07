let userDetail={
    name:'satyarth',
    age:20,
    city:'delhi',
    country:'india',
    myName(){
        return this.name;
    }
}
// in destructuiring you can access the particular value of the object
let myName=({name})=>{
    return name;
}
console.log(myName(userDetail));

let {name,age}=userDetail;
console.log(name);
console.log(age);
