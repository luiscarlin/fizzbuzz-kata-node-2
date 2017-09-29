exports.execute = (num, cb) => {

  const EventEmitter = require('events')
  class emitter extends EventEmitter {}
  em = new emitter()

  var fizz = (num) => {
    if (isFizzy(num) && !isBuzzy(num)) em.emit('out', "fizz")
  }

  var buzz = (num) => {
    if (isBuzzy(num) && !isFizzy(num)) em.emit('out', "buzz")
  }

  var both = (num) => {
    if (isBuzzy(num) && isFizzy(num)) em.emit('out', "fizzbuzz")
  }

  var neither = (numb) => {
    if (flat(numb)) em.emit('out', numb + '')
  }

  em.on('number', fizz)
  em.on('number', buzz)
  em.on('number', both)
  em.on('number', neither)

  var flat = (num) => {
    return !isFizzy(num) && !isBuzzy(num)
  }

  var isFizzy = (num) => {
    return num % 3 === 0
  }

  var isBuzzy = (num) => {
    return num % 5 === 0
  }

  counter = 0
  buffer = []

  em.on('out', cb)
  em.emit('number', num)
}
