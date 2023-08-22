import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import GlowButton from "../GlowButton/GlowButton";

const Contact = () => {
  const form = useRef();
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = () => {
    setIsFormValid(form.current.checkValidity());
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    sendEmail(e);
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
    setIsFormValid(false);
  };

  return (
    <div className="container" style={{ paddingBottom: 300 }}>
      <div id="contact" className={styles.ref}></div>
      <div className="subtitle"> Contact</div>
      <div className={styles.text}>
        Have a question or want to work together? Get in touch!
      </div>

      <div className={styles.night}>
        <div className={styles.shooting_star} />
        <div className={styles.shooting_star} />
        <div className={styles.shooting_star} />
      </div>

      <form className={styles.form} ref={form} onChange={handleInputChange}>
        <div className={styles.formContainer}>
          <div className={styles.leftBox}>
            <div className={styles.inputContainer}>
              <input
                className={styles.nameInput}
                type="text"
                required
                minLength={1}
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
              minLength={1}
              placeholder="Type your message here"
              name="message"
              required
            />
          </div>
        </div>
        <div id={styles.submit}>
          <GlowButton
            handleClick={handleSubmitClick}
            text="Submit"
            isDisabled={!isFormValid}
            color="rgb(144, 220, 255)"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
