
function solution(arr){
    let none = []
    let sum = 0;
    for(let i = 0; i<=9; i++){
        if(arr.indexOf(i)<0) {
            none.push(i)
        }
    }
    
    for(let i = none[0]; i<=none[1]; i++){
        sum = sum + i
    }
    return sum
}
let arr1 = [1,3,5,9,2,4,8,0]
console.log(solution(arr1))
