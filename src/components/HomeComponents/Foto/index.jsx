import perfil from "../../../assets/perfil.jpg";
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
