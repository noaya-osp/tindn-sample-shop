import axios from "axios";
import { useEffect, useState } from "react";

import OrderItem from "../components/orderItem";

const env = require("../env");

const orderCustomerAPIURL = env.dev.orderCustomerAPIURL;
const tindnshopid = env.dev.orderCustomerAPIURL;

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(orderCustomerAPIURL, {
        headers: {
          tindnshopid,
          Authorization: "Bearer " + localStorage.getItem("userToken"),
        },
      })
      .then((res) => {
        setOrders(res.data.data.Items);
        setIsEmpty(res.data.data.Items.length === 0);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="mx-auto max-w-2xl py-10 px-4 sm:py-18 sm:px-2">
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold">My Orders</h1>
        </div>
        <div>
          <div className="text-center">
            {isEmpty && (
              <div className="text-gray-500 text-center mt-12">
                You have no orders yet.
              </div>
            )}

            {isLoading && (
              <div className="text-gray-500 text-center mt-12">
                Fetching your orders listing...
              </div>
            )}

            {isError && (
              <div className="text-gray-500 text-center mt-12">
                Sorry, something went wrong. Please contact support
                (support@noaya.net)
              </div>
            )}
          </div>

          {orders.map((item) => (
            <OrderItem orderItem={item} />
          ))}
        </div>
      </div>
    </>
  );
}
