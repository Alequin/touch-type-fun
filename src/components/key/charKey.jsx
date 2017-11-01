import React from 'react'
import Key from './key'
import css from './charKey.scss'

class CharKey extends Key {
  constructor(props){
    super(props)
    this.setKeyType("char")
  }
}
export default CharKey;
