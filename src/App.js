
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import {useState} from "react";
import { useEffect } from 'react';
import SearchBar from './components/SearchBar.jsx';
import axios from "axios";
import About from './components/views/About.jsx';
import Detail from './components/views/Detail.jsx';
import {Routes, Route, useLocation} from "react-router-dom";
import Form from './components/Form.jsx';
import { useNavigate } from "react-router-dom";

function App() {
   const [characters, setCharacters] = useState([]);
   
   

   const onSearch = (id) => {
      if (characters.find((char)=> char.id === id)) {
         return window.alert("Personaje Repetido");
      }
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
               if (data.name) {
                  setCharacters((oldChars) => [...oldChars, data]);
               } else {
                  window.alert('¡No hay personajes con este ID!');
               }
            })    
   };
   
   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== id));
   };

   const {pathname} = useLocation();

   const [access, setAccess] = useState(false);
   //! CRENDENCIALES FAKE //
   const username = 'rodrigo@outlook.com';
   const password = 'mipass123';

   useEffect(()=> {
      !access&& navigate('/');
   },[access]);
   
   const navigate= useNavigate();
   const login = (userData) => {
      if(userData.username === username && userData.password === password) {
         setAccess(true);
         navigate('/home');
      } else {
         alert('Credenciales incorrectas')
      }
   };
      
   return (
      <div className='App'>
      {pathname !== '/' && <Nav onSearch={onSearch}/>}
      <Routes>
         <Route path='/' element={<Form login={login}/>} />
         <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
      </div>
   )
}

export default App; 