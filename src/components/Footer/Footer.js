import React from "react";
import './footer.css'

const Footer = () => (
    <div className="footer">
        <div className='contact'>
        <row>
            <column>
                <header>Contact</header>
                <footerlink></footerlink>
                <footerlink href="#">Stadionsplein 62</footerlink>
                <footerlink href="#">Baarn, 3743 KM </footerlink>
                <footerlink href="#">The Netherlands</footerlink>
                <footerlink href="#">T: 0031-88-5454-942</footerlink>
                <footerlink href="#">M: info@42on.com</footerlink>


            </column>
        </row>
        </div>
    </div>
);

export default Footer;