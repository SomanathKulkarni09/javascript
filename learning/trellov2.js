let myTodos ={

    day: 'Monday',
    meetings: 0,
    meetingsDone: 0,

}

let addMeet = function(todo , meet =0){
    todo.meetings = todo.meetings + meet
}

let meetDone = function(todo,meet =0){
    todo.meetingsDone = todo.meetingsDone + meet
}

let reset =function(todo){
    todo.meetings = 0
    todo.meetingsDone =0
}

let getSummaryOfDay = function (todo) {
    
    return `You have ${todo.meetings - todo.meetingsDone} meetings today!`
}

addMeet(myTodos,7)

meetDone(myTodos,5)


console.log(getSummaryOfDay(myTodos));


