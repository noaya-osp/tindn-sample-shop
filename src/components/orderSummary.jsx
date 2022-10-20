import { Transition } from "@headlessui/react";

export default function OrderSummary({ open, status }) {
  return (
    <Transition.Root show={open}>
      <div
        class="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      class="text-xl font-medium leading-6 text-gray-900"
                      id="modal-title"
                    >
                      {status == 400
                        ? "Problem with the payment"
                        : "Payment successful"}
                    </h3>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">
                        {status == 400
                          ? "Sorry, something went wrong with the payment gateway. Please contact support (support@myshopname.co)."
                          : "Thanks for your order, we're currently processing it. So hang tight and we'll send you confirmation very soon!"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <p>
                  <a
                    type="button"
                    className="font-medium text-blue-600 hover:text-blue-500"
                    href="/"
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition.Root>
  );
}
