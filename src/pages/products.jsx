import { useState, useEffect } from "react";
import ProductView from "../components/productView";

import axios from "axios";

const productUrl = "https://apistg.tindn.no/v1/customer/product?limit=50";
const tindnshopid = "d17adba2-738b-47ee-a778-ccf9cf3cf922";

export default function Products({ cart, setCart }) {
  const [openProductModal, setOpenProductModal] = useState(false);
  const [productData, setProductData] = useState({});
  const [products, setProducts] = useState([]);
  const [isProductLoading, setIsProductLoading] = useState(true);

  const fetchProducts = async () => {
    axios
      .get(productUrl, {
        headers: { tindnshopid },
      })
      .then((res) => {
        setProducts(res.data.data.Items);
        setIsProductLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-18 sm:px-6 lg:max-w-7xl lg:px-8">
        {openProductModal && (
          <ProductView
            productData={productData}
            open={openProductModal}
            setOpen={setOpenProductModal}
            cart={cart}
            setCart={setCart}
          />
        )}

        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Latest Swags
        </h2>
        {isProductLoading && (
          <div className="text-gray-500 text-center mt-12">
            Fetching the good stuff...
          </div>
        )}

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              onClick={() => {
                setOpenProductModal(true);
                setProductData(product);
              }}
              key={product.productid}
              className="group relative cursor-pointer"
            >
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={
                    product.images.images[Object.keys(product.images.images)[0]]
                      .medium
                  }
                  alt={"Product"}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name.en}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.summary.en}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${product.price.b2c.amount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
