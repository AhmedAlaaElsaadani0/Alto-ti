import React, { useState } from "react";
import Heading from "../../Component/Heading/Heading";
import ContactContainer from "../../Component/ContactContainer/ContactContainer";
import { useFormik } from "formik";
import axios from "axios";

export default function Contact() {
  const [responseFlag, setResponseFlag] = useState(false);
  const [resMessage, setResMessage] = useState(null);
  const sendMessage = (values) => {
    let data = JSON.stringify({
      Name: values.name,
      Email: values.email,
      Message: values.message,
    });

    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    setResponseFlag(true);
    axios
      .post("https://projects.izitechs.com/api/alto/contact", data, config)
      .then((response) => {
        console.log(response);
        let res = response.data;
        if (res.status && res.status == 200) {
          setResMessage({ flag: true, message: res.message });
        } else{
          setResMessage({
            flag: false,
            message: "Something went wrong, please try again later",
          });}

        setResponseFlag(false);
      })
      .catch((error) => {
        console.error("There was an error sending the message!", error);
        setResponseFlag(false);
        setResMessage({
          flag: false,
          message: "Something went wrong, please try again later",
        });
      });
  };
  const formikObject = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      sendMessage(values);
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "Name is required";
      }
      if (!values.email) {
        errors.email = "Email is required";
      }
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.message) {
        errors.message = "Message is required";
      }
      if (values.message.length < 10) {
        errors.message = "Message should be at least 10 characters";
      }
      return errors;
    },
  });
  return (
    <section id="Contact">
      <Heading textH={"Contact"} textP={"Get in Touch"} />
      <ContactContainer
        formikObject={formikObject}
        resMessage={resMessage}
        responseFlag={responseFlag}
      />
    </section>
  );
}
