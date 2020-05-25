class User {
    // public name: string; // public
    // public job: string;
    private isTeacher: boolean;
    protected age: number = 30;

    constructor(public name:string, public job:string) {
        // this.name = name;
        // this.job = "Frontend"
    }

    private getAge() {
        return this.age;
    }

    public setTitle(title: boolean) {
        console.log(this.isTeacher);
        this.isTeacher = title;
        console.log(this.isTeacher);
        console.log(this. getAge());
    }

}

let user1 = new User("Sam", "Frontend");
console.log(user1);
user1.setTitle(false);