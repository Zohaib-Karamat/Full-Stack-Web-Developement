// we can use .reduce array method to sum up whole array 



function sumArray(...array) {
    return array.reduce((acc,num)=>acc+num,0)
}
console.log(sumArray(1,2,3,4))