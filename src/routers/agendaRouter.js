const conn = require('../connection/index')
const router = require('express').Router()
const moment = require('moment')

router.post('/agenda', (req, res)=>{
    let sql = `INSERT INTO agenda SET ?`
    let data = req.body
    
    conn.query(sql, data, (err, result)=>{
        if(err) return res.send({error:err.message})
        res.send(result)
    })
})

router.get('/agenda/:id_event', (req, res)=>{
    let sql = `SELECT * from agenda where id_event = '${req.params.id_event}'`

    conn.query(sql, (err, result)=>{
        if(err) return res.send({error: err.message})
        res.send(result)
    })
})

router.get('/edit_agenda/:id_agenda', (req, res)=>{
    let sql = `SELECT * from agenda where id_agenda = '${req.params.id_agenda}'`
    conn.query(sql, (err, result)=>{
        if(err) return res.send({error: err.message})
        res.send(result)
    })
})

router.put(`/save_agenda/:id_agenda`, (req, res)=>{
    let sql = `UPDATE agenda SET ? WHERE id_agenda= ${req.params.id_agenda}`
    let data = req.body

    conn.query(sql, data, (err, result)=>{
        if(err) return res.send({error: err.message})
        res.send(result)
    })
})

module.exports = router
