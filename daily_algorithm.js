/*
문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. 
str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.
*/
function findNum(str){
    let arr= []
    for(let i = 0; i<str.length; i++){
        if(Number(str[i]) !== " "){
            arr.push(Number(str[i]))
        }
    }
    console.log(arr)
    let maxNum = Math.max(...arr)
    let minNum = Math.min(...arr)
    return minNum+" "+maxNum
}
str = "-3 2 5 6 -1 3"
console.log(findNum(str))