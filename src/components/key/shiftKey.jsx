import React from 'react'
import Key from './Index'
import css from './ShiftKey.scss'

class CharKey extends Key {
  constructor(props){
    super(props)
    this.setKeyType("shift")
  }
}
export default CharKey;
