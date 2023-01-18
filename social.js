function numberOfItems(arr, item) {
    let count = 0;
    let result = [];
    arr.map((val)=>{
        if(typeof(val)=== "number"){
            result.push(val);
        }else if(typeof(val)=== "string"){
            result.push(val);
        }else if(typeof(val)=== "object"){
            for(let i = 0; i<val.length; i++){
                if(typeof(val[i]) !== "object"){
                    result.push(val[i]);
                }else{
                    for(let j = 0; j<val[i].length; j++){
                        result.push(val[i][j])
                    }
                }
            };
        };
    });
    result.map((val)=> {
        if(val === item){
            count = count +1;
        };
    });
    console.log(result)
    return count;
  };
  
  var arr = [
    25,
    "apple",
    ["banana", "strawberry", "apple", 25, ["apple", 25]]
  ];
  console.log(numberOfItems(arr, 25));
  console.log(numberOfItems(arr, "apple"));

