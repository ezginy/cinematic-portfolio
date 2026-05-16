import './Hero.css'

// Main hero section
function Hero(props) {
    return (
        <section className="hero">
            <div className="hero-container">

                <p className="hero-subtitle"> 
                    {props.subtitle}
                </p>

                <h1 className="hero-title">
                    {props.title}
                </h1>

                <p className="hero-description">
                    {props.description}
                </p>

                <button className="hero-button">
                    explore project
                </button>

            </div>
        </section>
    )
}

export default Hero