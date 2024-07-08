import React, { useEffect, useState} from "react";
import { Router, Route, Link, Routes } from "react-router-dom";
import Inicio from "./components/Inicio";
import Perfil from "./components/Perfil";
import Usuario from "./components/Usuario";
/*
  Componente Vista: Llamado App
*/

const App = () =>{
  return (
    <Routes>
      <Route path="/" element={<Inicio/>} />
      <Route path="/Perfil" element={<Perfil/>} />
      <Route path="/Usuario" element={<Usuario/>}/>
    </Routes>

  )
}

export default App