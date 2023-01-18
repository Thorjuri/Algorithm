function solution(votes, website) {
	const sites = votes.map((val)=> {
        const linkedWeb = val.split(" ").length -1;
        const site = {};
        site["name"] = val[0];
        site["votes"] = 1 + linkedWeb;
        site['linkedWeb'] = val.split(" ").slice(1, linkedWeb+1);
        return site;
    });
    console.log(sites);
    connection()

};

function connection(arr){
    const result = arr.map((val)=> {
        for(let i = 0; i < val.linkedWeb.length; i++){
            for(let j = 0; j < arr.length; j++){
                if(val.linkedWeb[i] === arr[j].name){
                    return Object.keys(val).find((key)=> {
                            val[key] === val.linkedWeb[i]
                        });
                };
            };
        };
    });
    return result
};

const votes = ["A B C D", "B C D", "C D"]
const website = "A"
solution(votes, website)