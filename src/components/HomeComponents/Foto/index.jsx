import perfil from "../../../assets/perfil.webp";
import style from "./Foto.module.css";

export default function Foto() {
  return (
    <>
      <div className={style.container}>
        <img src={perfil} alt="Foto de perfil" />
      </div>
    </>
  );
}
