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
                
                </Col>
            </Row>
        </Container>

        </section>
    )
}