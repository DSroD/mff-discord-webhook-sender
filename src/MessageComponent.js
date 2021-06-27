import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import EmbedComponent from './EmbedComponent.js'

class MessageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.deleteEmbed = this.deleteEmbed.bind(this);
  }

  state = {
    embeds: [],
    nextId: 0
  }

  deleteEmbed = (id) => {
    this.setState({
      embeds: this.state.embeds.filter(emb => emb.props.embId != id)
    })
  }

  addEmbed = () => {
      this.setState({
          embeds: [...this.state.embeds, <EmbedComponent embId={this.state.nextId} delFunc={this.deleteEmbed}/>],
          nextId: this.state.nextId + 1
      })
  }

  render() {
    return(
      <Form className="message-form">
        <Form.Group className="main-message" controlId="mff-discord-webhook.Message">
          <Form.Control className="msg-form-input" type="text" placeholder="Username"/>
          <Form.Control className="msg-form-input" as="textarea" rows={2} placeholder="Message (max 2000 characters)" />
        </Form.Group>
        {this.state.embeds}
        <Button variant="primary" onClick={this.addEmbed}>
          Add Embed
        </Button>
      </Form>
    )
  }
}

export default MessageComponent;