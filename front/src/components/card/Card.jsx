import style from "./card.module.css"
import img from "./toxicRick.png"
import { Link } from "react-router-dom";
import { addFavorite } from "../../redux/action";
import { removeFavorite } from "../../redux/action";
import { connect } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Card = (props) => {
   const [isFav, setFav] = useState(false);

   const handleFavorite = () => {
      if(isFav === true){
         setFav(false);
         props.removeFavorite(props.id);
      }else if (isFav === false){
         setFav(true);
         let {id, name, species, gender, image} = props;
         props.addFavorite({id, name, species, gender, image});
      };
   };

   const [myFavorites, setFavorites] = useState([]);

   useEffect(() => {
      async function favorites(){
         const response = await axios.get("http://localhost:3001/rickandmorty/fav")
         setFavorites(response.data)
         response.data.forEach((fav) => {
            console.log(fav);
            if(fav.id == props.id){
               setFav(true);
            }
         });
      }
      favorites();

   }, []);

   // * Esto es lo mismo que arriba pero sin forEach, es un reto de la homework
   // useEffect(() => {
   //    for(let i = 0; i<props.myFavorites.length; i++){
   //       if(props.myFavorites[i] === props.id){
   //          setFav(true);
   //       }
   //    }
   // }, [props.myFavorites]);

   return (
      <div className={style.contPadre}>
         <div className={style.container}>
            <div>
               <button className={style.cerrar} onClick={() => {props.onClose(props.id)}}>X</button>
               {
                  isFav ? (
                     <button onClick={handleFavorite}>❤️</button>
                  ):(
                     <button onClick={handleFavorite}>🤍</button>
                  )
               }
            </div>
            <div className={style.contItems}>
               <Link to={`/detail/${props.id}`}>
                  <h2 className={style.items}>Name: {props.name}</h2>
               </Link>
               <h2 className={style.items}>Specie: {props.species}</h2>
               <h2 className={style.items}>Gender: {props.gender}</h2>
            </div>
            <img  src={props.image} className={style.imagen} alt="" />
         </div>
         <img src={img} className={style.iconoHover} alt=""/>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFavorite: (props) => {
         dispatch(addFavorite(props));
      },
      removeFavorite: (id) => {
         dispatch(removeFavorite(id));
      },
   }
};

export default connect(null,mapDispatchToProps)(Card);
