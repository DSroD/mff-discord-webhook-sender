import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const EmbedComponent = ({embId, delFunc}) => {

    const [authorName, setAuthorName] = useState('');
    const [embedTitle, setEmbedTitle] = useState('');
    const [embedDescription, setEmbedDescription] = useState('');

    return (
        <Form.Group controlId={"mff-discord-webhook.Embed." + embId}>
        <div className="embed">
            <Button className="embed-close" variant="outline-dark" onClick={() => {delFunc(embId)}}>x</Button>
            <Card className="embed-card">
                <Card.Body>
                    <Form.Control onChange={(e) => setAuthorName(e.target.value)} className="msg-form-input" type="text" placeholder="Author name"/>
                    <Form.Control onChange={(e) => setEmbedTitle(e.target.value)} className="msg-form-input" type="text" placeholder="Embed title"/>
                    <Form.Control onChange={(e) => setEmbedDescription(e.target.value)} className="msg-form-input" type="text" placeholder="Embed description"/>
                </Card.Body>
            </Card>
        </div>
        </Form.Group>
    )
}

export default EmbedComponent;