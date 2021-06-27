import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { SketchPicker } from 'react-color'

const EmbedComponent = ({embId, delFunc, updateFunc}) => {
    const [clr, setclr] = useState("#979C9F")

    return (
        <Form.Group>
        <div className="embed">
            <Button className="embed-close" variant="outline-dark" onClick={() => {delFunc(embId)}}>x</Button>
            <Card className="embed-card">
                <Card.Body>
                    <Form.Control onChange={(e) => updateFunc(embId, {authorName: e.target.value})} className="msg-form-input" type="text" placeholder="Author name"/>
                    <Form.Control onChange={(e) => updateFunc(embId, {embedTitle: e.target.value})} className="msg-form-input" type="text" placeholder="Embed title"/>
                    <Form.Control onChange={(e) => updateFunc(embId, {embedDescription: e.target.value})} className="msg-form-input" type="text" placeholder="Embed description"/>
                    <SketchPicker color={clr} onChangeComplete={(color) => {updateFunc(embId, {embedColor: parseInt(color.hex.substring(1), 16)}); setclr(color);}} />
                </Card.Body>
            </Card>
        </div>
        </Form.Group>
    )
}

export default EmbedComponent;