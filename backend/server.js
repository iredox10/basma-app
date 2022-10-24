import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import routes from './routes/routes.js'
const app = express()

mongoose.connect('mongodb://localhost/basma-app')
.then(res => console.log('connect'))
.catch(err => err)

app.use(cors('*'))
app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({extended:true,limit: '50mb'}))

app.use(routes)


app.listen(5000)
