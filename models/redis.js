const redis = require('ioredis')
const { error } = require(__absolute + '/log')('select:db')

let sub = null
let pub = null

module.exports.init = async () => {
  try {
    sub = redis.createClient(process.env.REDIS_URL)
    sub.on('error', e => {
      error(e)
    })
    pub = redis.createClient(process.env.REDIS_URL)
    pub.on('error', e => {
      error(e)
    })
  } catch (e) {
    error(e)
  }
}

module.exports.getRedisConnection = (name) => {
  if (name == 'sub') return sub
  if (name == 'pub') return pub
  return pub
}
