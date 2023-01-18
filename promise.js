// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('foo')
//         reject('error')
//     }, 3000)
// }).then((val)=>{
//     console.log(val)
// })

// // promise1.then((value) => {
// //     console.log(value);
// //     // expected output: "foo"
// // });

// // promise1.catch((err)=>{
// //     console.log("----", err)
// // })


// const users = ["a", "b", "c", "d", "e"];
const users = [];

function getAllUsers (users) {
    return new Promise((resolve, reject)=>{
        if(users.length > 0) { 
            resolve(users.length); //성공(true)
        } else {
            reject(new Error('users not exist!'));  //실패(false)
        };
    }).then((val)=>{
        console.log(val);  //성공: 결과값 반환
    }).catch((val)=>{
        console.log(val);  //실패: Error 반환
    });
};

getAllUsers(users);