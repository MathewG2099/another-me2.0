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