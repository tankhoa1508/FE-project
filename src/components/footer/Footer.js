import React from 'react'
import logo from '../../images/logo.png'
import './footer.scss'

export default function Footer() {
  return (
    <div>
        <footer>
            <div class="column column1">
                <div class="logo"><img src={logo} width={220} height={137}/></div>
                <p>We give value to the excellence and top class engineers, but in terms of accurate service.</p>
                <a href="#" class="read">Read More</a>
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

            <div class="column column2">
                <h2>Our Solutions</h2>
                <ul>
                    <li>- Power And Energy</li>
                    <li>- Oil and Lubricant</li>
                    <li>- Meterial Engineering</li>
                    <li>- Mechanical Engineering</li>
                    <li>- Chemical Research</li>
                    <li>- Alternate Energy</li>
                </ul>
            </div>

            <div class="column column3">
                <h2>Quick Links</h2>
                <ul>
                    <li><a href="#">- About Us</a></li>
                    <li><a href="#">- News</a></li>
                    <li><a href="#">- Testimonials</a></li>
                    <li><a href="#">- Request A Quote</a></li>
                    <li><a href="#">- FAQ</a></li>
                </ul>
            </div>

            <div class="column column4">
                <h2>Get In Touch</h2>
                <div class="contact-col">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>Lorance 542B, Tailstoi Town 524B MT, Wordwide Country </p>
                </div>
                <div class="contact-col">
                    <i class="fa-solid fa-phone"></i>
                    <p>01865 524 8503</p>
                </div>
                <div class="contact-col">
                    <i class="fa-solid fa-envelope"></i>
                    <p>info@Woodworkshop.com</p>
                </div>
                <div class="contact-col">
                    <i class="fa-solid fa-clock"></i>
                    <p>Mon - Sat : 9am to 6pm</p>
                </div>
            </div>
    </footer>
    </div>
  )
}
