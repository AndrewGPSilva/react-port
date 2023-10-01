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
              <div className={style.tituloCard}>
                <h1>{dado.titulo}</h1>
              </div>
              <div className={style.descricaoCard}>
                <p>{dado.descricao}</p>
              </div>
              <div className={style.linkCard}>
                <a href={dado.link} target="_blank" rel="noopener noreferrer">
                  ACESSAR SITE
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
