const todos =[{
    title: 'read books',
    isDone: false,
},{
    title: 'Buy Bread',
    isDone: true,
},{
    title: 'Go to Gym',
    isDone: true,
},{
    title: 'Watch Lecture',
    isDone: true,
},{
    title: 'make a notes',
    isDone: false,
},{
    title: 'Complete Assignment',
    isDone: false,
}]


// const thingsDone = todos.filter((todo)=>{
//     return( todo.isDone === true)
// })

// const thingsDone = todos.filter((todo)=>todo.isDone === true)  // same 
  
// console.log(thingsDone);


const notDone = todos.filter((todo)=>todo.isDone === false)

 notDone.forEach((todo)=>console.log(todo.title))


