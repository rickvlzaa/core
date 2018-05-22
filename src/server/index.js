import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

import path from 'path'

import routes from './routes'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

app.use("*", routes)

app.listen(process.env.PORT)
