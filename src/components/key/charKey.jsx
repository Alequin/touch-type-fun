import React from 'react'
import Key from './Index'
import css from './CharKey.scss'

class CharKey extends Key {
  constructor(props){
    super(props)
    this.setKeyType("char")
  }
}
export default CharKey;
