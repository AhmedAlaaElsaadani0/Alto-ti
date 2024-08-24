import React from "react";
import style from "./ContactContainer.module.css";
import { motion } from "framer-motion";
export default function ContactContainer({
  formikObject,
  responseFlag,
  resMessage,
}) {
  return (
    <div className="container">
      <div className={style.contactContainer}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className={style.contactMethods}
        >
          <h3>Contacts</h3>
          <div className={style.method}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className={"bi bi-geo-alt-fill"}
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            <p>Building 135 - 8th District - Sector 1 - Sheikh Zayed</p>
          </div>
          <div className={style.method}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-telephone-plus-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5"
              />
            </svg>
            <p>+201064300303</p>
          </div>
          <div className={style.method}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-envelope-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
            </svg>
            <p>info@alto-ti.com </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className={style.contactForm}
        >
          <h3>Contact Form</h3>
          <form onSubmit={formikObject.handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              id="name"
              onChange={formikObject.handleChange}
              onBlur={formikObject.handleBlur}
            />
            {formikObject.errors.name && (
              <div className={style.error}>{formikObject.errors.name}</div>
            )}

            <input
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              onChange={formikObject.handleChange}
              onBlur={formikObject.handleBlur}
            />
            {formikObject.errors.email && (
              <div className={style.error}>{formikObject.errors.email}</div>
            )}
            <textarea
              placeholder="Message"
              name="message"
              id="message"
              rows={7}
              onChange={formikObject.handleChange}
              onBlur={formikObject.handleBlur}
            ></textarea>
            {formikObject.errors.message && (
              <div className={style.error}>{formikObject.errors.message}</div>
            )}
            <button type="submit">
              {responseFlag ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className={"bi bi-arrow-counterclockwise " + style.spinner}
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"
                  />
                  <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466" />
                </svg>
              ) : (
                "Submit Message"
              )}
            </button>
            {resMessage != null ? (
              <div className={resMessage.flag ? style.success : style.error}>
                {resMessage.message}
              </div>
            ) : (
              ""
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}
