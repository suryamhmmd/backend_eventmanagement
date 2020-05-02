const express = require('express')
const cors = require('cors')

const userRouter = require('./routers/adminRouter')
const evetRouter = require('./routers/eventRouter')
const suratRouter = require('./routers/suratRouter')

const app = express()
// const port = process.env.PORT || 2019
const port = 2022

app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(evetRouter)
app.use(suratRouter)

app.listen(port, ()=>{
    console.log(`running at port ${port}`)
})