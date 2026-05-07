const hobbyAr=['reading', 'gaming', 'coding', 'hiking', 'cooking'];
for(let hobbies of hobbyAr){
    console.log(hobbies);
}
let newHobbyArr=hobbyAr.map((hobby)=>{
    return `My hobby is ${hobby}`;
});
console.log(newHobbyArr);
for(let hobby of newHobbyArr){
    console.log(hobby);
}
hobbyAr.push('traveling');
console.log(hobbyAr);
hobbyAr.splice(2,1,'programming');
console.log(hobbyAr);