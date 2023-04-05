import React, { useState } from "react";
import styles from "./Header.module.css";
import time from "../../public/navbarImages/time.png";
import logo from "../../public/navbarImages/logo.png";
import mail from "../../public/navbarImages/mail.png";
import phone from "../../public/navbarImages/phone.png";
import location from "../../public/navbarImages/location.png";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarChart,
  faBars,
  faCaretDown,
  faCaretRight,
  faMobileScreenButton,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import windowSize from "../windowres";

function Header() {
  const router = useRouter();
  const [selected, setSelected] = useState("home");
  const [openService, setOpenService] = useState(false);
  const [OpenBarIconMenu, setOpenBarIconMenu] = useState(false);
  const windowRes = windowSize();
  const handleRouter = (path, param) => {
    console.log(param);
    if (path === "/service") {
      if (openService === false) {
        setOpenService(true);
      } else {
        setOpenService(false);
      }
    } else {
      setOpenService(false);
      router.push(path);
    }
  };

  return (
    <>
      {windowRes.innerWidth >= 1023 ? (
        <>
          <div className={styles.header_inner}>
            <div className={styles.header_top}>
              <ul>
                <li>
                  <img src={logo.src} alt="logo" />
                </li>
                <li>
                  <img src={time.src} alt="" className={styles.header_icon} />
                  <p>
                    Monday - Saturday <br />
                    11:00 Am - 08:00 Pm
                  </p>
                </li>
                <li>
                  <img src={phone.src} alt="" />
                  <p>
                    {" "}
                    9122141583 / 8603859347665 <br /> Welcare12@gmail.com
                  </p>
                </li>
                <li>
                  <img src={location.src} alt="" />
                  <p>Lorem ipsum may be used as a placeholder before final copy is available</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.header_outer2}>
            <nav className={styles.header_inner2}>
              <ul>
                <li className={selected === "/" ? styles.selected : ""} onClick={() => handleRouter("/", null)}>
                  HOME
                </li>
                <li
                  className={selected === "aboutus" ? styles.selected : ""}
                  onClick={() => handleRouter("/aboutus", null)}
                >
                  ABOUT US
                </li>
                <li
                  className={selected === "product" ? styles.selected : ""}
                  onClick={() => handleRouter("/product", null)}
                >
                  PRODUCT
                </li>
                <li
                  className={selected === "gallery" ? styles.selected : ""}
                  onClick={() => handleRouter("/gallery", null)}
                >
                  GALLERY
                </li>
                <li className={selected === "service" ? styles.selected : ""}>
                  <p onClick={() => handleRouter("/service", "openService")}>
                    SERVICE <FontAwesomeIcon icon={faCaretDown} className={styles.FontAwesomeIconCaretDown} />
                  </p>
                  {openService === true ? (
                    <div className={styles.dropdown_content} id="serviceOptions">
                      <a href="/prosthetics">PROSTHETICS</a>
                      <a href="/orthotics">ORTHOTICS</a>
                      <a onClick={() => (document.getElementById("serviceSubOptions").style.display = "block")}>
                        PEDIATRICS <FontAwesomeIcon icon={faCaretRight} className={styles.FontAwesomeIcon} />
                        <div className={styles.DropRight_content} id="serviceSubOptions">
                          <p>LOWER LIMB BRACING</p>
                          <p>SCOLIOSIS BRACING</p>
                        </div>
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                </li>

                <li onClick={() => handleRouter("/contact-us", null)}>CONTACT US</li>
                {/* <li className={styles.search_Wrapper}>
                  <div className={styles.search_IconDiv}>
                    <FontAwesomeIcon icon={faSearch} className={styles.FontAwesomeIcon} />
                  </div>
                  <input type="text" className={styles.searchinput} placeholder="SEARCH" />
                </li> */}
              </ul>
            </nav>
          </div>
        </>
      ) : (
        <>
          <div className={styles.mobileHeaderInner}>
            <ul>
              <li>
                <img src={logo.src} alt="logo" className={styles.mobileNavIcon} />
              </li>
              {OpenBarIconMenu === false ? (
                <li onClick={() => setOpenBarIconMenu(true)}>
                  <FontAwesomeIcon icon={faBars} className={styles.FontAwesomeIcon} />
                </li>
              ) : (
                <li onClick={() => setOpenBarIconMenu(false)}>
                  <FontAwesomeIcon icon={faXmark} className={styles.FontAwesomeIcon} />
                </li>
              )}
            </ul>
          </div>
          {OpenBarIconMenu === true ? (
            <>
              <div className={styles.menuItemsOuter}>
                <ul>
                  <li onClick={() => handleRouter("/", null)}>Home</li>
                  <li onClick={() => handleRouter("/aboutus", null)}>About us</li>
                  <li onClick={() => handleRouter("/product", null)}>Product</li>
                  <li onClick={() => handleRouter("/gallery", null)}>Gallery</li>
                  <li className={styles.service}>
                    <span>service</span>{" "}
                    <span>
                      <FontAwesomeIcon icon={faCaretDown} className={styles.FontAwesomeIconCaretDown} />
                    </span>
                  </li>
                  <li onClick={() => handleRouter("/contact-us", null)}>Contact us</li>
                </ul>
              </div>
            </>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
}

export default Header;
