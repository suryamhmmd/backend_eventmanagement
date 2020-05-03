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


//ROUTER PROPOSAL
router.post('/proposal', (req, res)=>{
    let sql = `INSERT INTO proposal SET ?`
    let data = req.body
    
    conn.query(sql, data, (err, result)=>{
        if(err) return res.send({error:err.message})
        res.send(result)
    })
})

router.get('/proposal/:id_event', (req, res)=>{
    let sql = `SELECT * from proposal where id_event = '${req.params.id_event}'`

    conn.query(sql, (err, result)=>{
        if(err) return res.send({error: err.message})
        res.send(result)
    })
})

router.get('/edit_proposal/:id_proposal', (req, res)=>{
    let sql = `SELECT * from proposal where id_proposal = '${req.params.id_proposal}'`
    conn.query(sql, (err, result)=>{
        if(err) return res.send({error: err.message})
        res.send(result)
    })
})

router.put(`/save_proposal/:id_proposal`, (req, res)=>{
    let sql = `UPDATE proposal SET ? WHERE id_proposal= ${req.params.id_proposal}`
    let data = req.body

    conn.query(sql, data, (err, result)=>{
        if(err) return res.send({error: err.message})
        res.send(result)
    })
})

//ROUTER Mou
router.post('/mou', (req, res)=>{
    let sql = `INSERT INTO perjanjian SET ?`
    let data = req.body
    
    conn.query(sql, data, (err, result)=>{
        if(err) return res.send({error:err.message})
        res.send(result)
    })
})

router.get('/mou/:id_event', (req, res)=>{
    let sql = `SELECT * from perjanjian where id_event = '${req.params.id_event}'`

    conn.query(sql, (err, result)=>{
        if(err) return res.send({error: err.message})
        res.send(result)
    })
})

router.get('/edit_mou/:id_perjanjian', (req, res)=>{
    let sql = `SELECT * from perjanjian where id_perjanjian = '${req.params.id_perjanjian}'`
    conn.query(sql, (err, result)=>{
        if(err) return res.send({error: err.message})
        res.send(result)
    })
})

router.put(`/save_mou/:id_perjanjian`, (req, res)=>{
    let sql = `UPDATE mou SET ? WHERE id_perjanjian= ${req.params.id_perjanjian}`
    let data = req.body

    conn.query(sql, data, (err, result)=>{
        if(err) return res.send({error: err.message})
        res.send(result)
    })
})

//ROUTER Noutlensi
router.post('/notulensi', (req, res)=>{
    let sql = `INSERT INTO rapat SET ?`
    let data = req.body
    
    conn.query(sql, data, (err, result)=>{
        if(err) return res.send({error:err.message})
        res.send(result)
    })
})

router.get('/notulensi/:id_event', (req, res)=>{
    let sql = `SELECT * from rapat where id_event = '${req.params.id_event}'`

    conn.query(sql, (err, result)=>{
        if(err) return res.send({error: err.message})
        res.send(result)
    })
})

router.get('/edit_notulensi/:id_rapat', (req, res)=>{
    let sql = `SELECT * from rapat where id_rapat = '${req.params.id_rapat}'`
    conn.query(sql, (err, result)=>{
        if(err) return res.send({error: err.message})
        res.send(result)
    })
})

router.put(`/save_notulensi/:id_rapat`, (req, res)=>{
    let sql = `UPDATE rapat SET ? WHERE id_rapat= ${req.params.id_rapat}`
    let data = req.body

    conn.query(sql, data, (err, result)=>{
        if(err) return res.send({error: err.message})
        res.send(result)
    })
})



module.exports = router