import './About.css';

function About() {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2>About Dr. Maya Reynolds</h2>
                        <p className="about-intro">
                            I believe therapy is most effective when it feels like a true partnership—
                            a safe, collaborative space where you can explore your experiences without
                            judgment and discover your own path to healing.
                        </p>

                        <div className="about-details">
                            <h3>My Approach</h3>
                            <p>
                                My therapeutic style is warm, genuine, and grounded in evidence-based practices.
                                I draw from Cognitive Behavioral Therapy (CBT), EMDR, mindfulness techniques,
                                and body-based approaches to create a personalized treatment plan that honors
                                your unique story and goals.
                            </p>

                            <h3>Who I Work With</h3>
                            <p>
                                I specialize in working with adults who are navigating anxiety, trauma,
                                burnout, and perfectionism. Whether you're struggling with overwhelming worry,
                                healing from past experiences, recovering from exhaustion, or breaking free
                                from impossible standards, I'm here to support you.
                            </p>

                            <h3>Credentials & Training</h3>
                            <ul className="credentials-list">
                                <li>Doctor of Psychology (PsyD)</li>
                                <li>Licensed Psychologist in California</li>
                                <li>Certified EMDR Therapist</li>
                                <li>Specialized training in trauma-informed care</li>
                            </ul>
                        </div>

                        <div className="philosophy-box">
                            <p className="philosophy-text">
                                "Healing isn't about becoming someone new—it's about reconnecting with
                                who you truly are beneath the anxiety, pain, and self-doubt. My role is
                                to walk alongside you on that journey."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
