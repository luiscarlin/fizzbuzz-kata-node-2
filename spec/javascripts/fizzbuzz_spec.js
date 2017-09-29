var underTest = require('../..')

describe('fizzbuzz', function() {
  describe(' ', function() {
    it('should return string 1 when fizzbuzz 1',
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

  })
})
