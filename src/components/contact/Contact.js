import { useState } from "react";
import "./contact.scss";
import { send } from "emailjs-com";

export default function Contact() {
  const [message, setMessage] = useState(false);
   const [toSend, setToSend] = useState({
     from_name: "",
     message: "",
     reply_to: "",
   });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    send(
      "service_8lt1gt9",
      "template_oc06qah",
      toSend,
      "user_P04MJVqKRjyxYiMfiy4Dt"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setMessage(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Shoot me a message!</h2>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name="from_name"
            value={toSend.from_name}
            type="email"
            placeholder="Email"
          />
          <textarea
            onChange={handleChange}
            type="text"
            name="message"
            placeholder="Your message"
            value={toSend.message}
          ></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I will reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
