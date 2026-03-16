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

 const john = new User("John","Marks","Anderson",30);
 
 console.log(john.getFullName());

 john.editName("Jonny Samyyy Anderson");

  console.log(john.getFullName());