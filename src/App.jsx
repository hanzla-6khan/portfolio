import { Banner } from "./components/Banner/Banner"
import { Navbar } from "./components/Navbar/Navbar"
import { Features } from "./components/Features/Features"
import { Projects } from "./components/projects/Projects"
import { Resume } from "./components/resume/Resume"

import { Contact } from "./components/contact/Contact"
import { Footer } from "./components/footer/Footer"
import { FooterButton } from "./components/footer/FooterButton"
function App() {
  return (
    <div className="w-full h-auto text-lightText bg-bodyColor px-4">
      <Navbar />
      <div className="max-w-screen-2xl mx-auto px-14">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
        <FooterButton />

      </div>
    </div>
  )
}

export default App
