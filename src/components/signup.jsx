import { useNavigate } from "react-router-dom";
import useAccountForm from "../customHooks/accountForm";
import axios from "axios";

const accountAPIURL = "https://apistg.tindn.no/v1/customer/subaccount";
const profileAPIURL = "https://apistg.tindn.no/v1/customer/profile";
const tindnshopid = "d17adba2-738b-47ee-a778-ccf9cf3cf922";

export default function Signup() {
  const navigate = useNavigate();
  const register = () => {
    console.log(inputs);
    const payload = {
      username: inputs.email,
      password: inputs.password,
      authType: "native",
    };

    const profilePayload = {
      legalName: inputs.firstName,
      lastName: inputs.lastName,
      firstName: inputs.firstName,
      avatar: "null",
      contact: {
        email: inputs.email,
        mobileNumber: "11111",
      },
    };

    axios
      .post(accountAPIURL, payload, {
        headers: { tindnshopid },
      })
      .then((res) => {
        console.log("res", res.data.data.token);
        localStorage.setItem("userToken", res.data.data.token);

        axios
          .post(profileAPIURL, profilePayload, {
            headers: {
              tindnshopid,
              Authorization: "Bearer " + res.data.data.token,
            },
          })
          .then((res) => {
            console.log("profRes", res);
            navigate("/account");
          });
      });
  };

  const { inputs, handleInputChange, handleSubmit } = useAccountForm(register);
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="border-2 rounded-md pb-8 pt-4 px-8 w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Signup to our shop
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <a
                href="login"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Login here
              </a>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm">
              <div className="mb-4">
                <label htmlFor="emailAddress" className="sr-only">
                  Email address
                </label>
                <input
                  onChange={handleInputChange}
                  id="emailAddress"
                  name="email"
                  type="email"
                  value={inputs.email}
                  required
                  className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="firstName" className="sr-only">
                  First Name
                </label>
                <input
                  onChange={handleInputChange}
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="First Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="sr-only">
                  Last Name
                </label>
                <input
                  onChange={handleInputChange}
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="Last Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  onChange={handleInputChange}
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="sr-only">
                  Confirm Password
                </label>
                <input
                  onChange={handleInputChange}
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
