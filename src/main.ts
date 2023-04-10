const express = require('express')
const app = express()
const port = 3333
const cors = require('cors')
app.use(express.json());
//open cors
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/errors', (req, res) => {
  console.log(req.body)
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})