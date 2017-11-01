import React from 'react'
import Key from './key'
import css from './shiftKey.scss'

class CharKey extends Key {
  constructor(props){
    super(props)
    this.setKeyType("shift")
  }
}
export default CharKey;
