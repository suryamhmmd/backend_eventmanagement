const conn = require('../connection/index')
const router = require('express').Router()

router.post('/rab', (req, res)=>{
    let sql = `INSERT INTO rab SET ?`
    let data = req.body
    
    conn.query(sql, data, (err, result)=>{
        if(err) return res.send({error:err.message})
        res.send(result)
    })
})

router.get('/rab/:id_event', (req, res)=>{
    let sql = `SELECT * from rab where id_event = '${req.params.id_event}'`

    conn.query(sql, (err, result)=>{
        if(err) return res.send({error: err.message})
        res.send(result)
    })
})

router.get('/edit_rab/:id_rab', (req, res)=>{
    let sql = `SELECT * from rab where id_rab = '${req.params.id_rab}'`
    conn.query(sql, (err, result)=>{
        if(err) return res.send({error: err.message})
        res.send(result)
    })
})

router.put(`/save_rab/:id_rab`, (req, res)=>{
    let sql = `UPDATE rab SET ? WHERE id_rab= ${req.params.id_rab}`
    let data = req.body

    conn.query(sql, data, (err, result)=>{
        if(err) return res.send({error: err.message})
        res.send(result)
    })
})

// ROUTER CASHFLOW

router.post('/cashflow', (req, res)=>{
    let sql = `INSERT INTO cashflow SET ?`
    let data = req.body
    
    conn.query(sql, data, (err, result)=>{
        if(err) return res.send({error:err.message})
        res.send(result)
    })
})

router.get('/cashflow/:id_event', (req, res)=>{
    let sql = `SELECT * from cashflow where id_event = '${req.params.id_event}'`

    conn.query(sql, (err, result)=>{
        if(err) return res.send({error: err.message})
        res.send(result)
    })
})

router.get('/edit_cashflow/:id_cashflow', (req, res)=>{
    let sql = `SELECT * from cashflow where id_cashflow = '${req.params.id_cashflow}'`
    conn.query(sql, (err, result)=>{
        if(err) return res.send({error: err.message})
        res.send(result)
    })
})

router.put(`/save_cashflow/:id_cashflow`, (req, res)=>{
    let sql = `UPDATE cashflow SET ? WHERE id_cashflow= ${req.params.id_cashflow}`
    let data = req.body

    conn.query(sql, data, (err, result)=>{
        if(err) return res.send({error: err.message})
        res.send(result)
    })
})



module.exports = router