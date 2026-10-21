import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    console.log("Header render")

    return (
        <div className="header">
            <Link className="logo-container" to="/" aria-label="Bite Dash home">
                <span className="brand-icon" aria-hidden="true">
                    <svg viewBox="0 0 64 64" role="presentation">
                        <path d="M15 27c0-10 7.6-17 17-17s17 7 17 17H15Z" fill="white" />
                        <circle cx="25" cy="19" r="1.5" fill="#f43f5e" />
                        <circle cx="32" cy="16" r="1.5" fill="#f43f5e" />
                        <circle cx="39" cy="19" r="1.5" fill="#f43f5e" />
                        <rect x="13" y="30" width="38" height="7" rx="3.5" fill="white" />
                        <rect x="13" y="40" width="38" height="7" rx="3.5" fill="white" />
                    </svg>
                </span>
                <span className="brand-copy">
                    <span className="brand-name">Bite <strong>Dash</strong></span>
                    <span className="brand-tagline">Delivering Joy Fast</span>
                </span>
            </Link>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <button className="login-btn"
                        onClick={() => {
                            btnName == "Login" ? setBtnName("LogOut") : setBtnName("Login");
                            console.log(btnName);
                        }}
                    >{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;