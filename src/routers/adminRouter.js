const conn = require('../connection/index')
const router = require('express').Router()

// QUERY LOGIN
router.post('/user/login', (req, res)=>{
    let {email, password} = req.body
    let sql = `SELECT * FROM user WHERE email = '${email}'`
    
    conn.query(sql, (err, result)=>{
        if(err) return res.send(err)
        if(result.length === 0 ) return res.send({error: "User not Found"})

        let user = result[0]
        let _password = result[0].password
        if(password !== _password){
            return res.send({error: "Email or Password is Invalid"})
        }
        // console.log(user)
        res.send(user)
    })
})

router.post(`/user/register`, (req, res)=>{
    let sql = `INSERT into user SET ?`
    let data = req.body

    conn.query(sql, data, (err, result)=>{
        if(err) res.send({error: err.message})
        res.send(result)
    })
})



module.exports = router