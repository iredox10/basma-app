import express from 'express'
import mongoose from 'mongoose'
import routes from './routes/routes.js'
const app = express()

mongoose.connect('mongodb://localhost/basma-app')
.then(res => console.log('connect'))
.catch(err => err)

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(routes)


app.listen(5000)
