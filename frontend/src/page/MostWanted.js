import React from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import ProductDisplay from "../components/productdisplay/ProductDisplay";
const MostWanted = () => {
  return (
    <>
    <NavBar/>
    <ProductDisplay page="Most Wanted"/>
    <Footer/>
    </>
  );
};

export default MostWanted;
