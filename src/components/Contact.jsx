import './Contact.css';

function Contact() {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="contact-content">
                    <div className="contact-header text-center">
                        <h2>Ready to Begin Your Journey?</h2>
                        <p className="contact-subtitle">
                            Taking the first step toward therapy can feel daunting, but you don't have
                            to do it alone. I'm here to answer your questions and help you get started.
                        </p>
                    </div>

                    <div className="contact-grid">
                        <div className="contact-info card">
                            <h3>Get In Touch</h3>
                            <div className="info-item">
                                <span className="info-icon">📍</span>
                                <div>
                                    <strong>Location</strong>
                                    <p>Santa Monica, California</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <span className="info-icon">💻</span>
                                <div>
                                    <strong>Service Options</strong>
                                    <p>In-person sessions in Santa Monica</p>
                                    <p>Telehealth throughout California</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <span className="info-icon">👥</span>
                                <div>
                                    <strong>Who I See</strong>
                                    <p>Adults (18+)</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <span className="info-icon">📅</span>
                                <div>
                                    <strong>Availability</strong>
                                    <p>Currently accepting new clients</p>
                                    <p>Flexible scheduling options available</p>
                                </div>
                            </div>
                        </div>

                        <div className="cta-box card-glass">
                            <h3>Schedule Your Free Consultation</h3>
                            <p>
                                I offer a complimentary 15-minute phone consultation to discuss your
                                needs, answer questions about my approach, and determine if we're a
                                good fit to work together.
                            </p>

                            <div className="cta-buttons">
                                <a href="tel:+1234567890" className="btn btn-primary">
                                    📞 Call to Schedule
                                </a>
                                <a href="mailto:dr.reynolds@example.com" className="btn btn-secondary">
                                    ✉️ Send an Email
                                </a>
                            </div>

                            <p className="insurance-note">
                                <small>
                                    <strong>Insurance & Fees:</strong> I accept most major insurance plans
                                    and also offer a limited number of sliding scale spots for those in need.
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
