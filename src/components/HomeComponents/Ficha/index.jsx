import style from './Ficha.module.css'
import { FaInfoCircle } from 'react-icons/fa'
import Foto from '../Foto/index.jsx'

export default function Ficha({ nome, idade, cidade, funcao }) {
  return (
    <section className={style.container}>
      <div className={style.titulo}>
        <h1>PERFIL</h1>
        <h1> <FaInfoCircle /></h1>
      </div>
      <div className={style.gridContainer}>
      <div className={style.info}>
        <h1>Nome:</h1>
        <p>{nome}</p>
        <h1>Idade:</h1>
        <p>{idade} anos</p>
        <h1>Cidade:</h1>
        <p>{cidade}</p>
        <h1>Função:</h1>
        <p>{funcao}</p>
      </div>
        <div>
          <Foto />
        </div>
        </div>
    </section>
  )
}