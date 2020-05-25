type User = {name: string, age: number};

let user: User = {
    name: "Sam",
    age: 27
};

function logUser(user:User): void {
    console.log(`${user.name} is ${user.age}`);
}

logUser(user);

let ok;
ok = 1;