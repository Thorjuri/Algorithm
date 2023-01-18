//1번
function change(num) {
    let num2 = String(num);
    let output = "";
    let sum = 0;
    for(let i = num2.length-1; i>=0; i--){
        sum = Number(sum) + Number(num2[i])
        if (i >0) {
            output = output + num2[i] + "+"
    } else {
        output = output + num2[i] + "=" + sum 
    };
    
};
console.log(output);
};

change(718253)




// 2번
function studyLap(arr1, arr2){
    let total = 0;
    for(let i = 0; i<arr1.length; i++){
        if(arr2[i]>=29){
            arr2[i] = 21
            total = total + (arr2[i]-arr1[i])
        }else {
        total = total + (arr2[i]-arr1[i])
        }
    }
    return console.log(total)
}
studyLap(checkIn, checkOut)
// 입출력 예(1)
// let checkIn = [9,9,8,8,7,8,9]
// let checkOut = [21,25,30,29,22,23,30]

// 입출력 예(2)
// let checkIn = [9,7,8,9,7,9,8]
// let checkOut = [23,22,26,26,29,27,22]

// 지정 입력값
// let checkIn = [9,9,9,9,7,9,8]
// let checkOut = [23,23,30,28,30,23,23]



//3번
let str = "3 5 4 11 8 9 1 15"

let new_str = str.split(" ")
let elm 
let unprime = []
let prime = []
for(let j = 0; j<new_str.length; j++){
        elm = new_str[j]
    for(let i =2; i<elm; i++){
        if(elm%i ===0) {
            unprime.push(elm)
            break
        }else {
            prime.push(elm)
            
        }
    }}

console.log(prime, unprime)
