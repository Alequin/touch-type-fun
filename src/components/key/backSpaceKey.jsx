import React from 'react'
import Key from './key'
import css from './BackSpaceKey.scss'

class BackSpaceKey extends Key {
  constructor(props){
    super(props)
    this.setKeyType("back-space")
  }
}
export default BackSpaceKey;
