import React from 'react';
import './SocialLinks.css';

const socialLinks = [
  { url: "https://www.instagram.com", icon: "fa-brands fa-instagram" },
  { url: "https://www.linkedin.com", icon: "fa-brands fa-linkedin-in" },
  { url: "https://www.facebook.com", icon: "fa-brands fa-facebook-f" },
  { url: "https://www.x.com", icon: "fa-brands fa-twitter" },
  { url: "https://www.spotify.com", icon: "fa-solid fa-music" },
  { url: "https://www.youtube.com", icon: "fa-brands fa-youtube" }
];

function SocialLinks({ className = "" }) {
  return (
    <div className={`social-links-component ${className}`}>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link"
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
