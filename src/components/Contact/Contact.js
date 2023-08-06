import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
const Contact = () => {
  const form = useRef();
  const [submitVisible, setSubmitVisible] = useState(false);

  const handleSubmitClick = (e) => {
    sendEmail(e);
    setSubmitVisible(true);

    setTimeout(() => {
      setSubmitVisible(false);
    }, 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    form.current.reset();
  };

  return (
    <div className={styles.contact}>
      <div className="subtitle"> Contact</div>
      <div className="component-text">
        Have a question or want to work together? Get in touch!
      </div>

      <div className={styles.form}>
        <div className={styles.leftBox}>
          <div className={styles.inputContainer}>
            <input
              className={styles.nameInput}
              type="text"
              required
              placeholder="Full Name"
              name="from_name"
            />

            <input
              className={styles.emailInput}
              type="email"
              required
              placeholder="Email"
              name="email"
            />
          </div>

          <textarea
            id={styles.msg}
            placeholder="Type your message here"
            name="message"
          />
          <div id={styles.submit}>{/* button */}</div>
          {submitVisible && <div className={styles.submitMsg}>Submitted!</div>}
        </div>

        <div className={styles.rightBox}>
          <div className={styles.title}>LinkedIn</div>
          <a
            href="https://www.linkedin.com/in/amyjo1/"
            style={{
              paddingLeft: 0,
              fontSize: 18,
              textDecoration: "underline",
            }}
          >
            amy jo
          </a>
          <div className={styles.title} style={{ marginTop: 50 }}>
            Location
          </div>
          <div>
            <div>UBC Vancouver</div>
            <div>British Columbia, Canada</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;