const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))



app.get('/a', (req, res) => {
    res.sendFile('/index.html', {root: __dirname})
})

