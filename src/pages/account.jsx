import useAccountForm from "../customHooks/accountForm";
import axios from "axios";
import { useEffect } from "react";

const profileAPIURL = "https://apistg.tindn.no/v1/customer/profile";
const tindnshopid = "d17adba2-738b-47ee-a778-ccf9cf3cf922";

export default function Account() {
  const updateAccount = () => {};
  const { inputs, handleInputChange, setInputs, handleSubmit } =
    useAccountForm(updateAccount);

  useEffect(() => {
    axios
      .get(profileAPIURL, {
        headers: {
          tindnshopid,
          Authorization: "Bearer " + localStorage.getItem("userToken"),
        },
      })
      .then((res) => {
        console.log("profile", res.data.data);
        setInputs(res.data.data);
      });
  }, []);

  return (
    <>
      <div className="mx-auto max-w-2xl py-10 px-4 sm:py-18 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
            Account
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-gray-100 px-4 py-5 sm:p-6">
              <h2 className="text-xl font-bold tracking-tight text-gray-900 mb-6">
                Profile
              </h2>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <input
                    required
                    onChange={handleInputChange}
                    value={inputs.firstName}
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={inputs.lastName}
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete="family-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={inputs?.contact?.email}
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="mobileNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contact Number
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={inputs?.contact?.mobileNumber}
                    type="text"
                    name="mobileNumber"
                    id="mobileNumber"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <select
                    onChange={handleInputChange}
                    value={inputs.country}
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  >
                    <option>Canada</option>
                    <option>Norway</option>
                    <option>Philippines</option>
                    <option>Singapore</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="zipcode"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ZIP / Postal code
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={inputs.postalCode}
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    autoComplete="postal-code"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="street"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Street address
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={inputs.streetAddress}
                    type="text"
                    name="street"
                    id="street"
                    autoComplete="street-address"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={inputs.city}
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State / Province
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={inputs.state}
                    type="text"
                    name="state"
                    id="state"
                    autoComplete="address-level1"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Update
              </button>
            </div>
          </div>
        </form>

        <div className="text-center mt-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
            Credentials
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-gray-100 px-4 py-5 sm:p-6">
              <h2 className="text-xl font-bold tracking-tight text-gray-900 mb-6">
                Change password
              </h2>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label
                    htmlFor="street"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={inputs.streetAddress}
                    type="text"
                    name="street"
                    id="street"
                    autoComplete="street-address"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="street"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={inputs.streetAddress}
                    type="text"
                    name="street"
                    id="street"
                    autoComplete="street-address"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Change Password
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
