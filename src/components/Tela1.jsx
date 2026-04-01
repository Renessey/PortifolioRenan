import { useState, useEffect } from "react"
import "./Tela1.css"

const roles = [
    "Desenvolvedor Full Stack",
    "Criador de Apps Mobile",
    "Web Developer",
    "Backend Specialist",
];

function TypewriterText({ texts }) {
    const [index, setIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = texts[index];
        let timeout = setTimeout(() => { }, 100);

        if (!deleting && displayed.length < current.length) {
            timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        } else if (!deleting && displayed.length === current.length) {
            timeout = setTimeout(() => setDeleting(true), 2500);
        } else if (deleting && displayed.length > 0) {
            timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        } else if (deleting && displayed.length === 0) {
            setDeleting(false);
            setIndex((i) => (i + 1) % texts.length);
        }

        return () => clearTimeout(timeout);
    }, [displayed, deleting, index, texts]);

    return (
        <span className="gradient-text">
            {displayed}
            <span className="hero-cursor">|</span>
        </span>
    );
}

const Github = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.2-3.37-1.2-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.51.337 1.9-1.3 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.58 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .26.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" fill="currentColor" />
    </svg>
)

const Linkedin = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7 0h4.8v2.2h.1c.67-1.27 2.3-2.6 4.74-2.6C22.4 7.6 24 10.1 24 14.2V24h-5v-8c0-1.9-.03-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24H7V8z" fill="currentColor" />
    </svg>
)

const Mail = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5L4 8V6l8 5 8-5v2z" fill="currentColor" />
    </svg>
)

const Download = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M5 20h14v-2H5v2zm7-18L5.33 9h3.84v6h5.66V9h3.84L12 2z" fill="currentColor" />
    </svg>
)

const socialLinks = [
    { icon: Github, href: "https://github.com/Renessey", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/renan-monteiro-052b623a6/", label: "LinkedIn" },
    { icon: Mail, href: "https://mail.google.com/mail/u/0/?hl=pt_BR#inbox?compose=new", label: "Email" },
];


export default function Tela1() {
    return (
        <section id="tela1" className="secao">
            <div className="hero-content">
                <div className="projects-orb" />
                <h1 className="hero-title">
                    Olá, eu sou<br />
                    <span className="highlight-cyan">Renan</span>
                </h1>
                <TypewriterText texts={roles} />
                <p className="hero-subtitle">Transformando ideias em experiências digitais imersivas</p>

                {/* CTA Buttons */}
                <div className="hero-buttons">
                    <button
                        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                        className="btn-gradient"
                    >
                        Ver Projetos
                    </button>
                    <button className="card-glass">
                        <Download size={18} />
                        Baixar CV
                    </button>
                </div>

                {/* Social links */}
                <div className="hero-social">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-social-link glass-card"
                            aria-label={label}
                        >
                            <Icon size={20} />
                        </a>
                    ))}
                </div>
            </div>
                    {/* Animated skill cards */}
            <div className="cards-container">
                <div className="card card-cyan" style={{ "--delay": "1s" }}>
                    <div className="card-label">React</div>
                </div>
                <div className="card card-pink" style={{ "--delay": "2s" }}>
                    <div className="card-label">Node.js</div>
                </div>
                <div className="card card-yellow" style={{ "--delay": "3s" }}>
                    <div className="card-label">Design</div>
                </div>
                <div className="card card-purple" style={{ "--delay": "4s" }}>
                    <div className="card-label">Web3</div>
                </div>
            </div>
        </section>
    )
}