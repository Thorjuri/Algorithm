
      //1열 2열 3열
let A = [[12, 12], 
         [12, 12], 
         [0, 7]] //3행
// console.log(A[0][1])
         //2행 1열 =  A[2][1]
//i = 열
function solution(A){
    let sum = 0;
    let sums = [];
        for(let i = 0; i < A.length; i++){
            for(let j = 0; j < A[i].length; j++){
                for(let k = 0; k < A.length; k++){
                    if(i === k){
                        continue;
                    };
                    for(let h = 0; h < A[i].length; h++){
                        if(j !== h){
                            sum = A[i][j] + A[k][h];
                        }else{
                            continue;
                        };
                        sums.push(sum);
                    };
                };
            };
        };
    return Math.max(...sums);
};


console.log("--------answer------", solution(A))
