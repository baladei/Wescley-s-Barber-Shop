import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

import './Footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="social_list">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
      </div>
      <span>Wescley's Barber Shop</span>
      <p>Since 2015</p>
    </footer>
  )
}
