function findRange(num) {
    const nums = `${num}`;
    let firstNum = 0;
    for(let i = 0; i<nums.length; i++){
        if(nums[i] !== "9"){
            firstNum = nums[i]
            break
        }
    }
    // console.log("-----firstNum----", firstNum)
    const searchFirst = new RegExp(firstNum, "g");
    const replaceWith = '9';
    const max = nums.replaceAll(searchFirst , replaceWith);
    // console.log(max)
    let secondNum = 0;
    let replackSecond = ""
    if(nums[0] !== "1"){
        secondNum = nums[0];
        replackSecond = "1";
    }else{
        for(let i = 1; i<nums.length; i++){
            if(nums[i-1] !== nums[i]){
                secondNum = nums[i];
                replackSecond = "0";
                break;
            };
        };
    }
    // console.log("-----secondNum----", secondNum)

    const searchSecond = new RegExp(secondNum, "g");
    
    const min = nums.replaceAll(searchSecond , replackSecond);
    // console.log(min)
    return max - min;
};

console.log(findRange(17654))