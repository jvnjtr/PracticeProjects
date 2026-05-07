console.log("Start");

function slowTask() {
  for (let i = 0; i < 1e9; i++) {} // simulate delay
  return "Done";
}

console.log(slowTask());
console.log("End");

/// here the code blocks till forloop complete and then console end

console.log("Start1");

setTimeout(() => {
  console.log("Async Task Done");
}, 2000);

console.log("End1");

//A Promise is an object that represents:future result of an async operation
//promise has 3 states pending, resolved, rejected

const promise_one=new Promise((resolve,reject)=>{
   let a=10;
   if(a>5){
    resolve("Promise Resolved");
   }else{
    reject("Promise Rejected");
   }
});

function fetchUser(){
   return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        let userFound=true;
        if(userFound){
            resolve({name:'satyarth',age:20});
        }else{
            reject("User Not Found");
        }
     },2000);
   });   
}
fetchUser()
.then(user=>console.log(user))
.catch(error=>console.log(error));

//using async await
async function getUser() {
  try {
    const user = await fetchUser();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

getUser();
console.log("Fetching user...");


const fs = require("fs");

function readFilePromise() {
  return new Promise((resolve, reject) => {
    fs.readFile("jivan.txt", "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

readFilePromise()
  .then(data => console.log(data))
  .catch(err => console.log(err));


//setTimeout is just a delay tool
//Promise is a structure to handle async results cleanly