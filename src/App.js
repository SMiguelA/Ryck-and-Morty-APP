import './App.css'
import {useState, useEffect} from "react"
import Cards from './components/cards/Cards.jsx'
import Nav from "./components/Nav/nav.jsx"
import About from './components/views/About/About'
import Detail from './components/views/Details/Detail'
import Form from './components/Form/form'
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import Favorites from './components/favorites/Favorites';

function App () {
  const [personajes, setState] = useState([]);
  const Search = (id) => {
    const URL = 'https://be-a-rym.up.railway.app/api';
    const KEY = '81db1b443752.8a163dc08d2f030c3eab';
    fetch(`${URL}/character/${id}?key=${KEY}`)
    .then((response)=>response.json())
    .then((infoPersonaje) => {
      if(infoPersonaje.id && !personajes.find((char) => char.id === infoPersonaje.id)){
          setState([...personajes, infoPersonaje]);
      } else {
         window.alert('ID repetido o el personaje no existe.');
      }
    })
  };

  // * Esta funcion es para coger un objeto aleatorio
  const generarAleatorio = () => {
    const idGenerado = Math.floor(Math.random() * (827 - 0) + 0);
    Search(idGenerado);
  }


  const onClose = (id) => {
    setState(personajes.filter((char) => char.id !== id));
  }

  // * Estado local del form

  const [acces, setAcces] = useState(false);
  const navigate = useNavigate();
  const username = "sierrabolanosmiguel@gmail.com";
  const password = "Pottato070";


  const login = (userData) => {
    if(userData.username === username && userData.password === password){
      setAcces(true);
      navigate('/home');
    }else{
      alert('Credenciales incorrectas');
    }
  };

  // * Este codigo evita que puedan ingresar a otras pestañas a no ser de que ingresemos por login

  useEffect(() => {
    !acces && navigate('/');
  }, [acces]);

  return (
    <div className='App' style={{ padding: '25px' }}>
      {useLocation().pathname !== "/" && <Nav onSearch={Search} aleatorio={generarAleatorio}/>}

      <Routes>
        <Route path="/" element={<Form login={login} setAcces={setAcces}/>} />
        <Route path="/home" element={<Cards characters={personajes} onClose={onClose}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/detail/:detailId" element={<Detail/>}/>
      </Routes>

      <div>
      </div>
    </div>
  )
}

export default App
