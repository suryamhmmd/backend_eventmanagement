const conn = require('../connection/index')
const router = require('express').Router()

router.post('/surat', (req, res)=>{
    let sql = `INSERT INTO surat SET ?`
    let data = req.body
    
    conn.query(sql, data, (err, result)=>{
        if(err) return res.send({error:err.message})
        res.send(result)
    })
})

router.get('/surat', (req, res)=>{
    let sql = `SELECT * from surat`

    conn.query(sql, (err, result)=>{
        if(err) return res.send({error: err.message})
        res.send(result)
    })
})

module.exports = router