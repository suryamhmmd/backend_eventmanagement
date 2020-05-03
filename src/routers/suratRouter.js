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

router.get('/surat/:id_event', (req, res)=>{
    let sql = `SELECT * from surat where id_event = '${req.params.id_event}'`

    conn.query(sql, (err, result)=>{
        if(err) return res.send({error: err.message})
        res.send(result)
    })
})

router.get('/edit_surat/:id_surat', (req, res)=>{
    let sql = `SELECT * from surat where id_surat = '${req.params.id_surat}'`
    conn.query(sql, (err, result)=>{
        if(err) return res.send({error: err.message})
        res.send(result)
    })
})

router.put(`/save_surat/:id_surat`, (req, res)=>{
    let sql = `UPDATE surat SET ? WHERE id_surat= ${req.params.id_surat}`
    let data = req.body

    conn.query(sql, data, (err, result)=>{
        if(err) return res.send({error: err.message})
        res.send(result)
    })
})


module.exports = router