import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import EmbedComponent from './EmbedComponent.js';
import addimg from './addimg.svg';

class MessageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.deleteEmbed = this.deleteEmbed.bind(this);
    this.updateEmbed = this.updateEmbed.bind(this);
  }

  state = {
    embeds: [],
    embed_data: [],
    nextId: 0,
    username: '',
    message: '',
    avatarURL: '',
    webhook: localStorage.getItem('webhookURI') || ''
  }

  deleteEmbed = (id) => {
    this.setState({
      embeds: this.state.embeds.filter(emb => emb.props.embId != id),
      embed_data: this.state.embed_data.filter(data => data.id != id)
    });
  }

  addEmbed = () => {
    this.setState({
        embeds: [...this.state.embeds, <EmbedComponent embId={this.state.nextId} delFunc={this.deleteEmbed} updateFunc={this.updateEmbed}/>],
        embed_data: [... this.state.embed_data, {id: this.state.nextId, authorName: '', embedTitle: '', embedDescription: ''}],
        nextId: this.state.nextId + 1
    });
  }

  updateEmbed = (id, val) => {
    this.setState({
     embed_data: this.state.embed_data.map((el) => {
        if(el.id != id) {return el;}
        return {
          ...el,
          ...val
        }
      })
    })
  }

  setWebhook = (wh) => {
    localStorage.setItem('webhookURI', wh);
    this.setState({
      webhook: wh
    })
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

  sendWebhookRequest = (target) => {
    var body = {
      content: this.state.message,
      username: this.state.username
    }

    if (this.state.avatarURL) {
      body["avatar_url"] = this.state.avatarURL;
    }

    if(this.state.embeds.length > 0) {
      body["embeds"] = [];
      this.state.embed_data.forEach((el) => {
        body.embeds.push({
          author: {
            name: el.authorName
          },
          title: el.embedTitle,
          description: el.embedDescription
        })
      })
    }

    var requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }

    fetch(this.state.webhook, requestOptions);
  }

  render() {
    return(
      <div className="message-form">
        <button onClick={(e) => this.setAvatarURL(e.target)} id="avatar" className="avatar-main" title="Set avatar URL"></button>
        <div>
          <Form.Group className="main-message" controlId="mff-discord-webhook.Message">
            <Form.Control onChange={(e) => this.setState({username: e.target.value})} className="msg-form-input" type="text" placeholder="Username"/>
            <Form.Control onChange={(e) => this.setState({message: e.target.value})} className="msg-form-input" as="textarea" rows={2} placeholder="Message (max 2000 characters)" />
          </Form.Group>
          {this.state.embeds}
          <Button className="msg-form-button" variant="primary" onClick={(e) => this.addEmbed()}>Add Embed</Button>
        </div>
        <Button className="msg-form-button" variant="primary" onClick={(e) => this.sendWebhookRequest(e.target)}>Send Message</Button>
        <Form.Control onChange={(e) => this.setWebhook(e.target.value)} className="msg-form-input" type="text" placeholder="Discord webhook" value={this.state.webhook}/>
      </div>
    )
  }
}

export default MessageComponent;