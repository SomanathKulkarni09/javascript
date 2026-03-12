
document.querySelector('.myform').addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.realname.value);
    event.target.username.value ="";
    event.target.realname.value ="";
    if (event.target.pass1.value === event.target.pass2.value) {
        console.log('log in successful ');
        event.target.pass1.value = ''
        event.target.pass2.value = ''
    }else{
        console.log('pass does not match ');
        event.target.pass1.value = ''
        event.target.pass2.value = ''
        
    }
    
})

