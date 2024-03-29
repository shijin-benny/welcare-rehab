import React from "react";
import Head from "next/head";
import Footer from "../components/footer/Footer";
import Header from "../components/Header/Header";
import about_sectionBg from "../public/about_sectionBg.png";
import styles from "../styles/Service.module.css";

export default function Contactus() {
  return (
    <>
      <Head>
        <title>WELCARE REHAB - PROSTHETICS</title>
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
            <div className={styles.sectionDiv}>
              <div className={styles.aboutUs_heading_wrapperBox}>
                <h1>SERVICES</h1>
              </div>
            </div>
          </div>
          <div className={styles.ServiceOuter}>
            <div className={styles.ServiceInner}>
              <h1>PROSTHETICS</h1>
              <div className={styles.serviceBox}>
                <div className={styles.serviceLeft}>
                  <img src="https://opcarclinic.com/wp-content/uploads/2021/09/gdgdg.jpg" alt="" />
                </div>
                <div className={styles.serviceRight}>
                  <h2>Lower Limbs Prosthetics</h2>
                  <p>
                    We design custom Lower Limb Prosthetic solutions that empower you to continue to do the things you
                    love.
                  </p>
                  <h3>Level of limb loss</h3>
                  <ul>
                    <li>* Level of Limb Loss</li>
                    <li>* Component</li>
                  </ul>
                  <button>More</button>
                </div>
              </div>
              <div className={styles.serviceBox}>
                <div className={styles.serviceLeft}>
                  <img src="https://opcarclinic.com/wp-content/uploads/2022/07/upper-limbs.jpg" alt="" />
                </div>
                <div className={styles.serviceRight}>
                  <h2>Upper Limb Prosthetics</h2>
                  <p>
                    We use advanced materials and designs to help restore mobility to people with any level of upper
                    limb loss or limb difference.
                  </p>
                  <h3>Level of limb loss</h3>
                  <ul>
                    <li>* Level of Limb Loss</li>
                    <li>* Component</li>
                  </ul>
                  <button>More</button>
                </div>
              </div>
              <div className={styles.serviceBox}>
                <div className={styles.serviceLeft}>
                  <img src="https://opcarclinic.com/wp-content/uploads/2022/07/prosthetics.webp" alt="" />
                </div>
                <div className={styles.serviceRight}>
                  <h2>Sockets, Liners, & Accessories</h2>
                  <p>
                    Proper socket design, liners, and accessories are part of getting the most out of your prosthesis.
                  </p>

                  <button>More</button>
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
