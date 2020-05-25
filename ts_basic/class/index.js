var User = /** @class */ (function () {
    function User(name, job) {
        this.name = name;
        this.job = job;
        this.age = 30;
        // this.name = name;
        // this.job = "Frontend"
    }
    User.prototype.getAge = function () {
        return this.age;
    };
    User.prototype.setTitle = function (title) {
        console.log(this.isTeacher);
        this.isTeacher = title;
        console.log(this.isTeacher);
        console.log(this.getAge());
    };
    return User;
}());
var user1 = new User("Sam", "Frontend");
console.log(user1);
user1.setTitle(false);
