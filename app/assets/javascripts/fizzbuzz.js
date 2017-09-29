var fizz = (num) => {
  if (isFizzy(num)) {
    return "fizz"
  }
  return num
}

var isFizzy = (num) => {
  return num === 3
}

exports.execute = (num) => {
  if (num === 5) {
    return "buzz"
  }
  return fizz(num) + ""
}
