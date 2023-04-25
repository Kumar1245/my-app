import React from "react";
import ecomerce from "../../Assests/ecommerce.jpg";
import Props from "../../Props";

const HomePage = () => {
  const mobile = [
    {
      product_name: "Iphone 11",
      product_image: {},
      product_price: "6252",
    },
    "Iphone 13",
    "Iphone 14",
  ];
  const laptop = ["Dell Inspiron 15", "HP Pavilion g4", "Macbook Pro"];

  const watch = ["Fasttrack Watch", "Sonata", "HMT"];

  const category = [
    {
      id: 1,
      category: "Mobiles",
      product_image: {},
      product_price: "5678",
      data: mobile,
    },
    {
      id: 2,
      category: "Laptop",
      product_image: {},
      product_price: "3456",
      data: laptop,
    },
    {
      id: 3,
      category: "Watch",
      product_image: {},
      product_price: "3456",
      data: watch,
    },
  ];
  return (
    <>
      <div className="flex  w-full">
        <img src={ecomerce} alt="" className="w-full h-96 " />
      </div>
      {category.map((cat, index) => {
        return (
          <div key={index + 1}>
            <Props
              category={cat.category}
              data={cat.data}
              price={cat.product_price}
              images={cat.product_image}
            />
            ;
          </div>
        );
      })}
    </>
  );
};

export default HomePage;
