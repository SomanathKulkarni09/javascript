// const myTodos =['Buy Bread','Go to Gym','Take a notes']
// console.log(myTodos.indexOf('Buy Bread'))

const newTodos =[{
    title: 'Buy bread',
    isDone: false,
},{
    title:'Go to Gym',
    isDone: false,
},{
    title: 'Take a notes',
    isDone: true,
}]

// const index = newTodos.findIndex(function(todo,index){

//     return todo.title === 'Go to Gym'

// })

// console.log(index);


//method 1

// const findTodo = function(myTodos,title){
//     const index = myTodos.findIndex(function(todo,index){
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })
//     return index
// }

// let printMe = findTodo(newTodos,'Go TO gym')
// console.log(printMe);


//Method 2

const findTodo = function(myTodo,title){
    const titleReturned =myTodo.find(function(todo,index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned
}

let printMe = findTodo(newTodos,'Go TO gym')
console.log(printMe);