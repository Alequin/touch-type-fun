import React from 'react'
import Key from './key'

class SpaceKey extends Key {
  constructor(props){
    super(props)
    this.setKeyType("space")
  }
}
export default SpaceKey;
