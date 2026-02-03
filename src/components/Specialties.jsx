import './Specialties.css';

function Specialties() {
    const specialties = [
        {
            icon: '😰',
            title: 'Anxiety',
            description: 'Find relief from persistent worry, panic, social anxiety, and the physical symptoms that come with chronic stress.'
        },
        {
            icon: '💔',
            title: 'Trauma',
            description: 'Heal from past experiences that continue to affect your present, whether recent events or childhood wounds.'
        },
        {
            icon: '🔥',
            title: 'Burnout',
            description: 'Recover from emotional exhaustion, restore your energy, and rediscover meaning in your work and life.'
        },
        {
            icon: '⭐',
            title: 'Perfectionism',
            description: 'Break free from impossible standards, self-criticism, and the fear of not being "good enough."'
        }
    ];

    return (
        <section id="specialties" className="section specialties-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Areas of Focus</h2>
                    <p className="section-subtitle">
                        I specialize in helping adults navigate these common yet challenging experiences
                    </p>
                </div>

                <div className="specialties-grid">
                    {specialties.map((specialty, index) => (
                        <div key={index} className="specialty-card card-glass">
                            <div className="specialty-icon">{specialty.icon}</div>
                            <h3 className="specialty-title">{specialty.title}</h3>
                            <p className="specialty-description">{specialty.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Specialties;
