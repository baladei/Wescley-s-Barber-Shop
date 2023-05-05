import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

import './Footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-list">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
      </div>
      <span className="logo-name">Wescley's Barber Shop</span>
      <p className="copy-right">Since 2015</p>
    </footer>
  )
}
