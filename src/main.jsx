import { createRoot } from "react-dom/client";
const root = createRoot(document.querySelector("#root"))
root.render(
  <>
    <Info />
    <main>
      <About />
      <Interests />
    </main>
  </>
)
function Info() {
  return (
    <>
      <img src="images/profilepic.jpg" width="317px" />
      <div className="information">
        <h1>Mohammad Nihal</h1>
        <p>Frontend Developer</p>
        <p>nihalonly772@gmail.com</p>
        <div className="btn">
          <button>Email</button>
          <button>LinkedIn</button>
        </div>
      </div>
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
      <h2>Interests</h2>
      <p>Problem solver. Tech enthusiast. UI/UX learner. Reader. Coffee lover. Curious thinker.</p>
    </>
  )
}