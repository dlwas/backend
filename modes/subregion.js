import { getCleanArray } from '../utils.js'

export default function ({ db, getRandomIds, rounds, checkLang }) {
  const results = []
  for (let i = 0; i < rounds; i++) {
    const good = [getRandomIds[i][0]].map((itemId) => db[itemId])[0]
    console.log([getRandomIds[i][0]].map((itemId) => db[itemId])[0])

    const randoms = getRandomIds[i][1]
      .map((itemId) => [db[itemId].subregion[checkLang]])
      .map((item) => item[0])

    const answers = getCleanArray([good.subregion[checkLang], ...randoms])

    results.push({
      type: 'subregion',
      subregion: good.subregion[checkLang],
      correct: good.name[checkLang],
      answers,
    })
  }
  return results
}
