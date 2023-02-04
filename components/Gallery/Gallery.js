import React from "react";
import style from "./Gallery.module.css";
import img1 from "../../public/gallery/img1.jpg";
import img2 from "../../public/gallery/img2.jpg";
import img3 from "../../public/gallery/img3.jpg";
import img4 from "../../public/gallery/img4.jpg";
import img5 from "../../public/gallery/img5.jpg";
import img6 from "../../public/gallery/img6.jpg";
import img7 from "../../public/gallery/img7.jpg";
import img8 from "../../public/gallery/img8.jpg";

function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img1, img2, img3, img4, img5, img6, img7, img8];
  const allgallery = images.map((items) => {
    return <img src={items.src} alt="" />;
  });
  return (
    <>
      <div className={style.gallery_inner}>
        <div className={style.container}>
          <h1 className={style.heading}>GALLERY</h1>
          <div className={style.gall_cardsContainer}>
            <>{allgallery}</>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
