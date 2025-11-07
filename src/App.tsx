import React, { useState } from 'react';

const steps = [
  {
    title: 'Create your profile',
    description:
      'Share your story, ambitions, and availability so Amisag can learn the kind of energy you want around you.',
    icon: '🪪',
  },
  {
    title: 'Get AI-powered recommendations',
    description:
      'Our graph intelligence studies your preferences and signals from the continent to surface people and opportunities you will love.',
    icon: '✨',
  },
  {
    title: 'Connect, chat, and grow your network',
    description:
      'Accept intros, drop into private chats, or join curated communities that move your mission forward.',
    icon: '🌍',
  },
];

const features = [
  {
    title: 'Smart AI Matchmaking',
    description:
      'Context-aware pairing that learns from every conversation, event RSVP, and feedback loop.',
  },
  {
    title: 'Low-Bandwidth USSD/SMS Access',
    description:
      'Stay in sync even without data bundles using lightweight USSD journeys and SMS nudges.',
  },
  {
    title: 'Private & Anonymous Networking',
    description:
      'Mask your identity until you are ready to reveal it and stay in control of who reaches you.',
  },
  {
    title: 'Community Events & Group Chats',
    description:
      'Vibrant hubs for mentorship circles, hack cohorts, and city-based meetups—all powered by AI curation.',
  },
];

const testimonials = [
  {
    name: 'Chinwe — Product Founder',
    quote:
      '“Amisag introduced me to a mentor in Nairobi who helped us launch across East Africa in weeks.”',
  },
  {
    name: 'Lethabo — Student Ambassador',
    quote:
      '“I ran talent circles from my hostel with nothing but SMS. That is the future of inclusive networking.”',
  },
  {
    name: 'Salim — Community Catalyst',
    quote:
      '“The AI keeps the introductions intentional. Every chat feels like a door being opened.”',
  },
];

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Contact', href: 'mailto:hello@amisag.africa' },
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Terms of Service', href: '#terms' },
];

const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="page-shell">
      <div className="background-aurora" />
      <nav className="top-nav">
        <div className="logo">Amisag</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#how-it-works">How it works</a>
          <a href="#features">Features</a>
          <a href="#stories">Stories</a>
        </div>
        <button className="ghost-button" onClick={() => setModalOpen(true)}>
          Join Now
        </button>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="eyebrow">AI-powered networking for Africa</div>
            <h1>Connect. Grow. Thrive — Without Leaving Home.</h1>
            <p>
              Amisag helps you build real connections through AI-powered matchmaking designed for Africa’s next
              generation. Discover collaborators, mentors, and opportunities without friction.
            </p>
            <div className="cta-group">
              <button className="primary-button" onClick={() => setModalOpen(true)}>
                Join Now
              </button>
              <a className="secondary-button" href="#how-it-works">
                Explore How It Works
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="network-orb">
              <div className="orb-gradient" />
              <div className="node node-a" />
              <div className="node node-b" />
              <div className="node node-c" />
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
            </div>
            <div className="glow-card">
              <span className="card-title">Real-time matches</span>
              <div className="card-row">
                <span className="avatar">AO</span>
                <div>
                  <strong>Amina • Product Ops</strong>
                  <p>“Ready to mentor on inclusive growth.”</p>
                </div>
              </div>
              <div className="card-row">
                <span className="avatar">TM</span>
                <div>
                  <strong>Tobechi • Cloud Architect</strong>
                  <p>“Looking for partners in clean energy.”</p>
                </div>
              </div>
              <div className="card-row">
                <span className="avatar">ZS</span>
                <div>
                  <strong>Zahra • Policy Researcher</strong>
                  <p>“Open to cross-border projects.”</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="section-heading">
            <h2>A networking universe designed around inclusion.</h2>
            <p>
              Amisag pairs advanced intelligence with human warmth. We make it effortless to meet collaborators who
              share your mission, whether you are in Lagos, Kigali, Accra, or online via SMS.
            </p>
          </div>
          <div className="about-grid">
            <div className="about-card">
              <h3>Smoother intros</h3>
              <p>
                Your profile fuels a constantly learning engine that serves introductions tailored to your goals, skills,
                and languages.
              </p>
            </div>
            <div className="about-card">
              <h3>Signals that evolve</h3>
              <p>
                Every accept, decline, or skip becomes a signal, sharpening Amisag’s recommendations across the continent.
              </p>
            </div>
            <div className="about-card">
              <h3>Designed for access</h3>
              <p>
                From smartphones to USSD, our hybrid delivery keeps opportunity within reach regardless of bandwidth.
              </p>
            </div>
            <div className="about-visual">
              <div className="profile-stack">
                <div className="profile-card">
                  <div className="profile-avatar">AK</div>
                  <div className="profile-text">
                    <strong>Adaeze</strong>
                    <span>Climate Finance • Abuja</span>
                  </div>
                </div>
                <div className="profile-card">
                  <div className="profile-avatar">MB</div>
                  <div className="profile-text">
                    <strong>Mwangi</strong>
                    <span>AI Research • Nairobi</span>
                  </div>
                </div>
                <div className="profile-card">
                  <div className="profile-avatar">RS</div>
                  <div className="profile-text">
                    <strong>Rania</strong>
                    <span>Creative Tech • Cairo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="how" id="how-it-works">
          <div className="section-heading">
            <h2>How it works</h2>
            <p>The Amisag journey, designed for speed, intention, and effortless follow-through.</p>
          </div>
          <div className="steps">
            {steps.map((step) => (
              <div className="step-card" key={step.title}>
                <span className="step-icon" aria-hidden="true">
                  {step.icon}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="features" id="features">
          <div className="section-heading">
            <h2>Features that amplify your reach</h2>
            <p>Everything inside Amisag is tuned for ambition, privacy, and authentic relationships.</p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <div className="feature-card" key={feature.title}>
                <div className="feature-glow" />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="stories" id="stories">
          <div className="section-heading">
            <h2>Voices from our founding members</h2>
            <p>Early users share how Amisag is transforming their circles and opening new pathways.</p>
          </div>
          <div className="story-grid">
            {testimonials.map((story) => (
              <figure className="story-card" key={story.name}>
                <blockquote>{story.quote}</blockquote>
                <figcaption>{story.name}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="cta" id="cta">
          <div className="cta-inner">
            <h2>Be Part of the Future of Networking.</h2>
            <p>Request early access or jump in free to experience meaningful AI-powered relationships today.</p>
            <div className="cta-buttons">
              <button className="primary-button" onClick={() => setModalOpen(true)}>
                Get Started Free
              </button>
              <a className="secondary-button" href="mailto:hello@amisag.africa">
                Request Early Access
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-links">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="social-icons">
          <a aria-label="LinkedIn" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            in
          </a>
          <a aria-label="X" href="https://twitter.com" target="_blank" rel="noreferrer">
            x
          </a>
          <a aria-label="Instagram" href="https://www.instagram.com" target="_blank" rel="noreferrer">
            ig
          </a>
        </div>
        <span className="footer-copy">© {new Date().getFullYear()} Amisag. All rights reserved.</span>
      </footer>

      {isModalOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal-card">
            <button className="close-button" onClick={() => setModalOpen(false)} aria-label="Close sign up form">
              ×
            </button>
            <h3>Join the Amisag early wave</h3>
            <p>Tell us how to reach you and we will send a curated onboarding invite.</p>
            <form className="modal-form">
              <label>
                Full name
                <input type="text" placeholder="Kofi Mensah" />
              </label>
              <label>
                Email or phone
                <input type="text" placeholder="you@example.com" />
              </label>
              <label>
                What do you want to unlock?
                <textarea placeholder="Mentorship in renewable energy, co-founders, investors…" rows={3} />
              </label>
              <button type="button" className="primary-button">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
