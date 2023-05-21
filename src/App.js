import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import About from "./components/about/About";
import Cards from './components/cards/Cards.jsx';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import Nav from './components/nav/Nav';
// import characters from './data.js';

function App() {
   const [characters, setCharacters] = useState([]);

   const[access, setAccess] = useState(false);
   const EMAIL = "ejemplo@gmail.com";
   const PASSWORD = "123456";

   const navigate = useNavigate();

   function login(userData) {
      if(userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('./home');
      }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   
   const onSearch = id => { 
      axios (`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
   }
   const onClose = id => {
      setCharacters(characters.filter(caracter => caracter.id !== Number(id)))
   }

   return (
      <div className='App'>
         {
            location.pathname !== "/" ? <Nav onSearch={onSearch}/> : null
         }
         <hr/>
         <Routes>
            <Route exact path="/" element={<Form login={login}/>}/>
            <Route path="/home" element={
               <Cards characters={characters} onClose={onClose}/>
            }/>
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
         </Routes>
      </div>
   );
}

export default App;