
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
  return map
}

export default KeyboardHelper
