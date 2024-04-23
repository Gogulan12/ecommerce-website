import React, { useEffect } from "react";
// import styles from "./Home.module.scss";
import Slider from "../../components/slider/Slider";
// import AdminOnlyRoute from "../../components/adminOnlyRoute/AdminOnlyRoute";
import Product from "../../components/product/Product";

export default function Home() {
  const url = window.location.href;

  useEffect(() => {
    const scrollToProducts = () => {
      if (url.includes("#products")) {
        window.scrollTo({
          top: 700,
          behavior: "smooth",
        });
        return;
      }
    };

    scrollToProducts();
  }, [url]);

  return (
    <div>
      <Slider />
      <Product />
    </div>
  );
}
