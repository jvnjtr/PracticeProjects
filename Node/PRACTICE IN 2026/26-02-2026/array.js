const myarr=['jivan','sudam','sunil','bikash'];
for(let arr of myarr){
    console.log(arr);
}
 myarr.push('swaviman');
 console.log(myarr);


 /// map function in my arr
 let newarr=myarr.map(arr=>{
   return 'Name is :' + arr;
 });
 console.log(myarr);
 console.log(newarr);