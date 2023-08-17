import dotenv from 'dotenv'
import express  from 'express'
dotenv.config()

import './connection'

const PORT = process.env.PORT || 8080

const app = express()

app.get('/', (req, res) => {
  res.send("SERVER UP 2")
})

app.listen(PORT, () => {
  console.log('TA ON O SERVER')
})
