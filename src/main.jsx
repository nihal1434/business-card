import { createRoot } from "react-dom/client";
const root = createRoot(document.querySelector("#root"))
root.render(
  <>
    <Info />
    <main>
      <About />
      <Interests />
    </main>
    <footer>
      <Footer />
    </footer>
  </>
)
function Info() {
  return (
    <>
    <header>
      <img src="/images/pro.jpg" />
      <div className="information">
        <h1>Mohammad Nihal</h1>
        <p id="job">Frontend Developer</p>
        <p id="email">nihalonly772@gmail.com</p>
        <div className="btn">
          <button id="ebtn"><i className="fa-solid fa-envelope icon"></i> Email</button>
          <button id="libtn"> <i className="fa-brands fa-linkedin icon"></i> LinkedIn</button>
        </div>
      </div>
    </header>
    </>
  )
}

function About() {
  return (
    <>
      <h2>About</h2>
      <p>I am a 3rd year CSE student at NIT Srinagar with a focus on frontend development. I enjoy building clean, user-friendly interfaces and also explore Java, Python, and DSA to strengthen my problem-solving skills. Always eager to learn, I aim to create projects that combine simplicity and impact</p>
    </>
  )
}
function Interests() {
  return (
    <>
      <h2 id="interests">Interests</h2>
      <p>Problem solver. Tech enthusiast. UI/UX learner. Reader. Coffee lover. Curious thinker.</p>
    </>
  )
}

function Footer() {
  return (
    <><div id="social-icons">
    <a href="https://twitter.com" target="_blank" rel="noreferrer">
      <i className="fa-brands fa-twitter sicon"></i>
    </a>
    <a href="https://facebook.com" target="_blank" rel="noreferrer">
      <i className="fa-brands fa-square-facebook sicon"></i>
    </a>
    <a href="https://instagram.com" target="_blank" rel="noreferrer">
      <i className="fa-brands fa-square-instagram sicon"></i>
    </a>
    <a href="https://github.com/nihal1434" target="_blank" rel="noreferrer">
      <i className="fa-brands fa-square-github sicon"></i>
    </a>
  </div>
    </>
  )
}

