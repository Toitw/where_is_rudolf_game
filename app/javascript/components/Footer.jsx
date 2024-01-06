import React from 'react';
import githubLogo from '../../assets/images/github-mark/github-mark.png';
import imageIcon from '../../assets/images/github-mark/image-icon.png';

const Footer = () => {
    return (
        <div className="footer">
            <button onClick={() => window.open('https://github.com/Toitw')} className="footer-button">
                <img src={githubLogo} alt="GitHub logo" className="github-logo" />
                Juroga
            </button>
            <button onClick={() => window.open('https://www.behance.net/gallery/89635867/2019-Christmas-Illustration-for-Washington-Post')} className="footer-button">
                <img src={imageIcon} alt="Image icon" className="image-logo" />
                Credits
            </button>
        </div>
    );
};

export default Footer;