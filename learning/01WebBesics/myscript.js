// alert('File is attached')

document.querySelector('button').addEventListener('click',function(){
    console.log('I am clicked');
    
})


// track inpute form
document.querySelector('#myform').addEventListener('input',(event)=> {
    console.log(event.target.value);
    
})



