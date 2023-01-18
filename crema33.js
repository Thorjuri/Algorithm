const arr = [1,2,3];
const k = 5

function maxLength(arr) {
    
  let flag = new Array(arr.length).fill(false);
  const subSets = [];
  
  const subSet = function DFS(depth){
    if(depth === arr.length){
      const element = arr.filter((_,index) => flag[index]);
      subSets.push(element);
      
      return;
    }
    
    flag[depth] = true;
    subSet(depth + 1);
    
    flag[depth] = false;
    subSet(depth + 1);
  }
  
  subSet(0);

  const result = subSets.map((val)=> {
    let sum = 0;
    for(let i = 0; i<val.length; i++){
        sum = sum + val[i]
    };
    if(sum <= 4){
        console.log(val)
        return val
    }
  })
  console.log(subSets)

//   console.log(result[0].length)
//   return Math.max(...result)


//   return subSets;
}

// console.log(maxLength(arr))
maxLength(arr)