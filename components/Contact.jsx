import { useEffect, useState } from "react";
import SocialMedia from "./SocialMedia";
import { useForm } from "react-hook-form";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    isError && setIsError(false);
    setIsLoading(true);
    fetch("https://formspree.io/f/xrgwlppz", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        if (!res.ok) return handleError();
        onMessageSentSuccessfully();
      })
      .catch(() => handleError());
  };

  const handleError = () => {
    setIsError(true);
    setIsLoading(false);
  };

  const onMessageSentSuccessfully = () => {
    reset();
    setIsSent(true);
    setIsLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      isSent && setIsSent(false);
      isError && setIsError(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [isSent, isError]);

  return (
    <section id="contact">
      <div className="max-w-7xl px-8 mx-auto pt-0 md:pt-10 pb-16 md:pb-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="uppercase text-blue-600 text-lg dark:text-blue-300"
        >
          Contact
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: "linear",
            x: { duration: 1.5 },
            opacity: { duration: 1.5 },
            delay: 0.5,
          }}
          viewport={{ once: true }}
          className="mt-6 text-3xl font-medium text-center sm:text-left dark:text-slate-400"
        >
          Let&apos;s make something great!
        </motion.p>
        <div className="flex items-center justify-around mt-12 flex-col md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: "linear",
              x: { duration: 1.5 },
              opacity: { duration: 1.5 },
              delay: 0.8,
            }}
            viewport={{ once: true }}
            className=" bg-blue-50 dark:bg-slate-700 z-0 w-full max-w-md p-4 rounded-md shadow-md md:shadow-xl"
          >
            <form
              className="flex flex-col items-center justify-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col w-full px-0 sm:px-4 py-2 my-0 sm:my-1 ">
                <label
                  htmlFor="visitor"
                  className="text-gray-600 dark:text-slate-400"
                >
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="visitor"
                  className="px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 dark:bg-slate-300"
                  {...register("name", {
                    required: "Name is required.",
                    minLength: {
                      value: 3,
                      message: "Please enter a valid name (min 3 chars)",
                    },
                  })}
                />
                {errors.name && (
                  <div className="text-sm mt-1 text-red-500">
                    {errors.name.message}{" "}
                  </div>
                )}
              </div>
              <div className="flex flex-col w-full px-0 sm:px-4 py-2 my-0 sm:my-1 ">
                <label
                  htmlFor="email"
                  className="text-gray-600 dark:text-slate-400"
                >
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  name="reply_to"
                  id="email"
                  className="px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 dark:bg-slate-300"
                  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email address.",
                    },
                  })}
                />
                {errors.email && (
                  <div className="text-sm mt-1 text-red-500">
                    {errors.email.message}
                  </div>
                )}
              </div>
              <div className="flex flex-col w-full px-0 sm:px-4 py-2 my-0 sm:my-1 ">
                <label
                  htmlFor="message"
                  className="text-gray-600 dark:text-slate-400"
                >
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  className="px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 dark:bg-slate-300"
                  {...register("message", {
                    required: "Message is required.",
                    minLength: {
                      value: 10,
                      message: "Minimum 10 characters is required.",
                    },
                  })}
                ></textarea>
                {errors.message && (
                  <div className="text-sm mt-1 text-red-500">
                    {errors.message.message}
                  </div>
                )}
              </div>
              <AnimatePresence>
                {!isLoading && isSent && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ease: "linear",
                      x: { duration: 1 },
                      opacity: { duration: 1.1 },
                    }}
                    viewport={{ once: false }}
                    exit={{ opacity: 0, x: 10 }}
                  >
                    <div className="text-green-500 flex items-center gap-2 font-medium py-2">
                      <BsFillCheckCircleFill size={24} />
                      <p>Message sent successfully. </p>
                    </div>
                  </motion.div>
                )}
                {!isLoading && isError && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ease: "linear",
                      x: { duration: 1 },
                      opacity: { duration: 1.1 },
                    }}
                    viewport={{ once: false }}
                    exit={{ opacity: 0, x: 10 }}
                  >
                    <div className="text-red-500 flex items-center gap-2 font-medium py-2">
                      <AiFillCloseCircle size={24} />
                      <p>Something went wrong. Please try again later</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                type="submit"
                className="px-8 py-2 mt-6 text-white dark:text-slate-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              >
                {isLoading && (
                  <svg
                    aria-hidden="true"
                    role="status"
                    class="inline mr-3 w-4 h-4 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    ></path>
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                )}
                {isLoading ? "Processing..." : " Submit"}
              </button>
            </form>
          </motion.div>

          <div className="flex flex-col max-w-md mt-12 md:mt-0 text-center justify-center items-center">
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                ease: "linear",
                x: { duration: 1.5 },
                opacity: { duration: 1.5 },
                delay: 0.8,
              }}
              viewport={{ once: true }}
              className="text-md md:text-xl font-medium dark:text-slate-400"
            >
              Feel free to reach out through any platforms bellow:
            </motion.p>
            <div className="mx-auto">
              <SocialMedia />
              <div className="flex flex-col mt-8 border py-1 px-2 border-blue-200 rounded-lg dark:border-slate-600 hover:text-blue-700">
                <a
                  href="mailto:sde.shubham.yadav@gmail.com"
                  className="text-blue-500 hover:text-blue-700 dark:text-blue-300"
                >
                  sde.shubham.yadav@gmail.com
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
