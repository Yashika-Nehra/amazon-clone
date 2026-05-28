import React from 'react';
import './Footer.css';

const footerLinks = [
  {
    heading: 'Get to Know Us',
    links: ['About Amazon', 'Careers', 'Press Releases', 'Amazon Cares', 'Gift a Smile', 'Amazon Science'],
  },
  {
    heading: 'Connect with Us',
    links: ['Facebook', 'Twitter', 'Instagram'],
  },
  {
    heading: 'Make Money with Us',
    links: ['Sell on Amazon', 'Sell under Amazon Accelerator', 'Advertise Your Products', 'Amazon Pay on Merchants'],
  },
  {
    heading: 'Let Us Help You',
    links: ['COVID-19 and Amazon', 'Your Account', 'Returns Centre', 'Amazon Assistant', 'Help'],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Back to top
      </div>

      <div className="footer__links">
        {footerLinks.map(section => (
          <div key={section.heading} className="footer__col">
            <h4 className="footer__col-title">{section.heading}</h4>
            <ul>
              {section.links.map(link => (
                <li key={link}><span className="footer__link">{link}</span></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__divider" />

      <div className="footer__bottom">
        <div className="footer__logo">amazon<span>.in</span></div>
        <div className="footer__country">
          🌐 India &nbsp;|&nbsp; 🇮🇳 English
        </div>
      </div>

      <div className="footer__legal">
        <span>Conditions of Use & Sale</span>
        <span>Privacy Notice</span>
        <span>Interest-Based Ads</span>
        <span>© 1996–2026, Amazon.com, Inc. or its affiliates</span>
      </div>
    </footer>
  );
}
