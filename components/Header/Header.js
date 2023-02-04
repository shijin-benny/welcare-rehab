import React, { useState } from "react";
import styles from "./Header.module.css";
import time from "../../public/navbarImages/time.png";
import logo from "../../public/navbarImages/logo.png";
import mail from "../../public/navbarImages/mail.png";
import phone from "../../public/navbarImages/phone.png";
import location from "../../public/navbarImages/location.png";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton, faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const router = useRouter();
  const [selected, setSelected] = useState("home");
  const handleRouter = (path) => {
    router.push(path);
  };

  return (
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
                9122141583 / 8603317665 <br /> opcar7689@gmail.com
              </p>
            </li>
            <li>
              <img src={location.src} alt="" />
              <p>Madhuban Housing Complex Near Ishan International School, Kankarbagh, Patna, 800020</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.header_outer2}>
        <nav className={styles.header_inner2}>
          <ul>
            <li className={selected === "/" ? styles.selected : ""} onClick={() => handleRouter("/")}>
              HOME
            </li>
            <li className={selected === "aboutus" ? styles.selected : ""} onClick={() => router.push("/aboutus")}>
              ABOUT US
            </li>
            <li className={selected === "product" ? styles.selected : ""} onClick={() => router.push("/product")}>
              PRODUCT
            </li>
            <li className={selected === "gallery" ? styles.selected : ""} onClick={() => router.push("/gallery")}>
              GALLERY
            </li>
            <li className={selected === "service" ? styles.selected : ""} onClick={() => router.push("/")}>
              SERVICE
            </li>
            <li>CONTACT US</li>
            <li className={styles.search_Wrapper}>
              <div className={styles.search_IconDiv}>
                <FontAwesomeIcon icon={faSearch} className={styles.FontAwesomeIcon} />
              </div>
              <input type="text" className={styles.searchinput} placeholder="SEARCH" />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
