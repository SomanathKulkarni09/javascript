let yourGrade = function (currentMarks, totalMarks) {

    let percent =( currentMarks/totalMarks)*100

    let myGrade =''

    if (percent >= 90) {
        myGrade ='A'
    }else if(percent >= 80) {
        myGrade ='B'
    }else if(percent >= 70) {
        myGrade ='C'
    }else if(percent >= 60) {
        myGrade ='D'
    }else{
        myGrade ='F'
    }
    
    return `your percentage is ${percent} and grade is ${myGrade}`
}


let yourResult = yourGrade(92,100)

console.log(yourResult);
