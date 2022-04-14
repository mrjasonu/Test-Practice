# Test-Practice

Repository to practice *Test Driven Development* (TDD) with mocha and assert!

Practice tests using a `Calc` object with multiple methods.

Feel free to add more methods and write tests for the new functions!

`calc.js`
```
let Calc = {
    listTotal(inputList) {
        let totalSum = 0
        for (let i = 0; i < inputList.length; i++) {
            totalSum += inputList[i]
        }
        return totalSum
    }
}
```

`./test/calc_test.js`
```
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
})
```

