function solution(N, S) {
    if(S === ""){
        return N * 2;
    };
    let seats = S.split(" ");
    let family = 0;
    for(let i = 1; i < N; i++){
        let col = ["D","E","F","G"];
        let count = 0;
        for(let j = 0; j < col.length; j++){
            let seat = i + col[j];
            if(seats.indexOf(seat) >= 0){
                count = count + 1;
            };
        };
        if(count === 0){
            family = family + 2;
        }else if (count === 1){
            family = family + 1;
        }else if (count >= 2){
            family = family;
        };
    };
    return family;
};

console.log(solution(1, ""))
