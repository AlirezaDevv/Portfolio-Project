import {
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaEnvelopeOpen
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span> Touch </span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>

          <p className="contact__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ex
            facere veniam id incidunt itaque omnis ipsa, consequuntur sed
            assumenda impedit atque autem architecto error voluptatem nihil!
            Obcaecati voluptatum reprehenderit officia vero, consequatur beatae
          </p>

          <div className="contact__info">

          <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="desc">thealireza.am@yahoo.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">Call me</span>
                <h4 className="desc">+989059616630</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://github.com" className="contact__social-link">
              <FaFacebookF />
            </a>
            <a href="https://github.com" className="contact__social-link">
              <FaTwitter />
            </a>
            <a href="https://github.com" className="contact__social-link">
              <FaYoutube />
            </a>
            <div />
          </div>
        </div>

        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="from__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="from__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="from__control"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="from__control textarea"
            ></textarea>
          </div>

          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
