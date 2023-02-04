import React from "react";
import styles from "./Product.module.css";
import product1 from "../../public/products/product1.png";
import product2 from "../../public/products/product2.png";
import product3 from "../../public/products/product3.png";
import product4 from "../../public/products/product4.png";
import product5 from "../../public/products/product5.png";
import product6 from "../../public/products/product6.png";
import product7 from "../../public/products/product7.png";
import product8 from "../../public/products/product8.png";
import product9 from "../../public/products/product9.png";
import product10 from "../../public/products/product10.png";
import product11 from "../../public/products/product11.png";
import product12 from "../../public/products/product12.png";

function Product() {
  const productname = [
    { name: "A.F.O", image: product1.src },
    { name: "A.F.O", image: product2.src },
    { name: "Hip abduction brace", image: product3.src },
    { name: "Conventional unilateral k.a.f.o", image: product4.src },
    { name: "Denis brown shoes", image: product5.src },
    { name: "Boston brace", image: product6.src },
    { name: "Below knee prosthesis", image: product7.src },
    { name: "MYO Hand", image: product8.src },
    { name: "Cock-up Splint", image: product9.src },
    { name: "Wrist Orthosis", image: product10.src },
    { name: "Artificial Hand", image: product11.src },
    { name: "Boston Brace", image: product12.src },
  ];
  const allProducts = productname.map((items, index) => {
    return (
      <>
        <div className={styles.productsCards}>
          <img src={items.image} alt="" />
          <h3 className={styles.productsCards_text}>{items.name}</h3>
        </div>
      </>
    );
  });
  return (
    <>
      <div className={styles.product_inner}>
        <h1 className={styles.product_toptext}>OVER SERVICES</h1>
        <h2 className={styles.product_mainText}>PRODUCTS</h2>
        <div className={styles.products_wrapper}>{allProducts}</div>
      </div>
    </>
  );
}

export default Product;
