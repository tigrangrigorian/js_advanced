const Lodash = require('./sync');
let _ = new Lodash();

describe('Lodash: compact', () => {
    let array;

    // Hooks
    beforeEach(() => {
        array = [false, 42, 0, '', 'hello', undefined, null, true];
    })
    afterAll(() => {
        _ = new Lodash();
    })

    test('should be defined', () => {
        expect(_.compact).toBeDefined()
        expect(_.compact).not.toBeUndefined()
    })

    test('should working array must be editable', () => {
        array.push(...['one', 'two']);
        expect(array).toContain('one')
        expect(array).toContain('two')
    })

    test('should remove falsy values from array', () => {
        const result = [42, 'hello', true];
        expect(_.compact(array)).toEqual(result)
    })

    test('should not contain falsy values', () => {
        expect(_.compact(array)).not.toContain(false)
        expect(_.compact(array)).not.toContain('')
        expect(_.compact(array)).not.toContain(0)
        expect(_.compact(array)).not.toContain(undefined)
        expect(_.compact(array)).not.toContain(null)
    })
})

describe('Lodash: GroupBy', () => {
    test('should be defined', () => {
        expect(_.groupBy).toBeDefined()
        expect(_.groupBy).not.toBeUndefined()
    })

    test('should group array of items by Math.floor', () => {
        const array = [2.2, 2.6, 3.9, 8.1, 5.7];
        const result = {
            2: [2.2, 2.6],
            3: [3.9],
            8: [8.1],
            5: [5.7]
        }
        expect(_.groupBy(array, Math.floor)).toEqual(result);
    })

    test('should group array of items by length', () => {
        const array = ['one', 'two', 'three'];
        const result = {
            '3': ['one', 'two'],
            '5': ['three']
        };
        expect(_.groupBy(array, 'length')).toEqual(result);
    })

    test('should not return array', () => {
        expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
    })
})
