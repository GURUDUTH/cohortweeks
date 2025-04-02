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