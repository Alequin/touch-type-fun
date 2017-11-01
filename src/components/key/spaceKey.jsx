import React from 'react'
import Key from './Index'
import css from './SpaceKey.scss'

class SpaceKey extends Key {
  constructor(props){
    super(props)
    this.setKeyType("space")
  }
}
export default SpaceKey;
