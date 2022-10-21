import { useEffect } from "react";
import OrderItem from "../components/orderItem";
import axios from "axios";
import { useState } from "react";

const profileAPIURL = "https://apistg.tindn.no/v1/customer/order";
const tindnshopid = "d17adba2-738b-47ee-a778-ccf9cf3cf922";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get(profileAPIURL, {
        headers: {
          tindnshopid,
          Authorization: "Bearer " + localStorage.getItem("userToken"),
        },
      })
      .then((res) => {
        console.log("res", res.data.data);
        setOrders(res.data.data.Items);
      });
  }, []);

  return (
    <>
      <div className="mx-auto max-w-2xl py-10 px-4 sm:py-18 sm:px-2">
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold">Orders</h1>
        </div>
        <div>
          {orders.map((item) => (
            <OrderItem orderItem={item} />
          ))}
        </div>
      </div>
    </>
  );
}
