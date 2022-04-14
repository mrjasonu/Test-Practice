const assert = require('assert');
const Calc = require('../calc')

describe('Calc', () => {
    describe('.listTotal', () => {
        it('returns 5 when the list passed into it is [1 , 1, 3]', () => {
            const inputListOne = [1,1,3]
            const expectedOutputOne = 5

            const outputOne = Calc.listTotal(inputListOne)

            assert.equal(outputOne, expectedOutputOne)
        })

        it('returns 10 when the list passed into it is [5 , 4, 1]', () => {
            const inputListTwo = [5,4,1]
            const expectedOutputTwo = 10

            const outputTwo = Calc.listTotal(inputListTwo)

            assert.equal(outputTwo, expectedOutputTwo)
        })

        it('returns 0 when the list passed into it is empty', () => {
            const inputListThree = []
            const expectedOutputThree = 0

            const outputThree = Calc.listTotal(inputListThree)

            assert.equal(outputThree, expectedOutputThree)
        })
    })

    describe(".smallest", () => {
        it('returns 5 when the list passed into it is [5, 7, 9]', () => {
            const inputList = [5, 7, 9]
            const expectedOutput = 5

            const result = Calc.smallest(inputList)

            assert.equal(result, expectedOutput)
        })

        it('returns 10 when the list passed into it is [10, 20, 30]', () => {
            const inputList = [10, 20, 30]
            const expectedOutput = 10

            const result = Calc.smallest(inputList)

            assert.equal(result, expectedOutput)
        })
    })

    describe('.largest', () => {
        it('returns 30 when the list passed into it is [10, 20, 30]', () => {
            const inputList = [10, 20, 30]
            const expectedOutput = 30

            const result = Calc.largest(inputList)

            assert.equal(result, expectedOutput)
        })

        it('returns 9 when the list passed into it is [5, 9, 7]', () => {
            const inputList = [5, 9, 7]
            const expectedOutput = 9

            const result = Calc.largest(inputList)

            assert.equal(result, expectedOutput)
        })
    })

    describe('.factorial', () => {
        it('returns 120 when the number passed into it is 5', () => {
            const inputValue = 5
            const expectedOutput = 120

            const result = Calc.factorial(inputValue)

            assert.equal(result, expectedOutput)
        })

        it('returns 6 when the number passed into it is 3', () => {
            const inputValue = 3
            const expectedOutput = 6

            const result = Calc.factorial(inputValue)

            assert.equal(result, expectedOutput)
        })

        it('returns 1 when the number passed into it is 0', () => {
            const inputValue = 0
            const expectedOutput = 1

            const result = Calc.factorial(inputValue)

            assert.equal(result, expectedOutput)
        })
    })
})