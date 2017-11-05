import assert from "assert"
import KeyboardHelper from "./../containers/keyboard/KeyboardHelper"

describe("Keyboard Helper", function(){

  it("General Key map should be correct", function(){
    const expected = {}

    expected["1"] = "!"
    expected["!"] = "1"

    expected["2"] = "@"
    expected["@"] = "2"

    expected["3"] = "#"
    expected["#"] = "3"

    expected["4"] = "$"
    expected["$"] = "4"

    expected["5"] = "%"
    expected["%"] = "5"

    expected["6"] = "^"
    expected["^"] = "6"

    expected["7"] = "&"
    expected["&"] = "7"

    expected["8"] = "*"
    expected["*"] = "8"

    expected["9"] = "("
    expected["("] = "9"

    expected["0"] = ")"
    expected[")"] = "0"

    expected[" "] = " "

    expected["-"] = "_"
    expected["_"] = "-"

    expected["="] = "+"
    expected["+"] = "="

    expected["["] = "{"
    expected["}"] = "["

    expected["]"] = "}"
    expected["}"] = "]"

    expected[";"] = ":"
    expected[":"] = ";"

    expected["'"] = "\""
    expected["\""] = "'"

    expected["\\"] = "|"
    expected["|"] = "\\"

    expected[","] = "<"
    expected["<"] = ","

    expected["."] = ">"
    expected[">"] = "."

    expected["/"] = "?"
    expected["?"] = "/"

    expected["`"] = "~"
    expected["~"] = "`"

    expected["ArrowLeft"] = "ArrowLeft"
    expected["ArrowRight"] = "ArrowRight"
    expected["ArrowUp"] = "ArrowUp"
    expected["ArrowDown"] = "ArrowDown"

    assert.deepEqual(expected, KeyboardHelper.getGeneralKeyMap())
  })

})
