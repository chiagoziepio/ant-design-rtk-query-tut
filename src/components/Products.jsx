import React, { useRef, useState } from "react";
import { useGetProductsQuery } from "../Utils/RTK/ProductApi";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Utils/features/Products/productsSlice";
import { Button, Card, Input, Spin } from "antd";
import { Link } from "react-router-dom";
import { ShopOutlined } from "@ant-design/icons";

const Products = () => {
  const { data: Product, isLoading } = useGetProductsQuery();
  const [search, setSearch] = useState("");
  const allProducts = Product?.products;
  const dispatch = useDispatch();

  dispatch(setProducts(allProducts));
  const products = useSelector((state) => state.products.products);

  /* availabilityStatus
: 
"Low Stock"
brand
: 
"Essence"
category
: 
"beauty"
description
: 
"The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula."
dimensions
: 
{width: 23.17, height: 14.43, depth: 28.01}
discountPercentage
: 
7.17
id
: 
1
images
: 
['https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png']
meta
: 
barcode
: 
"9164035109868"
createdAt
: 
"2024-05-23T08:56:21.618Z"
qrCode
: 
"https://assets.dummyjson.com/public/qr-code.png"
updatedAt
: 
"2024-05-23T08:56:21.618Z"
[[Prototype]]
: 
Object
minimumOrderQuantity
: 
24
price
: 
9.99
rating
: 
4.94
returnPolicy
: 
"30 days return policy"
reviews
: 
(3) [{…}, {…}, {…}]
shippingInformation
: 
"Ships in 1 month"
sku
: 
"RCH45Q1A"
stock
: 
5
tags
: 
(2) ['beauty', 'mascara']
thumbnail
: 
"https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
title
: 
"Essence Mascara Lash Princess"
warrantyInformation
: 
"1 month warranty"
weight
: 
2 */

  return (
    <div className="flex-grow p-5">
      {isLoading && <Spin spinning={true} />}
      {!isLoading && (
        <div>
          <div className="flex justify-center items-center w-full h-[2.7rem] mb-2 ">
            <Input
              className=" w-[250px] h-[2.2rem] "
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {search ? (
            <SearchResults search={search} />
          ) : (
            <div className="flex flex-wrap gap-4">
              {products.map((product) => (
                <Card key={product.id} className="w-fit h-fit !p-2">
                  <div>
                    <img
                      src={product.images[0]}
                      className="w-full h-[30%] sm:h-[100px]"
                    />
                  </div>
                  <h3 className="text-red-700">{product.title}</h3>
                  <div className="flex justify-between flex-wrap sm:flex-nowrap">
                    <p>{product?.brand}</p>
                    <span>
                      <span className="text-red-700">$</span>
                      {product.price}
                    </span>
                  </div>
                  <Button className="w-full h-[2rem]">
                    Add to cart <ShopOutlined className="text-red-700" />
                  </Button>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const SearchResults = ({search}) => {
    const products = useSelector((state) => state.products.products);
    const searchProducts = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
    
    
  return (
    
    <>
      <div>
      <div className="flex flex-wrap gap-4">
              {searchProducts.map((product) => (
                <Card key={product.id} className="w-fit h-fit !p-2">
                  <div>
                    <img
                      src={product.images[0]}
                      className="w-full h-[30%] sm:h-[100px]"
                    />
                  </div>
                  <h3 className="text-red-700">{product.title}</h3>
                  <div className="flex justify-between flex-wrap sm:flex-nowrap">
                    <p>{product?.brand}</p>
                    <span>
                      <span className="text-red-700">$</span>
                      {product.price}
                    </span>
                  </div>
                  <Button className="w-full h-[2rem]">
                    Add to cart <ShopOutlined className="text-red-700" />
                  </Button>
                </Card>
              ))}
            </div>
      </div>
    </>
  );
};
export default Products;
