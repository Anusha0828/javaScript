const URL="http://localhost:3000/Sisters";
// POST request
// let op={
//     "method":"POST",
//     "headers":{
//         "Content-Type":"application/json"
//     },
//     "body":JSON.stringify({
//         "id":"4",
//         "name":"Honey",
//         "age":10
//     })
// }
// fetch(URL,op)
// .then((response)=>{
//     if(response.ok){
//         console.log(response.statusText);
//     }
// })
// PUT request
// let op={
//     "method":"PUT",
//     "headers":{
//         "Content-Type":"application/json"
//     },
//     "body":JSON.stringify({
//         "name":"Honey",
//         "age":12
//     })
// }
// fetch(URL,op)
// .then((response)=>{
//     if(response.ok){
//         console.log(response.statusText);
//     }
// })
//PATCH request
// let op={
//     "method":"PATCH",
//     "headers":{
//         "Content-Type":"application/json"
//     },
//     "body":JSON.stringify({
//         "age":10
//     })
// }
// fetch(URL,op)
// .then((response)=>{
//     if(response.ok){
//         console.log(response.statusText);
//     }
// })
// DELETE request
// fetch(URL,{
//     "method":"DELETE"
// }).then((response)=>{
//     if(response.ok){
//         console.log(response.statusText);
//     }
// })
//GET REQUEST
fetch(URL)
.then((response)=>response.json())
.then((data)=>{
    for(let i=0;i<data.length;i++){
        console.log(data[i]);
    }
})
    