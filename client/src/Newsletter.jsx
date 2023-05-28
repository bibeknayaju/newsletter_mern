import React from "react";
import { useState } from "react";
import axios from "axios";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      axios
        .post("http://localhost:8000/email", { email: email })
        .then((response) => {
          if (response.status === 200) {
            setSubmitted(true);
          }
          // console.log(response);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="max-w-md w-full p-6 bg-black border border-gray-100 rounded-lg shadow-lg">
        {submitted ? (
          <div>
            <h1>this is submited</h1>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
                Subscribe
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Newsletter;
