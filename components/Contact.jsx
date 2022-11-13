import { useState } from "react";
import SocialMedia from "./SocialMedia";
import emailjs from "emailjs-com";

const Contact = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };
  const [form, setForm] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        process.env.formServiceID,
        process.env.formTemplateID,
        event.target,
        process.env.formUserID
      )
      .then(() => {
        alert("Message sent successfully!");
        setForm(initialState);
      })
      .catch((error) => {
        alert("Message failed to send.");
        console.log(error.text);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <section id="contact">
      <div className="max-w-7xl px-8 mx-auto pt-0 md:pt-10 pb-16 md:pb-20">
        <p className="uppercase text-blue-600 text-lg">Contact</p>
        <p className="mt-6 text-3xl font-medium text-center sm:text-left">
          Let&apos;s make something great!
        </p>
        <div className="flex items-center justify-around mt-12 flex-col md:flex-row">
          <div className=" bg-blue-50 z-0 w-full max-w-md p-4 rounded-md shadow-md md:shadow-xl">
            <form
              className="flex flex-col items-center justify-center"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col w-full px-0 sm:px-4 py-2 my-0 sm:my-1 ">
                <label htmlFor="visitor" className="text-gray-600">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="visitor"
                  id="visitor"
                  value={form.visitor}
                  onChange={handleChange}
                  required
                  className="px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                />
              </div>
              <div className="flex flex-col w-full px-0 sm:px-4 py-2 my-0 sm:my-1 ">
                <label htmlFor="email" className="text-gray-600">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="reply_to"
                  id="email"
                  required
                  value={form.reply_to}
                  onChange={handleChange}
                  className="px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                />
              </div>
              <div className="flex flex-col w-full px-0 sm:px-4 py-2 my-0 sm:my-1 ">
                <label htmlFor="message" className="text-gray-600">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-8 py-2 mt-6 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              >
                Send
              </button>
            </form>
          </div>

          <div className="flex flex-col max-w-md mt-12 md:mt-0 text-center justify-center items-center">
            <p className="text-md md:text-xl font-medium">
              Feel free to reach out through any platforms bellow:
            </p>
            <div className="mx-auto">
              <SocialMedia />
              <div className="flex flex-col mt-8 border py-1 px-2 border-blue-200 rounded-lg hover:text-blue-700">
                <a href="mailto:yshubhamr@gmail.com" className="text-blue-500 hover:text-blue-700">
                  yshubhamr@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
