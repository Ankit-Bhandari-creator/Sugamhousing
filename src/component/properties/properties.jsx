import Footer from "../../layout/footer";
import Header from "../../layout/header";
import { Image_Url } from "../../url/url";
import { FaBuilding } from "react-icons/fa";
import './properties.css'

export default function Properties() {
    const home = [
        { image: 'awesome.jpg', op: 'For Rent', type: 'Commercial', name: 'Awesome Apartment', price: '5235/mo', address: '123 Fifth Avenue, NY 10160', area: 'Offices: 20 / Baths: 6 / Sq Ft: 10450' },
        { image: 'city centre.jpg', op: 'For Sale', type: 'Residential', name: 'City Centre Apartment', price: '1600/mo', address: '123 Fifth Avenue, NY 10160', area: 'Bedrooms: 2 / Baths: 1 / Sq Ft: 450' },
        { image: 'glamorous.jpg', op: 'For Rent', type: 'Residential', name: 'Glamorous Apartment', price: '1235/mo', address: '123 Fifth Avenue, NY 10160', area: 'Bedrooms: 3 / Baths: 2 / Sq Ft: 1450' },
        { image: 'luxury apartment.jpg', op: 'For Sale', type: 'Commercial', name: 'Luxury Family Apartment', price: '1300/mo', address: '123 Fifth Avenue, NY 10160', area: 'Bedrooms: 2 / Baths: 2 / Sq Ft: 725' },
        { image: 'modern apartment.jpg', op: 'For Rent', type: 'Commercial', name: 'Modern Apartment', price: '151,000', address: '123 Fifth Avenue, NY 10160', area: 'Bedrooms: 3 / Baths: 2 / Sq Ft: 10160' },
        { image: 'studio.jpg', op: 'For Sale', type: 'Commercial', name: 'Gorgeous Studio Apartment', price: '89,500', address: '123 Fifth Avenue, NY 10160', area: 'Bedrooms: 1 / Baths: 1 / Sq Ft: 145' }
    ]
    return (
        <>
            <Header />
            <section>
                <div className="pro-image">
                    <img src={`${Image_Url}properties.jpg`}></img>
                </div>
                <div className="p-text">
                    <p>Find Your Perfect Home</p>
                    <h1>Nice Apartments</h1>
                </div>
                <div className="apartment">
                    {
                        home.map(e =>
                            <div className="option">
                                <div className="op-image">
                                    <img src={`${Image_Url}${e.image}`} height={210} width={380}></img>
                                    <h2>{e.op}</h2>
                                </div>
                                <div className="op-text">
                                    <h4><FaBuilding /> {e.type}</h4>
                                    <h1>{e.name}</h1>
                                    <p>${e.price}</p>
                                    <p>{e.address}</p>
                                    <p>{e.area}</p>
                                    <button className="color">Details</button>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="p-text">
                    <p>Find Your Perfect Home</p>
                    <h1>Attractive Houses</h1>
                </div>
                <div className="apartment">
                    {
                        home.map(e =>
                            <div className="option">
                                <div className="op-image">
                                    <img src={`${Image_Url}${e.image}`} height={210} width={380}></img>
                                    <h2>{e.op}</h2>
                                </div>
                                <div className="op-text">
                                    <h4><FaBuilding /> {e.type}</h4>
                                    <h1>{e.name}</h1>
                                    <p>${e.price}</p>
                                    <p>{e.address}</p>
                                    <p>{e.area}</p>
                                    <button className="color">Details</button>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="p-text">
                    <p>Find Your Perfect Home</p>
                    <h1>Best Offices</h1>
                </div>
                <div className="apartment">
                    {
                        home.map(e =>
                            <div className="option">
                                <div className="op-image">
                                    <img src={`${Image_Url}${e.image}`} height={210} width={380}></img>
                                    <h2>{e.op}</h2>
                                </div>
                                <div className="op-text">
                                    <h4><FaBuilding /> {e.type}</h4>
                                    <h1>{e.name}</h1>
                                    <p>${e.price}</p>
                                    <p>{e.address}</p>
                                    <p>{e.area}</p>
                                    <button className="color">Details</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>

            <Footer />
        </>
    )
}