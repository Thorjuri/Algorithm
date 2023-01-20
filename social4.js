function findAllHobbyists(hobby, hobbies) {
    let person = []
    const { Steve, Patty, Chad } = hobbies;
    const arr = [Steve, Patty, Chad]
    
    const result = arr.map((val, idx)=> {
        for(let i = 0; i<val.length; i++){
            if(val[i] === hobby){
                // console.log(idx)
                return idx
            }
        }
    })
    // console.log(result)
    result.map((val)=> {
        if(val === 0){
            person.push("Steve")
        }else if(val === 1){
            person.push("Patty")
        }else if(val === 2){
            person.push("Chad")
        }
    })
    return person;
}

var hobbies = {
    "Steve": ['Fashion', 'Piano', 'Reading'],
    "Patty": ['Drama', 'Magic', 'Pets'],
    "Chad": ['Puzzles', 'Pets', 'Yoga']
};
console.log(findAllHobbyists('Yoga', hobbies));