function solution(input) {
    const lengths = input.map((val)=> {
        return val.length;
    });
    const maxLength = Math.max(...lengths);
    let modifiedArr = [];
    for(let i = 0; i < input.length; i++){
        if(input[i].length < maxLength){
            const count = maxLength - input[i].length;
            for(let j = 0; j < count; j++){
                input[i] = ` ${input[i]}`;
            };
            modifiedArr.push(input[i]);
        }else {
            modifiedArr.push(input[i]);
        };
    };
    return modifiedArr;  
};

const input = ["AAA","BBBBB","CCC"];

console.log(solution(input));