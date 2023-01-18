function solution(ph) {
    let answer = 0;
    if(ph.length === 13 && ph.indexOf('010') === 0 && ph[3] === '-' && ph[8]=== '-') {
        answer = 1;
    }else if (ph.length === 11 && ph.indexOf('010') === 0 && ph.indexOf('-')=== -1) {
        answer = 2;
    }else if (ph.length === 16 && ph.indexOf('+82-10-') === 0 && ph[3] === '-' && ph[6] === '-' && ph[11] === '-') {
        answer = 3;
    }else {
        answer = -1;
    };
    return answer;
};

// function solution(arr) {
//     let answer = 0;
//     let count= 0;
//     answer = arr.filter((val)=> {
//                 for(let i = 0; i<arr.length; i++){
//                     if(val === arr[i]){
//                         count = count + 1
//                     }
//                 }
//                 if(count > (arr.length/2)){
//                     return val
//                 }else{
//                     return -1
//                 }
//             })
//     return answer[0];
// }


// function solution(num) {
//     let answer = "";
//     const txt =  ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
//     for(let i = 0; i<num.length; i++){
//         switch(num[i]){
//             case 0:
//                 answer = answer + txt[0]
//                 break
//                 case 1:
//                     answer = answer + txt[1]
//                     break
//                     case 2:
//                         answer = answer + txt[2]
//                         break
//                         case 3:
//                             answer = answer + txt[3]
//                             break
//                             case 4:
//                                 answer = answer + txt[4]
//                                 break
//                                 case 5:
//                                     answer = answer + txt[5]
//                                     break
//                                     case 6:
//                                         answer = answer + txt[6]
//                                         break
//                                         case 7:
//                                             answer = answer + txt[7]
//                                             break
//                                             case 8:
//                                                 answer = answer + txt[8]
//                                                 break
//                                                 case 9:
//                                                     answer = answer + txt[9]
//                                                     break
                                                                    
//         }
//     }

//     return answer;
// // }

// function solution(num) {
//     let answer= "";
//     const txt =  ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
//     for(let i = 0; i < num.length; i++){
//         let txtnum = num[i]
//         answer = answer + txt[txtnum]
//     }
//     return answer
// }


// console.log(solution(147))

// function solution(num) {
//     const result = num.foreach((val)=> {
//         const txt =  ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
//         return txt[val]
//     })
//     let answer = "";
//     for(let i = 0; i<result.length; i++){
//         answer = answer + result[i]
//     }
//     return answer
// }


function solution(num) {
    let txt = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let answer = []
    for(let i =0; i<num.length; i++){
        answer.push(txt[num[i]])
    }

    return answer.join("")
}



console.log(solution("5"))