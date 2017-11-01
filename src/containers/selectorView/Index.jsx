import React from "react"
import MenuBar from "./../../components/menuBar"
import css from "./SelectorView.scss"

class SelectorView extends React.Component {
  render() {
    return (
      <div className="selector-view-container">
        <MenuBar />
      </div>
    )
  }
}

export default SelectorView;
