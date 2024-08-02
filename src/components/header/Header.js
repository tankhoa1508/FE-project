import React from "react";
import {Col, Container, Row} from 'reactstrap';
import Img from "../../images/logo.png"
// import './header.scss';

export default function Header() {
  return (
    <div>
        <Container>
        <Row>
            <Col>
                <img src={Img} />
            </Col>
        </Row>
        <Row>
            
        </Row>
    </Container>
    </div>
    
  );
}
