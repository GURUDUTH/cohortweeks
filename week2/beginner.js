function sumofnumbers(a,b){
    return (a+b);
}
console.log(sumofnumbers(12,10));

function itonsum(num){
    let ans = 0;
    for (let i=1; i<num ; i+=1){
        ans += i;
    }
    return ans;
}
console.log(itonsum(20));

//I/O operations
const fs = require("fs"); //you can change the name of the variable to say fs --> fsa but not require("fs")
const content = fs.readFileSync("a.txt","utf-8"); //utf- 8 is the necoding in which we want the data to be
console.log(content)

const fs = require("fs");
const access = fs.readFileSync("b.txt","utf-8");
console.log(access)

//if i wanted to read and output form multiple files
function reading_files(file1,file2){
    const fs = require("fs");
    let files = [file1,file2]
    for(let i=0; i<2 ; i+=1){
        const content = fs.readFileSync(files[i],"utf-8");
        console.log(content);
    }
}
reading_files("a.txt","b.txt");

// same program for n number of files the user pases in a list and store the o/p in  a list
function reading_files(files){
    const fs = require("fs");
    let storage = []
    for(let i=0; i < files.length ; i+=1){
        const content = fs.readFileSync(files[i],"utf-8");
        storage.push(content);
    }
    return storage
}
console.log(reading_files(["a.txt","b.txt","c.txt"]));


//Reading file Asynchronously
const fs= require("fs")

fs.readFile("a.txt","utf-8",function(err,contents){
    console.log(contents);
});


//Functional Arguments

function addition(a,b){
    return (a+b);
}
function operation(a,b,addition){
    return addition(a,b)  // you will return the third argument which is a function while passing it the first two arguments 
}
console.log(operation(2,10,addition)); //third argument as a function


function subratraction(a,b){
    return (a-b);
}
function DoOperation(a,b,op){
    return op(a,b);
}
console.log(DoOperation(10,5,subratraction))


//Asynchronous code , Callbacks

const fs = require("fs");
const { resolve } = require("path");
const { promises } = require("readline");
function print(err,contents){ //if there is an error the error will be returned if not contents will be returned
    console.log(contents);
}
fs.readFile("c.txt","utf-8",print); //the third argument says whenever the function is done return the ouput 
fs.readFile("a.txt","utf-8",print); //print is passed as call back to fs.readFile
console.log("Done");


fs.readFile("a.txt","utf-8",function(err,contents){ //another way of doing the same above you are just not givign any funciton name
    console.log(contents);                          //or say anonymous function is directly used as callback here its executed once the file reading is done
});
//fs.readFile() here is an asynchronous function because it does not do block execution like fs.readFileSync instead, it takes a callback that is executed later when the file is read.
//also the readFileSync does not expect a third argument like the readFile does
//a simple example of doing it in a condition loo[]
function print(err,contents){
    if (err){
        console.log("file not foud or check for error")
    }
    console.log(contents);
}
fs.readFile("a.txt","utf-8",print)

//Settimeout isa function available globally so you dont have to do any import 
//setTimeout is another asynchronous function that executes a certain code after some time

console.log("hey there are you ready");
function timeout(){
    console.log("well here we are come in");
}
setTimeout(timeout,7000);       //timeout is a call back here and we are telling to execute timeout function after 7 seconds
console.log("we are checking you id");
//in some ways not literally but say if you have a call back that is not being executed after some wait or ticks time instead its just getting executed in a function itself you may just consider it as a function argument

//promises 
//assignment Promisified version sof settimeout,fetch,fs.readfile
let rect3 = {
    width: 2,
    height: 4
}
function area(rect){
    return rect.width * rect.height;
}
console.log(area(rect3))
// this is a normal function that we use to say get an area of rectangle from an object 

//creating and object called rect from the rectangle class and giving it some properties
class Rectangle{
    constructor(width,height,color){
        this.width = width;
        this.height = height;                        // width,height,color are the properties
        this.color = color;
    }

    area(){
        const area = this.width * this.height;        //area and paint are the methods here
        return area
    }
    paint(){
        console.log("painting with the color: " +this.color);
    }
}
const rect = new Rectangle(2,4,"red"); //you are creating a new object of the reactancgle class(or say instance of the rectangle class) the object here is rect and class is rectngle that we have defined
console.log(rect)
console.log(rect.width);
console.log(rect.height)
rect.paint() //this here in the program isnt returning anything its just logging the color red to paint
const area = rect.area();
console.log('the area of the reactangle is :' + area)

//Inheritance in classes


// some extra classes
const date = new Date();   //this is a class that js provides 
                           //and you created a new object of the Date class
console.log(date);
console.log(date.getDay());   //here you called a function on the object date
console.log(date.getMonth());
console.log(date.getFullYear());

const map = new Map();     //this is another class that js provides similar to how we create the objects
map.set('name', 'Alice');
map.set('age', 30);
console.log(map.get('name'));


//Promise class
//example of calling in both versions
setTimeoutPromisified(3000).then(callback) //promisified version
setTimeout(callback,3000) //callback version



//When a Promise is created, it receives a function as an argument.
//This function itself receives another function (resolve) that JavaScript provides.
//resolve is a function that marks the Promise as "fulfilled" (completed successfully).

function SetpromisifiedTimeout(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
//you define a function that takes in a paramaters of milliseconds
//then you return an instance of the promise class that resolves after ms milliseconds
//and inside that you define a resolve function resolve=> the name can be anything here but inside setTimeout(resolve is an actual js function name) 
//youre pointing that resolve to a setTimeout which is a callback function that delays an execution of a function as its first argument then takes in a specified time in milliseconds as second argument
//we also pass resolve in place of passing an actual function that changes the Promise from "Pending" to "resolved" so after the milliseconds resolve() will run


resolve => setTimeout(resolve, ms); //is just a shorter way to write the below

function(resolve) {  // but here resolve is not a user defined paramater instead actual resolve function js is passed as paramater  
    setTimeout(resolve, ms);  //since resolve is passed as paramater to the function it is accessible inside setTimeout
}
//So, the arrow => just means "this is a function" in a shorter syntax

//The resolve inside new Promise(resolve => {...}) is just a parameter name.
//The actual function is created by JavaScript and passed automatically.
//So basically
//resolve => is just a parameter name (you can change it).
//The real resolve function is created by JavaScript itself when the program runs.


//below is a function that we want or is supposed to run after the timeout
function timeout(){
    console.log("a total of 7 seconds have passed");
}
SetpromisifiedTimeout(7000).then(timeout) //this is where everything comes together

//to understand the flow of each below is a function that shows every step in form of a function
function SetpromisifiedTimeout(ms) {
    return new Promise(function(resolve) {
        console.log("Before setTimeout, resolve is:", resolve);
        setTimeout(function() {
            console.log("Inside setTimeout, calling resolve now...");
            resolve();
        }, ms);
    });
}

SetpromisifiedTimeout(2000).then(() => console.log("Promise resolved!"));


//NOW COMING BACK TO NORMAL WAY OF DEFINING PROMISIFIED VERSION OF SETTIMEOUT

function SetpromisifiedTimeout(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
function timeout(){
    console.log("a total of 7 seconds have passed");
}
SetpromisifiedTimeout(7000).then(timeout) 


function SetpromisifiedReadfile(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

function readfile(file){
    const fileread = require("fs");
    fileread.readFile(file,"utf-8",function(err,content){
        console.log(content);
    })
}
SetpromisifiedReadfile(4000).then(()=> readfile("b.txt"));

//.then expects a function if you fo readfile("b.txt") //this is a function execution and is executed right away when program reaches this line in the code
//you can either set the file isnide the readfile function itself readfile("b.txt") or do .then(()=> readfile("b.txt")) which is function reference
//remember you have to pass a function reference not a function execution

function PromisifiedReadFile(file){
    return new Promise(function(resolve,reject){
        const filereads = require("fs")
        filereads.readFile(file,"utf-8",function(err,data){
            if (err){
                reject(err);     //If error, reject the Promise
            }
            else{
                resolve(data);   // If successful, resolve the Promise with data and stores file content in the promise
            }
        });
    });
}

PromisifiedReadFile("c.txt").then(function(content){   //since .then expects a function we will pass the contents of file as a simple function
    console.log(content);
})

/*read the below to understand more 
The function fs.readFile() reads the file content.
When the file read is successful, resolve(data) is called.
This means whatever data is (the file content) gets stored inside the Promise.

✔️ The resolve(data) stores the data inside the Promise.
✔️ The Promise remembers that value once resolve() is called.
✔️ The .then() function is attached to the Promise.
✔️ It waits for the Promise to finish.
✔️ When the Promise is resolved, .then() automatically receives the value stored in resolve(data).
🔍 But How Is It "Automatically" Passed?
👉 When a Promise is resolved, JavaScript internally calls the function inside .then(), and passes the resolved value as an argument
*/

//whats happening step by step
/*If file reading fails, reject(err) is called.
If file reading succeeds, resolve(data) is called, where data is the file content/*

//Where Does .then(function(content)) Get Its Value ?
/*readFilePromise("b.txt") returns a Promise.
When the file is read successfully, resolve(data) is called.
That data (file content) is passed into .then() as content.*/
// So content is actually the data returned from resolve(data), which is the file content.

//Step 3: What Happens in Execution?
/*1️⃣ File reading starts (fs.readFile()).
  2️⃣ When reading is finished successfully, resolve(data) runs. 
  3️⃣ That data (file content) is passed to .then(function(content) { ... }).
  4️⃣ Inside .then(), content is now the file content.
  5️⃣The console.log(content); prints the file content.*/











































//ternary
const playerguess = 25
const correctanswer = 25

const messages = playerguess > correctanswer ? "Too high"
:playerguess < correctanswer ? "Too low"
:"Exactly right"
console.log(messages)


//Switch statement
function productprice(item){
    let price = 0
    switch (item){
        case "coffee":
            price = 10
            break
    }
    return `the price for ${item} is $${price}`
}
console.log(productprice('coffee'))