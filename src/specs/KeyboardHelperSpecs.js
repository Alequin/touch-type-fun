import assert from "assert"
import KeyboardHelper from "./../Pages/components/keyboard/KeyboardHelper"

describe("Keyboard Helper", function(){

  it("should be able to get all lower case letters", function(){
    const expected = {a: "a", b: "b", c: "c", d: "d", e:"e", f:"f",
    g:"g", h:"h", i:"i", j:"j", k:"k", l:"l", m:"m", n:"n", o:"o",
    p:"p", q:"q", r:"r", s:"s", t:"t", u:"u", v:"v", w:"w", x:"x", y:"y", z:"z"}
    assert.deepEqual(KeyboardHelper.getLetters(false), expected)
  });
});
