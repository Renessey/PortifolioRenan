import "./Tela2.css"
import { useInView, motion } from "framer-motion";
import { useRef } from "react";


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
                <h3
                    className="texth3"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                >
                    Desenvolvedor apaixonado por criar{" "}
                    <span className="">experiências digitais</span>
                </h3>
                <p className="">
                    Sou um desenvolvedor full stack com mais de 5 anos de experiência criando
                    aplicações web e mobile modernas. Minha jornada começou com curiosidade
                    e se transformou em paixão por resolver problemas complexos com código elegante.
                </p>
                <p className="">
                    Especializado em React, Node.js, React Native e tecnologias cloud. Sempre
                    buscando aprender novas ferramentas e metodologias para entregar soluções
                    de alta qualidade.
                </p>
            </motion.div>
        </section>
    )
}