// const express = require('express')
// const cors = require('cors')

// const adminUser = require('./routers/adminRouter')

// const app = express()
// const port =  2020

// app.use(cors())
// app.use(express.json())
// app.use(adminUser)

// // app.get(`/`, (req, res)=>{
// //     res.send(`<h1>Running at port ${port} </h1>`)
// // })

// app.listen(port, ()=>{
//     console.log(`running at port ${port}`)
// })

const express = require('express')
const cors = require('cors')

const userRouter = require('./routers/adminRouter')

const app = express()
// const port = process.env.PORT || 2019
const port = 2022

app.use(cors())
app.use(express.json())
app.use(userRouter)

app.listen(port, ()=>{
    console.log(`running at port ${port}`)
})