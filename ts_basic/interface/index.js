function getLength(variable) {
    console.log(typeof variable + " length is - " + variable.length);
}
getLength([5, 6, 9, 1, 5]);
getLength("String");
var box = {
    name: "Box",
    length: 20
};
getLength(box);
var user = {
    name: "Mike",
    age: 55,
    logInfo: function (info) {
        console.log("Info - " + info);
    }
};
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.logInfo = function (info) {
        console.log(info);
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    return User;
}());
