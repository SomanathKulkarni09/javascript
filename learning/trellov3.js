let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetingsDone: 0,

    addMeet: function(num = 0){
        this.meetings = this.meetings + num
    },

    meetDone: function(num = 0){
        this.meetingsDone = this.meetingsDone + num
    },

    reset: function(){
        this.meetings =0
        this.meetingsDone = 0
    },

    getSummaryOfDay: function(){
        return  `Your have ${this.meetings - this.meetingsDone} meetings today`
    }
}


myTodos.addMeet(6)
myTodos.meetDone(4)

console.log(myTodos.getSummaryOfDay());
