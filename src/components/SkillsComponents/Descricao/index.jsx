import style from './Descricao.module.css'
import {FaCircle} from 'react-icons/fa'

export default function Descricao() {
  return (
      <div className={style.container}>
        <h3>Níveis Técnicos</h3>
        <h4 className={style.estudando}>
          <FaCircle />
          <h5 className={style.estudandoTitulo}>Estudando</h5>
        </h4>
        <h4 className={style.intermediario}>
          <FaCircle />
          <h5 className={style.estudandoTitulo}>Intermediário</h5>
        </h4>
        <h4 className={style.dominio}>
          <FaCircle />
          <h5 className={style.estudandoTitulo}>"Domínio"</h5>
        </h4>
      
    </div>
  )
}