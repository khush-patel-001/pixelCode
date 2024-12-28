import React, { useState } from "react";
import arrow_icon_dark from "../../assets/arrow-icon-dark.svg";

const Contact = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6a5fc0a9-6b88-4dbe-8201-5c4d12a3e934");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(() => {
        setResult("");
      }, 3000);
    } else {
      console.log("Error", data);
      setResult(data.message);
      setTimeout(() => {
        setResult("");
      }, 3000);
    }
  };

  return (
    <div>
      <div className="pt-7 pb-28 lg:pb-36 lg:pt-10 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-center">
          Contact Form
        </h2>
        <p className="mb-8 lg:mb-10 font-light text-center text-gray-500 sm:text-xl">
          Get in touch with us
        </p>
        <form action="#" className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 text-gray-900 text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name1234@gmail.com"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm  bg-gray-50 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="7"
              className="block p-2.5 w-full text-sm  bg-gray-50 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="rounded-md bg-sky-500 px-4 py-3 text-base font-semibold text-[#0D1117] transition-all shadow-2xl flex hover:bg-sky-700 text-center bg-primary-700 sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message{" "}
            <img src={arrow_icon_dark} alt="arrow-icon" className="h-6 pl-2" />
          </button>
        </form>
        <span className="text-sky-500 mt-4">{result}</span>
      </div>
    </div>
  );
};

export default Contact;
