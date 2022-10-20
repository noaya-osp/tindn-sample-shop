import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function ProductView({
  productData,
  open,
  setOpen,
  cart,
  setCart,
}) {
  const [quantity, setQuantity] = useState(1);
  let currentCart = JSON.parse(JSON.stringify(cart));

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                    <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                      <img
                        src={
                          productData.images.images[
                            Object.keys(productData.images.images)[0]
                          ].medium
                        }
                        alt={"Product"}
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                        {productData.name.en}
                      </h2>

                      <section
                        aria-labelledby="information-heading"
                        className="mt-2"
                      >
                        <p className="text-2xl text-gray-900">
                          ${productData.price.b2c.amount}
                        </p>
                      </section>

                      <section
                        aria-labelledby="information-heading"
                        className="mt-2"
                      >
                        <p className="text-l text-gray-900">
                          {productData.summary.en}
                        </p>
                      </section>

                      <section
                        aria-labelledby="information-heading"
                        className="mt-10"
                      >
                        <label
                          htmlFor="first-name"
                          className="text-l text-gray-900"
                        >
                          <b>Quantity</b>
                        </label>
                        <input
                          value={quantity}
                          onChange={handleQuantityChange}
                          type="number"
                          name="first-name"
                          id="first-name"
                          className="mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </section>

                      <section
                        aria-labelledby="options-heading"
                        className="mt-10"
                      >
                        <h3 id="options-heading" className="sr-only">
                          Product options
                        </h3>

                        <button
                          onClick={() => {
                            let newProductData = productData;
                            newProductData.quantity = parseInt(quantity);

                            if (
                              currentCart.some(
                                (item) =>
                                  item.productid === newProductData.productid
                              )
                            ) {
                              const index = currentCart
                                .map((e) => e.productid)
                                .indexOf(newProductData.productid);
                              currentCart[index].quantity =
                                currentCart[index].quantity +
                                newProductData.quantity;
                            } else currentCart.push(newProductData);

                            setCart(currentCart);
                            setOpen(false);
                          }}
                          className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Add to cart
                        </button>
                      </section>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
