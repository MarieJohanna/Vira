import React from "react"
import Message from "./message"
import "./index.css"

class Chat extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      search: "",
      conversation: [{ userMessage: "User" }, { serverMessage: "Server" }, { userMessage: "Hej Servern" }, { serverMessage: "Hej User" }],
      searchResult: []
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
        "Content-Type": "text/plain"
      },
      body: search
    }).then(response => {
      if (response.ok) {
        return response.json()
          .then(json => {
            if (json.type === "product") {
              const message = { serverMessage: "This is your result" }
              this.setState({
                searchResult: [...this.state.searchResult, json],
                conversation: [...this.state.conversation, message]
              })
            } else if (json.type === "employee") {
              const message = { serverMessage: "This is your result" }
              this.setState({
                searchResult: [...this.state.searchResult, json],
                conversation: [...this.state.conversation, message]
              })
            } else {
              const message = { serverMessage: json }
              this.setState({
                conversation: [...this.state.conversation, message]
              })
            }
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
