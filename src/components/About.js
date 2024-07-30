import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import avatar from "../images/Imagen de WhatsApp 2024-06-04 a las 12.51.35_5f2e30f5.jpg";
import "../style/About.css";

function About() {
    return(
        //This is the About section
        <section id="aboutm" className="py-f"> 
        <h1 className="about-heading">All About Me </h1>
        <Container>
            <Row>
                <Col
                xs={13}
                md={4}
                className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
                >
                    <Image src={avatar} rounded fluid className="aboutm-image" />

                   
                </Col>
                <Col xs={12} md={9} >
                <Card>
                    <Card.Body>
                        <Card.Title>
                        Somethig about Mathew Gonzalez 
                    </Card.Title>
                    <Card.Text>
                        Hi everyone ,I'm Mathew Gonzalez, I have 20 years old ,My hopes for the future are to learn more and more about coding and how I can create something that can evolve the way of how we code for the next generation.
                    </Card.Text>
                    <Card.Text>
                        I also start to learning about a.i, I've been making a little project but thats something personal that I want to finish in the future. 
                    </Card.Text>
                    <Card.Text>
                        I like to see this world as a new challenge for my self and make the best not only fo me , for the people that I love and for the people that want to see all my work
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>

        </section>
    )
}