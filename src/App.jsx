import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"

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
    </div>
  )
}

export default App