import style from "./searchBar.module.css"
import { useState } from "react";

export default function SearchBar(props) {
   const [id, colocarId] = useState("");
   const funcion = (event) => {
      colocarId(event.target.value);
   }

   return (
      <div className={style.container}>
         <input className={style.input} type='text' id="input" onChange={funcion} autoComplete="off"/>
         <button className={style.boton} onClick={() => props.buscar(id)}>Agregar</button> 
         <button className={style.boton} onClick={() => props.random()}>Aleatorio</button> 
      </div>
   );
}
