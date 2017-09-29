var underTest = require('../..')

describe('fizzbuzz', function() {
  describe(' ', function() {
    it('should return string 1 when fizzbuzz of 1', (done) => {
      let result = underTest.execute(1, (result) => {
        expect(result).toBe("1")
        done()
      })
    })
    it('should return string 2 when fizzbuzz of 2',
      function(done) {
        let result = underTest.execute(2, (result) => {
          expect(result).toBe("2")
          done()
        })
      })
    it('should return string fizz when fizzbuzz of 3',
      function(done) {
        underTest.execute(3, (result) => {
          expect(result).toBe("fizz")
          done()
        })
      })
    it('should return string buzz when fizzbuzz of 5',
      function(done) {
        underTest.execute(5, (result) => {
          expect(result).toBe("buzz")
          done()
        })
      })
    it('should return string fizz when fizzbuzz of 6',
      function(done) {
        underTest.execute(6, (result) => {
          expect(result).toBe("fizz")
          done()
        })
      })

    it('should return string buzz when fizzbuzz of 10',
      function(done) {
        underTest.execute(10, (result) => {
          expect(result).toBe("buzz")
          done()
        })
      })
    it('should return string fizzbuzz when fizzbuzz of 15',
      function(done) {
        underTest.execute(15, (result) => {
          expect(result).toBe("fizzbuzz")
          done()
        })
      })
  })
})
