type User = {name: string, age: number, getJobs: () => string[], jobs: string[], logName?: () => void};

let user: User = {
    name: "Sam",
    age: 26,
    jobs: ["a", "b"],
    getJobs(): string[] {
        return this.jobs;
    },
    logName(): void {
        console.log(this.name);
    }
};


let user2: User = {
    name: "Max",
    age: 35,
    jobs: ["x"],
    getJobs(): string[] {
        return this.jobs;
    }
};

