import sirv from 'sirv'
import express from 'express'
const app = express()
import compression from 'compression'
import * as sapper from '@sapper/server'

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(
  compression({ threshold: 0 }),
  sirv('static', { dev }),
  sapper.middleware()
)

app.listen(PORT, err => {
  console.log(`Server is up on port ${PORT}`)
  if (err) console.log('error', err)
})
