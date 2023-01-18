function solution(inner, outer, points_x, points_y) {
    let spot;
    let allSpot = [];
    for (let i = 0; i < points_x.length; i++){
        for(let j = 0; j < points_y.length; j++){
            spot = [points_x[i], points_y[j]];
            allSpot.push(spot);
        };
    };
    const innerArea = inner**2;
    const outerArea = outer**2;
    const answer = allSpot.filter((val)=> {
        let spotArea =  Math.max(val[0], val[1])**2;
        return innerArea <= spotArea && spotArea <= outerArea;
    });
    return answer; 
};



solution(1, 3, [0,1,2,-2,3], [0,1,4,1,0])