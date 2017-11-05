import assert from "assert"
import calcWordsPerMinute from "./../util/CalculateWordsPerMinute"

describe("calculate words per minute", function(){

  it("can calculate words per minute", () => {
    let expected
    let result

    expected = 11
    result = calcWordsPerMinute(60, 60)
    assert.strictEqual(result, expected)

    expected = 2
    result = calcWordsPerMinute(30, 120)
    assert.strictEqual(result, expected)

    expected = 11
    result = calcWordsPerMinute(30, 30)
    assert.strictEqual(result, expected)

    expected = 0
    result = calcWordsPerMinute(1, 1)
    assert.strictEqual(result, expected)

    expected = 0
    result = calcWordsPerMinute(0, 1)
    assert.strictEqual(result, expected)

    expected = 0
    result = calcWordsPerMinute(1, 0)
    assert.strictEqual(result, expected)
  })

})
