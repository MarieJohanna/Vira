import React from "react"
import "./index.css"

class Message extends React.Component {
  render() {
    const user = this.props.userMessage
    return (
      <div>
        {user ? (
          <div><p className="userMessage" style={{ color: "rgb(243, 112, 33)" }}>{this.props.userMessage}</p></div>
        ) : (
          <div><p className="serverMessage" style={{ color: "#3a43ab" }}>{this.props.serverMessage}</p></div>
        )}
      </div>
    )
  }
}

export default Message
