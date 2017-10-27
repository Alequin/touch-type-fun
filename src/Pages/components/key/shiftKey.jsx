import React from 'react'
import Key from './key'

class CharKey extends Key {
  constructor(props){
    super(props)
    this.setKeyType("shift")
  }
}
export default CharKey;
