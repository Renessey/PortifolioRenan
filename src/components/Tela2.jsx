import "./Tela2.css"
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Coffee, Zap } from "lucide-react";

const infoItems = [
    { icon: MapPin, text: "Rio de Janeiro" },
    { icon: Calendar, text: "Disponível para trabalhos remotos" },
    { icon: Coffee, text: "Café & Chá" },
    { icon: Zap, text: "Rápido e eficiente" }
];

const stats = [
    { value: "2+", label: "Anos de Experiência", icon: Calendar },
    { value: "10+", label: "Projetos Entregues", icon: Zap },
    { value: "5+", label: "Certificações", icon: Coffee },
    { value: "2+", label: "Apps Publicados", icon: MapPin },
];

const fadeInVariant = (delay) => ({
    hidden: {
        opacity: 0,
        y: 40
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
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="tela2" className="secao" ref={ref}>
            <h1>Sobre mim</h1>

            <motion.div
                variants={fadeInVariant(0.2)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                <h3 className="texth3">
                    Desenvolvedor apaixonado por criar
                    <span> experiências digitais</span>
                </h3>

                <p>
                    Sou um desenvolvedor full stack com mais de 5 anos de experiência criando
                    aplicações web e mobile modernas. Minha jornada começou com curiosidade
                    e se transformou em paixão por resolver problemas complexos com código elegante.
                    <br />
                    <br />
                    Especializado em React, Node.js, React Native e tecnologias cloud. Sempre
                    buscando aprender novas ferramentas e metodologias para entregar soluções
                    de alta qualidade.
                </p>
            </motion.div>

            <motion.div
                variants={fadeInVariant(0.3)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="info-icons"
            >
                {infoItems.map(({ icon: Icon, text }) => (
                    <div key={text} className="icon-item">
                        <Icon size={14} className="icon" />
                        <span>{text}</span>
                    </div>
                ))}
            </motion.div>

            {/* Stats grid */}
            <motion.div
                variants={fadeInVariant(0.4)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="stats-grid"
            >
                {stats.map(({ value, label, icon: Icon }) => (
                    <div
                        key={label}
                        className="stat-item"
                    >
                        <div className="container-icon-text">
                            <div className="icon-container">
                                <Icon size={16} className="icon" />
                            </div>
                            <span
                                className="text-span"
                                style={{ fontFamily: "'Sora', sans-serif" }}
                            >
                                {value}
                            </span>
                        </div>
                        <p className="text-label">{label}</p>
                    </div>
                ))}
            </motion.div>
        </section>
    )
}