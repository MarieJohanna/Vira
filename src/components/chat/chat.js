import React from "react"
import Message from "./message"
import "./index.css"

class Chat extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      search: "",
      conversation: [{ userMessage: "User" }, { serverMessage: "Server" }, { userMessage: "Hej Servern" }, { serverMessage: "Hej User" }]
    }
  }

  updateSearch = event => {
    this.setState({
      search: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.addUserMessage(this.state.search)
    this.askServer(this.state.search)
    this.setState({
      search: ""
    })
  }

  addUserMessage = search => {
    const message = { userMessage: search }
    this.setState({
      conversation: [...this.state.conversation, message]
    })
  }

  // this doesn't work yet
  askServer = search => {
    console.log("Hej", search)
    fetch("http://192.168.1.198:8080/ChatBotRest/hello", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "text/plain"
      },
      body: JSON.stringify(search)
    }).then(response => {
      if (response.ok) {
        return response.json()
          .then(json => {
            const message = { serverMessage: json }
            this.setState({
              conversation: [...this.state.conversation, message]
            })
          })
      }
    })
  }

  render() {
    return (
      <div className="chat-bot-view">
        <div className="conversation">
          {this.state.conversation.map((item, index) => (
            <Message
              key={item.id}
              index={index}
              userMessage={item.userMessage}
              serverMessage={item.serverMessage} />
          ))}
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="search-input"
            type="text"
            placeholder="type your message here.."
            value={this.state.search}
            onChange={this.updateSearch} />
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }

}

export default Chat
