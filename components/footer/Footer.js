import React from "react";
import styles from "./footer.module.css";
import facebook from "../../public/facebook.png";
import instagram from "../../public/instagram.png";
import whatsapp from "../../public/whatsapp.png";
import footerbg from "../../public/footerbg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelope, faHomeLg, faLink, faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <div className={styles.footer_container} style={{ backgroundImage: `url(${footerbg.src})` }}>
        <div className={styles.footer_inner}>
          <div className={styles.footer_contentBox}>
            <h4>ABOUT US</h4>
            <span></span>
            <div className={styles.footer_content}>
              <p className={styles.footer_content_aboutus}>
                ‘Opcar Clinic’ was established in the year of 2002 in Patna, Bihar. Since the start with the Best
                possible services we have become the Best Hi-tech Orthotics and Prosthetics Dealer in Patna.{" "}
              </p>
            </div>
          </div>
          <div className={styles.footer_contentBox}>
            <h4>Link</h4>
            <span></span>
            <div className={styles.footer_content}>
              <ul className={styles.footer_ul}>
                <li>
                  <FontAwesomeIcon icon={faLink} className={styles.FontAwesomeIcon} />
                  <p>HOME</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faLink} className={styles.FontAwesomeIcon} />
                  <p>ABOUT US</p>
                </li>

                <li>
                  <FontAwesomeIcon icon={faLink} className={styles.FontAwesomeIcon} />
                  <p>HOME</p>
                </li>

                <li>
                  <FontAwesomeIcon icon={faLink} className={styles.FontAwesomeIcon} />
                  <p>ABOUT US</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faLink} className={styles.FontAwesomeIcon} />
                  <p>HOME</p>
                </li>

                <li>
                  <FontAwesomeIcon icon={faLink} className={styles.FontAwesomeIcon} />
                  <p>ABOUT US</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footer_contentBox}>
            <h4>Social</h4>
            <span></span>
            <div className={styles.footer_content}>
              <ul className={styles.footer_social}>
                <li>
                  <FontAwesomeIcon icon={faClock} className={styles.FontAwesomeIcon} />
                  <p>Monday -- 11:00 am - 8:00 pm</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faClock} className={styles.FontAwesomeIcon} />
                  <p>Monday -- 11:00 am - 8:00 pm</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faClock} className={styles.FontAwesomeIcon} />
                  <p>Monday -- 11:00 am - 8:00 pm</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faClock} className={styles.FontAwesomeIcon} />
                  <p>Monday -- 11:00 am - 8:00 pm</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faClock} className={styles.FontAwesomeIcon} />
                  <p>Monday -- 11:00 am - 8:00 pm</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faClock} className={styles.FontAwesomeIcon} />
                  <p>Monday -- 11:00 am - 8:00 pm</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faClock} className={styles.FontAwesomeIcon} />
                  <p>Monday -- 11:00 am - 9:00 pm</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footer_contentBox}>
            <h4>CLINIC info</h4>
            <span></span>
            <div className={styles.footer_content}>
              <div className={styles.footer_info1}>
                <div className={styles.footer_infoIconDiv}>
                  <FontAwesomeIcon icon={faHomeLg} className={styles.FontAwesomeIcon2} />
                </div>
                <p>Madhuban Housing Complex, Near Ishan International School, Kankarbagh, Patna, 800020</p>
              </div>
              <div className={styles.footer_info1}>
                <div className={styles.footer_infoIconDiv}>
                  <FontAwesomeIcon icon={faEnvelope} className={styles.FontAwesomeIcon2} />
                </div>
                <p>Sample.cc@gmail.com</p>
              </div>
              <div className={styles.footer_info1}>
                <div className={styles.footer_infoIconDiv}>
                  <FontAwesomeIcon icon={faMobileScreenButton} className={styles.FontAwesomeIcon2} />
                </div>
                <p>1234567890 / 1234567890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_container2}>
        <div className={styles.footer_inner2}>
          <div>
            <h5>Copyright © 2022 | Designed ❤ By DGW</h5>
          </div>
          <div className={styles.socialMedia_wrapper}>
            <img src={facebook.src} alt="" />
            <img src={instagram.src} alt="" />
            <img src={whatsapp.src} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
