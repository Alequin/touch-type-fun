
class StringHelper{

  static capitalise(str){
    const firstLetter = str.charAt(0).toUpperCase()
    const otherLetters = str.slice(1)
    return firstLetter + otherLetters
  }

}

export default StringHelper
