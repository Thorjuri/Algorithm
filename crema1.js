function getFinalString(s){
    while(s.indexOf("AWS") >= 0){
        s = deleteAWS(s)
    };
    if(s.length === 0){
        return -1
    }else{
        return s
    };
};

function deleteAWS(s){
    const splitedS = s.split("AWS");
    const joinedS = splitedS.join("")
    return joinedS;
};

console.log(getFinalString("AWAWSSWSG"))