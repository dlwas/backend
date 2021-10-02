export function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function idByDifficulty(times, max) {
  const results = []
  for (let i = 0; i <= times; i++) {
    results.push(getRandomInt(0, max))
  }
  return results
}

export function uniq_fast(array) {
  let seen = {}
  let out = []
  let len = array.length
  let j = 0
  for (let i = 0; i < len; i++) {
    let item = array[i]
    if (seen[item] !== 1) {
      seen[item] = 1
      out[j++] = item
    }
  }
  return out
}

export function removeNullArray(array) {
  return array.filter((e) => e !== null)
}

export function reshuffleArray(array) {
  return array.sort(() => Math.random() - 0.5)
}

export function getCleanArray(array) {
  return reshuffleArray(removeNullArray(uniq_fast(array)))
}

export function logger(req, res, next) {
  let current_datetime = new Date()
  let formatted_date =
    current_datetime.getFullYear() +
    '-' +
    (current_datetime.getMonth() + 1) +
    '-' +
    current_datetime.getDate() +
    ' ' +
    current_datetime.getHours() +
    ':' +
    current_datetime.getMinutes() +
    ':' +
    current_datetime.getSeconds()
  let method = req.method
  let url = req.url
  let status = res.statusCode
  let log = `[${formatted_date}] ${method}:${url} ${status}`
  console.log(log)
  next()
}

export default {
  getRandomInt,
  idByDifficulty,
  uniq_fast,
  removeNullArray,
  reshuffleArray,
  getCleanArray,
  logger,
}
