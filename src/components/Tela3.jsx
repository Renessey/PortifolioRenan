import "./Tela3.css";
import { useRef, useState } from "react";
import { color, motion, inView, } from "framer-motion";
import { useInView } from "framer-motion";
import {
  ExternalLink,
  Github,
  Smartphone,
  Globe,
  Star,
  Music,
  LayoutDashboard,
} from "lucide-react";

import reactLogo from "./Emojis/react.png";
import Typescript from "./Emojis/typescript.png";
import Js from "./Emojis/js.png";
import Node from "./Emojis/node.png";
import Python from "./Emojis/python.webp";
import Native from "./Emojis/native.svg";
import Sql from "./Emojis/sql.png";
import Mongo from "./Emojis/mongo.png";


const PROJECTS_BG =
  "https://private-us-east-1.manuscdn.com/sessionFile/IQXsUKTSYPEsRrWnBC1Hjr/sandbox/SrEQZVWoZD3NvruoQFQGnL-img-3_1772146266000_na1fn_cHJvamVjdHMtYmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSVFYc1VLVFNZUEVzUnJXbkJDMUhqci9zYW5kYm94L1NyRVFaVldvWkQzTnZydW9RRlFHbkwtaW1nLTNfMTc3MjE0NjI2NjAwMF9uYTFmbl9jSEp2YW1WamRITXRZbWMucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=eAon31OEmsmazX6BxyhlTKwxtm0RKX9N~biWGM4yaFUN8pK1XRIIS~7bblQn--qG2z2uUl98YeRJApX-sOHi-qp~8dEczw5v31SQELCkLaBJNnQbmNymGLJ1utscy9OmSkhh6o-iLCQqG-A2ve7UGzm8xZkh1iKnYSRknM2QuO~HryvEOfG2f-8R2fwP-UlTttZ1AdAIgrWdMuzsrsfO~mCRoVd5L1uYU9YZjlsdR-IYO4rFG2FYdv7iRHCIfa87gneGlh8VkLDBzuRutZfx0N~~2Bs9CJUJGWfIrvPkCPBEzSwW3fAjxSAmkA1-VgvBrRySv70EWEnOyLgyFOEpBQ__";

const projects = [
  {
    title: "E-commerce Platform",
    colorTitle: "#fff",
    description:
      "Plataforma completa de e-commerce com painel admin, pagamentos e gestão de estoque em tempo real.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    type: "web",
    stars: 128,
    color: "#333",
    color1: "#ffffff",
    Iconcolor: "#fff",
    starsColor: "yellow",
    icon: Globe,
    demo: "#",
    repo: "#",
    featured: true,
    gradient: "project-blue",
  },
  {
    title: "Finance Tracker App",
    colorTitle: "#fff",
    description:
      "Aplicativo mobile para controle financeiro pessoal com gráficos interativos e metas de economia.",
    tags: ["React Native", "Expo", "Firebase", "Charts"],
    type: "mobile",
    stars: 89,
    color: "#06b6d4",
    color1: "#ffffff",
    Iconcolor: "#fff",
    starsColor: "yellow",
    icon: Smartphone,
    demo: "#",
    repo: "#",
    featured: true,
    gradient: "project-cyan",
  },
  {
    title: "Task Management SaaS",
    description:
      "SaaS de gerenciamento de tarefas com colaboração em tempo real, kanban e relatórios automáticos.",
    tags: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    type: "fullstack",
    stars: 215,
    color: "#333",
    color1: "#333",
    Iconcolor: "#333",
    starsColor: "#333",
    icon: Globe,
    demo: "#",
    repo: "#",
    featured: true,
    gradient: "project-white",
  },
  {
    title: "Social Media Dashboard",
    colorTitle: "#fff",
    description:
      "Dashboard analítico para redes sociais com integração de múltiplas plataformas e relatórios.",
    tags: ["React", "D3.js", "REST APIs", "Tailwind"],
    type: "web",
    stars: 67,
    color: "#333",
    color1: "#ffffff",
    Iconcolor: "#fff",
    starsColor: "yellow",
    icon: Globe,
    demo: "#",
    repo: "#",
    featured: false,
    gradient: "project-blue",
  },
  {
    title: "Delivery App",
    colorTitle: "#fff",
    description:
      "App de delivery com rastreamento em tempo real, sistema de avaliações e integração com mapas.",
    tags: ["React Native", "Node.js", "MongoDB", "Maps"],
    type: "mobile",
    stars: 143,
    color: "#06b6d4",
    color1: "#ffffff",
    Iconcolor: "#fff",
    starsColor: "yellow",
    icon: Smartphone,
    demo: "#",
    repo: "#",
    featured: false,
    gradient: "project-cyan",
  },
  {
    title: "Blog CMS",
    description:
      "Sistema de gerenciamento de conteúdo headless com editor rich text e SEO automático.",
    tags: ["Next.js", "Sanity", "TypeScript", "Vercel"],
    type: "fullstack",
    stars: 52,
    color: "#333",
    color1: "#333",
    Iconcolor: "#333",
    starsColor: "#333",
    icon: Globe,
    demo: "#",
    repo: "#",
    featured: false,
    gradient: "project-white",
  },
  {
    title: "Dashboard 1",
    colorTitle: "#fff",
    description: "lorem iosum",
    tags: ["Next.js", "Sanity", "TypeScript", "Vercel"],
    type: "Dashboard",
    stars: 520,
    color: "#333",
    color1: "#ffffff",
    Iconcolor: "#fff",
    starsColor: "yellow",
    icon: LayoutDashboard,
    demo: "#",
    repo: "#",
    featured: false,
    gradient: "project-red",
  },
  {
    title: "Music One",
    description: "lorem iosum",
    tags: ["Next.js", "Sanity", "TypeScript", "Vercel"],
    type: "Músicas",
    stars: 520,
    color: "#333",
    color1: "#ffffff",
    colordescription: "#fff",
    Iconcolor: "#fff",
    starsColor: "#333",
    icon: Music,
    demo: "#",
    repo: "#",
    featured: true,
    gradient: "project-amber",
  },
];

const filters = [
  { label: "Todos", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Dashboard", value: "Dashboard" },
  { label: "Músicas", value: "Músicas" },
];

const techStack = [
  { name: "React", icon: reactLogo },
  { name: "TypeScript", icon: Typescript },
  { name: "Javascript", icon: Js },
  { name: "Node.js", icon: Node },
  { name: "Python", icon: Python },
  { name: "React Native", icon: Native },
  { name: "MySQL", icon: Sql },
  { name: "MongoDB", icon: Mongo },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Git", icon: "🔀" },
  { name: "Figma", icon: "🎨" },
  { name: "Firebase", icon: "🔥" },
  { name: "GraphQL", icon: "◈" },
  { name: "Redis", icon: "🔴" },
  { name: "Tailwind", icon: "🌊" },
];

function fadeInVariant(delay = 0) {
  return {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  };
}

export default function Tela3() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = projects.filter(
    (p) => activeFilter === "all" || p.type === activeFilter,
  );

  return (
    <section id="tela3" className="projects-section" ref={ref}>
      {/* Background */}
      <div
        className="projects-bg-image"
        style={{ backgroundImage: `url(${PROJECTS_BG})` }}
      />
      <div className="projects-bg-gradient" />
      <div className="projects-orb" />

      <div className="projects-container">
        {/* Header */}
        <motion.div
          variants={fadeInVariant(0)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="projects-header"
        >
          <span className="projects-subtitle">// PROJETOS</span>

          <h2 className="projects-title">
            Meus <span>Projetos</span>
          </h2>
          <p className="projects-description">
            Uma seleção dos projetos que desenvolvi, desde aplicações web até
            apps mobile.
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          variants={fadeInVariant(0.1)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="projects-filters"
        >
          {filters.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              className={`projects-filter-btn ${activeFilter === value ? "active" : ""}`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* cards */}
        <div className="projects-grid">
          {filtered.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className={`project-card ${project.gradient}`}
              >
                {/* Featured badge */}
                {project.featured && (
                  <div className="project-badge">
                    <Star size={10} />
                    <span>Destaque</span>
                  </div>
                )}

                {/* Icon */}
                <div className="project-icon">
                  <Icon size={22} style={{ color: project.Iconcolor }} />
                </div>

                {/* Descrição */}
                <h3
                  style={{ color: project.colorTitle }}
                  className="project-title"
                >
                  {project.title}
                </h3>
                <p
                  style={{ color: project.color1 }}
                  className="project-description"
                >
                  {project.description}
                </p>
                {/* Tags */}
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="project-tag"
                      style={{
                        background: `${project.color}20`,
                        color: project.color1,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="project-footer">
                  <div
                    className="project-stars"
                    style={{ color: `${project.starsColor}` }}
                  >
                    <Star size={14} />
                    <span>{project.stars}</span>
                  </div>
                  <div className="project-links">
                    <motion.a
                      href={project.repo}
                      whileHover={{ scale: 1.1 }}
                      className="project-link github"
                    >
                      <Github size={15} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.1 }}
                      className="project-link demo"
                      style={{ background: project.color }}
                    >
                      <ExternalLink size={15} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View more */}
        <motion.div
          variants={fadeInVariant(0.5)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="projects-cta"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="projects-cta-btn"
          >
            <Github size={18} />
            Ver todos no GitHub
          </motion.a>
        </motion.div>

        <motion.div
          variants={fadeInVariant(0.3)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="glass-card p-6 rounded-2xl"
        >
          <h3
            className="techStack"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Tech Stack Completo
          </h3>
          <div className="gridStack">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.04 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="motionTech"
              >
                <img src={tech.icon} alt={tech.name} width={30} />
                <span
                  className="nameTech"
                  style={{ fontFamily: "'Fira Code', monospace" }}
                >
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
