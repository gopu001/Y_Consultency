import react, { useEffect, useRef, useState } from "react";
import "./Contact.scss";
import callImg from "../../assets/Contact/call.svg";
import emailImg from "../../assets/Contact/email.svg";
import locationImg from "../../assets/Contact/location.svg";
import instaImg from "../../assets/Contact/insta.png";
import linkedinImg from "../../assets/Contact/linkedin.png";
import twitter from "../../assets/Contact/twitter.png.png";
import thankyouImg from "../../assets/Contact/accept.png";
import whatsappImg from "../../assets/Contact/whatspp.png";

const contactData = [
  {
    id: 1,
    img: callImg,
    info: "+91 9735712598",
    link: "tel:+919735712598",
  },
  {
    id: 2,
    img: emailImg,
    info: "enquiries@y-solutions.in",
    link: "mailto:enquiries@y-solutions.in",
  },
  {
    id: 3,
    img: locationImg,
    info: "Hyderabad",
  },
];

function Contact() {
  const initialValues = {
    fullname: "",
    email: "",
    message: "",
  };

  const [form, setForm] = useState(initialValues);
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const formRef = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setError(validationErrors);
    setIsSubmit(true);
    if (Object.keys(error).length === 0 && isSubmit) {
      setShowAlert(true);
      setForm(initialValues);
    }
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
      console.log(form);
    }
  }, [error]);

  const validate = (values) => {
    const error = {};
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!values.fullname || values.fullname.length < 4) {
      error.fullname = "Fullname must be atleast 3 characters !";
    }
    if (!values.email) {
      error.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      error.email = "Enter valid email address!";
    }
    if (!values.message) {
      error.message = "Message box should not be empty!";
    } else if (values.message.length < 11) {
      error.message = "Message should be atleast 10 characters!";
    }
    return error;
  };

  return (
    <section name="Contact" className="contact">
      <div className="contactMainContainer">
        <div className="contactHead">
          <h2>Contact Us</h2>
          <p>
            Feel free to reach out! Whether you want to take your business from{" "}
            <span>offline2online</span>, a question, or just want to say hello,
            we would love to hear from you.
          </p>
        </div>
        <div className="contactForm">
          <div className="contactFormLeft">
            <div className="contactFormLeftTop">
              <h3>Contact Information</h3>
              <p>Say Something to start a live chart!</p>
            </div>
            <div className="contactFormLeftMiddle">
              <div className="middleOnes">
                {contactData.map(({ id, img, info, link }) => (
                  <div key={id} className="eachMiddleOnes">
                    <img src={img} alt="" />
                    {link ? <a href={link}>{info}</a> : <h4>{info}</h4>}
                  </div>
                ))}
              </div>
            </div>
            <div className="contactFormLeftDown">
              <div className="socialMediaImages">
                <img src={linkedinImg} alt="" />
                <img src={instaImg} alt="" />
                <img src={twitter} alt="" />
                <a href="https://wa.me/+919735712598" target="_blank">
                  <img src={whatsappImg} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="contactFormRight">
            <form onSubmit={handleSubmit} ref={formRef}>
              <div className="inputs">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  value={form.fullname}
                  onChange={handleChange}
                  placeholder="Enter Full Name"
                />
                <p>{error.fullname}</p>
              </div>

              <div className="inputs">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Ex:gopunkhil001@gmail.com"
                  required
                />
                <p>{error.email}</p>
              </div>

              <div className="inputs">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="5"
                  onChange={handleChange}
                  value={form.message}
                  placeholder="What do you want to ping me?"
                />
                <p>{error.message}</p>
              </div>

              <button type="submit">Send Message</button>
            </form>

            {showAlert && (
              <div className="submitAlert">
                <img src={thankyouImg} alt="" />
                <p>
                  Thankyou for contacting. We will get back to you as soon as
                  possible
                </p>
                <button onClick={() => setShowAlert(false)}>Close</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
