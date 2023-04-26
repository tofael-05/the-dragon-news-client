import React from 'react';
import Header from '../Pages/Header';
import Footer from '../Pages/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Pages/LeftNav';
import RightNav from '../Pages/RightNav';

const Main = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <h3>Main content</h3>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Main;