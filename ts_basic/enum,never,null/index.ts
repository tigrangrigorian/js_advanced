enum Job {
    Frontend,
    Backend = 50,
    Designer
}

const job: Job = Job.Backend;
console.log(job);

function throwNewError(err:string): never {
    throw new Error(err);
}

let newVar;
newVar = null;

let myNum: number | null = 20;
myNum = null;