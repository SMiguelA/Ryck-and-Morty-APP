import { connect } from "react-redux";
import style from "./favorites.module.css"
import img from "../card/toxicRick.png"
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Favoritos = (props) => {
    const [myFavorites, setFavorites] = useState([]);

    useEffect(() => {
        async function favorites(){
            const response = await axios.get("http://localhost:3001/rickandmorty/fav")
            setFavorites(response.data)
        }
        favorites();
    }, [])
    console.log(myFavorites);
    return(
        <>
            {
                myFavorites.map((char) => {
                    return(
                        <div className={style.contPadre}>
                            <div className={style.container}>
                                <div className={style.contItems}>
                                <Link to={`/detail/${char.id}`}>
                                    <h2 className={style.items}>Name: {char.name}</h2>
                                </Link>
                                <h2 className={style.items}>Specie: {char.species}</h2>
                                <h2 className={style.items}>Gender: {char.gender}</h2>
                                </div>
                                <img  src={char.image} className={style.imagen} alt="" />
                            </div>
                            <img src={img} className={style.iconoHover} alt=""/>
                        </div>
                    )
                })
            }
        </>
        
    );
};



const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites,
    };
};

export default connect(mapStateToProps,null)(Favoritos);