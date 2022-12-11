import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'

import programmingLangaugesRoutes from './routes/programmingLangaugesRoute'

const app: Application = express()
const address: string = '0.0.0.0:3000'

// CORS configration options
const corsOptions = {
  origin: '*',
  optionsSucessStatus: 200,
}

app.use(cors(corsOptions))

// HTTP request logger middleware
app.use(morgan('dev'))
app.use(bodyParser.json())

programmingLangaugesRoutes(app)

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello World 🌍',
  })
})

app.listen(3000, function () {
  console.log(`🚀 Server is starting at: ${address}`)
})
