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
              Welcome to <span> "Welcare Rehab"</span>
            </h1>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
            <p>
              All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this
              the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
            </p>
            <p>
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
              1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
              original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </p>
            <p>
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
              1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
              original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </p>
          </div>
        </div>
        {/* {page === "about" ? (
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
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in some form, by injected humour, or randomised words which don't look even slightly
                    believable.
                  </p>
                  <p>
                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                    embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined chunks as necessary, making this the first true generator on the Internet.
                  </p>
                  <p>
                    It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,
                    to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free
                    from repetition, injected humour, or non-characteristic words etc.
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )} */}
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
