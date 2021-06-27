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
      <Form>
        <Form.Group className="main-message" controlId="mff-discord-webhook.Message">
          <Form.Control type="text" placeholder="Username"/>
          <Form.Control as="textarea" rows={1} placeholder="Message (max 2000 characters)" />
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