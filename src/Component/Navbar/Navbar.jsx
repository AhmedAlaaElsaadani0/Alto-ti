import React, { useContext, useEffect, useState } from "react";
import whiteLogo from "../../assets/Images/whiteLogo.png";
import silverLogo from "../../assets/Images/silverLogo.png";
import blackLogo from "../../assets/Images/blackLogo.png";

import style from "./Navbar.module.css";
import { IsMobileContext } from "../../Utilities/isMobileContext";

export default function Navbar() {
  const { isMobile } = useContext(IsMobileContext);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuMobileActive, setIsMenuMobileActive] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isScroll, setIsScroll] = useState(false);

  const links = [
    { name: "Home", link: "#Home" },
    { name: "About", link: "#About" },
    { name: "Services", link: "#Services" },
    { name: "Contact", link: "#Contact" },
  ];

  const toggleDarkMode = () => {  
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  // this to part to get the prefers-color-scheme from device
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    if (mediaQuery.matches) {
      toggleDarkMode();
    }

    const handleChange = (e) => {
      if (e.matches) {
        toggleDarkMode();
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  //this part control when change the active link
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  //this part control changing background color of navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY !== 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`${isScroll ? style.scrollNavBarBg : style.navBarBg}`}>
      <nav className={`  container ${style.navBar} `}>
        <div className={style.logo}>
          <a href="/">
            <img
              src={isScroll ? (isDarkMode ? blackLogo : silverLogo) : whiteLogo}
              alt="Logo"
            />
          </a>
        </div>
        {isMobile ? (
          <>
            <div
              className={
                style.hamburger + ` ${isMenuMobileActive ? style.active : ""} `
              }
              onClick={() => setIsMenuMobileActive(!isMenuMobileActive)}
            >
              <div className={style.line}></div>
              <div className={style.line}></div>
            </div>
            <div
              className={
                style.menuMobile + ` ${isMenuMobileActive ? style.active : ""}  `
              }
            >
              <ul>
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.link}
                      className={
                        activeLink === link.link.slice(1) ? style.active : ""
                      }
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li>
                  <svg
                    width="45"
                    height="45"
                    className={style.btn}
                    onClick={toggleDarkMode}
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_11_95)">
                      <path
                        d="M13.125 22.5C13.125 24.9864 14.1127 27.371 15.8709 29.1291C17.629 30.8873 20.0136 31.875 22.5 31.875V13.125C20.0136 13.125 17.629 14.1127 15.8709 15.8709C14.1127 17.629 13.125 20.0136 13.125 22.5Z"
                        fill="white"
                      />
                      <path
                        d="M22.5 1.875C18.4208 1.875 14.4331 3.08464 11.0414 5.35094C7.64961 7.61724 5.00605 10.8384 3.44499 14.6072C1.88394 18.3759 1.47549 22.5229 2.27131 26.5237C3.06713 30.5246 5.03147 34.1996 7.91593 37.0841C10.8004 39.9685 14.4754 41.9329 18.4763 42.7287C22.4771 43.5245 26.6241 43.1161 30.3929 41.555C34.1616 39.994 37.3828 37.3504 39.6491 33.9586C41.9154 30.5669 43.125 26.5792 43.125 22.5C43.1374 19.788 42.6124 17.1004 41.5803 14.5925C40.5482 12.0846 39.0294 9.80594 37.1118 7.88825C35.1941 5.97057 32.9155 4.45181 30.4075 3.41971C27.8996 2.3876 25.212 1.86259 22.5 1.875ZM5.62501 22.5C5.64963 18.0321 7.43543 13.7541 10.5948 10.5948C13.7541 7.43542 18.0321 5.64962 22.5 5.625V13.125C24.9864 13.125 27.371 14.1127 29.1291 15.8709C30.8873 17.629 31.875 20.0136 31.875 22.5C31.875 24.9864 30.8873 27.371 29.1291 29.1291C27.371 30.8873 24.9864 31.875 22.5 31.875V39.375C18.0321 39.3504 13.7541 37.5646 10.5948 34.4052C7.43543 31.2459 5.64963 26.9679 5.62501 22.5Z"
                        fill={isDarkMode ? "#9D9D9D" : "#C0C0C0"}
                      />
                    </g>
                  </svg>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className={style.menu}>
              <ul>
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.link}
                      className={
                        activeLink === link.link.slice(1) ? style.active : ""
                      }
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <svg
              width="45"
              height="45"
              className={style.btn}
              onClick={toggleDarkMode}
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_11_95)">
                <path
                  d="M13.125 22.5C13.125 24.9864 14.1127 27.371 15.8709 29.1291C17.629 30.8873 20.0136 31.875 22.5 31.875V13.125C20.0136 13.125 17.629 14.1127 15.8709 15.8709C14.1127 17.629 13.125 20.0136 13.125 22.5Z"
                  fill="white"
                />
                <path
                  d="M22.5 1.875C18.4208 1.875 14.4331 3.08464 11.0414 5.35094C7.64961 7.61724 5.00605 10.8384 3.44499 14.6072C1.88394 18.3759 1.47549 22.5229 2.27131 26.5237C3.06713 30.5246 5.03147 34.1996 7.91593 37.0841C10.8004 39.9685 14.4754 41.9329 18.4763 42.7287C22.4771 43.5245 26.6241 43.1161 30.3929 41.555C34.1616 39.994 37.3828 37.3504 39.6491 33.9586C41.9154 30.5669 43.125 26.5792 43.125 22.5C43.1374 19.788 42.6124 17.1004 41.5803 14.5925C40.5482 12.0846 39.0294 9.80594 37.1118 7.88825C35.1941 5.97057 32.9155 4.45181 30.4075 3.41971C27.8996 2.3876 25.212 1.86259 22.5 1.875ZM5.62501 22.5C5.64963 18.0321 7.43543 13.7541 10.5948 10.5948C13.7541 7.43542 18.0321 5.64962 22.5 5.625V13.125C24.9864 13.125 27.371 14.1127 29.1291 15.8709C30.8873 17.629 31.875 20.0136 31.875 22.5C31.875 24.9864 30.8873 27.371 29.1291 29.1291C27.371 30.8873 24.9864 31.875 22.5 31.875V39.375C18.0321 39.3504 13.7541 37.5646 10.5948 34.4052C7.43543 31.2459 5.64963 26.9679 5.62501 22.5Z"
                  fill={isDarkMode ? "#9D9D9D" : "#C0C0C0"}
                />
              </g>
            </svg>
          </>
        )}
      </nav>
    </header>
  );
}
