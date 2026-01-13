require('dotenv').config()
const express = require('express')
const app = express()
 


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('shubhamsj200')
})

app.get('/login',(req,res)=>{
    res.send('<h1>hi i am here to login')
})

app.get('/youtube',(req,res)=>{
    res.send('<a href="https://www.youtube.com">Visit youtube </a>')

})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
