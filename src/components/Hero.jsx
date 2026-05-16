import './Hero.css'

// Main hero section
function Hero() {
    return (
        <section className="hero">
            <div className="hero-container">

                <p className="hero-subtitle"> 
                    software development student
                </p>

                <h1 className="hero-title">
                    Ezgi's Cinematic Portfolio
                </h1>

                <p className="hero-description">
                    learning react and building interactive web experiences
                </p>

                <button className="hero-button">
                    explore project
                </button>
                
            </div>
        </section>
    )
}

export default Hero