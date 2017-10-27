
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

export default KeyboardHelper
