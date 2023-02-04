import React, { useRef } from "react";
import styles from "./About.module.css";
import aboutImg from "../../public/about.png";
import about2 from "../../public/aboutus.png";
import aboutbg from "../../public/aboutusBg.png";
import rectangle1 from "../../public/Rectangle15.png";
import like from "../../public/like.png";
import money from "../../public/money.png";
import recover from "../../public/recover.png";
import { useState } from "react";
import { useEffect } from "react";

function About(props) {
  const [page, setPage] = useState();
  useEffect(() => {
    setPage(props.page);
  }, [props]);

  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const section = image.parentElement;
    if (props.page === "about") {
      image.style.left = "0";
    }
    const handleScroll = () => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight) {
        image.style.left = "0";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className={styles.aboutus_container} style={{ backgroundImage: `url(${aboutbg.src})` }}>
        <div className={styles.about_inner}>
          <div className={styles.aboutUsImage_wrapper} style={{ backgroundImage: `url(${rectangle1.src})` }}>
            <img ref={imageRef} src={aboutImg.src} alt="" />
          </div>
          <div className={styles.aboutUs_content}>
            <h4 className={styles.aboutus_topheading}>HI-TECH ORTHOTICS & PROSTHETICS</h4>
            <h1 className={styles.aboutus_heading}>
              Welcome to <span> " Welcare Rehab "</span>
            </h1>
            <p>
              ‘Opcar Clinic’ was established in the year of 2002 in Patna, Bihar. Since the start with the Best possible
              services we have become the Best Hi-tech Orthotics and Prosthetics Dealer in Patna. 
            </p>
            <p>
              HI-TECH ORTHOTICS & PROSTHETICS WELCOME TO ‘Opcar Clinic’ ‘Opcar Clinic’ was established in the year of
              2002 in Patna, Bihar. Since the start with the Best possible services we have become the Best Hi-tech
              Orthotics and Prosthetics Dealer in Patna.  Mr. Rajesh Kumar is a RCI Registered professional of Orthotics
              and Prosthetics who has proudly been a Life Member of “Orthotics and Prosthetics Association of India”
              since 2006.{" "}
            </p>
            <p>
              Our clinician Mr. Rajesh Kumar” made this place that aspires to give healing touch to the patients
              suffering various Orthopaedic Surgery, Foot Care Solution ( Diabetic & Neuropathic), paralysis , cerebral
              palsy, post burn deformity issues. With a team of the best Orthotist/Prosthetist in the town we are giving
              you a fast and adequate Restoration. 
            </p>
            <p>
              Over 20 Years of experience makes Mr. Rajesh Kumar an undefeated expert in Hi-tech Orthotics and
              Prosthetics Industry. We deal and customize medical supportive devices and measure that fit the patients
              perfectly. Our Solutions help to improve to revive the mobility and in rehabilitation of a patient who
              have gone through surgery or is suffering from disabilities.
            </p>
          </div>
        </div>
        {page === "about" ? (
          <>
            <div className={styles.abouts_knowMore}>
              <div className={styles.abouts_knowMore_Headings}>
                <h1 className={styles.abouts_knowMore_topheading}>KNOW MORE ABOUT</h1>
                <h2 className={styles.abouts_knowMore_heading}>WELCARE REHAB</h2>
                <span className={styles.knowMore_heading_underline}></span>
              </div>
              <div className={styles.abouts_knowMore_inner}>
                <div className={styles.abouts_knowMore_wrapper}>
                  <img src={about2.src} alt="" />
                </div>
                <div className={styles.abouts_knowMore_content}>
                  <p>
                    ‘Opcar Clinic’ is a certified organization under “Bihar Shops & Establishment Act 1953” which is
                    among the largest Hi-tech Orthotics and Prosthetic Service Providers in Patna. With a wide range of
                    product resources, ‘Opcar Clinic’ offers its patients an extensive range of prosthetics (artificial
                    limbs) and orthotics devices.
                  </p>
                  <p>
                    Our excellent patient care is the main reason why they choose us to aid them on their quest to
                    restore their mobility and quality of life. Our years of experience and expertise in orthotics and
                    prosthetics help us to evaluate your individual needs and recommend the right customized solution
                    for you.
                  </p>
                  <p>
                    Patients and healthcare professionals prefer ‘Opcar’ because of our unparalleled access to orthotics
                    and prosthetics technologies and our extensive clinical expertise. This allows us to improve
                    outcomes, even in the most challenging clinical conditions.
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        <div className={styles.aboutUs_inner2}>
          <h2>WHY CHOOSE US</h2>
          <span className={styles.aboutUs_whyChooseus_underline}></span>
          <p className={styles.aboutUs_whyChooseus_subheading}>PROSTHETICS & ORTHOTICS SERVICES </p>
          <div className={styles.whyChooseCard_wrapper}>
            <div className={styles.whyChoose_cards}>
              <img src={like.src} alt="" />
              <h3>Quality Products </h3>
              <p>Quality Customized designed to increase the mobility & function of each person we serve. </p>
            </div>
            <div className={styles.whyChoose_cards}>
              <img src={money.src} alt="" />
              <h3>Affordable Budget </h3>
              <p>Get Best possible orthotic and prosthetic outcomes at the most affordable price ranges.</p>
            </div>
            <div className={styles.whyChoose_cards}>
              <img src={recover.src} alt="" />
              <h3> Fast Restoration </h3>
              <p>Helping the patients to recover as quickly as possible with the least amount of complications.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutus_result}>
        <div className={styles.aboutus_result_inner}>
          <div className={styles.aboutus_resultDiv}>
            <h1>15 +</h1>
            <h2>PRODUCTS</h2>
          </div>
          <div className={styles.aboutus_resultDiv}>
            <h1>20 +</h1>
            <h2>EXPERIENCE</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
