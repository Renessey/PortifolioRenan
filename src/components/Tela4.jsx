import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Send,
  MapPin,
  Clock,
  MessageSquare,
} from "lucide-react";
import { toast } from "sonner";
import "./Tela4.css";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contato@exemplo.com",
    href: "mailto:contato@exemplo.com",
    color: "#7c3aed",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Brasil",
    href: "#",
    color: "#06b6d4",
  },
  {
    icon: Clock,
    label: "Disponibilidade",
    value: "Seg–Sex, 9h–18h",
    href: "#",
    color: "#10b981",
  },
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com",
    label: "GitHub",
    color: "#ffffff",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
    color: "#0077b5",
  },
  {
    icon: Twitter,
    href: "https://twitter.com",
    label: "Twitter",
    color: "#1da1f2",
  },
  {
    icon: Mail,
    href: "mailto:contato@exemplo.com",
    label: "Email",
    color: "#7c3aed",
  },
];

function fadeInVariant(delay = 0) {
  return {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  };
}

export default function Tela4() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    toast.success("Mensagem enviada com sucesso! Responderei em breve.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="tela4" className="secao" ref={ref}>
      <div className="conteudo-central">
        {/* Header */}
        <motion.div
          variants={fadeInVariant(0)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="cabecalho"
        > 
          <h2 className="titulo-principal">
            Vamos <span className="gradient-text">Conversar?</span>
          </h2>
          <p className="descricao-cabecalho">
            Tem um projeto em mente ou quer bater um papo sobre tecnologia?
            Estou sempre aberto a novas oportunidades.
          </p>
        </motion.div>

        <div className="grade-contato">
          {/* Left: info */}
          <motion.div
            variants={fadeInVariant(0.1)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="coluna-info"
          >
            {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ x: 4 }}
                className="glass-card glass-card-hover cartao-info"
              >
                <div
                  className="icone-info"
                  style={{ background: `${color}20` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <div>
                  <div className="rotulo-info">{label}</div>
                  <div className="valor-info">{value}</div>
                </div>
              </motion.a>
            ))}

            {/* Social links */}
            <div className="glass-card cartao-redes">
              <h4 className="titulo-redes">Redes Sociais</h4>
              <div className="lista-redes">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    className="glass-card botao-rede"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="glass-card cartao-disponibilidade">
              <div className="linha-disponibilidade">
                <span className="ponto-disponivel animate-pulse" />
                <span className="texto-disponivel">
                  Disponível para projetos
                </span>
              </div>
              <p className="descricao-disponibilidade">
                Atualmente aceitando novos projetos freelance e oportunidades de
                colaboração.
              </p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            variants={fadeInVariant(0.2)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="coluna-formulario"
          >
            <form onSubmit={handleSubmit} className="glass-card formulario">
              <div className="cabecalho-formulario">
                <div className="icone-formulario">
                  <MessageSquare size={18} style={{ color: "#a78bfa" }} />
                </div>
                <h3 className="titulo-formulario">Enviar Mensagem</h3>
              </div>

              <div className="grade-campos">
                <div>
                  <label className="rotulo-campo">Nome</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Seu nome"
                    className="campo-texto"
                  />
                </div>
                <div>
                  <label className="rotulo-campo">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="seu@email.com"
                    className="campo-texto"
                  />
                </div>
              </div>

              <div>
                <label className="rotulo-campo">Assunto</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  placeholder="Sobre o que você quer falar?"
                  className="campo-texto"
                />
              </div>

              <div>
                <label className="rotulo-campo">Mensagem</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Descreva seu projeto ou ideia..."
                  className="campo-texto area-mensagem"
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-gradient botao-enviar"
              >
                {sending ? (
                  <>
                    <div className="spinner-envio" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar Mensagem
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
