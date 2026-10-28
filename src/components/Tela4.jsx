import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Clock,
  MessageSquare,
  ArrowUp,
} from "lucide-react";
import { toast } from "sonner";
import "./Tela4.css";

// ⚠️ Substitua pelo seu número com DDD (formato DDI + DDD + Número)
// Exemplo: 5521999999999 (Brasil = 55, DDD Rio = 21)
const WHATSAPP_NUMBER = "5521993362569";

const WhatsAppIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.33 7.34 9.1 7.42 8.91 7.64C8.71 7.85 8.16 8.37 8.16 9.43C8.16 10.49 8.93 11.51 9.04 11.66C9.14 11.81 10.55 13.98 12.71 14.91C13.22 15.13 13.62 15.26 13.93 15.36C14.44 15.52 14.91 15.5 15.28 15.44C15.69 15.38 16.54 14.93 16.71 14.44C16.89 13.95 16.89 13.54 16.83 13.44C16.78 13.35 16.63 13.3 16.41 13.19C16.18 13.08 15.07 12.53 14.86 12.46C14.66 12.38 14.5 12.34 14.36 12.56C14.21 12.79 13.79 13.28 13.66 13.43C13.53 13.58 13.41 13.6 13.18 13.49C12.96 13.38 12.23 13.14 11.37 12.38C10.7 11.78 10.25 11.04 10.12 10.82C10 10.6 10.11 10.48 10.22 10.37C10.32 10.27 10.44 10.11 10.56 9.98C10.67 9.84 10.71 9.74 10.78 9.59C10.86 9.44 10.82 9.32 10.76 9.2C10.71 9.09 10.26 7.98 10.07 7.54C9.89 7.1 9.7 7.17 9.53 7.34Z" />
  </svg>
);

const contactInfo = [
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "Conversar no WhatsApp",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá Renan! Vi seu portfólio e gostaria de conversar.")}`,
    color: "#25d366",
    isExternal: true,
  },
  {
    icon: Mail,
    label: "Email Direto",
    value: "renanneteller20@gmail.com",
    href: "mailto:renanneteller20@gmail.com",
    color: "#38bdf8",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Rio de Janeiro, Brasil",
    href: "#",
    color: "#818cf8",
  },
  {
    icon: Clock,
    label: "Disponibilidade",
    value: "Contratos Remoto / PJ / CLT",
    href: "#",
    color: "#10b981",
  },
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Renessey?tab=repositories",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/renan-monteiro-052b623a6/",
    label: "LinkedIn",
  },
  {
    icon: WhatsAppIcon,
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá Renan! Vi seu portfólio e gostaria de falar com você.")}`,
    label: "WhatsApp",
  },
  {
    icon: Mail,
    href: "mailto:renanneteller20@gmail.com",
    label: "Email",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Por favor, preencha os campos obrigatórios (Nome, E-mail e Mensagem).");
      return;
    }
    setSending(true);

    const mensagemFormatada = 
      `👋 Olá Renan!\n\n` +
      `*Nome:* ${form.name}\n` +
      `*E-mail:* ${form.email}\n` +
      `*Assunto:* ${form.subject || "Contato pelo Portfólio"}\n\n` +
      `*Mensagem:*\n${form.message}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagemFormatada)}`;

    // Abre o WhatsApp com a mensagem pré-carregada
    window.open(url, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setSending(false);
      toast.success("Pronto! Abrindo WhatsApp com a sua mensagem.");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 600);
  };


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="tela4" className="secao contato-secao" ref={ref}>
      <div className="conteudo-central">
        {/* Header */}
        <motion.div
          variants={fadeInVariant(0)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="cabecalho"
        >
          <span className="section-badge">03 // CONTATO</span>
          <h2 className="titulo-principal">
            Vamos <span className="gradient-text">Conversar?</span>
          </h2>
          <p className="descricao-cabecalho">
            Tem um projeto em mente, busca um desenvolvedor para sua equipe ou quer trocar ideias sobre tecnologia?
            Envie uma mensagem abaixo ou entre em contato direto.
          </p>
        </motion.div>

        <div className="grade-contato">
          {/* Coluna Esquerda: Informações & Social */}
          <motion.div
            variants={fadeInVariant(0.15)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="coluna-info"
          >
            {/* Lista de Contatos */}
            <div className="cartoes-info-lista">
              {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  className="glass-card cartao-info"
                >
                  <div
                    className="icone-info"
                    style={{ background: `${color}18`, color }}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="rotulo-info">{label}</div>
                    <div className="valor-info">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Redes Sociais */}
            <div className="glass-card cartao-redes">
              <h4 className="titulo-redes">Conecte-se comigo</h4>
              <div className="lista-redes">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="botao-rede"
                    aria-label={label}
                    title={label}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Disponibilidade */}
            <div className="glass-card cartao-disponibilidade">
              <div className="linha-disponibilidade">
                <span className="ponto-disponivel" />
                <span className="texto-disponivel">
                  Status: Disponível
                </span>
              </div>
              <p className="descricao-disponibilidade">
                Aberto a posições PJ/CLT e projetos freelance com foco em código limpo, inovação e entrega de alto valor.
              </p>
            </div>
          </motion.div>

          {/* Coluna Direita: Formulário Completo */}
          <motion.div
            variants={fadeInVariant(0.25)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="coluna-formulario"
          >
            <form onSubmit={handleSubmit} className="glass-card formulario">
              <div className="cabecalho-formulario">
                <div className="icone-formulario">
                  <MessageSquare size={20} color="#38bdf8" />
                </div>
                <div>
                  <h3 className="titulo-formulario">Mande uma mensagem</h3>
                  <p className="subtitulo-formulario">Respondo geralmente em menos de 24 horas</p>
                </div>
              </div>

              <div className="grade-campos">
                <div className="campo-grupo">
                  <label className="rotulo-campo" htmlFor="nome">
                    Seu Nome *
                  </label>
                  <input
                    id="nome"
                    type="text"
                    required
                    placeholder="Ex: Ana Silva"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="campo-texto"
                  />
                </div>

                <div className="campo-grupo">
                  <label className="rotulo-campo" htmlFor="email">
                    Seu E-mail *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Ex: ana@exemplo.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="campo-texto"
                  />
                </div>
              </div>

              <div className="campo-grupo">
                <label className="rotulo-campo" htmlFor="assunto">
                  Assunto
                </label>
                <input
                  id="assunto"
                  type="text"
                  placeholder="Ex: Oportunidade de Projeto Web"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="campo-texto"
                />
              </div>

              <div className="campo-grupo">
                <label className="rotulo-campo" htmlFor="mensagem">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  rows={4}
                  required
                  placeholder="Conte um pouco sobre sua ideia, projeto ou proposta..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="campo-texto area-mensagem"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="btn-gradient botao-enviar botao-whatsapp"
              >
                {sending ? (
                  <>
                    <span className="spinner-envio" />
                    Abrindo WhatsApp...
                  </>
                ) : (
                  <>
                    <WhatsAppIcon size={18} />
                    Enviar Mensagem via WhatsApp
                  </>
                )}
              </button>
              <p className="aviso-whatsapp">
                🔒 Envio 100% direto: sua mensagem é formatada e aberta no seu WhatsApp sem necessidade de cadastros ou backend.
              </p>
            </form>
          </motion.div>

        </div>

        {/* Rodapé Elegante */}
        <footer className="rodape">
          <div className="rodape-conteudo">
            <div className="rodape-copy">
              © {new Date().getFullYear()} <strong>Renan Monteiro</strong>. Todos os direitos reservados.
            </div>
            <div className="rodape-sub">
              Desenvolvido com React, Vite & Dark Mode Profissional
            </div>
            <button
              onClick={scrollToTop}
              className="botao-topo"
              aria-label="Voltar ao topo"
              title="Voltar ao topo"
            >
              <ArrowUp size={16} />
              <span>Topo</span>
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}

