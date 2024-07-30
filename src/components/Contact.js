import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../style/Contact.css"

function Contact(){
// initial state for name, email, message, and other  forms errors
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [nameError, setNameError] = useState(false);
const [emailError, setEmailError] = useState(false);
const [messageError, setMessageError] = useState(false);
const [messageSent, setMessageSent] = useState(false);
}
 // Handle name
 const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError(false);
  };
  // Handle email 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
  };
  // Handle message
  const handleMsgChange = (e) => {
    setMessage(e.target.value);
    setMessageError(false);
  };

 // Validate email format using regex
 const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
 // Handle submission 
 const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
     // Validate input fields and set errors if necessary
     if (name.length <= 5) {
        setNameError(true);
        valid = false;
      }
      if (!validateEmail(email)) {
        setEmailError(true);
        valid = false;
      }
      if (message.length < 150) {
        setMessageError(true);
        valid = false;
      }
  
// If all fields are valid, log form data and reset inputs
if (valid) {
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    setName("");
    setEmail("");
    setMessage("");
    setMessageSent(true);
  }

 };


 // Render the contact form
 return (
<section id="conact">
    <Container>
        <Row>
            <Col lg={8} className="mx-auto">
            <h2 className="contact-header">Contact me </h2>
            <p className="email-direct">
                *Not able*
                <a href="mailto:fireacademy@gmail.com"style={{ marginLeft: '5px' }}>Click here to email me :D</a>
            </p>
            {messageSent && (
                <div className="alert-success" role="alert">
                    Thanks for your message
                </div>
            )}
            <Form onSubmit={handleSubmit} noValidate>
                <Form.Group>
                    
                </Form.Group>

            </Form>
            </Col>
        </Row>
    </Container>

</section>

 )