import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";

function SocialSidebar() {

  const links = [
    {
      icon: <FaWhatsapp />,
      link: "https://wa.me/919817813171?text=Hello%20...!!",
      color: "#25D366",
    },
    {
      icon: <FaInstagram />,
      link: "#",
      color: "#E4405F",
    },
    {
      icon: <FaFacebookF />,
      link: "#",
      color: "#1877F2",
    },
    {
      icon: <FaYoutube />,
      link: "#",
      color: "#FF0000",
    },
    {
      icon: <FaTelegramPlane />,
      link: "#",
      color: "#229ED9",
    },
  ];

  return (
    <>
      <div className="social-sidebar">

        {links.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-item"
            style={{ background: item.color }}
          >
            {item.icon}
          </a>
        ))}

      </div>

      <style>
        {`
          .social-sidebar {
            position: fixed;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            z-index: 999;
          }

          .social-item {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 45px;
            height: 45px;
            margin: 6px 0;
            color: #fff;
            font-size: 18px;
            text-decoration: none;
            border-radius: 30px 0 0 30px;
            transform: translateX(50%);
            transition: all 0.4s ease;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          }

          .social-item:hover {
            transform: translateX(0);
            box-shadow: 0 8px 20px rgba(0,0,0,0.3);
          }

          .social-item:hover svg {
            transform: scale(1.2) rotate(8deg);
          }

          .social-item svg {
            transition: 0.3s;
          }

          @media(max-width:768px){
            .social-sidebar {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
}

export default SocialSidebar;