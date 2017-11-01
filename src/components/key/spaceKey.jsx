import React from 'react'
import Key from './key'
import css from './spaceKey.scss'

class SpaceKey extends Key {
  constructor(props){
    super(props)
    this.setKeyType("space")
  }
}
export default SpaceKey;
