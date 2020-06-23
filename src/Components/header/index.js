import React from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {

    return (

        <div className="header">
            <Link to="/">
                <div>
                    <img src={Logo} alt="LOGO" className="img-logo" />
                </div>
            </Link>
            <div className="navigation">
                <Link to="/home">
                    <FontAwesomeIcon icon={faHome} />
                </Link>
                <Link to="/about">
                    <FontAwesomeIcon icon={faAddressBook} />
                </Link>
            </div>
            <div className="header-title">Assignment</div>
        </div>
    );
}

export default Header;