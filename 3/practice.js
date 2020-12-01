const a = {
    name: "ha"
}


let b = Object.create(a);


const n = new Promise((res, rej) => {
    setTimeout(() => {
        res()
    }, 1000);
}).then(() => console.log('hi'))

function count(n) {
    return {
        p: function () {
            return ++n
        },
        m: function () {
            return --n
        },
    }
}
console.log(count(1).p())


// function Animals(legs, type) {
//     this.legs = legs;
//     this.type = type
// }

// Animals.prototype.sleep = function () {
//     console.log('Zzzz');
// }

// function Dog(name) {
//     Animals.call(this, 4, 'dog');
//     this.name = name;
// }
// Dog.prototype = Object.create(Animals.prototype);
// Dog.prototype.constructor = Dog;
// Dog.prototype.bark = function () { console.log('Woof'); }


class Animals {
    constructor(legs, type) {
        this.legs = legs;
        this.type = type
    }
    sleep() {
        console.log('Zzzz');
    }
}


class Dog extends Animals {
    constructor(name) {
        super(4, 'dog');
        this.name = name;
    }
    bark() {
        console.log('Woof');
    }
}
