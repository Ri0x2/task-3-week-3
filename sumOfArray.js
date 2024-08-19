
function summOfArray(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

const nums = [10 , 11 ,412, 12412, 1243]

const total = summOfArray(nums)

console.log(`The sum of all numbers in the array is: ${total}`)