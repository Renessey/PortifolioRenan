import "./Navbar.css"
import { useState, useEffect } from "react"

export default function Navbar() {
    const [menuAberto, setMenuAberto] = useState(false)
    const [linkAtivo, setLinkAtivo] = useState("#tela1")
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const fecharMenu = () => setMenuAberto(false)

    const handleClick = (e) => {
        const href = e.currentTarget.getAttribute("href") || ""
        setLinkAtivo(href)
        fecharMenu()
    }

    return (
        <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
            <nav className="navbar">
                <a href="#tela1" className="logo" onClick={handleClick}>
                    <span className="logo-bracket">&lt;</span>
                    <span className="logo-name">Renan</span>
                    <span className="logo-accent">.dev</span>
                    <span className="logo-bracket"> /&gt;</span>
                </a>

                {/* HAMBURGER */}
                <div className="hamburger">
                    <input
                        id="checkbox"
                        type="checkbox"
                        checked={menuAberto}
                        onChange={() => setMenuAberto(!menuAberto)}
                        aria-label="Abrir menu de navegação"
                    />
                    <label className="toggle" htmlFor="checkbox">
                        <div id="bar1" className="bars"></div>
                        <div id="bar2" className="bars"></div>
                        <div id="bar3" className="bars"></div>
                    </label>
                </div>

                {/* MENU */}
                <div className={`menu ${menuAberto ? "ativo" : ""}`}>
                    <a href="#tela1" onClick={handleClick} className={linkAtivo === "#tela1" ? "ativo" : ""}>Início</a>
                    <a href="#tela2" onClick={handleClick} className={linkAtivo === "#tela2" ? "ativo" : ""}>Sobre</a>
                    <a href="#tela3" onClick={handleClick} className={linkAtivo === "#tela3" ? "ativo" : ""}>Projetos</a>
                    <a href="#tela4" onClick={handleClick} className={linkAtivo === "#tela4" ? "ativo" : ""}>Contato</a>
                    <a href="#tela4" onClick={handleClick} className="nav-btn-contato">
                        Fale Comigo
                    </a>
                </div>
            </nav>
        </header>
    )
}