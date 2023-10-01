import Navbar from '../components/Navbar/index.jsx'
import Footer from '../components/Footer/index.jsx'
import Typewriter from '../components/HomeComponents/Text/index.jsx'
import Ficha from '../components/HomeComponents/Ficha/index.jsx'
import About from '../components/HomeComponents/About/index.jsx'

export default function Home() {
  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
        <main>
          <Ficha 
            nome="Andrew Silva" 
            idade="22" 
            cidade="São Paulo-SP" 
            funcao="Dev Backend"/>
          <Typewriter />
          <About />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}