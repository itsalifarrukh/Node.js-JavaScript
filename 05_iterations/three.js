// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each Character is ${greet}`)
}



// Maps
const map = new Map()
map.set('PK', "Pakistan")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('PK', "Pakistan")
console.log(map);

for (const [key, value] of map) {
    console.log(key,':-', value);
}

const myObject = {                          // TypeError: myObject is not iterable
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}

