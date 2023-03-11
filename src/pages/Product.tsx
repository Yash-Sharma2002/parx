import React from "react";
import { ProductData } from "../constants/data";


export default function Product() {
  const [productData, setProductData] = React.useState<any>({});

  function getDetails(){
    const url = window.location.pathname.slice(1);

    const urlArray = url.split("/");
    const shop = urlArray[0].split("=")[1];
    const product = urlArray[1].split("=")[1];


    let shopData = ProductData.find((item) => item.url === shop);

    let productData = shopData.products.find((item) => item.id === product);
    setProductData(productData);

  }


  React.useEffect(() => {
   getDetails();
  }, []);


  return (
    <>
      <div className="pt-32 w-11/12 md:w-10/12 mx-auto ">
        <div className="mb-8 text-start">
          <p className="text-start text-[24px] px-3 md:text-[28px] font-[700]">
            {productData.name}
          </p>
          <img
            src={productData.img}
            alt={productData.name}
            className="h-[80vh] w-fit mx-auto "
          />
        </div>
      </div>
    </>
  );
}
