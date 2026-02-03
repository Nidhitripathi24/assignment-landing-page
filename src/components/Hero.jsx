import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-background"></div>
            <div className="container hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">
                        Compassionate Therapy for Anxiety, Trauma & Burnout in Santa Monica
                    </h1>
                    <p className="hero-subtitle">
                        You don't have to navigate life's challenges alone. I provide a warm,
                        collaborative space where adults can heal from anxiety, trauma, burnout,
                        and perfectionism—and rediscover peace and resilience.
                    </p>
                    <div className="hero-cta">
                        <a href="#contact" className="btn btn-primary">Schedule a Consultation</a>
                        <a href="#about" className="btn btn-secondary">Learn More About My Approach</a>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="image-wrapper">
                        <img
                            src="/therapist-headshot.png"
                            alt="Dr. Maya Reynolds, PsyD - Licensed Therapist in Santa Monica"
                            className="therapist-photo"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
