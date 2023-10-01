import Navbar from '../components/Navbar/index.jsx'
import Footer from '../components/Footer/index.jsx'
import Typewriter from '../components/HomeComponents/Text/index.jsx'
import Ficha from '../components/HomeComponents/Ficha/index.jsx'

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <main>
          <Ficha nome="Andrew Silva" idade="22" cidade="São Paulo-SP" funcao="Dev Backend Jr"/>
          <Typewriter />
        </main>
        <Footer />
      </div>
    </>
  )
}