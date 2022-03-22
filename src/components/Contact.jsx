import React, { useState } from "react";

export default function Contact() {
  const initialValues = { name: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "Name is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.message) {
      errors.message = "Message is required!";
    }

    return errors;
  };
  return (
    <main className="relative z-10">
      <div className="flex justify-center items-center  min-h-screen">
        <section className="bg-slate-700 rounded-xl p-8 shadow-lg bg-opacity-80">
          <h1 className="cursive text-4xl text-sky-400 mb-4 mt-5 text-center ">
            Contact Me
          </h1>
          <p className="text-center text-white">By email: trrgomez47@hotmail.com</p>
          <p className="text-center text-white">or send me a message.</p>
          <form className="flex flex-col space-y-4 p-8" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="text-sky-300 text-lg">
                Name:
              </label>
              <input
                type="text"
                name="name"
                placeholder="your name"
                className="ring-1 ring-slate-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-1"
                value={formValues.name}
                onChange={handleChange}
              />
            </div>
            <p className="text-red-500 text-lg">{formErrors.name}</p>
            <div>
              <label htmlFor="email" className="text-sky-300 text-lg">
                Email address:
              </label>
              <input
                type="email"
                name="email"
                placeholder="your email"
                className="ring-1 ring-slate-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-1"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p className="text-red-500 text-lg">{formErrors.email}</p>
            <div>
              <label htmlFor="message" className="text-sky-300 text-lg">
                Message:
              </label>
              <textarea
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
                placeholder="Message Me!"
                name="message"
                cols="30"
                rows="5"
                value={formValues.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <p className="text-red-500 text-lg">{formErrors.message}</p>
            <button
              type="submit"
              className="px-6 py-2 text-white border bg-sky-600 border-sky-600 hover:bg-transparent hover:text-sky-100 rounded-md"
            >
              Send Message
            </button>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
              <div className="text-center text-teal-900 rounded-xl p-3 bg-teal-300">
                Your Message was send!
              </div>
            ) : null}
          </form>
        </section>
      </div>
    </main>
  );
}
