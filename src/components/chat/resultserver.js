import React from "react"
import "./index.css"

class ResultServer extends React.Component {
  render() {
    return (
      <div className={`type ${this.props.type}`}>
        <p>{this.props.name}</p>
        <p>{this.props.type}</p>
        <p>{this.props.location}</p>
      </div>
    )
  }
}

export default ResultServer
