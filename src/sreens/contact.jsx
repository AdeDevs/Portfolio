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
            {/* <form target="_blank" action="https://submit-form.com/kIrRwF3Od" method="POST"> */}
        <form target="_blank" action="https://formsubmit.co/adeyemiakinyemi01@gmail.com" method="POST">
          <input type="email" name="email"  required placeholder="Your Email" />
          <input id="name" type="text" name="name" required placeholder="Your Name" />
          <textarea required name="message" placeholder="Your message"></textarea>
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
