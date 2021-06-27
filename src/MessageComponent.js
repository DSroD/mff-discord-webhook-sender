import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import EmbedComponent from './EmbedComponent.js';
import addimg from './addimg.svg';

class MessageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.deleteEmbed = this.deleteEmbed.bind(this);
  }

  state = {
    embeds: [],
    nextId: 0,
    username: '',
    message: '',
    avatarURL: ''
  }

  deleteEmbed = (id) => {
    this.setState({
      embeds: this.state.embeds.filter(emb => emb.props.embId != id)
    });
  }

  addEmbed = () => {
    this.setState({
        embeds: [...this.state.embeds, <EmbedComponent embId={this.state.nextId} delFunc={this.deleteEmbed}/>],
        nextId: this.state.nextId + 1
    });
  }

  setAvatarURL = (target) => {
    const url = prompt('Image URL (leave blank to clear image):', this.url)
    if(url) {
      target.style.backgroundImage = `url("${encodeURI(url || addimg)}")`;
    }
    else {
      target.style.backgroundImage = null
    }

    this.setState({avatarURL: url});
  }

  render() {
    return(
      <div>
        <button onClick={(e) => this.setAvatarURL(e.target)} id="avatar" className="avatar-main" title="Set avatar URL"></button>
        <div>
          <Form.Group className="main-message" controlId="mff-discord-webhook.Message">
            <Form.Control onChange={(e) => this.setState({username: e.target.value})} className="msg-form-input" type="text" placeholder="Username"/>
            <Form.Control onChange={(e) => this.setState({message: e.target.value})} className="msg-form-input" as="textarea" rows={2} placeholder="Message (max 2000 characters)" />
          </Form.Group>
          {this.state.embeds}
          <Button variant="primary" onClick={(e) => this.addEmbed()}>Add Embed</Button>
        </div>
      </div>
    )
  }
}

export default MessageComponent;