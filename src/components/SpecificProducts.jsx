import { ShopOutlined } from "@ant-design/icons";
import { Button, Card, DatePicker, Input, Modal } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

const SpecificProducts = () => {
  const products = useSelector((state) => state.products.products);
  const [isOdering , setIsOdering] = useState(false)

  
  const { id } = useParams();
  const numberfiedId = Number(id);
  const viewedProduct = products.filter(
    (product) => product.id === numberfiedId
  );

  return (
    <div className="flex-grow relative flex justify-center items-center p-3">
      <div className=" absolute w-[200px] h-[200px] rounded-[50%] z-0 blur-[20px] bg-red-950 top-[20px] left-[10px] " />
      <div className=" absolute w-[100px] h-[100px] rounded-[50%] z-0 blur-[20px] bg-red-950 top-[120px] right-[10px] " />
      <div className=" absolute w-[150px] h-[150px] rounded-[50%] z-0 blur-[20px] bg-red-950 bottom-[20px] right-[90px] " />
      <div className="w-50%">
        {viewedProduct.length ? (
          <div>
            {viewedProduct.map((product) => (
              <Card className=" w-[95%] sm:w-[600px] h-fit" key={product.id}>
                <div className="flex justify-between">
                  <h4 className=" font-bold">Brand: {product?.brand}</h4>
                  <span className="text-[20px]">
                    <span className="text-red-700">$</span>
                    {product.price}
                  </span>
                </div>
                <img
                  src={product.images[0]}
                  alt=""
                  className="w-full h-[40%]"
                />
                <h2 className="text-red-700 text-[23px]">{product.title}</h2>
                <div className="flex justify-between">
                    <p>Product-category: {product.category}</p>
                    <p>Stock:  <span className={product.availabilityStatus === "Low Stock" ? "text-red-500" : "text-black"}>{product.availabilityStatus}</span></p>
                </div>
                  <p className="mt-3">{product.description}</p>
                  <Button className="ml-[40%] mt-3" onClick={()=> setIsOdering(true)}>Add to cart <ShopOutlined className="text-red-700"/></Button>
              </Card>
            ))}
            
              <Modal
                title = "Delivery details"
                onCancel={()=>setIsOdering(false)}
                onOk={()=>setIsOdering(false)}
                open = {isOdering}
              >
                <Input 
                  placeholder="delivery address"
                />
                <div>
                  <p>Your preferred delivery date</p>
                  <DatePicker  />
                </div>
              </Modal>
           
          </div>
        ) : (
          <p>{id} is invalid</p>
        )}
      </div>
    </div>
  );
};

export default SpecificProducts;
