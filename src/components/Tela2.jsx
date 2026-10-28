import "./Tela2.css"
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { MapPin, Globe, Zap, Code, Award, Sparkles } from "lucide-react";

const infoItems = [
    { icon: MapPin, text: "Rio de Janeiro, Brasil" },
    { icon: Globe, text: "Remoto ou Híbrido" },
    { icon: Code, text: "Clean Code & Boas Práticas" },
    { icon: Zap, text: "Foco em Performance & UX" }
];

const stats = [
    { value: "2+", label: "Anos de Experiência", icon: Award },
    { value: "10+", label: "Projetos Entregues", icon: Zap },
    { value: "15+", label: "Tecnologias Dominadas", icon: Code },
    { value: "100%", label: "Compromisso com Entrega", icon: Sparkles },
];

const fadeInVariant = (delay) => ({
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: delay
        }
    }
});

export default function Tela2() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="tela2" className="secao sobre-secao" ref={ref}>
            <div className="sobre-container">
                {/* Header da Seção */}
                <motion.div
                    variants={fadeInVariant(0.1)}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="sobre-header"
                >
                    <span className="section-badge">01 // SOBRE MIM</span>
                    <h2 className="sobre-titulo">
                        Construindo soluções robustas <br />
                        <span className="sobre-titulo-gradient">do design ao código</span>
                    </h2>
                </motion.div>

                {/* Texto e narrativa */}
                <motion.div
                    variants={fadeInVariant(0.2)}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="sobre-bio-card glass-card"
                >
                    <h3 className="sobre-subtitulo">
                        Desenvolvedor apaixonado por arquitetar <span>produtos digitais escaláveis</span>
                    </h3>

                    <p className="sobre-descricao">
                        Sou desenvolvedor full stack focado em criar aplicações web e mobile modernas, intuitivas e de alto desempenho. 
                        Com sólida base em ecossistemas como <strong>React, Node.js, React Native e TypeScript</strong>, busco constantemente unir arquitetura limpa a experiências visuais refinadas.
                    </p>
                    <p className="sobre-descricao">
                        Acredito que excelência técnica anda lado a lado com comunicação transparente e foco no impacto real para o usuário e para o negócio.
                    </p>

                    {/* Destaques rápidos */}
                    <div className="info-icons">
                        {infoItems.map(({ icon: Icon, text }) => (
                            <div key={text} className="icon-item">
                                <Icon size={16} className="item-icon" />
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Stats grid */}
                <motion.div
                    variants={fadeInVariant(0.35)}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="stats-grid"
                >
                    {stats.map(({ value, label, icon: Icon }) => (
                        <div key={label} className="stat-item glass-card">
                            <div className="stat-top">
                                <div className="stat-icon-box">
                                    <Icon size={18} />
                                </div>
                                <span className="stat-number">{value}</span>
                            </div>
                            <p className="stat-label">{label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}