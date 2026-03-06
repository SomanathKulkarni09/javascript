// Username and Password checking basics in javascript


let userEmail = 'abc@123'
let Password ='1234'


let userChecker = function(myString){

    if((myString.includes(123)) && myString.length >6 ){
        return true
    }

    return false 

}



let passChecker= function (pass) {
    if(pass.includes('123') && pass.length > 8)
        return true

    return false
}


console.log(userChecker(userEmail));

console.log(passChecker(Password));
