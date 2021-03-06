'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Log extends Model {
  static get primaryKey () {
    return 'logId'
  }
}

module.exports = Log
