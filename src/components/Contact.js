import React from "react";
import emailjs from "emailjs-com";
import { GoMarkGithub } from "react-icons/go";
import { GrInstagram, GrLinkedin, GrFacebook, GrTwitter } from "react-icons/gr";
import video from "../video/video.mp4";

import { ImWhatsapp } from "react-icons/im";

import "../css/contact.css";

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "gmail",
      "service_wt9p42c",
      e.target,
      "user_ZXzXAmaMx1QfQCoxYGkzE"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
};

function Contact() {
  return (
    <div id="contact" className="contact-me">
      <video
        src={video}
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: "-1",
        }}
      ></video>
      <div className="contact-title">Contact Me</div>
      <div className="contact">
        <div className="form">
          {/* <h1>Do you want a new website that looks good and converts well?</h1> */}
          <h2>
            {" "}
            If you have a project in mind or are simply interested in finding
            out more, please fill the form below and let’s get things moving.
          </h2>
          <form onSubmit={sendEmail}>
            <input type="text" placeholder="Full Name" name="name" />
            <input type="email" placeholder="Email" name="email" />

            <input type="text" placeholder="Subject" name="subject" />
            <textarea type="textarea" placeholder="Message..." name="message" />
            <br />
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="media">
          <h1>Feel Free To Contact Me </h1>
          <div className="media-text">
            <h1>Name:</h1>
            <p>Fade Ahmad</p>
            <h1>Address:</h1>

            <p> Coimbatore, India</p>
            <p> Tartous, Syria</p>
            <h1>Email:</h1>
            <p>ffaaddee607122@gamil.com</p>
          </div>
          <ul>
            <li>
              <a href="https://instagram.com/fade_ahmad1?utm_medium=copy_link">
                <GrInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/%D9%81%D8%A7%D8%AF%D9%8A-%D8%A7%D8%AD%D9%85%D8%AF-8669631bb">
                <GrLinkedin />
              </a>
            </li>
            <li>
              <a href="https://api.whatsapp.com/send?phone=+917639896079">
                <ImWhatsapp />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/FadeAhm05479262/with_replies">
                <GrTwitter />
              </a>
            </li>

            <li>
              <a href="https://www.facebook.com/profile.php?id=100028232944785">
                <GrFacebook />
              </a>
            </li>
            <li>
              <a href="https://github.com/fade607">
                {" "}
                <GoMarkGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
