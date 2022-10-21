export default function OrderItem({ orderItem }) {
  return (
    <div className="border-t border-gray-100 mb-6 overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Order #{orderItem.orderid.toUpperCase()}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500 capitalize">
          {orderItem.deliverystatus}
        </p>
      </div>
      <div className="border-t border-gray-200 py-6 px-6">
        <ul role="list" className="-my-6 divide-y divide-gray-100">
          {orderItem.items.map((product) => (
            <li key={product.productId} className="flex py-6">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src={
                    product.productInfo.images.images[
                      Object.keys(product.productInfo.images.images)[0]
                    ].medium
                  }
                  alt={"Product"}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <a>{product.productInfo.name.en}</a>
                    </h3>
                    <p className="ml-4">
                      $
                      {product.productInfo.price.b2c.amount *
                        product.productInfo.quantity}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.productInfo.summary.en}
                  </p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                  <p className="text-gray-500">Qty {product.quantity}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="text-right">
          <span className="font-bold">
            Total: ${orderItem.orderprice.totalAmount.amount}
          </span>
        </div>
      </div>
    </div>
  );
}
