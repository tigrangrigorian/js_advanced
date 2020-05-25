async function start() {
    return await Promise.resolve('Asinc is working');
}

// start().then(console.log);
start().then();

const unUsed = 42;

class Util {
    static id = Date.now()
}

// console.log(Util.id);
// console.log(unUsed);

import('lodash').then(_ => {
    console.info('Lodash ', _.random(0,42,true));
});
