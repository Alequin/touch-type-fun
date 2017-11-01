import assert from "assert"
import StringHelper from "./../util/StringHelper"

describe("StringHelper", function(){

  it("should be able to capitalise the first letter", function(){
    const expected = "String"
    const result = StringHelper.capitalise("string")
    assert.strictEqual(result, expected)
  })

  it("should return empty string is passed one", function(){
    const expected = ""
    const result = StringHelper.capitalise("")
    assert.strictEqual(result, expected)
  })

  it("should return null if null is passed", function(){
    const expected = null
    const result = StringHelper.capitalise(null)
    assert.strictEqual(result, expected)
  })

  it("should capitalise if only one letter is passed", function(){
    const expected = "A"
    const result = StringHelper.capitalise("a")
    assert.strictEqual(result, expected)
  })

})
