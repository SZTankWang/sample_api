const express = require('express')
const app = express()
const port = 6000




app.get('/api', (req, res) => {
    res.send('hello world!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })