import React from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const EmbedComponent = ({embId, delFunc}) => {
    return (
        <Form.Group controlId={"mff-discord-webhook.Embed." + embId}>
        <div className="embed">
            <Button className="embed-close" variant="outline-dark" onClick={() => {delFunc(embId)}}>x</Button>
            <Card>
                <Card.Body>
                    <Form.Control className="msg-form-input" type="text" placeholder="Author name" name={"embed_username_" + embId}/>
                    <Form.Control className="msg-form-input" type="text" placeholder="Embed title" name={"embed_title_" + embId}/>
                    <Form.Control className="msg-form-input" type="text" placeholder="Embed description" name={"embed_description_" + embId}/>
                </Card.Body>
            </Card>
        </div>
        </Form.Group>
    )
}

export default EmbedComponent;