var fizz = (num) => {
  if (num === 3) {
    return "fizz"
  }
  return num
}
exports.execute = (num) => {
  return fizz(num) + ""
}
