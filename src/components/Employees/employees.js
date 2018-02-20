import React from "react"
import Employee from "./employee"
// import Search from "./search"

class Employees extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/contacts").then(response => (
      response.json()
    )).then(json => (
      this.setState({ contacts: json.contacts })
    ))
  }

  render() {
    return (
      <div>
        {/* <Search /> */}
        <div className="page">
          {this.state.contacts.map(item => (
            <Employee
              key={item.id}
              name={item.name}
              phone={item.phoneNumber}
              email={item.emailAddress} />
          ))}
        </div>
      </div>
    )
  }
}

export default Employees
