var user = {
    name: "Sam",
    age: 26,
    jobs: ["a", "b"],
    getJobs: function () {
        return this.jobs;
    },
    logName: function () {
        console.log(this.name);
    }
};
var user2 = {
    name: "Max",
    age: 35,
    jobs: ["x"],
    getJobs: function () {
        return this.jobs;
    }
};
