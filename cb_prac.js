// function taskA(a, b, cb) {
//   setTimeout(() => {
//     const res = a + b;
//     cb(res);
//     console.log(res)
//   }, 2000);
// }

// function taskB(a, cb) {
//   setTimeout(() => {
//     const res = a * 2;
//     cb(res);
//     console.log(a)
//   }, 2000);
// }

// function taskC(a, cb) {
//   setTimeout(() => {
//     const res = a * -1;
//     cb(res);
//     console.log(a)
//   }, 2000);
// }

// taskA(1, 2, (res_a) => {
//   taskB(res_a, (res_b) => {
//     taskC(res_b, (res_c) => {
//       console.log("taskC Result : ", res_c);
//     });
//   });
// });



// function jobA(a, b, cb){
//   setTimeout(()=>{
//     const result = a + b;
//     console.log(result);
//     cb(result)
//   }, 2000);
// };

// function jobB(a, cb){
//   setTimeout(()=>{
//     const result = a + 2;
//     console.log(result);
//     cb(result);
//   }, 2000);
// };

// function jobC(a, cb){
//   setTimeout(()=>{
//     const result = a**2;
//     console.log(result);
//     cb(result);
//   }, 2000);
// };

// jobA(2, 3, (resultA)=>{
//   jobB(resultA, (resultB)=>{
//     jobC(resultB, (resultC)=>{
//       console.log(`---final answer : ${resultC}---`);
//     });
//   });
// });

