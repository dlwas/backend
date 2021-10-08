import { getCleanArray } from '../utils.js'

export default function ({ db, getRandomIds, rounds, checkLang }) {
  const results = []
  for (let i = 0; i < rounds; i++) {
    const good = [getRandomIds[i][0]].map((itemId) => db[itemId])[0]
    const randoms = getRandomIds[i][1].map((itemId) => [db[itemId].area]).map((item) => item[0])

    const answers = getCleanArray([good.area, ...randoms])

    results.push({
      type: 'area',
      area: good.name[checkLang],
      correct: good.area,
      answers,
    })
  }
  return results
}
