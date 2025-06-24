import React from "react";
import "./ContactForm.css"
import { MdMessage } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";



const ContactForm = () => {
  return (
    <div className="container form-content">
      <form>
        <div className="contact-btns">
          <div className="message-phone">
            <button className="primary-btn message">
              <MdMessage />
              VIA SUPPORT CHAT
            </button>
            <button className="primary-btn phone">
              <FaPhoneAlt/>
              VIA CALL
            </button>
          </div>
          <div className="email">
            <button className="secondary-btn message">
             <MdOutlineMessage />
              VIA EMAIL FORM
            </button>
          </div>
        </div>
        <div className="form-body">
              <div className="inputs">
          <div className="form-input">
            <label htmlFor="">NAME</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="form-input">
            <label htmlFor="">E-Mail</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="form-input">
            <label htmlFor="">TEXT</label>
            <input className="text-area" type="text" name="text" id="text" />
          </div>
        </div>
        <div className="submit-btn">
          <button type="submit" className="primary-btn">
            SUBMIT
          </button>
        </div>
        </div>
      
      </form>
      <div>
        <img src=".\images\service.svg" alt="" />
      </div>
    </div>
  );
};

export default ContactForm;
