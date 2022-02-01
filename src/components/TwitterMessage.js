import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  changeChars = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let characters = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.changeChars} value={this.state.message}/>
        <span>{characters}</span>
      </div>
    );
  }
}

export default TwitterMessage;
