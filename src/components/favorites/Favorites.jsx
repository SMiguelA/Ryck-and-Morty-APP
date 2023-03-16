import { connect } from "react-redux";
import style from "./favorites.module.css"
import img from "../card/toxicRick.png"
import { Link } from "react-router-dom";

const Favoritos = (props) => {
    console.log(props);
    const myFavorites = props.myFavorites;
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