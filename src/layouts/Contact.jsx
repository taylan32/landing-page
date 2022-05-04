import React from "react";

export default function Contact() {
  return (
    <footer id="contact" className="bg-dark-blue heading-medium">
      <div className="contact-form">
        <form>
          <h2 className="heading-medium text-center">Bana Ulaşın</h2>
          <div className="form-group">
            <label htmlFor="name">İsim</label>
            <input
              type={"text"}
              className="form-control"
              name="name"
              id="name"
              placeholder="İsim"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">E-Posta</label>
            <input
              type={"text"}
              className="form-control"
              name="email"
              id="email"
              placeholder="E-Posta"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Mesajınız</label>
            <textarea
              name="message"
              id="message"
              className="form-control"
              rows="5"
              placeholder="Mesajınız"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-form btn-block">Gönder</button>
        </form>
        <ul>
          <li>
            <a href="https://www.github.com/taylan32"><i className="fa-brands fa-github"></i></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/taylan-alparslan-984546201/" ><i className="fa-brands fa-linkedin"></i></a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
