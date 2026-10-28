import Navbar from "./components/Navbar"
import Tela1 from "./components/Tela1"
import Tela2 from "./components/Tela2"
import Tela3 from "./components/Tela3.jsx"
import Tela4 from "./components/Tela4.jsx"
import { Toaster } from "sonner"
import "./App.css"

function App() {
  return (
    <div className="app-wrapper">
      <Toaster richColors position="top-right" theme="dark" />
      <Navbar />
      <main>
        <Tela1 />
        <Tela2 />
        <Tela3 />
        <Tela4 />
      </main>
    </div>
  )
}

export default App