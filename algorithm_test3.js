
function solution(arr,n){
let arr2 = []
    for(let i = 0; i<arr.length; ){
        for(let j = i+1; j<arr.length+1; j++){
            if(arr[i] === arr[j]){
                arr[i]=""
                arr[j]=""
                i++
            }else{
                if(arr[i]!==""){
                    arr2.push(arr[i])
                    i++
                }else{
                    i++
                }       
            }
        }
    }
    let word = arr2.map((val)=>{return val[n]})
    word.sort()

    for(let i = 0; i<arr2.length; ){
        for(let j = 0; j<arr2.length; j++){
            if(arr2[i][n] === word[j]){
                word[j] = arr2[i]
                      i++
            } 
        }      
    } 
    return word
}

let arr = ["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin"]


console.log(solution(arr,2)) 