import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';
import './contact.css';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wgqu5kj",
        "template_mdew9c7",
        form.current,
        "Bk6aRS3QwwN2EMBlC"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            iconColor:'rgb(41, 128, 185)',
            title: ' Your message was sent successfully.',
            showConfirmButton: false,
            timer: 3500, 
            width: 500,
            padding: '10px',
            color: '#004256'
           
          })
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (

    <div id="contact">
        <form ref={form} onSubmit={sendEmail} className="login-form">
        <h2 className="heading">Contact Me</h2>
          <div className="inputBox">
            <label>Name</label>
            <input type="text" name="user_name" />
          </div>
        <div className="inputBox">
          <label>Email</label>
          <input type="email" name="user_email" placeholder="eny.hovhannisyan@gmail.com"/>
        </div>
        <div className="inputBox">
          <label>Message</label>
          <textarea name="message" placeholder="If you are interested in my portfolio, you can send me an email via Email.js. You can skip the email field, because my email address is available by default. You just need to write a message in this field and click send ։)))"/>
        </div>
      <div className="inputBox">
        <input type="submit" value="Send" />
      </div>
      </form>
    </div>

  );
};

export default Contact;
