import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/footer/Footer';
import Header from '../pages/shared/Header/Header';
import LeftNav from '../pages/shared/LeftNav/LeftNav';
import RightNave from '../pages/shared/RightNav/RightNave';

const Main = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col lg={3}><LeftNav></LeftNav></Col>
                    <Col lg={6}><Outlet></Outlet></Col>
                    <Col lg={3}><RightNave></RightNave></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;