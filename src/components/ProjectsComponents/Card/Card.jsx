import style from './Card.module.css';
import dados from '../../../data.json';
import { FaPaste } from 'react-icons/fa'

export default function Card() {
  return (
    <>
      <section className={style.containerCard}>
        <div className={style.tituloalpha}>
          <h1>PROJETOS</h1>
          <h1><FaPaste /></h1>
        </div>
        {dados.map((dado) => (
          <div className={style.card} key={dado.id}>
            <div className={style.imagem}>
              <img src={dado.imagem} alt="Imagem" />
            </div>
            <div className={style.informacoes}>
              <h1>{dado.titulo}</h1>
              <p>{dado.descricao}</p>
              <a href={dado.link} target="_blank" rel="noopener noreferrer">
                ACESSAR SITE
              </a>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
