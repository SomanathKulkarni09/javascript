var john ={
    name: 'I am john',
    age: 24,
    isActive: true,
}

var marry ={
    name: 'I am marry',
    age: 23,
    isActive: true,
}

var sam ={
    name: 'I am sam',
    age: 31,
    isActive: false,
}


let users = new Map()

users.set('john',john)
users.set('marry',marry)
users.set('sam',sam)

// console.log(users.size);  //gives the size

// console.log(users.get('john')); //finds the value for given key

// console.log(users.keys()); // gives all keys from map

// console.log(users.values()) // gives all values from the map

// for (const key of users.keys()) {
//     console.log(key);
// }


// for (const value of users.values()) {
//     console.log(value.name);
// }

// for (const [key,value] of users.entries()) {
//      console.log(key + ' = '+ value.name)
// }


// users.forEach( (value,key) => console.log(key + ' = '+ value.name)) // using for each

var arrofArr =[['one',1],['two',2],['three',3]]

var newMap = new Map(arrofArr);  // conver array into the map

// console.log(newMap);

// for (const [key, value] of newMap.entries()) {
//     console.log(`${key} = ${value}`);
    
// }

// one = 1
// two = 2
// three = 3

