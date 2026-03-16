 class User{
    constructor(firstname,middlename, lastname, credit){
        this.firstname = firstname;
        this.middlename = middlename
        this.lastname =  lastname;
        this.credit = credit;
    }
    getFullName() {
    return `${this.firstname} ${this.middlename} ${this.lastname} is my full name`;
    }

    editName(newname){
        const myname = newname.split(" ");
        this.firstname = myname[0];
        this.middlename = myname[1];
        this.lastname = myname[2]
    }

}

class Teacher extends User{
    constructor(firstname,middlename, lastname, credit,subject){
        super(firstname,middlename, lastname, credit);
        this.subject = subject;
    }
    getFullName() {
    return `${this.firstname} ${this.middlename} ${this.lastname} is my full name and I tech ${this.subject}`;
    }
    favDrink(drink){
        console.log(`My fav drink is ${drink}`);
        
    }
}
 const john = new Teacher("John","Marks","Anderson",30,'Python');
 
 console.log(john.getFullName());

//  john.editName("Jonny Samyyy Anderson");

//   console.log(john.getFullName());
john.favDrink("Tea");