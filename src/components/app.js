import React from "react"
import backgroundVirtusa from "./chat/Picture1.jpg"
import Chat from "./chat/chat"

class App extends React.Component {

  render() {
    return (
      <div className="page-view" style={{ backgroundImage: `url(${backgroundVirtusa})` }}>
        <Chat />
      </div>
    )
  }

}

export default App
