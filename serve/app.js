import express from 'express'

const app = express()


// app.get('/',(req,res)=>res.send('1234'))

app.use(express.static('./dist'))


app.listen(3000,()=>{
    console.log("http://127.0.0.1:3000")
})