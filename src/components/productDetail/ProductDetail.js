import React from "react";
import Header from "../header/Header";
import "./productDetail.scss";
import { Button, Card, CardText, CardTitle, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import imgDetail from "../../images/29.jpg";

export default function ProductDetail() {
  return (
    <div>
      <Header />
      <Container className="container containerDetail">
        <Row className="row-detail-1">
          <Col className="img-detail" lg="6" sm="12">
            <img src={imgDetail} />
          </Col>
          <Col className="info-detail" lg="6" sm="12">
            <div className="nav1">
              <a>TRANG CHỦ</a> /<a> SẢN PHẨM HOT</a>
              <h1>MICHAEL KORS BRECKEN CHRONOGRAPH WATCH 44MM</h1>
              <div className="is-divider"></div>
              <div class="price price-detail">
                <span className="price-origin price-origin-detail">
                  7,470,000đ
                </span>{" "}
                6,470,000đ
              </div>
              <ul>
                <li>› Sản phẩm nhập khẩu chính hãng.</li>
                <li>› Vận chuyển miễn phí toàn quốc.</li>
                <li>› Giao hàng trong ngày.</li>
                <li>› Thanh toán sau khi nhận hàng.</li>
                <li>› Bảo hành 5 năm tại Công ty.</li>
                <li>› Bảo hành chính hãng toàn cầu.</li>
              </ul>
              <input className="input-detail" type="number" />
              <button className="btn-detail">THÊM VÀO GIỎ</button>
              <hr />
              <div>Mã: 70954</div>
            </div>
          </Col>
        </Row>
        <hr />
        <div className="describe">
            <Nav tabs>
              <NavItem>
                <NavLink className="active" onClick={function noRefCheck() {}}>
                  Tab1
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="" onClick={function noRefCheck() {}}>
                  More Tabs
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab="1">
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <h4>Tab 1 Contents</h4>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </CardText>
                      <Button>Go somewhere</Button>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
        </div>
      </Container>
    </div>
  );
}
