
function solution(str) {
    let arr = str.split("")        //매개변수로 주어진 단어를 한 글자 단위로 배열에 담음
    let arr2 = []

        for(let i = 0; i<arr.length; i++){     
            if(i%2===0){                //i가 짝수인 경우
                if(arr[i]===" "){    //공백처리
                    arr2.push(arr[i])  //공백도 새 배열에 담고 
                    arr.splice(i,1)    //기존 배열의 공백자리를 잘라냄 
                }
                arr2.push(arr[i].toUpperCase())  //짝수인덱스를 대문자로 바꾸어 새 배열에 push
            }else{
                if(arr[i]===" "){   //i가 홀수인 경우
                    arr2.push(arr[i])
                    arr.splice(1,1)  //동일한 공백처리
                }
                arr2.push(arr[i])  //홀수 인덱스는 그대로 새 배열에 push
            }
        }
        return arr2.join("")  //새 배열의 모든 원소를 문자열로 합침 (공백포함)
}
console.log(solution('try hello world'))





