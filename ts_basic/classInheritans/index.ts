class User {
    private isTeacher: boolean;
    protected age: number = 30;

    constructor(public name: string, public job: string) {
    }

    public getAge() {
        return this.age;
    }
}

class Person extends User {
    constructor(job: string) {
        super("Bob", job);
        this.age = 29;
    }

    getAge(): number {
        return super.getAge();
    }
}

let user_1 = new User("Sam", "Frontend");
let person_1 = new Person("Backend");

console.log(person_1);


abstract class Car {
    model: string;
    year: number = 2018;

    abstract logInfo(info:string): void;

    getCarYear(): number{
        return this.year
    }
}

class Mercedes extends Car{
    logInfo(info: string): void {
        console.log(info);
    }
}

let car_1 = new Mercedes();
console.log(car_1);
car_1.logInfo("Info");
console.log(car_1.getCarYear());