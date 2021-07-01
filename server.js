const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000;

//middleware

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/public/HTML/contact.html')
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

