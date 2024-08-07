import React from 'react'
import logo from '../../images/logo-watch-white-2.png'
import icon from '../../images/logofavicon.png'
import './footer.scss'

export default function Footer() {
  return (
    <>
    <div className="containerFooter">
        <footer>
            <div class="column column1">
                <div class="logo">
                    <a href='#'><img src={logo} width={220} height={137}/></a>
                </div>
                
            </div>

            <div class="column column2">
                <h2>Our Solutions</h2>
                <ul>
                    <li>Power And Energy</li>
                    <li>Meterial Engineering</li>
                    <li>Mechanical Engineering</li>
                    <li>Alternate Energy</li>
                </ul>
            </div>

            <div class="column column3">
                <h2>Follow Us</h2>
                <p>Follow để không bỏ lỡ bất kì ưu đãi nào từ chúng tôi</p>
                <div class="list">
                    <a href="#">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-google"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-tiktok"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                </div>
            </div>

            <div class="column column4">
                <h2>Get In Touch</h2>
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
    </footer>
    </div>
    <div className='tag-web'>2024 © <img className='iconTag' src={icon}/> Mona Watch. Design by <strong>Tan Khoa</strong></div>
    </>
  )
}
