// lv.1 1번

// let arr = []
// let answer = []
// let min;
// let max;
// function solution(n1, n2){
//     for(let i = 1; i <= n1; i++){
//         if(n1===n2){
//             arr.push(1)
//         }else{
//             if(n1%i===0 && n2%i===0){
//                 arr.push(i)
//             }
//         }
        
//         min = Math.max(...arr)
//     }
//     answer.push(min)
//     console.log(answer)
//         if(n1 < n2){
//             for(let i = 1; i<=n2; i++){
//                 if(n2*i%n1 ===0){
//                     max = n2*i
//                     break
//                 }
//             }
//         }else{
//             for(let j = 1; j<=n2; j++){
//                 if(n1*j%n2 ===0){
//                     max = n1*j
//                     break
//                 }
//             }
//         } 
//     answer.push(max)
//     return answer
// };

// console.log(solution(11, 3))


// function solution(str){
//     let arr = []
//     for(let i = 0; i<str.length; i++){
//         let s = str[0]
//         if(s!==str[i+1]){
//             arr.push(str[i]+str[i+1])
//             str.slice(i, i+1)
//         }else if(s === str[i+1])
//         }
//     }
// }

function solution(str){
    let arr = []
    for(let i = 0; i<str.length; i++){ 
        let x = str[0]
        let xnum = 0
        let num = 0    
        xnum+1
        if( x === str[i+1]){
            xnum+1
        }else{
            num+1
        }
        if(xnum === num){
            let cut = str.slice(0, xnum+num)
            arr.push(cut)
            str.slice(0, xnum+num-1)
        }else {

        }
    }
    return arr
}


// console.log(solution("banana"))


function solutions(str){
    let num = 1;
    let cnt = 0;
    let arr = []
    for(let i = 0; i<str.length; i++){
        if( str[i] === str[i+1]){
            num = num + 1
            console.log(num, cnt)
            if( num === cnt){
                console.log(num, cnt)
                let cut = str.slice(0, num+cnt)
                arr.push(cut)
                str = str.slice(num+cnt, str.length-1)
                console.log(str)
                num = 1
                cnt = 0
            }
        }else { 
            cnt = cnt + 1
            if( num === cnt){
                let cut = str.slice(0, num+cnt)
                arr.push(cut)
                str = str.slice(num+cnt, str.length-1)
                console.log(str)
                num = 1
                cnt = 0
            }
        }
    }
    console.log(arr)
}

solutions("banana")