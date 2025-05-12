import { Image_Url } from "../url/url";
import { Link } from "react-router-dom";
import { FaListUl } from "react-icons/fa";
import './layout.css'

export default function Header() {
    return (
        <>
            <div className="navbar mob-nav">
                <div className="navbar1 mob-nav1">
                    <img src={`${Image_Url}logo.png`} alt="Icon" title="Sugamhousing"></img>
                </div>
                <div className="navbar2">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/properties'>Properties</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>

                <div className="dropdown">
                    <ul>
                        <li className="drop-li">
                            <button className="btn"><FaListUl /></button>
                            <div className="menu">
                                <ul>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/about'>About Us</Link></li>
                                    <li><Link to='/properties'>Properties</Link></li>
                                    <li><Link to='/faq'>FAQ</Link></li>
                                    <li><Link to='/contact'>Contact</Link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}