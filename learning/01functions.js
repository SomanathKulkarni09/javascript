let sayHello = function(name){
    console.log(`Greeting message for ${name}`);
    console.log(`Hey ${name}`);
}

// sayHello('John');

let fullnameMaker = function(firstname , lastname){
    console.log(`welcome ${firstname} ${lastname}`);
    
}

// fullnameMaker('John','Doe')

let myAdder = function(num1,num2){
    let add = num1 + num2 
    return add
}

// console.log(myAdder(5,2));


let myMultiplier =function(num1,num2){
    return  num1 * num2 
     
}


let guestUser = function(name ='unName', courseCount =0){
    return 'hi '+ name+ ' your course count is : '+courseCount 
}

console.log(guestUser());


