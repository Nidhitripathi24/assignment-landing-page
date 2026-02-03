import './Services.css';

function Services() {
    const services = [
        {
            icon: '🧠',
            title: 'Cognitive Behavioral Therapy (CBT)',
            description: 'Evidence-based techniques to identify and transform unhelpful thought patterns, reduce anxiety, and build practical coping skills for everyday challenges.'
        },
        {
            icon: '💫',
            title: 'EMDR for Trauma Processing',
            description: 'A specialized approach to help you process and heal from traumatic experiences, reducing their emotional impact and helping you move forward with greater ease.'
        },
        {
            icon: '🌿',
            title: 'Mindfulness-Based Techniques',
            description: 'Learn to cultivate present-moment awareness, reduce stress, and develop a more compassionate relationship with yourself and your experiences.'
        },
        {
            icon: '🤲',
            title: 'Body-Based & Somatic Approaches',
            description: 'Integrate mind and body healing by tuning into physical sensations, releasing stored tension, and reconnecting with your innate wisdom and resilience.'
        }
    ];

    return (
        <section id="services" className="section services-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Therapeutic Approaches</h2>
                    <p className="section-subtitle">
                        I draw from evidence-based modalities tailored to your unique needs and goals
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
