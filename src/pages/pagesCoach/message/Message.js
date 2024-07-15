import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./message.css";
import { TrashFill } from "react-bootstrap-icons";

const Message = () => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const handleSend = () => {
        if (message.trim()) {
            setMessages([
                ...messages,
                { user: "user", text: message, coachResponse: "la reonse du coach ici" }
            ]);
            setMessage("");
        } else {
            alert("Veuillez écrire un message avant d'envoyer.");
        }
    };

    const handleDelete = (index) => {
        const newMessages = messages.filter((_, i) => i !== index);
        setMessages(newMessages);
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12} md={12}>
                        <div className="div-mesgs">
                            <h1 className="text-center mt-5 titre-h1">Discussions</h1>
                            <div className="message">
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Votre message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                            <button className="btn-send btn-secondary" onClick={handleSend}>Envoyer</button>
                            <div className="messages-list mt-3">
                                {messages.map((msg, index) => (
                                    <div key={index} className="message-item">
                                        <div className="user-message">
                                            <strong>{msg.user} : </strong>{msg.text}
                                            <button
                                                className="delete-icon"
                                                onClick={() => handleDelete(index)}
                                            >
                                               <TrashFill size={18} color="red" />
                                            </button>
                                        </div>
                                        <div className="coach-response">
                                            <strong>Coach : </strong>{msg.coachResponse}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Message;
