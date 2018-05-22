import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import path from 'path'

import routes from './routes'

const app = express()

if(process.env.NODE_ENV === "development") {
    app.use(express.static(path.resolve(__dirname, '../../build', 'public')))
    app.use(morgan('dev'))
}

app.use(express.static(path.resolve(__dirname, '../../assets')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

app.use("*", routes)

app.listen(process.env.PORT)
