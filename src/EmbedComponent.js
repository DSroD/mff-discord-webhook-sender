import React from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const EmbedComponent = ({embId, delFunc}) => {
    return (
        <Form.Group>
        <div className="embed">
            <Button className="embed-close" variant="outline-dark" onClick={() => {delFunc(embId)}}>x</Button>
            <Card>
                <Card.Body>
                    <Form.Control type="text" placeholder="Author name" name={"embed_username" + embId}/>
                    <Form.Control type="text" placeholder="Embed title" name={"embed_title" + embId}/>
                </Card.Body>
            </Card>
        </div>
        </Form.Group>
    )
}

export default EmbedComponent;