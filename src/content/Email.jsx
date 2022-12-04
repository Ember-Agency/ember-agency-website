import { useState } from "react";
import { send } from "@emailjs/browser";
import "../styles/Form.scss";

const serviceId = "service_i4wa70d";
const templateId = "template_jajw7ra";
const userId = "7eYyZLyXdx8f96c4e";

const defaultFormState = {
  name: "",
  email: "",
  message: "",
  website: "",
};

export const Email = () => {
  const [toSend, setToSend] = useState(defaultFormState);
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");

  const handleThanks = () => {
    setToSend(defaultFormState);
    setSending(false);
    setMessage("Thanks for reaching out! We will get back to you soon.");
  };

  const handleError = () => {
    setSending(false);
    setMessage("Something went wrong. Please try again.");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    send(serviceId, templateId, toSend, userId)
      .then((_response) => {
        handleThanks();
      })
      .catch((_err) => {
        handleError();
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={onSubmit}>
      {message && (
        <div className="row">
          <h2>{message}</h2>
        </div>
      )}
      <div className="row">
        <div className="col">
          <label htmlFor="name">
            Name <sup>*</sup>
          </label>
          <input
            id="name"
            name="name"
            onChange={handleChange}
            required={true}
            type="text"
            value={toSend.name}
          />
        </div>
        <div className="col">
          <label htmlFor="email">
            Email <sup>*</sup>
          </label>
          <input
            id="email"
            name="email"
            onChange={handleChange}
            required={true}
            type="email"
            value={toSend.email}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="message">
            Message <sup>*</sup>
          </label>
          <textarea
            id="message"
            name="message"
            onChange={handleChange}
            required={true}
            rows={4}
            value={toSend.message}
          />
        </div>
      </div>
      <div className="row">
        <button type="submit" className="pill">
          {sending ? "Sending..." : "Submit"}
        </button>
      </div>
    </form>
  );
};
