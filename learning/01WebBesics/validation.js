function myValidation(){

    let myValue =document.getElementById('myform').value

    if (isNaN(myValue) || myValue < 1 || myValue > 20) {
        console.log('invalid input');
        
    }else{
        console.log('input is ok');
        
    }

}


// this fuction chenges the value from p tag which id is (idone)

// function myValidation() {
//     let myValue = document.getElementById('myform').value
//     if(isNaN(myValue) || myValue<1 || myValue>20)
//         document.querySelector("#idone").textContent = 'Not a valid input'
//     else 
//         document.querySelector('#idone').textContent = "This input is OK!"
// }