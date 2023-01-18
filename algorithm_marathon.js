// function solution(s) {
//     var answer = '';
//     let num = s.length/2
//     if (s%2===0){
//         answer = s.slice(num-1, num+1)
//     } else {
//         answer = s.slice(num-0.5, num+0.5)
//     }
//     return console.log(answer)
// }

// solution('1234567') 
// ------------------------3번 끝

// function solution(a, b) {
//         if(a>b){
//         var answer = b;        
//         for(i=1; i<=(a-b); i++){
//         answer = answer + (b+i)
//         }
        
//         } else if(a<b) {
//             answer = a;
//             for(i=1; i<=(b-a); i++){
//                 answer = answer + (a+i)
//                  }
                 
//         }
//         return console.log(answer)
// }

// solution(3, 7)
// -------------------------4번 끝

// function solution(a, b) {
//         var answer = 0;
//         let min = Math.min(a,b)
//         let max = Math.max(a,b)
//         for(i=min; i<=max; i++){
//             answer += i
//         }
//         return console.log(answer)
// }

// solution(5, 3)
// ---------------------------- 4번 다른방법 끝

// function solution(numbers) {
//     let sum = 0;
//    for(let i = 0; i<numbers.length; i++){
//         sum = sum + numbers[i]
//    }
//    console.log(45-sum)
// }


// solution([5,8,4,0,6,7,9])


// ---------------------------------- 6번 완료!!----------



// function solution(absolutes, signs) {
//     let a = []
//     for(let i = 0; i<absolutes.length; i++){
        
//     if (signs[i]===false){
        
//         let result = absolutes[i] * -1
//         a.push(result)
//     }else {
//         let result = absolutes[i] * 1
//         a.push(result)
//     }
    
// }   let sum = 0;
//     for(y=0; y<a.length; y++){
        
//         sum = sum + a[y]
//     }
//     return console.log(sum)
// }
// solution([1,2,5], [false, false, true])
// ---------------------------------------------7번 완료

// function solution(arr) {
//     let emt = 0;
//     for(let i = 0; i<arr.length; i++){
//         emt = emt + arr[i]
//     }
//     let avg = emt/arr.length
//     return console.log(avg)
// }
// solution([1,3,5,6,15])
// -------------------------------- 8번 완료

// function solution(phone_number) {
//     let block = phone_number.slice(0, phone_number.length -4 )
//     let result = phone_number.replace(block, "*******")
//     return console.log(result)
// }

// solution("01025257878")
// --------------------------------- 9번 완료


//---------------------------------------------2차 배열에 값 넣는 법!!

// array1 = [[1,2], [2,3]]
// array2 = [[3,4], [5,6]]



// function solution (arr1, arr2){
//      let sum = 0;
//      let arr3 = []
//     for(let i = 0; i<arr1.length; i++){
//         arr3[i] = [];
//         for(let k = 0; k<arr1[i].length; k++){
//             arr3[i][k] = null
//             sum = (arr1[i][k] + arr2[i][k])
//             arr3[i][k] = sum
//         }
//     }
//     return arr3
// }

// console.log(solution(array1, array2))
// -----------------------------------------------------10번 완료!!




// function solution(x, n) {
//     var answer = [];
//     for (let i = 0; i<n; i++){
//         let emt = x + (x*i)
//         answer.push(emt)
//     }
//     return console.log(answer)
// }

// solution(4, 3)
// ----------------------------------- 11번 완료

// function solution(price, money, count) {
//     for (let i = 1; i<=count; i++){
//         money = money - (price * i)
//     }
//    if(money < 0 ) { 
//     return console.log(Math.abs(money))
//    } else {
//     return console.log(0)
//    }
// }

// solution(3,20,4)
// -------------------------------------------- 12번 완료


// function solution(a, b) {
//     let week = ['일', '월', '화', '수', '목', '금', '토']
//     let days = new Date(2022,a-1,b)
//     let dayss = days.getDay()
//     let result = week[dayss]

//     return console.log(result)
// }


// solution(9, 23)
// ----------------------------------------- 13번 완료



// function solution(arr, divisor) {
//     var answer = [];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%divisor === 0){
//             answer.push(arr[i])
//         }
//     }
//     if (answer.length === 0){
//         answer = [-1]
//         console.log(answer)
//     }else {
//     return console.log(answer.sort(function(a,b){
//         return a-b
//     })
//     )
// }
// }

// solution([2,8,4,6,10,3,1], 2)
// ------------------------------------ 14번 완료


// function solution(a, b) {
//     let answer = 0;
//     for(let i=0; i<a.length; i++){
//         answer = answer + (a[i]*b[i])
//     }
//     return console.log(answer)
// }

// solution([-1,0,1], [1,0,-1])
// --------------------------------------- 15번 완료

// function solution(s){
//     let answer = 0
//     if(s.toLowerCase().includes('p'&&'y')===false){
//         answer = true
//     }else {

//    let ps = s.toLowerCase().match(/p/g).length
//    let ys = s.toLowerCase().match(/y/g).length
//    if(ps===ys){
//      answer = true
//    }else if(ps!==ys){
//     answer = false
//    } 
// }
//     return console.log(answer)

// }


// solution('pPsSpy')
// -------------------------------------- 16번 완료(조금 미흡! p랑 y가 둘 다 없는 상황을 인식못함)


// function solution(s) {
//     let result = 0;
//     let chk = isNaN(s)
//    let num = s.length
//    if(num === 4 && chk===false){
//     result = true
//    } else if(num===6 && chk===false ) {
//     result = true
//    }else {
//     result = false
//    }
//    return console.log(result)
// }

// solution('a111')
// --------------------------------------- 17번 완료


// function solution(seoul) {
//    let answer = seoul.indexOf("kim")
//     return console.log(`김서방은 ${answer} 에 있다.`)
// }

// solution(["jane","1", "jhon", "kim"])
// ------------------------------------------------ 18번 완료

// function solution(n) {
//     let sen = "";
//     let su = "수"
//     let bak = "박"
//     for(let i=0; i<n; i++){
//         if(i%2 === 0){
//             sen = sen + su
//         }else{
//             sen = sen + bak
//         }
//     }
//     return console.log(sen)
// }

// solution(5)
// ------------------------------------- 19번 완료

// function solution(participant, completion) {
//     let answer = 0
//     for(let i = 0; i<participant.length; i++){
//         let goal = participant[i]
//         if(completion.includes(goal) === false){
//          answer = goal
//         }else{
//             continue
//         }
//     }
        
//     return console.log(answer)
// }

// solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"])

// -------------------------------------------------------- 20번 완료




// ----------(1) 각 낱개 단어들의 문자를 순서대로 돌면서 대/소문자 치환--------------------
// function change(str) {
//     for(let i =0; i<str.length; i++){
//         if(i%2 ===0){
//             let idx = str[i]
//             let newidx = idx.toLowerCase()
//             str = str.replace(str[i], newidx)
//         } else {
//             let idx2 = str[i]
//             let newidx2 = idx2.toUpperCase()
//             str = str.replace(str[i], newidx2)
//         }
//     }
//     return str + " "
// }

// -------------- (2) 각 단어들에 순서대로 돌아가면서 change() 함수 적용----------------
// function solution(s) {
//     let wors_cnt = s.split(" ").length
//     let chg_word = ""
//     for(let y=0; y<wors_cnt; y++){
//         let solo_word = s.split(" ")[y]
//         chg_word = chg_word + change(solo_word)
//     }
    
//     return console.log(chg_word)
// }

// solution("try hello world")
// ....................................................................... 21번 완료 (첫 중첩 함수!!!!!)




// function solution(n){
//     let str = `${n}`
//     let a = 0;
//     for(let i = 0; i<str.length; i++){
//         a= a+ Number(str[i])
//     }

//     return console.log(a)
// }

// solution(987)
// ------------------------------ 22번 완료


// function solution(n) {
//     let str = `${n}`
//     let a = []
//     for(let i = str.length-1; i>=0; i--){
//         let emt = Number(str[i])
//         a.push(emt)
//     }
    
//     return console.log(a)
// }
// solution(5678999)
// -----------------------------------23번 완료


// function solution(n) {
//     let str = `${n}`
//     let a = []
//     for(let i = str.length-1; i>=0; i--){
//         let emt = Number(str[i])
//         a.push(emt)
//     }
//     a.sort(function(a,b){
//         b-a
//     })
//     let elt = ""
//     for(let y = 0; y<a.length; y++){
//         elt = elt + `${a[y]}`
//     }
//     return console.log(elt, typeof(elt))
// }
// solution(18372)
// ------------------------------------------ 24번 완료



// function solution(n) {
//     let result = 0;
//     for(let x = 0; x*x<=n; x++){
//         if (x*x === n){
//              result = (x+1)*(x+1)
//          } else {
//              result = -1
//          }
//     }
    
//     return console.log(result)
// }

// solution(8)
// --------------------------------------------- 25번 완료







// function solution(arr){
//         let mins = arr.reduce((a,b)=> a>b ? b:a)
//         let idxmins = arr.indexOf(mins)
//             if (arr.length <= 1){
//                 arr.splice(0, 1, -1)
//             } else {
//                 arr.splice(idxmins, 1)
//             }
//     return console.log(arr)
// }
// solution([3,5,6,1,8,2,0,8,11])
// ---------------------------------------------- 26번 완료



// function solution(num) {
//     let counts=0;
//     for(let count=0; num>1; count++){
//         if (num%2===0){
//             num = num/2
//             counts = counts+1
//         } else {
//             num = (num*3)+1
//             counts = counts+1
//         } if(counts >=500){
//             counts = -1
//             break
//         }
//     }
//     return counts
// }
// console.log(solution(626331))
// ---------------------------------------------27번 완료





// function solution(num) {
//     let str = num.toString()
//     let sum = 0;
//     for(let i = 0; i<str.length; i++){
//         let emt = Number(str[i])
//         sum = sum + emt
//     }
//     if (num%sum === 0  ){
//         return console.log(`${num}은 하사드 수 입니다.`)
//     }else{
//         return  console.log(`${num}은 하사드 수가 아닙니다.`)
//     }
// }
// solution(18)
// --------------------------------------------- 28번 완료


//---------------------------------------챌린지 시작----------------------------------

//----------------------------------------29번. 3진법 완료

// function solution(num){
//     let num3 = num.toString(3) 
//     num3 = num3.split("").reverse().join("")
//     let num10 = parseInt(num3, 3)
// return num10
// }



// ----------------------------------------- 30번 보류 (모든 카드의 가로 최대값  /  세로 최대값 구하는것 까진 완성)

// let array = [[60, 50], 
// [30, 70], 
// [60, 30], 
// [80, 40]]
// let array_width = []
// let array_height = []
// for(let i= 0; i<array.length; i++){
//     let width = array[i][0]
//     array_width.push(width)
//     let height = array[i][1]
//     array_height.push(height)
// }
// let max_width = array_width.reduce((a, b) => a <b? b:a) 
// let max_height = array_height.reduce((a, b) => a <b? b:a) 

// // let max_width = Math.max(array_width)
// // let max_height = Math.max(array_height)
// console.log(max_width, max_height)




// ---------------31번: 연속해서 나타나는 중복된 숫자는 하나만 남기기 (배열 filter 메소드) 
// arr1 =  [4,4,4,3,3,4]

// function solution(arr)
// {
//     return arr.filter((val,index) => val != arr[index+1]);
// }

// console.log(solution(arr1))


//-----------------------------------------------32번: 답은 맞고 기능은 정상작동 하는데 프로그래머스에서는 배열 원소 앞 한 칸 공백 오류

// function solution(arr){
//     let arr2 = []
//     for(let i = 0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr2.indexOf(arr[i]+arr[j])<0){
//                 arr2.push(arr[i]+arr[j])
//             }
//         }
//     }
//     arr2.sort((a,b)=>a-b)
//     return arr2
// }

// let arr1 = [5,0,2,7]
// console.log(solution(arr1))
//----------------------------------------------- 33번. 로또의 순위 오로지 내 힘으로만 성공!!!!!!!!!!!!!!!!!!!!!!



// function solution (arr1, arr2) {
//     arr1 = arr1.filter((val)=>{return val !==0})
//         let restNum = arr1.length 
//         let zeroNum = 6-arr1.length

//         let count = arr1.filter((val,idx,arr)=>{
//                                     let counts = 0;
//                                     for(let i = 0; i<arr2.length; i++){
//                                         if(val === arr2[i]){
//                                             counts++
//                                         }
//                                     }
//                                     return counts
//                                 })


//         let max = count.length + zeroNum
//         let rankHigh 
//         let rankLow
//         let rank_arr = []

//         if(max>=1){
//             rankHigh  = 7-max
//         }else if (max===0){
//             rankHigh  = 6
//         }

//         if(count.length >=1){
//             rankLow = 7-count.length
//         }else if ( count.length === 0) {
//             rankLow = 6
//         }

//     rank_arr.push(rankHigh, rankLow)

//     return rank_arr
// }

// let tto = [45, 4, 35, 20, 3, 9]
// let win = [20, 9, 3, 45, 4, 35]

// console.log(solution(tto, win))
// --------------------------------------------- 34번. 모의고사 완료

// function solution(answer){

// // 학생1 답안 출력 (정답 갯수 & 학생1 패턴 맞춤)
// let per1 = []
// for(let i = 1; i<=(answer.length/5)+1; i++){
//    for(let j = 1; j<=5; j++){
//     if(per1.length<answer.length){
//         per1.push(j)
//     }else {
//         break
//     }
// }
// }

// // 학생2 답안 출력 (정답 갯수 & 학생1 패턴 맞춤)
// let per2 = []
// let per2_set = [2,1,2,3,2,4,2,5]
// for(let i =0; i<=(answer.length/8)+1; i++){
//     for(let j = 0; j<per2_set.length; j++){
//         if(per2.length < answer.length){
//             per2.push(per2_set[j])
//         }else {
//             break
//         }
        
//     }
// }

// // 학생3 답안 출력 (정답 갯수 & 학생1 패턴 맞춤)
// let per3 = []
// let per3_set = [3,3,1,1,2,2,4,4,5,5]
// for(let i =0; i<=(answer.length/10)+1; i++){
//     for(let j = 0; j<per3_set.length; j++){
//         if(per3.length < answer.length){
//             per3.push(per3_set[j])
            
//         }else {
//             break
//         } 
//     }
// }
// let per1_corr = 0;
// let per2_corr = 0;
// let per3_corr = 0;

// for(let i = 0; i<answer.length; i++){
//     if(per1[i]===answer[i]){
//         per1_corr++
//     }
//     if(per2[i]===answer[i]){
//         per2_corr++
//     }
//     if(per3[i]===answer[i]){
//         per3_corr++
//     }
// }
// let final = [per1_corr,per2_corr,per3_corr]


// let max = Math.max(...final)
// let result = []
// let idx = 0;

// for(let i = 0; i<3; i++){
//     if(max === final[i]){
//         result[idx] = i+1
//         idx++
//     }
// }


// return result
// }

// console.log(solution([1,3,2,4,2]))



// ------------------------------------------------------------ 35번. 문자열 내 마음대로 정렬하기


// let abc = []
// function solution (strings, n){
//     for(let i = 0; i<strings.length; i++){
//         abc.push(strings[i][n]) // 문자열의 n번째 자리수 추출 후 새 배열 abc에 추가
//         abc.sort()           // abc배열 정렬
//        }                     //처음 for문 종료
//         strings.sort()       //strings 사전적 순서로 재정렬
//     for(let i = 0; i<strings.length; ){   //새로운 for문 시작 (abc의 알파벳에 strings의 원래 단어들 매칭해주기)
//         for(let j = 0; j<abc.length; j++){
//             if(strings[i][n]===abc[j]){    //사전적으로 정렬한 strings의 단어들이 n번째 자리가 abc의 원소와 같으면 
//                 abc[j]=strings[i]          // 해당 abc 원소(즉 n번째자리 알파벳)에 단어 매칭
//                 i++                        // j의 반복은 종료하고 i를 증가시킴 (즉 중복해서 할당하지 못하게 abc배열의 j반복문은 break 하고 i++ 시켜서 strings의 다음 index로 반복 시작)
//                 break
//             }
//         }
//     }
//     return abc
// }
           
// strings = ["bcb", "acb", "dca", "cca"]
// solution(strings, 2)

// ---------------------------------------------------------------36번. 완료 


// function solution (str){
//     let max = []
//     let min = []

//         for(let i =0; i<str.length; i++){
//             if(str[i].toUpperCase() < str[i]){
//                 min.push(str[i])
//             }else {
//                 max.push(str[i])
//             }
//         }
//         max = max.sort().reverse()
//         min = min.sort().reverse()

//         let max_join = max.join("")
//         let min_join = min.join("")

//         let result = min_join + max_join

//     return result
// }
// console.log(solution("aAcdZhg"))


// function solution(s){  //다른사람 답안
//     return s.split('').sort().reverse().join('')
// }


//-----------------------------------------------37번. 소수만들기 완료

/*소수 판별법
let sosu= []
let sosuX = []
let num = 0;
function solution(arr){
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            for(let h = j+1; h<arr.length; h++){
                num = arr[i] + arr[j] + arr[h]

                for(let k = 2; k<num; k++){
                    if(num%k !==0){
                       if(k===num-1){
                        sosu.push(num)
                       }
                    }else{
                        sosuX.push(num)
                        break
                    }
                }
            }
            
        }
    }
    return sosu.length
}

console.log(solution([1,2,7,6,4]))
*/
 
/*---------------------------------------------------38번. 완료
let nums = ['zero', 'one', 'two', 'three','four','five','six','seven','eight','nine']

function solution(str){
    for(let i = 0; i<nums.length;){
        if(str.indexOf(nums[i])>=0){
            str = str.replaceAll(nums[i], i)
            i++
        } else{
            i++
        }
}
return Number(str)
}

console.log(solution("2three45sixseven"), typeof(solution("2three45sixseven"))) 
*/

//--------------------------------------------------39번.  시저암호 완료

// let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// let idx1st = 0; 
// let result = ""
// let newstr =""
// function solution(str, n) {
//     let strsp = str.split("")  
//     for(let i = 0; i<strsp.length; i++){  
//         if(strsp[i]===" "){
//             strsp[i] = " "
//             // continue
//         }else{
//             if(alpha.indexOf(strsp[i].toLowerCase())+n >=26){
//                 idx1st = alpha.indexOf(strsp[i].toLowerCase())+n-26
//                     if(strsp[i].toUpperCase()<strsp[i]){
//                         strsp[i] = alpha[idx1st]
//                     }else{
//                         newstr = alpha[idx1st]
//                         strsp[i] = newstr.toUpperCase()
//                     }
//             } else{
//                 idx1st = alpha.indexOf(strsp[i].toLowerCase())+n
//                     if(strsp[i].toUpperCase()<strsp[i]){
//                         strsp[i] = alpha[idx1st]
//                     }else{
//                         newstr = alpha[idx1st]
//                         strsp[i] = newstr.toUpperCase()
//                     }
//                 }           
//             }
//         }
//     result = strsp.join("")
//     return result
// }



