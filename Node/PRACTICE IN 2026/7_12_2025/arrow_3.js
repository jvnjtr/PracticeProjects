function showUserName(name,age){
    return 'name is :'+name +' age is :'+age
}
//now call the fucntion
let result=showUserName('jivan',34);
console.log(result);

//now shorten the function
result=function showUserName1(name,age){
    return 'shorten function called'+name;
}
console.log(result('jivan1',34));

//now short more

result=(name,age)=>{
    return'more short functin called'+name;
}
console.log(result('jivan2',34))

//this above is called a arrow function
//f the function does not take any argument and only returns the result then
result=()=>13*14;
console.log(result());
