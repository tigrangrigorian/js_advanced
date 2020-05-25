"use strict";
var Job;
(function (Job) {
    Job[Job["Frontend"] = 0] = "Frontend";
    Job[Job["Backend"] = 1] = "Backend";
    Job[Job["Designer"] = 2] = "Designer";
})(Job || (Job = {}));
var job = Job.Backend;
console.log(job);
