import React from "react";
import "../css/header.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header id="header">
        <Link to="/" className="link">GB</Link>
      <nav id="menu">
        <Link to="/" className="link">Home</Link>
        <Link to="#sobre" className="link">Sobre</Link>
        <Link to="#experiencia" className="link">Experiência</Link>
        <Link to="/projetos" className="link">Projetos</Link>
      </nav>
    </header>
  )
}

export default Header;
