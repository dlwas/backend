import express from 'express'
import cors from 'cors'

import { logger, removeNullArray } from './utils.js'
import { useCountries } from './useCountries.js'

const app = express()
const router = express.Router()
const PORT = process.env.PORT || 3001
const dev = !process.env.production
// USE
app.use(cors())
if (dev) {
  app.use(logger)
}

// ROUTES
app.get('/', async (req, res) => {
  const routes = removeNullArray([
    ...new Set(
      app._router.stack.map((r) => {
        return r.route && r.route.path ? r.route.path : null
      })
    ),
  ])
  res.json(routes)
})

app.get('/countries', async (req, res) => {
  res.json(await useCountries.getAll())
})

app.get('/countries/modes/', async (req, res) => {
  let { difficulty, rounds, mode, lang } = req.query

  if (!difficulty) difficulty = 'easy'
  if (!rounds) rounds = 5
  if (!mode) mode = 'capital'
  if (!lang) lang = 'en'

  res.json({
    mode,
    data: await useCountries.mode({ difficulty, rounds, mode, lang }),
  })
})

// LISTEN
app.listen(PORT, () => {
  console.log(`***** listening on ${PORT}`)
})
