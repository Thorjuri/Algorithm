const arr = [1,2,3,4,5];
const k = 5

function maxLength(a, k) {
    const result = a.map((val, idx, arr)=>{
        const rest = k-val  //4
        console.log("----rest-----", rest)
        let partAll = []
        let part = [val]  //1
        let partSum = 0; 
        for(let i = 0; i<part.length; i++){
            partSum = partSum + part[i]  //1
        }
        let sum = 0;
        // console.log("----part1-----", part)
        for(let i = idx+1; i<arr.length; i++){
            sum = partSum + arr[i]
            // console.log(val, "/", sum, "/")
            if(sum <= k){
                console.log(arr[i])
                part.push(arr[i])
                partAll.push(part)
            }else{
                break
            }
            partAll.push(part)
        }
        // console.log(val, "/", part, "/")
        return partAll
    })
    console.log(result)
};


maxLength(arr, k)
