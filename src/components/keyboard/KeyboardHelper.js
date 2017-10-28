
function KeyboardHelper(){}

KeyboardHelper.getLowerCaseLetters = function(){
  let letters = {}
  for(let j=0; j<26; j++){
    const letter = String.fromCharCode(97+j)
    letters[letter] = letter
  }
  return letters
}

KeyboardHelper.getUpperCaseLetters = function(){
  let letters = {}
  for(let j=0; j<26; j++){
    const letter = String.fromCharCode(97+j)
    letters[letter] = letter.toUpperCase()
  }
  return letters
}

KeyboardHelper.getGeneralKeyMap = function(){
  const map = {}
  map["1"] = "!"
  map["!"] = "1"

  map["2"] = "@"
  map["@"] = "2"

  map["3"] = "#"
  map["#"] = "3"

  map["4"] = "$"
  map["$"] = "4"

  map["5"] = "%"
  map["%"] = "5"

  map["6"] = "^"
  map["^"] = "6"

  map["7"] = "&"
  map["&"] = "7"

  map["8"] = "*"
  map["*"] = "8"

  map["9"] = "("
  map["("] = "9"

  map["0"] = ")"
  map[")"] = "0"

  map[" "] = " "

  map["-"] = "_"
  map["_"] = "-"

  map["="] = "+"
  map["+"] = "="

  map["["] = "{"
  map["}"] = "["

  map["]"] = "}"
  map["}"] = "]"

  map[";"] = ":"
  map[":"] = ";"

  map["'"] = "\""
  map["\""] = "'"

  map["\\"] = "|"
  map["|"] = "\\"

  map[","] = "<"
  map["<"] = ","

  map["."] = ">"
  map[">"] = "."

  map["/"] = "?"
  map["?"] = "/"

  map["`"] = "~"
  map["~"] = "`"

  map["ArrowLeft"] = "ArrowLeft"
  map["ArrowRight"] = "ArrowRight"
  map["ArrowUp"] = "ArrowUp"
  map["ArrowDown"] = "ArrowDown"
  return map
}

export default KeyboardHelper
