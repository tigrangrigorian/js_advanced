class Person {
  static type = 'HUMAN';
  static #area = 'EARTH'
  name = 'default name';
  #year = 1992;

  constructor(name) {
    this.name = name;
  }

  static printArea() {
    return Person.#area === 'EARTH' ? 'Earth' : 'Mars'
  }

  get age() {
    return new Date().getFullYear() - this.#year
  }

  set age(age) {
    if (age > 0) {
      this.#year = new Date().getFullYear() - age
    }
  }
}

const person = new Person('Max');
console.log(person);
console.log(person.age);
person.age = 35
console.log(person.age);

console.log(Person.type);
console.log(Person.printArea());
