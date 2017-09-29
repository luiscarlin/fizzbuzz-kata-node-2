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
  return num === 3
}

var isBuzzy = (num) => {
  return num === 5
}

exports.execute = (num) => {
  return buzz(fizz(num)) + ""
}
