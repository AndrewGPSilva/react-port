import { FaFacebook, FaTiktok, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import style from './Footer.module.css'

export default function Footer() {
  const anoAtual = new Date().getFullYear();
  return (
    <footer className={style.containerFooter}>
      <div className={style.fraseFooter}>
        <h1 className="">&copy; {anoAtual} Andrew Silva - Dev Back-End</h1>
      </div>
      <div className={style.icons}>
        <a href='https://www.facebook.com/Andrew13G' target='blank'><p className={style.facebook}><FaFacebook /> </p></a>
        <a href='https://www.tiktok.com/@gps_drew_dev' target='blank'><p className={style.tiktok}> <FaTiktok /> </p></a>
        <a href='https://twitter.com/AndrewGPS13' target='blank'><p className={style.twitter}> <FaTwitter /> </p></a>
        <a href='https://www.instagram.com/andrew_gpereira/' target='blank'><p className={style.instagram}> <FaInstagram /> </p></a>
        <a href='https://github.com/AndrewGPSilva' target='blank'><p className={style.github}> <FaGithub /> </p></a>
        <a href='https://www.linkedin.com/in/andrewgpsilva/' target='blank'><p className={style.linkedin}> <FaLinkedin /> </p></a>
      </div>
    </footer>
  )
}