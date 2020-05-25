interface ILength {
    length: number;
}

function getLength(variable: ILength): void {
    console.log(`${typeof variable} length is - ${variable.length}`);
}

getLength([5,6,9,1,5]);
getLength("String");

let box = {
    name: "Box",
    length: 20
};

getLength(box);


/////////////////////////////////////////////////////////////
interface IUser {
    name: string;
    age?: number;
    logInfo(info:string): void;
}

interface IGetAge {
    getAge():number
}

let user: IUser = {
    name: "Mike",
    age: 55,
    logInfo(info: string): void {
        console.log(`Info - ${info}`);
    }
};

class User implements IUser, IGetAge{
    name: "User";
    age: 99;

    logInfo(info: string): void {
        console.log(info);
    }

    getAge(): number {
        return this.age;
    }
}


