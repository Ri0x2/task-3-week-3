

const removeDuplicates =(numbers) =>{
    return [...new Set(numbers)]    
}




const nums = [1,3,2,3,1,6,3,2,8,1]
const noDuplics = removeDuplicates(nums)

console.log(noDuplics)