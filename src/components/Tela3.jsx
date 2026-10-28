import "./Tela3.css";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import {
  Download,
  ExternalLink,
  Github,
  Smartphone,
  Globe,
  Star,
  Music,
  LayoutDashboard,
  ShieldCheck,
} from "lucide-react";




import projectsJson from "../data/projects.json";


import reactLogo from "./Emojis/react.png";
import Typescript from "./Emojis/typescript.png";
import Js from "./Emojis/js.png";
import Node from "./Emojis/node.png";
import Python from "./Emojis/python.webp";
import Native from "./Emojis/native.svg";
import Sql from "./Emojis/sql.png";
import Mongo from "./Emojis/mongo.png";
import Docker from "./Emojis/docker.webp";
import Cloud from "./Emojis/cloud.png";
import Git from "./Emojis/git.png";
import Figma from "./Emojis/figma.png";
import Kafka from "./Emojis/kafka.png";
import Hub from "./Emojis/github.png";
import Lmms from "./Emojis/lmms.png";
import Excel from "./Emojis/excel.png";


const PROJECTS_BG =
  "https://private-us-east-1.manuscdn.com/sessionFile/IQXsUKTSYPEsRrWnBC1Hjr/sandbox/SrEQZVWoZD3NvruoQFQGnL-img-3_1772146266000_na1fn_cHJvamVjdHMtYmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSVFYc1VLVFNZUEVzUnJXbkJDMUhqci9zYW5kYm94L1NyRVFaVldvWkQzTnZydW9RRlFHbkwtaW1nLTNfMTc3MjE0NjI2NjAwMF9uYTFmbl9jSEp2YW1WamRITXRZbWMucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=eAon31OEmsmazX6BxyhlTKwxtm0RKX9N~biWGM4yaFUN8pK1XRIIS~7bblQn--qG2z2uUl98YeRJApX-sOHi-qp~8dEczw5v31SQELCkLaBJNnQbmNymGLJ1utscy9OmSkhh6o-iLCQqG-A2ve7UGzm8xZkh1iKnYSRknM2QuO~HryvEOfG2f-8R2fwP-UlTttZ1AdAIgrWdMuzsrsfO~mCRoVd5L1uYU9YZjlsdR-IYO4rFG2FYdv7iRHCIfa87gneGlh8VkLDBzuRutZfx0N~~2Bs9CJUJGWfIrvPkCPBEzSwW3fAjxSAmkA1-VgvBrRySv70EWEnOyLgyFOEpBQ__";

const iconMap = {
  Globe,
  Smartphone,
  Music,
  LayoutDashboard,
};

const projects = projectsJson.map((p) => ({
  ...p,
  icon: iconMap[p.iconKey] ?? Globe,
}));


const filters = [
  { label: "Todos", value: "all" },
  { label: "Web", value: "web" },
  { label: "App android", value: "mobile" },
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
  { name: "Docker", icon: Docker },
  { name: "Google Cloud", icon: Cloud },
  { name: "Git", icon: Git },
  { name: "Figma", icon: Figma },
  { name: "Kafka", icon: Kafka },
  { name: "Github", icon: Hub },
  { name: "Lmms", icon: Lmms },
  { name: "Microsoft Excel", icon: Excel },
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
          <span className="section-badge">02 // PROJETOS</span>

          <h2 className="projects-title">
            Meus <span>Projetos</span>
          </h2>
          <p className="projects-description">
            Uma seleção de aplicações e sistemas desenvolvidos com foco em performance, experiência e usabilidade.
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

        {/* Aviso Mediafire / LGPD exibido ao selecionar App android */}
        {activeFilter === "mobile" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mediafire-disclaimer"
          >
            <ShieldCheck size={18} className="mediafire-shield-icon" />
            <span>
              Todos os links de downloads são feitos através do site Mediafire, não contêm itens de caráter invasivo ou contra as leis LGPD.
            </span>
          </motion.div>
        )}


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
                  {project.type === "mobile" ? (
                    <motion.a
                      href={project.download || (project.demo !== "#" ? project.demo : project.repo) || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="project-btn-download"
                    >
                      <Download size={16} />
                      <span>Baixar</span>
                    </motion.a>
                  ) : (
                    <div className="project-links">
                      <motion.a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="project-link github"
                      >
                        <Github size={15} />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="project-link demo"
                        style={{ background: project.color }}
                      >
                        <ExternalLink size={15} />
                      </motion.a>
                    </div>
                  )}
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
            href="https://github.com/Renessey"
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
          animate={isInView ? "visible" : "hidden"}
          className="glass-card tech-stack-container"
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
