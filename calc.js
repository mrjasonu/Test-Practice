let Calc = {
    listTotal(inputList) {
        let totalSum = 0
        for (let i = 0; i < inputList.length; i++) {
            totalSum += inputList[i]
        }
        return totalSum
    },

    smallest(inputList) {
        let smallest = inputList[0]
        for (let i = 1; i <inputList.length; i++) {
            if (smallest > inputList[i]) {
                smallest = inputList[i]
            }
        }
        return smallest
    },

    largest(inputList) {
        let largest = inputList[0]
        for (let i = 1; i < inputList.length; i++) {
            if (largest < inputList[i]) {
                largest = inputList[i]
            }
        }
        return largest
    },

    factorial(inputValue) {
        let result = 1
        for (let i = inputValue; i > 1; i--) {
            result *= i
        }
        return result
    },

    square(inputValue){
        return inputValue * inputValue
    },

    cube(inputValue) {
        return inputValue * inputValue * inputValue
    },

    average(inputList) {
        if (inputList.length > 0) {
            const average = this.listTotal(inputList) / inputList.length
            return average
        } else {
            return 0
        }
    },

    multiplication(inputA, inputB) {
        return inputA * inputB
    }
}

module.exports = Calc