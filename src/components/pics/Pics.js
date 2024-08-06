import React from "react";
import { Col, Row } from "reactstrap";
import "./pics.scss";
import banner1 from "../../images/banner-1.jpg";
import banner2 from "../../images/banner-2.jpg";
import banner3 from "../../images/banner-3.jpg";
import banner4 from "../../images/banner-4.jpg";

export default function Pics() {
  return (
    <div className="containerPics">
      <Row className="row">
        <Col className="col" sm="4" xs="6">
          <img src={banner4} className="img" height={576} />
          <div class="text">
            <h1 class="title">
              <strong>ĐỒNG HỒ CỔ ĐIỂN</strong>
            </h1>
            <span className="span1">
              Phong cách trường tồn, có thể được nhận biết trong nháy mắt.
            </span>
            <br />
            <a class="btn">
              <span className="readmore">XEM THÊM</span>
            </a>
          </div>
        </Col>
        <Col className="col col-2" sm="4" xs="6">
          <Row className="row2">
            <Col className="col" xs="12">
              <img src={banner3} className="img" height={288} />
              <div class="text">
                <h1 class="title">
                  <strong>BỘ SƯU TẬP NĂM 2024</strong>
                </h1>
                <br />
                <a class="btn">
                  <span className="readmore">XEM THÊM</span>
                </a>
              </div>
            </Col>
            <Col className="col" xs="12">
              <img src={banner2} className="img" height={288} />
            </Col>
          </Row>
        </Col>
        <Col className="col" sm="4">
          <img src={banner1} className="img" height={576} />
          <div class="text">
            <h1 class="title">
              <strong>ĐỒNG HỒ CHẤT</strong>
            </h1>
            <span className="span1">
              Kết hợp hoàn hảo tính năng ưu việt và phong cách đẳng cấp.
            </span>
            <br />
            <a class="btn">
              <span className="readmore">MUA NGAY</span>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}
