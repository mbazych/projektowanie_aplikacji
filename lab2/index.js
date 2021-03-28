const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/rest', (req, res) => {
    res.send('Got a POST request to /rest')
})

app.post('/soap', (req, res) => {
    res.send('Got a POST request to /soap')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})