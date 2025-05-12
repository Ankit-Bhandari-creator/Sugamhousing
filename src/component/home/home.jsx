import Footer from "../../layout/footer";
import Header from "../../layout/header";
import { Image_Url } from "../../url/url";
import { FaBuilding } from "react-icons/fa";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { FaHouseChimney } from "react-icons/fa6";
import { HiBuildingOffice2 } from "react-icons/hi2";
import './home.css'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <Header />
            <section>
                <div className="main">
                    <img src={`${Image_Url}home.jpg`} alt="home" title="Sugamhousing"></img>
                    <form>
                        <div className="form">
                            <p>To Know About Property Anywhere In India,</p>
                            <h2>Message Us</h2>
                            <input placeholder="Your Name" type="text"></input>
                            <input placeholder="Your Email" type="email"></input>
                            <textarea rows="8" cols='40' placeholder="Message"></textarea>
                            <span>Need Help?</span>
                            <br />
                            <button>Send</button>
                        </div>
                    </form>
                    <p>Find Your Dream</p>
                    <p className="ad">House Today</p>
                </div>
                <div className="text">
                    <p>If your life goal is to grow your savings, find a place that can generate excellent monthly rental income, or discover a peaceful location that fits your budget, then follow our web page and connect with us. <Link to='/contact'>📞Contact Us </Link></p>
                </div>
                <div className="fit">
                    <h1>Make Your Home Perfect With us.</h1>
                </div>
                <div className="box">
                    <div className="mini-box color">
                        <div className="box-img">
                            <img src={`${Image_Url}wood.jpg`} alt="Wood" />
                            <h2>Wooden Work</h2>
                        </div>
                        <div className="box-text">
                            <h4><FaBuilding /> Commerercial & Residential</h4>
                            <h1>Modern Apartment</h1>
                            <p>$500/mon</p>
                            <p>123 Fifth Avenue, NY 10160</p>
                            <p>Offices: 20 / Baths: 6 / Sq Ft: 10450</p>
                            <button className="color2">Details</button>
                        </div>
                    </div>
                    <div className="mini-box color2">
                        <div className="box-img">
                            <img src={`${Image_Url}ac.jpg`} alt="Ac & Freeze" />
                            <h2>AC & Freeze</h2>
                        </div>
                        <div className="box-text">
                            <h4><FaBuilding /> Commerercial & Residential</h4>
                            <h1>Family Home</h1>
                            <p>$151,000</p>
                            <p>123 Fifth Avenue, NY 10160</p>
                            <p>Bedrooms: 3 / Baths: 2 / Sq Ft: 1450</p>
                            <button className="color">Details</button>
                        </div>
                    </div>
                    <div className="mini-box color">
                        <div className="box-img">
                            <img src={`${Image_Url}plumber.jpg`} alt="Plumbing" />
                            <h2>Plumbing</h2>
                        </div>
                        <div className="box-text">
                            <h4><FaBuilding /> Commerercial & Residential</h4>
                            <h1>Modern Apartment</h1>
                            <p>$5235/mon</p>
                            <p>123 Fifth Avenue, NY 10160</p>
                            <p>Offices: 20 / Baths: 6 / Sq Ft: 10450</p>
                            <button className="color2">Details</button>
                        </div>
                    </div>
                    <div className="mini-box color2">
                        <div className="box-img">
                            <img src={`${Image_Url}interior.jpg`} alt="Interior" style={{height:'203px'}} />
                            <h2>Interior</h2>
                        </div>
                        <div className="box-text">
                            <h4><FaBuilding /> Commerercial & Residential</h4>
                            <h1>Elegant Studio Flat</h1>
                            <p>$5235/mon</p>
                            <p>123 Fifth Avenue, NY 10160</p>
                            <p>Offices: 20 / Baths: 6 / Sq Ft: 1045</p>
                            <button className="color">Details</button>
                        </div>
                    </div>
                </div>
                <div className="about">
                    <div className="about-text">
                        <h1>About Us</h1>
                        <p>For the last 25 years, he has been providing the service of inspection and consultation of property. We have had more than fifty thousand customers. Whom we have always kept happy, how many people have made huge gains in property due to the directions given by us. If you have any such property whose value has not increased then you can get proper advice for it.</p>
                        <button>Read More</button>
                    </div>
                    <div className="about-img">
                        <img src={`${Image_Url}rent.png`} alt="rent" />
                    </div>
                </div>
                <div className="list">
                    <p>Find Your Perfect Home</p>
                    <h1>Unique Listings</h1>
                </div>
                <div className="box2">
                    <div className="mini-box2 color">
                        <div className="box-img">
                            <img src={`${Image_Url}awesome.jpg`} alt="Interior" height={'203'} />
                            <h2>For Rent</h2>
                        </div>
                        <div className="box-text">
                            <h4><FaBuilding /> Commerercial</h4>
                            <h1>Awesome Apartment </h1>
                            <p>$5235/mon</p>
                            <p>123 Fifth Avenue, NY 10160</p>
                            <p>Offices: 20 / Baths: 6 / Sq Ft: 10450</p>
                            <button className="color2">Details</button>
                        </div>
                    </div>
                    <div className="mini-box2 color2">
                        <div className="box-img">
                            <img src={`${Image_Url}modern apartment.jpg`} alt="Interior" height={'203'} />
                            <h2>For Sale</h2>
                        </div>
                        <div className="box-text">
                            <h4><FaBuilding /> Commerercial</h4>
                            <h1>Modern Apartment</h1>
                            <p>$151,000</p>
                            <p>123 Fifth Avenue, NY 10160</p>
                            <p>Bedrooms: 3 / Baths: 2 / Sq Ft: 1450</p>
                            <button className="color">Details</button>
                        </div>
                    </div>
                    <div className="mini-box2 color">
                        <div className="box-img">
                            <img src={`${Image_Url}city centre.jpg`} alt="Interior" height={'203'} />
                            <h2>For Rent</h2>
                        </div>
                        <div className="box-text">
                            <h4><FaBuilding /> Residential</h4>
                            <h1>City Centre Apartment</h1>
                            <p>$1600/mon</p>
                            <p>123 Fifth Avenue, NY 10160</p>
                            <p>Bedrooms: 2 / Baths: 1 / Sq Ft: 450</p>
                            <button className="color2">Details</button>
                        </div>
                    </div>
                    <div className="mini-box2 color2">
                        <div className="box-img">
                            <img src={`${Image_Url}studio.jpg`} alt="Interior" height={'203'} />
                            <h2>For Sale</h2>
                        </div>
                        <div className="box-text">
                            <h4><FaBuilding />Residential</h4>
                            <h1>Gorgeous Studio Apartment</h1>
                            <p>$89,000</p>
                            <p>123 Fifth Avenue, NY 10160</p>
                            <p>Bedrooms: 1 / Baths: 1 / Sq Ft: 150</p>
                            <button className="color">Details</button>
                        </div>
                    </div>
                    <div className="mini-box2 color">
                        <div className="box-img">
                            <img src={`${Image_Url}luxury apartment.jpg`} alt="Interior" height={'203'} />
                            <h2>For Rent</h2>
                        </div>
                        <div className="box-text">
                            <h4><FaBuilding /> Commerercial</h4>
                            <h1>Luxury Family Apartment</h1>
                            <p>$1300/mon</p>
                            <p>123 Fifth Avenue, NY 10160</p>
                            <p>Bedrooms: 2 / Baths: 2 / Sq Ft: 725</p>
                            <button className="color2">Details</button>
                        </div>
                    </div>
                    <div className="mini-box2 color2" >
                        <div className="box-img">
                            <img src={`${Image_Url}glamorous.jpg`} alt="Interior" height={'203'} />
                            <h2>For Sale</h2>
                        </div>
                        <div className="box-text">
                            <h4><FaBuilding />Residential</h4>
                            <h1>Glamorous Apartment</h1>
                            <p>$ 1235/mon</p>
                            <p>123 Fifth Avenue, NY 10160</p>
                            <p>Bedrooms: 3 / Baths: 2 / Sq Ft: 145</p>
                            <button className="color">Details</button>
                        </div>
                    </div>
                </div>
                <div className="list2">
                    <p>We’re Here To Help You</p>
                    <h1>What Are You Looking For?</h1>
                    <div className="type">
                        <div>
                            <h1><PiBuildingApartmentFill size={90} /></h1>
                            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit</p>
                            <button>Find Apartments</button>
                        </div>
                        <div>
                            <h1><FaHouseChimney size={90} /></h1>
                            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit</p>
                            <button>Find Houses</button>
                        </div>
                        <div>
                            <h1><HiBuildingOffice2 size={90} /></h1>
                            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit</p>
                            <button>Find Offices</button>
                        </div>
                    </div>
                </div>
                <div className="contact">
                    <h4>📞+91 9255412443</h4>
                    <h1>Let’s Find You Together The Place You Deserve</h1>
                    <p>It is very difficult to decide on this topic that we should choose which place to live. We have<br/>given you instructions to check the old colony, sector, appetment, bulldier floor.</p>
                    <button>Contact Us</button>
                </div>
            </section>
            <Footer />
        </>
    )
}




