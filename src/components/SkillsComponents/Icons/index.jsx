import style from './Icons.module.css';
import Descricao from '../Descricao/index.jsx'
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaPhp, FaLaravel, FaJava, FaNodeJs, FaGitAlt, FaDocker, FaRust } from 'react-icons/fa'
import { BiLogoJavascript, BiLogoTailwindCss, BiLogoGithub } from 'react-icons/bi'
import { SiSpringboot, SiPostman } from 'react-icons/si'
import { GiSkills } from 'react-icons/gi'

export default function Icons() {
  return (
    <section className={style.container}>
      <div className={style.titulo}>
        <h1>&lt;My Skills /&gt;
        </h1>
        <h1><GiSkills /></h1>
      </div>
      <Descricao />
      <div className={style.frontend}>
        <h1 className={style.tituloStack}>Front-End</h1>
        <div className={style.iconsfrontend}>
          <div className={style.iconsfe}>
            <p className={style.html}><FaHtml5 /></p>
            <p className={style.css}><FaCss3Alt /></p>
            <p className={style.js}><BiLogoJavascript /></p>

          </div>
          <div className={style.iconsfe}>
            <p className={style.react}><FaReact /></p>

            <p className={style.tailwind}><BiLogoTailwindCss /></p>
            <p className={style.bootstrap}><FaBootstrap /></p>
          </div>
        </div>
      </div>
      <div className={style.backend}>
        <h1 className={style.tituloStack}>Back-End</h1>
        <div>
          <div className={style.iconsbe}>
            <p className={style.php}><FaPhp /></p>
            <p className={style.java}><FaJava /></p>
            <p className={style.node}><FaNodeJs /></p>
          </div>
          <div className={style.iconsbe}>
            <p className={style.laravel}><FaLaravel /></p>
            <p className={style.spring}><SiSpringboot /></p>
            <p className={style.rust}><FaRust /></p>
          </div>
        </div>
      </div>
      <div className={style.ferramentas}>
        <h1 className={style.tituloStack}>Ferramentas</h1>
        <div className={style.iconsfr}>
          <p className={style.git}><FaGitAlt /></p>
          <p className={style.github}><BiLogoGithub /></p>
          <p className={style.docker}><FaDocker /></p>
          <p className={style.postman}><SiPostman /></p>
        </div>
      </div>
    </section>
  )
}