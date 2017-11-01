
class StringHelper{

  static capitalise(str){
    if(!str) return str
    const length = str.length
    if(length === 0) return str

    const firstLetter = str.charAt(0).toUpperCase()
    if(length === 1) return firstLetter

    const otherLetters = str.slice(1)
    return firstLetter + otherLetters
  }

}

export default StringHelper
