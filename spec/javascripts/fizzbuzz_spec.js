var underTest = require('../..')

describe('fizzbuzz', function() {
  describe(' ', function() {
    it('should return string 1 when fizzbuzz of 1',
      function(done) {
        let result = underTest.execute(1)
        expect(result).toBe("1")
        done()
      })
    it('should return string 2 when fizzbuzz of 2',
      function(done) {
        let result = underTest.execute(2)
        expect(result).toBe("2")
        done()
      })
    it('should return string fizz when fizzbuzz of 3',
      function(done) {
        let result = underTest.execute(3)
        expect(result).toBe("fizz")
        done()
      })
    it('should return string buzz when fizzbuzz of 5',
      function(done) {
        let result = underTest.execute(5)
        expect(result).toBe("buzz")
        done()
      })
    it('should return string fizz when fizzbuzz of 6',
      function(done) {
        let result = underTest.execute(6)
        expect(result).toBe("fizz")
        done()
      })
  })
})
