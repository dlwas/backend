import { difficulties } from './config.js'
import { getRandomInt, uniq_fast, idByDifficulty } from './utils.js'
// db
import { readFile } from 'fs/promises'
const db = JSON.parse(await readFile(new URL('./db.json', import.meta.url)))
//modes
import capital from './modes/capital.js'
import subregion from './modes/subregion.js'
import area from './modes/area.js'
import population from './modes/population.js'

export const useCountries = {
  async getRandomIds({ difficulty, rounds }) {
    const db = await useCountries.getAll()
    const dbLength = db.length - 1

    const results = []
    const difficultyTimes = difficulties[difficulty] - 1
    const roundsTimes = rounds - 1

    for (let i = 0; i <= roundsTimes; i++) {
      results.push([getRandomInt(0, dbLength), idByDifficulty(difficultyTimes, dbLength)])
    }

    return results
  },
  async mode({ difficulty, rounds, mode, lang }) {
    const db = await useCountries.getAll()
    let getRandomIds = await useCountries.getRandomIds({ difficulty, rounds })

    const checkUniq =
      uniq_fast(getRandomIds.flat().flat()).length == getRandomIds.flat().flat().length
    if (!checkUniq) {
      getRandomIds = await useCountries.getRandomIds({ difficulty, rounds })
    }

    let results = null
    const checkLang = lang == 'pl' ? 1 : 0
    const parameters = { db, getRandomIds, difficulty, rounds, checkLang }

    switch (mode) {
      case 'capital':
        results = capital(parameters)
        break
      case 'subregion':
        results = subregion(parameters)
        break
      case 'area':
        results = area(parameters)
        break
      case 'population':
        results = population(parameters)
        break

      default:
        break
    }

    return results
  },
  getAll() {
    return db
  },
}

export default useCountries
