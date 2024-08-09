import React from 'react'
import Header from '../header/Header'
import "./contact.scss"
import Footer from '../footer/Footer'
import { Col, Container, Row } from 'reactstrap'
import logoContact from "../../images/logo-mona.png"

export default function Contact() {
  return (
    <div>
        <Header/>
        <div className='contact-title'>
            <div className='text-title'>
                <div className='sub-text-title'>
                    <h2>LIÊN HỆ</h2>
                    <div className="link-nav">
                        <a href="#">TRANG CHỦ </a>/
                        <span className="a"> SẢN PHẨM</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-contact'>
            <Row>
                <Col lg="6" sm="12">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.379760995235!2d106.6960349757198!3d10.782198459085887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f97edc12811%3A0xa715374a5126fe5e!2zWTUgT2ZmaWNlLSBLaMO0bmcgZ2lhbiBraOG7n2kgbmdoaeG7h3A!5e0!3m2!1sen!2s!4v1723189175830!5m2!1sen!2s"
                    width={600}
                    height={600}
                    style={{ border: '0' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    />

                </Col>

                <Col lg="6" sm="12">
                    <Row>
                        <Col lg="3">
                            <img src={logoContact} width={130} height={105}/>
                        </Col>
                        <Col lg="9">
                            <div class="column column4">
                                <div class="contact-col">
                                    <i class="fa-solid fa-location-dot"></i>
                                    <p>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
                                </div>
                                <div class="contact-col">
                                    <i class="fa-solid fa-phone"></i>
                                    <p>076 922 0162</p>
                                </div>
                                <div class="contact-col">
                                    <i class="fa-solid fa-envelope"></i>
                                    <p>monnia@gmail.com</p>
                                </div>
                                <div class="contact-col">
                                    <i class="fa-solid fa-clock"></i>
                                    <p>Mon - Sat : 9am to 6pm</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <h2 className='h2'>LIÊN HỆ VỚI CHÚNG TÔI</h2>
                    
                    <form>
                        <Row className='contact-form'>
                            <Col lg="6" md="12">
                                <input type='text' placeholder='Họ và tên' name='name' id='name' required/>
                                <input type='email' placeholder='Email' name='email' id='email' required/>
                            </Col>
                            <Col lg="6" md="12">
                                <input type='tel' placeholder='Số điện thoại' name='phone' id='phone' required/>
                                <input type='text' placeholder='Địa chỉ' name='address' id='address' pattern="[0]{1}[0-9]{9}" required/>
                            </Col>
                            <Col lg="12">
                                <textarea className='textarea-noidung' name='textarea-noidung' cols={70} rows={5} placeholder='Lời nhắn' id='textarea-noidung' required/>
                            </Col>
                            
                            <br/>
                            <input type="submit" value="SEND"/>
                        </Row>
                    </form>
                </Col>
            </Row>
        </div>
        <Footer/>
    </div>
  )
}
