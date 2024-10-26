const words = ['adsfdsfds', 'bbfdbfd', ' fdsffdsfds', 'fdsfdsewqe']

const result = words.filter((word) => word.length < 5)
console.log(result)


const array = ['a','b','c']
array.forEach((el) => console.log(el))

const array1 = [1,2,3,4,5]

const find1 = array1.find((el1) => el1>3)
console.log (find1)

const array2 = [1,4,8,10]
const count = array2.map((el) => el * 5)
console.log(count)