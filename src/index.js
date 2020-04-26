const express = require('express')
const cors = require('cors')

const userRouter = require('./routers/adminRouter')
const evetRouter = require('./routers/eventRouter')

const app = express()
// const port = process.env.PORT || 2019
const port = 2022

app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(evetRouter)

app.listen(port, ()=>{
    console.log(`running at port ${port}`)
})