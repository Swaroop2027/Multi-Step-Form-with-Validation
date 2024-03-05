import { MultiStepContext } from "../StepContext";
import { useContext, useState } from "react";
import Validation from "../Validation";

const FirstStep = () => {
  const { setCurrentStep, userData, setUserData } =
    useContext(MultiStepContext);

  const [errors, setErrors] = useState({});

  const handleValidation = (e) => {
    e.preventDefault();
    setErrors(Validation(userData));
  };

  // console.log(errors);
  const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return (
    <div className="container mx-auto p4-10 bg-indigo-950">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-xl">
        <div className="md:flex">
          <div className="w-full px-6 py-8 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800">User Details</h2>
            <form className="mt-6">
              <div className="mb-6">
                <label
                  className="block text-gray-800 font-bold mb-2"
                  htmlFor="firstname"
                >
                  First Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstname"
                  type="text"
                  placeholder="John"
                  value={userData["firstname"]}
                  onChange={(e) => {
                    setUserData({ ...userData, firstname: e.target.value });
                  }}
                />
                {errors.firstname && !userData.firstname && (
                  <p>{errors.firstname}</p>
                )}
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-800 font-bold mb-2"
                  htmlFor="lastname"
                >
                  Last Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastname"
                  type="text"
                  placeholder="Doe"
                  value={userData["lastname"]}
                  onChange={(e) => {
                    setUserData({ ...userData, lastname: e.target.value });
                  }}
                />
                {errors.lastname && !userData.lastname && (
                  <p>{errors.lastname}</p>
                )}
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-800 font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="johndoe@example.com"
                  value={userData["email"]}
                  onChange={(e) => {
                    setUserData({ ...userData, email: e.target.value });
                  }}
                />
                {errors.email && <p>{errors.email}</p>}
              </div>

              {userData.firstname &&
              userData.lastname &&
              email_pattern.test(userData.email) ? (
                <button
                  type="submit"
                  className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => {
                    setCurrentStep(2);
                  }}
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={(e) => {
                    handleValidation(e);
                  }}
                >
                  Next
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
