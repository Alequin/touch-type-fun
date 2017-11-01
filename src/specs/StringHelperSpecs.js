import assert from "assert"
import StringHelper from "./../util/StringHelper"

describe("StringHelper", function(){

  it("should be able to capitalise the first letter", function(){
    const expected = "String"
    const result = StringHelper.capitalise("string")
    assert.strictEqual(result, expected)
  })

})
