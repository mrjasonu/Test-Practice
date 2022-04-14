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
    
}

module.exports = Calc