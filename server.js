const express = require("express");
const app = express();

app.get('/welcome', (req,res) => {
    res.send({
        message: 'Welcome to my project'
    })
})

app.listen(8080, ()=> {
    console.log("server on 8080")
})