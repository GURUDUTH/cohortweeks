var isStudent=true;
isStudent = 45
isStudent = 'guruduth'
console.log(isStudent);

//Data Types
//array
let users=["guru","raghav","jannice"];
console.log(users);
console.log(users[2]);

//Operators
let addition = 15+90;
let isequlas = 10===113;
console.log(addition);
console.log(isequlas)

let age = 15;
let canvote = (age > 18);  //either true or false
let istrue =(true&&true);
console.log(canvote)
console.log(istrue)


//functions 
function votingname(name){
    return "greetings "+name;
}
let message = votingname('guruduth');
let message1 = votingname('navneeth');
let message2 = votingname('raghavendra');
console.log(message);
console.log(message1);
console.log(message2);

function totalcounting(a,b){
    return (a+b);
}
let counting = totalcounting(100,200);
let counting1 = totalcounting(148,200);
let counting2 = totalcounting(120,200);
console.log(counting);
console.log(counting1);
console.log(counting2);

function counting(a,b){
    let totalcount = (a+b);
    return totalcount;
}
console.log(counting(12,10));
console.log(counting(900,100));
console.log(counting('30','30'));

let countans = counting(25,25);
console.log(countans);

function canvote(age){
    return age >= 18;
}
console.log(canvote('25'))
let myage = canvote('12');
console.log(myage);

//If else

function votingages(age) {
    if(age >= 18){
        return "you are eligible to vote welcome!";
    }
    else{
        return "you are below the voting age sorry!";
    }
}
console.log(votingages(17));
let yourvotinacces= votingages(23);
console.log(yourvotinacces);

if (122 > 18) {
    console.log("the first number is greater than the secons");
}
else{
    console.log('the second number is greater than the second number');
}

//Loops
let males = ['david','barron','leonard','javeliner'];
for (let i=0; i<4; i+=1){
    console.log(males[i]);
}

let females=['lianna','lancy','nancy','rekha','elena']
for (let i=0;i < females.length; i+=1 ){
    console.log(females[i]);
}

let j=0;
while (j < females.length){
    console.log(females[j]);
    j+=1;
}

//objects
let new_user={username:'guruduth',userage:25};
console.log(new_user)
console.log(new_user['username']+" "+ new_user.userage)

function greeting(name,age){
    let user={username:name,userage:age};
    console.log('your name is :'+ user.username);
    console.log('your age is :'+user['userage']); //you can add this in one line using strin gconcatenation (+)
}
let customer_greeting=greeting('guruduth',25); 
let customer_greetings=greeting(new_user)        //or you can just use the new_user object we defined as an argument here
 //in the function there may not be a need of let like in the above function thne it wont be accepting a primitive such as strign or a number it is accepting a complex type called object


 //greetin guser with name,age,gender and voting eligibility

 function user_voting_info(name,age,gender){
    let user_deatils={username:name,userage:age,usergender:gender};
    console.log('username:'+user_deatils['username']+" , "+'userage:'+user_deatils['userage']);
        if (user_deatils.userage >= 18){
            return 'you are eligible to vote';
        }
        return "you are not eligible to vote";
 }

 let voting_eligibility = user_voting_info('guru',26,'male');
 console.log(voting_eligibility)


//greetin user with name,age,gender but represented as Mrs or Mr and also voting eligibility

function user_voting_info(name,age,gender){
    let user_deatils={username:name,userage:age,usergender:gender};
    if (user_deatils.usergender == 'm'){
        console.log("Name: Mr."+user_deatils.username);
        console.log("Age:" + user_deatils.userage);
    }
    else if (user_deatils.usergender == 'f'){
        console.log("Name: Mrs."+user_deatils.username);
        console.log("Age:" + user_deatils.userage);
    }
    if (user_deatils.userage >= 18){
        return 'you are eligible to vote';
    }
    return "you are not eligible to vote";
}

let voting_acceptance = user_voting_info('rekha',16,'f');
console.log(voting_acceptance)


//Array of objects , objects of objects
let arr =['harki',21,{
    name:'harki',
    age:45,
    cities:['bangalore','guragon','mumbai',{
        country:'japan',
        city:'tokyo'
    }]
}];

console.log(arr[2]);
console.log(arr[2].cities);
console.log(arr[2].cities[3].country);



const users_info =[{
    username:'harki',
    userage:24,
    usergender:'m'
},{
    username:'rekha',
    userage:25,
    usergender:'f'
},{
    username:'guru',
    userage:14,
    usergender:'m'
},{
    username:'navaneeth',
    userage:22,
    usergender:'m'
},{
    username:'elena',
    userage:23,
    usergender:'f'
}]


function male_eligible(users){
    for (let i = 0;i < users.length;i+=1){
        if (users[i].userage >= 18 && users[i].usergender === 'm'){
            console.log(users[i]);
        }        
    }   
}

let check_eligibile = male_eligible(users_info);

//the below is another way that can be used in case if console.log gives you a probelm
//or say we initialize a new array push the results of loop based on consition into this and returnt this when loop completes

function male_eligible(users){
    let eligiblemales =[]
    for (let i = 0;i < users.length;i+=1){
        if (users[i].userage >= 18 && users[i].usergender === 'm'){
            eligiblemales.push(users[i]);
        }
    }
    return eligiblemales;   
}

let check_eligibile = male_eligible(users_info);
console.log(check_eligibile)


