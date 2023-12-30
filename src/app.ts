// const express = require('express')
import express from 'express'
import cors from 'cors'
import { userRoutes } from './routes/user.route'
const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/user', userRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app
