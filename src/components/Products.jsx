import React, { useRef, useState } from "react";
import { useGetProductsQuery } from "../Utils/RTK/ProductApi";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Utils/features/Products/productsSlice";
import { Button, Card, Input, Spin } from "antd";
import { Link } from "react-router-dom";
import { ShopOutlined } from "@ant-design/icons";

const Products = () => {
  const { data: Product, isLoading, isError, error } = useGetProductsQuery();
  const [search, setSearch] = useState("");
  const allProducts = Product?.products;
  const dispatch = useDispatch();

  dispatch(setProducts(allProducts));
  const products = useSelector((state) => state.products.products);

  return (
    <div className="flex-grow p-5">
      {isLoading && <Spin spinning={true} />}
      {!isLoading && (
        <div>
          {isError ? (
            <p>{error}</p>
          ) : (
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
                        <Link to={`/products/${product.id}`}>
                          <img
                            src={product.images[0]}
                            className="w-full h-[30%] sm:h-[100px]"
                          />
                        </Link>
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
      )}
    </div>
  );
};

const SearchResults = ({ search }) => {
  const products = useSelector((state) => state.products.products);
  const searchProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div>
        <div className="flex flex-wrap gap-4">
          {searchProducts.length ? (
            <div>
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
          ) : (
            <p>No matching result</p>
          )}
        </div>
      </div>
    </>
  );
};
export default Products;
