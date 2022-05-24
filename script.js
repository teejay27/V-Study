const https= require('https');
const express=require('express');
const app=express();
const path = require('path')
app.use(express.static('public'))


app.use('/static', express.static(path.join(__dirname, 'public')))


app.listen(8000,()=>{
    console.log("listening on 8000");
})