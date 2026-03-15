const student ={
    name: 'John',
    age: 22,
    isActive: true,
}

//converrt this obj inti string to be stored in local storage

const studentObjToString = JSON.stringify(student)

console.log(typeof studentObjToString);

// localStorage.setItem('student',studentObjToString);

// convert back string to obj
const toJSONStudent = JSON.parse(studentObjToString);

console.log(typeof toJSONStudent);

console.log(toJSONStudent.isActive);

