function solution(input) {
    input.sort((a, b)=> {
        return a.length - b.length;
    });

    input.sort((a, b)=> {
        return sumNums(a) - sumNums(b);
    });

    input.sort((a, b)=> {
        return getStrs(a) - getStrs(b)
    })
    return input;
};

function sumNums(str){
    const splited = str.split("");
    let sum = 0;
    for (let j = 0; j < splited.length; j++){
        if(!isNaN(splited[j]) === true){
            sum = sum + parseInt(splited[j]);
        };
    };
    return sum;
};

function getStrs(str){
    const regex = /[0-9]/g;
    const result = str.replace(regex, "");
    return result;
};


input = ["ABCD", "145E", "A", "D910", "Z321"]
console.log(solution(input))

// const str = "Hello_123_World_456_!!!";
// const regex = /[^0-9]/g;
// const result = str.replace(regex, "");
// const number = parseInt(result);

// console.log(result);
// console.log(typeof(result));

// console.log(number);
// console.log(typeof(number));