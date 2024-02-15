function AboutMe() {
  return (
    <div className="about-box">
      <main>
      <h1>i am a frontend developer</h1>
          <p>
          I Am Adeyemi Akinyemi, An Entry-Level Professional Frontend Developer With Grad Certificate From <a href="https://www.altschoolafrica.com/">AltSchool Africa</a>.
          </p>
          <p>What I Listen To To Focus <a href="https://open.spotify.com/playlist/6CNpxaOXFVx54uu9RFKqkF?si=2dcea732914847e9">Spotify</a> </p>
          <div>
             <div className="testing-box">
          <div className="skill-box first">
            <span className="name">HTML</span>

            <div className="skill-bar">
              <span className="skill-per html">
                <span className="tooltip">99%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="name">CSS</span>

            <div className="skill-bar">
              <span className="skill-per css">
                <span className="tooltip">80%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="name">JAVASCRIPT</span>

            <div className="skill-bar">
              <span className="skill-per javascript">
                <span className="tooltip">79%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="name">REACT</span>

            <div className="skill-bar">
              <span className="skill-per react">
                <span className="tooltip">69%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="name">VUE</span>

            <div className="skill-bar">
              <span className="skill-per vue">
                <span className="tooltip">50%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <span className="name">TYPESCRIPT</span>

            <div className="skill-bar">
              <span className="skill-per typescript">
                <span className="tooltip">20%</span>
              </span>
            </div>
          </div>
        </div>
          </div>
       
      </main>
      <footer>
        <p>02</p>
      </footer>
    </div>
  );
}

export default AboutMe;
