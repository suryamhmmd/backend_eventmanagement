const conn = require('../connection/index')
const router = require('express').Router()

router.post('/event', (req, res)=>{
    let sql = `INSERT INTO event SET ?`
    let data = req.body
    
    conn.query(sql, data, (err, result)=>{
        if(err) return res.send({error:err.message})
        res.send(result)
    })
})

router.get('/event', (req, res)=>{
    let sql = `SELECT * from event`

    conn.query(sql, (err, result)=>{
        if(err) return res.send({error: err.message})
        res.send(result)
    })
})

module.exports = router