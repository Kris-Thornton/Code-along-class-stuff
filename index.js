class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.birth = 0
    }

speak() {
    console.log( `Hello my is ${this.name}`)
}

birthday() {
    this.birth++;
    }

}


const kris = new Person('Kris', 47, )
console.log(kris)
kris.speak()