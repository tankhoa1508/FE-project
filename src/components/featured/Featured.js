import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import pro1 from '../../images/30.jpg'
import pro2 from '../../images/15.jpg'
import pro3 from '../../images/17.jpg'
import pro4 from '../../images/product-11_large.jpg'
import pro5 from '../../images/22.jpg'
import pro6 from '../../images/12.jpg'
import './featured.scss'

export default function Featured() {
  return (
    <div className='containerFeatured'>
        <Container class="container">
        <h3>360° COLLECTION</h3>
        <h1 className="featured-title"><span className="title-color">FEATURED</span> PRODUCTS</h1>
        <div class="contain">
            <div class="box1" lg="4" sm="6" xs="12">
                <div class="img img1"><img src={pro1} width={375} height={375}/></div>
                <div class="content">
                    <div class="name">MICHAEL KORS BRECKEN CHRONOGRAPH</div>
                    <div class="price"><span className="price-origin">7,470,000đ</span> 6,470,000đ</div>
                    
                </div>
            </div>

            <div class="box1" lg="4" sm="6" xs="12">
                <div class="img img2"><img src={pro2} width={375} height={375}/></div>
                <div class="content">
                    <div class="name">TISSOT LE LOCLE T006 AUTO WATCH</div>
                    <div class="price"><span className="price-origin">15,900,000đ</span> 9,540,000đ</div>
                    
                </div>
            </div>
            <div class="box1" lg="4" sm="6" xs="12">
                <div class="img img3"><img src={pro3} width={375} height={375}/></div>
                <div class="content">
                    <div class="name">OMEGA DE VILLE PRESTIGE WATCH</div>
                    <div class="price"><span className="price-origin">81,900,000đ</span> 11,900,000đ</div>
                    
                </div>
            </div>
            <div class="box1" lg="4" sm="6" xs="12">
                <div class="img img4"><img src={pro4} width={375} height={375}/></div>
                <div class="content">
                    <div class="name">BULOVA CORPORATION AUTOMATIC MEN’S WATCH</div>
                    <div class="price"><span className="price-origin">15,400,000đ</span> 14,000,000đ</div>
                    
                </div>
            </div>
            <div class="box1" lg="4" sm="6" xs="12">
                <div class="img img5"><img src={pro5} width={375} height={375}/></div>
                <div class="content">
                    <div class="name">FREDERIQUE CONSTANT FC-312V4S4 SLIMLINE</div>
                    <div class="price"><span className="price-origin">50,790,000đ</span> 5,079,000đ</div>
                    
                </div>
            </div>
            <div class="box1" lg="4" sm="6" xs="12">
                <div class="img img6"><img src={pro6} width={375} height={375}/></div>
                <div class="content">
                    <div class="name">MICHAEL KORS LAURYN CELESTIAL PAVÉ</div>
                    <div class="price"><span className="price-origin">7,120,000đ</span> 819,000đ</div>
                    
                </div>
            </div>

        </div>
    </Container>
    </div>
  )
}
