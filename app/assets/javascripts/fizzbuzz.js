var fizz = (num) => {
  if (isFizzy(num)) {
    return "fizz"
  }
  return num
}

var buzz = (num) => {
  if (isBuzzy(num)) {
    return "buzz"
  }
  return num
}

var isFizzy = (num) => {
  return num % 3 === 0
}

var isBuzzy = (num) => {
  return num % 5 === 0
}

exports.execute = (num) => {
  if (isFizzy(num) && isBuzzy(num))
    return "fizzbuzz"
  return buzz(fizz(num)) + ""
}
