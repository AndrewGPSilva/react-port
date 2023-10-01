import Navbar from '../components/Navbar/index.jsx'
import Footer from '../components/Footer/index.jsx'
import Card from '../components/ProjectsComponents/Card/Card.jsx'
import Cardyt from '../components/ProjectsComponents/CardYoutube/index.jsx'

export default function Projects() {
  return (
    <div>
      <div>
        <Navbar />
        <Card />
        <Cardyt />
        <Footer />
      </div>
    </div>
  )
}