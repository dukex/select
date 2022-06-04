const fs = require('fs')
const path = require('path')
const __package = path.join(process.cwd(), 'package.json')

global.__IS_CLI = fs.existsSync(__package) === false

if (!global.__IS_CLI) {
  require('debugs/init')
}

const ___package = require('./package.json')

global.__absolute = __dirname
process.env.NODE_CONFIG_DIR = process.env.NODE_CONFIG_DIR || '.'
global.config = require('config')
global.DEFAULT_SECRET_HASH = '+x3VR4Fn<y3U6T&G'
global.DEFAULT_SECRET_ACCESS_TOKEN = 'h{.V(eWpSbpU35J4'
global.DEFAULT_POLICY_SESSION_EXPIRE = 43200
global.CLI_VERSION = ___package.version


const os = require('os');
global.__hostname = os.hostname()
const winston = require('winston');
// require('winston-syslog');

if (process.env.NODE_ENV == 'production') {
  global.logger = winston.createLogger({
    // format: winston.format.simple(),
    format: winston.format.json(),
    levels: winston.config.syslog.levels,
    transports: [
      new winston.transports.Console({

      })
    ],
  });
} else {
  global.logger = winston.createLogger({
    // format: winston.format.simple(),
    format: winston.format.printf(info => info.message),
    levels: winston.config.syslog.levels,
    transports: [
      new winston.transports.Console({

      })
    ],
  });
}

module.exports = {
  app: require('./app.js'),
}
