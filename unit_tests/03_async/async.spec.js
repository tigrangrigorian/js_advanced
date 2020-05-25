const Ajax = require('./async');
const axios = require('axios')

jest.mock('axios')

describe('Ajax: Echo', () => {
    test('should return async value', async () => {
        const result = await Ajax.echo('some data');
        expect(result).toBe('some data')
    })

    test('should return async value with Promise', () => {
        return Ajax.echo('some data')
            .then(data => {
                expect(data).toBe('some data')
            })
    })

    test('should catch async value with Promise', () => {
        return Ajax.echo()
            .catch(data => {
                expect(data).toBeInstanceOf(Error)
            })
    })

    test('should catch async value with Promise', async () => {
        try {
            await Ajax.echo()
        } catch (e) {
            expect(e.message).toBe('error')
        }
    })
})

describe('Ajax: GET', () => {
    let response, todos

    beforeEach(() => {
        todos = [
            {id: 1, title: 'Todo 1', completed: false}
        ]

        response = {
            data: { todos }
        }
    })

    test('should return data from backend', () => {
        axios.get.mockReturnValue(response)

        return Ajax.get().then(data => {
            expect(data.todos).toEqual(todos)
        })
    })
})
