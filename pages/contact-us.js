import React from "react";
import {
  faTwitter,
  faFacebook,
  faFontAwesome,
  faFacebookF,
  faLinkedinIn,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faFaceAngry,
  faMailForward,
  faMobileAlt,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import contactBg from "../public/contactBg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Footer from "../components/footer/Footer";
import Header from "../components/Header/Header";
import about_sectionBg from "../public/about_sectionBg.png";
import styles from "../styles/Contactus.module.css";
import { faContactBook } from "@fortawesome/free-regular-svg-icons";

export default function Contactus() {
  return (
    <>
      <Head>
        <title>WELCARE REHAB - Contact us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <header className="header_outer">
        <Header />
      </header>
      <main>
        {/*  ##### CONTACT SECTION START ##### */}
        <section className="section_Outer">
          <div className={styles.about_sectionImg_outer}>
            <div className={styles.sectionDiv} style={{ backgroundImage: `url(${about_sectionBg.src})` }}>
              <div className={styles.aboutUs_heading_wrapperBox}>
                <h1>Contact US</h1>
              </div>
            </div>
          </div>
          <div className={styles.Contact_Container_outer}>
            <div className={styles.contact_container_inner}>
              <div className={styles.contactBox}>
                <div className={styles.contact_left} style={{ backgroundImage: `url(${contactBg.src})` }}>
                  <div className={styles.contactInfoDiv}>
                    <h2>Welcare Rehab</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos a ullam molestiae aperiam fugiat?
                    </p>
                    <div className={styles.SocialIconDiv}>
                      <div className={styles.iconWrapper}>
                        <FontAwesomeIcon icon={faTwitter} className={styles.fontIcons} />
                      </div>
                      <div className={styles.iconWrapper}>
                        <FontAwesomeIcon icon={faTelegram} className={styles.fontIcons} />
                      </div>
                      <div className={styles.iconWrapper}>
                        <FontAwesomeIcon icon={faLinkedinIn} className={styles.fontIcons} />
                      </div>
                      <div className={styles.iconWrapper}>
                        <FontAwesomeIcon icon={faFacebookF} className={styles.fontIcons} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.contact_right}>
                  <div className={styles.contactForm}>
                    <h2>GET IN TOUCH</h2>
                    <p>24/7 We will answer your question and problems</p>
                    <div className={styles.formContainer}>
                      <div className={styles.inputWrapper}>
                        <div className={styles.IconAndNameInput}>
                          <FontAwesomeIcon icon={faUser} height={32} />
                          <input type="text" className={styles.nameInput} placeholder="First name" />
                        </div>
                        <div className={styles.IconAndNameInput}>
                          <FontAwesomeIcon icon={faUser} height={32} />
                          <input type="text" className={styles.nameInput} placeholder="Last name" />
                        </div>
                      </div>
                      <div className={styles.inputWrapper}>
                        <div className={styles.inputAndIcon}>
                          <FontAwesomeIcon icon={faEnvelope} height={32} />
                          <input type="text" className={styles.commonInput} placeholder="Email" />
                        </div>
                      </div>
                      <div className={styles.inputWrapper}>
                        <div className={styles.inputAndIcon}>
                          <FontAwesomeIcon icon={faPhone} height={32} />
                          <input type="text" className={styles.commonInput} placeholder="Phone number" />
                        </div>
                      </div>
                      <div className={styles.inputWrapper}>
                        <textarea name="" id="" cols="10" rows="10" placeholder="Enter your Description"></textarea>
                      </div>
                    </div>
                    <div className={styles.submitButtonDiv}>
                      <button>SEND</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  ##### CONTACT SECTION END ##### */}
      </main>
      <footer className="footer_outer">
        <Footer />
      </footer>
    </>
  );
}
