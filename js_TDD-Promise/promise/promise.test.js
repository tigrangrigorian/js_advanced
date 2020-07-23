let MyPromise = require('./promise')

describe('My Promise', () => {

    let promise, executorSpy;
    const result = 42;
    const errorResult = 'I am error';

    beforeEach(() => {
        executorSpy = jest.fn(resolve => setTimeout(() => resolve(result), 150))
        promise = new MyPromise(executorSpy)
    })

    test('should exists and to be type of function', () => {
        expect(MyPromise).toBeDefined();
        expect(typeof MyPromise).toBe('function')
    })

    test('instance should have methods: then, catch, finally', () => {
        expect(promise.then).toBeDefined();
        expect(promise.catch).toBeDefined();
        expect(promise.finally).not.toBeUndefined();
    })

    test('My promise should call executor function', () => {
        expect(executorSpy).toHaveBeenCalled()
    })

    test('My Promise should get data in then block and chain them', async () => {
        const res = await promise.then(num => num).then(num => num * 2);

        expect(res).toBe(result * 2)
    })

    test('My Promise should catch error', () => {
        const errorExecutor = (_, reject) => setTimeout(() => reject(errorResult), 150)
        const errorPromise = new MyPromise(errorExecutor);

        return new Promise(resolve => {
            errorPromise.catch(error => {
                expect(error).toBe(errorResult);
                resolve()
            })
        })
    })

    test('My Promise should call finally method', async () => {
        const finallySpy = jest.fn(() => {
        });
        await promise.finally(finallySpy)

        expect(finallySpy).toHaveBeenCalled()
    })

})