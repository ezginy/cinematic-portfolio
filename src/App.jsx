import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="app">
      <Navbar/>

      <Hero
        title="Ezgi's Cinematic Portfolio"
        subtitle="software development student"
        description="learning react and building interactive web experiences"
      />

      <Projects/>
      <Contact/>
    </div>
  )
}

export default App