import React from "react"
import "./index.css"

class Employee extends React.Component {
  render() {
    return (

      <div className="contact">
        <h4>{this.props.name}</h4>
        <p>{this.props.phone}</p>
        <p>{this.props.email}</p>

      </div>

    )
  }
}

export default Employee
