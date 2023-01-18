function longestChain(words) {
    let arr = []
    for(let i = 0; i<words.length; i++){
        for(let j = 0; j<words.length; j++){
            if(words[j].indexOf(words[i]) >= 0 && words[j].length === words[i].length +1){
                arr.push(words[j])
                console.log("-----txt-----", words[i])
                console.log("-----words-----", words[j])

            }
        }
    }
}

const words = ['a', 'b', 'ba', 'bca', 'bda', 'bdca']
longestChain(words)