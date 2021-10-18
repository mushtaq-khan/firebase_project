const express = require('express');
// const User = require('./config/config');
const route = require('./route/staffRoute')
const app = express();
const port = 3030;
app.use(express.json());
app.use('/api',route)
// app.post('/post',async function(req,res){
//   console.log('testing')
//   let data = req.body;
//   console.log("data",data)
//   await User.add(data);
//   res.json('sucessfully saved');
// })

app.listen(port,function(req,res){
  console.log(`app is running on port ${port}`);
})