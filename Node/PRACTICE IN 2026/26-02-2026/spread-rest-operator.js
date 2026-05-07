// spread operator will copy the old array and give a new array just adding 3 dots before the old array like
const oldarray=['a','b','c'];
let newarray1=[oldarray];
console.log(newarray1);
// it will output like [ [ 'a', 'b', 'c' ] ]
// but using spread operator
let newarray2=[...oldarray];
console.log(newarray2);
//it will give us like [ 'a', 'b', 'c' ]

//use of rest operator
// by adding 3 dots before in a arrow function it gives us the multiple argument in a single array
let newarray3=(...args)=>{
return args;
};
console.log(newarray3(1,2,3,4,5));
////