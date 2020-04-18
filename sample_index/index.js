class Person{
    constructor (name, score) {
        this.name = name;
        this.score = score;
    }

    sayHello() {
        console.log('Hello ${this.name}');
    }

    increaseScore(amount) {
        this.score += amount;
    }
}

const person1 = new Person('Imre', 100);
person1.sayHello();
person1.increaseScore(50);

console.log(person1);