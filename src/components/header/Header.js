import React from "react";
import {Col, Container, Row} from 'reactstrap';
import Img from "../../images/logo.png"
import './header.scss'

export default function Header() {
  return (
    <div>
        <Container className="container">
        <Row className="row1">
            <Col className="col1">
                <a><img src={Img} width={112} height={90}/></a>
                <ul>
                  <li>
                    <a><i class="fa-solid fa-magnifying-glass"></i></a>
                  </li>
                  <li className="header-divider"></li>
                  <li>
                    <a><i class="fa-solid fa-user"></i></a>
                  </li>
                  <li className="header-divider"></li>
                  <li>
                    <span className="total-money">0đ</span>
                    <span className="cart-icon">
                      <strong>
                        0
                      </strong>
                    </span>
                  </li>
                </ul>
            </Col>
        </Row>
        
    </Container>
    <Container className="container2">
    <Row className="row2">
            <ul className="navbar">
                <li><a>TRANG CHỦ</a></li>
                <li className="header-divider"></li>
                <li><a>SẢN PHẨM HOT</a></li>
                <li className="header-divider"></li>
                <li><a>SALE</a></li>
                <li className="header-divider"></li>
                <li><a>ĐỒNG HỒ NỮ</a></li>
                <li className="header-divider"></li>
                <li><a>ĐỒNG HỒ NAM</a></li>
                <li className="header-divider"></li>
                <li><a>BRANDS</a></li>
                <li className="header-divider"></li>
                <li><a>LIÊN HỆ</a></li>
                <li className="header-divider"></li>
                <li><a>GIỚI THIỆU</a></li>
            </ul>
        </Row>
    </Container>
    </div>
    
  );
}
