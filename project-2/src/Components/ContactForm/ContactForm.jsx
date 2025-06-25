import React from "react";
import "./ContactForm.css";
import { MdMessage } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("Marwa");
  const [email, setEmail] = useState("support@dosomecoding.com");
  const [text, setText] = useState("Subscribe to this channel");
  const onSubmit = (e) => {
    e.preventDefault();

    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);

    console.log("Form Submitted");
    // console.log("Name:", name);
    console.log("Name:", e.target[0].value);
    // console.log("Email:", email);
    console.log("Email:", e.target[1].value);
    // console.log("Text:", text);
    console.log("Text:", e.target[2].value);
  };

  const onViaCallSubmit = () => {
    console.log("Via Call Button Clicked");
  };
  return (
    <div className="All-contact">
      <div className="form-section">
           <div className="contact-btns">
        <div className="message-phone">
          <button className="primary_btn message">
            <MdMessage />
            VIA SUPPORT CHAT
          </button>
          <button onClick={onViaCallSubmit} className="primary_btn phone">
            <FaPhoneAlt />
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
          <form className="form-content" onSubmit={onSubmit}>
        <div className="form-body">
          <div className="inputs">
            <div className="form_control">
              <label htmlFor="name">NAME</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form_control">
              <label htmlFor="email">E-Mail</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="form_control">
              <label htmlFor="text">TEXT</label>
              <input className="text-area" type="text" name="text" id="text" />
            </div>
          </div>
          <div className="submit-btn">
            <button type="submit" className="primary_btn">
              SUBMIT
            </button>
          </div>
        </div>
      </form>
      </div>
   
  
        <div>
        <img src=".\images\service.svg" alt="" />
      </div>
    </div>
  );
};

export default ContactForm;
