import React, { useRef } from "react";
import styles from "./Contact.module.scss";
import Card from "../../components/card/Card";
import { FaEnvelope, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        "template_ow7y225",
        form.current,
        {
          publicKey: "Sp3jYeoVF3V7_bbmm",
        }
      )
      .then(
        () => {
          toast.success("Messsage sent successfully");
        },
        (error) => {
          toast.error(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section>
      <div className={`container ${styles.contact}`}>
        <h2>Contact Us</h2>
        <div className={styles.section}>
          <form ref={form} onSubmit={sendEmail}>
            <Card cardClass={styles.card}>
              <label>Name:</label>
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
              />
              <label>Email:</label>
              <input
                type="email"
                name="user_email"
                placeholder="Your email"
                required
              />
              <label>subject:</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <label>Message:</label>
              <textarea name="message" cols="30" rows="10"></textarea>
              <button className="--btn --btn-primary">Send Message</button>
            </Card>
          </form>
          <div className={styles.details}>
            <Card cardClass={styles.card2}>
              <h3>Our Contact Information</h3>
              <p>Fill the form or contact us via other channels listed below</p>
              <div className={styles.icons}>
                <span>
                  <FaPhoneAlt />
                  <p>123-456-7890</p>
                </span>
                <span>
                  <FaEnvelope />
                  <p>Support@northway.com</p>
                </span>
                <span>
                  <GoLocation />
                  <p>Toronto, Ontario</p>
                </span>
                <span>
                  <FaTwitter />
                  <p>@Northway</p>
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
