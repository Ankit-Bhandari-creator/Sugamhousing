import Header from '../../layout/header'
import Footer from '../../layout/footer'
import './Contactus.css'
import { Image_Url } from '../../url/url'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Contactus() {
    return (
        <>
            <Header />
            <div className="contact_container">
                <img src={`${Image_Url}contactus.jpg`}></img>
            </div>
            <p className='p'>Contact Us</p>
            <h1 className='h1'>Get in Touch</h1>
            <div className='main'>
                <div class="form-container">
                    <h2>Send us a message</h2>
                    <input type="text" placeholder='Your name' required />
                    <input type="text" placeholder='Your Email' required />
                    <textarea placeholder='Message ' rows={8} required />
                    <button type="submit">Send Message</button>
                </div>
                <div className='info'>
                    <h2>Contact info</h2>
                    <p>We have many offices in all over India. where you want to need our service please contact us.</p>
                    <h3>📞+91 9255412443​</h3>
                    <p>A97,Sangam Place Near Dwarka mor Metro Station</p>
                    <p>maharajahuja@gmail.com​</p>
                    <h3>Social Media</h3>
                    <p style={{ fontSize: '35px', gap: '10px', cursor: 'pointer' }}><FaFacebook /> <FaInstagramSquare /> <FaXTwitter /></p>
                </div>
            </div>
            <div className='map-container'>
                <iframe src="https://www.google.com/maps/embed?place/Dwarka+Mor+Metro+Station"
                    allowFullScreen="">
                </iframe>
            </div>
            <Footer />
        </>
    )
};
