import style from "../Card/Card.module.css";
import dados from "../../../dadosYt.json";

export default function Cardyt() {
  return (
    <section className={style.containerCardYt}>
      {dados.map((dado) => (
        <div className={style.card} key={dado.id}>
          <div>
            <iframe
              width="320px"
              height="200"
              src={dado.link}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
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
                ACESSAR VÍDEO{" "}
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
