
function KeyboardHelper(){}

KeyboardHelper.getLetters = function(isCapital){
  let letters = {}
  if(!isCapital){
    for(let j=0; j<26; j++){
      const letter = String.fromCharCode(97+j)
      console.log("here, ", letter);
      letters[letter] = letter
    }
  }else{

  }

  return letters
}

export default KeyboardHelper
