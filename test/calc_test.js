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

    describe('.square', () => {
        it('returns 4 when the number passed into it is 2', () => {
            const inputValue = 2
            const expectedOutput = 4

            const result = Calc.square(inputValue)

            assert.equal(result, expectedOutput)
        })
        
        it('returns 64 when the number passed into it is 8', () => {
            const inputValue = 8
            const expectedOutput = 64

            const result = Calc.square(inputValue)

            assert.equal(result, expectedOutput)
        }) 
    })

    describe('.cube', () => {
        it('returns 8 when the value passed into it is 2', () => {
            const inputValue = 2
            const expectedOutput = 8

            const result = Calc.cube(inputValue)

            assert.equal(result, expectedOutput)
        })

        it('returns 1000 when the value passed into it is 10', () => {
            const inputValue = 10
            const expectedOutput = 1000

            const result = Calc.cube(inputValue)

            assert.equal(result, expectedOutput)
        })
    })

    describe('.average', () => {
        it('returns 3 when the list passed into it is [2, 4]', () => {
            const inputList = [2, 4]
            const expectedOutput = 3

            const result = Calc.average(inputList)

            assert.equal(result, expectedOutput)
        })

        it('returns 1 when the list passed into it is [1, 1]', () => {
            const inputList = [1, 1]
            const expectedOutput = 1

            const result = Calc.average(inputList)

            assert.equal(result, expectedOutput)
        })

        it('returns 0 when the list passed into it contains 0 items', () => {
            const inputList = []
            const expectedOutput = 0

            const result = Calc.average(inputList)

            assert.equal(result, expectedOutput)
        })
    })

    describe('.multiplication', () => {
        it('returns 12 when the two arguments passed into it are 3 and 4', () => {
            const inputA = 3
            const inputB = 4
            const expectedOutput = 12

            const result = Calc.multiplication(3, 4)

            assert.equal(result, expectedOutput)
        })

        it('returns 10 when the two values passed into it are 10 and 1', () => {
            const inputA = 10
            const inputB = 1
            const expectedOutput = 10

            const result = Calc.multiplication(10, 1)

            assert.equal(result, expectedOutput)
        })
    })
})