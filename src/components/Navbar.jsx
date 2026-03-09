import "./Navbar.css"
import { useState } from "react"

export default function Navbar() {

    const [menuAberto, setMenuAberto] = useState(false)
    const [linkAtivo, setLinkAtivo] = useState("")

    // função para fechar menu
    const fecharMenu = () => setMenuAberto(false)

    // ao clicar em um link guardamos o href para manter o estilo ativo
    const handleClick = (e) => {
        const href = e.currentTarget.getAttribute("href") || ""
        setLinkAtivo(href)
        fecharMenu()
    }

    return (

        <nav className="navbar">

            <div className="logo">
                <span className="bracket">&lt;</span>
                <span className="dev-text">dev </span>
                <span className="bracket">/&gt;</span>
            </div>

            {/* HAMBURGER */}

            <div className="hamburger">

                <input
                    id="checkbox"
                    type="checkbox"
                    checked={menuAberto}
                    onChange={() => setMenuAberto(!menuAberto)}
                />

                <label className="toggle" htmlFor="checkbox">
                    <div id="bar1" className="bars"></div>
                    <div id="bar2" className="bars"></div>
                    <div id="bar3" className="bars"></div>
                </label>

            </div>

            {/* MENU */}

            <div className={`menu ${menuAberto ? "ativo" : ""}`}>

                <a href="#tela1" onClick={handleClick} className={linkAtivo === "#tela1" ? "ativo" : ""}>Home</a>
                <a href="#tela2" onClick={handleClick} className={linkAtivo === "#tela2" ? "ativo" : ""}>Sobre</a>
                <a href="#tela3" onClick={handleClick} className={linkAtivo === "#tela3" ? "ativo" : ""}>Projetos</a>
                <a href="#tela4" onClick={handleClick} className={linkAtivo === "#tela4" ? "ativo" : ""}>Contato</a>

            </div>

        </nav>

    )

}