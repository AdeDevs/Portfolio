function ContactMe() {
  return (
    <div className="contact-box">
      <main>
        <header>
                <h1>Contact Me</h1>
                <ul>
                    <li><a href="mailto:adeyemiakinyemi01@gmail.com">adeyemi@gmail.com</a></li>
                    <li><a href="https://wa.me/09076320109">+2349076320109</a></li>
                    {/* <li><a href="https://bit.ly/3UJB7LY">Lagos, Nigeria</a></li> */}
                </ul>
            </header>
        <form action="">
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Your Name" />
          <textarea name="message" placeholder="Your message"></textarea>
          <button type="submit">Send</button>
        </form>
      </main>
      <footer>
        <p>04</p>
      </footer>
    </div>
  );
}

export default ContactMe;
