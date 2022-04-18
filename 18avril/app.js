const express=require('express');
// const req = require('express/lib/request');
// const res = require('express/lib/response');
// express ik funcrion dar ghlab app mirizh
const app=express();

// app.use(()=>{
//     console.log("hello wold");
// })


// app.use((require,response) => {
//     // console.dir(require);
// //   console.log("hello wold");
// response.send("<h1>hello</h1>")
// });

app.get('/',(req,res)=>{
    res.send("<h1>this is your homeoage</h1>")
})
app.get("/cat",(req,res)=>{
    res.send("<h6>woof</h6>")
})
app.get("/woof",(req,res)=>{
    res.send("<h2>wate abate</h2>")
})

// port app 
app.listen(3001,()=>{
    // console.log(express);
    console.log("you app is running on port :3001");
})



