import style from "./nav.module.css"
import SearchBar from "../searchBar/SearchBar.jsx"
import {Link} from 'react-router-dom'

export default function Nav(props){
    return(
        <>
            <nav className={style.navBar}>
                <Link to="/home">
                    <h2>Home</h2>
                </Link>
                <Link to="/about">
                    <h2>About</h2>
                </Link>
                <Link to="/favorites">
                    <h2>Favoritos</h2>
                </Link>
                <Link to="/">
                    <h2>LOGOUT</h2>
                </Link>
                
                <SearchBar buscar={props.onSearch} random={props.aleatorio}/>
            </nav>
        </>
    );
}