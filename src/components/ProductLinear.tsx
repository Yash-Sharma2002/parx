import React from "react";

export default function ProductLinear({ data }: any) {
  return (
    <>
      {data.map((item: any, idx: number) => {
        return (
          <div key={idx} className="my-16 md:my-24 w-11/12 text-center md:w-10/12 mx-auto">
            <p className="text-start text-[24px] px-3 md:text-[28px] font-[700]">
              {item.Name} Products
            </p>
            {item.products.map((product: any,idx:number) => {
              return (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row justify-center md:justify-start  items-start mt-8 "
                >
                    <img src={product.img} alt={product.name} className={`${item.url!=="door-handles" && item.url!=="door-stopper"? "w-[250px]":"h-[250px]"}`} style={{
                        boxShadow: "1px 1px 10px 1px rgba(0, 0, 0, 0.2)"
                    }} />
                  <a href={`/shop=${item.url}/product=${product.id}`} className="text-[18px] ml-8 mt-8 md:text-[24px] text-black font-[700]">
                    {product.name}
                  </a>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
