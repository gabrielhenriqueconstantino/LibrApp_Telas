import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section fade-in">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>O manual não oficial do calouro esperto</h1>
          <p>Seu apoio inicial na universidade: informações úteis para organizar sua rotina e aproveitar melhor o início do curso.</p>
          <div className="hero-buttons">
            <a href="/contact" className="btn btn-primary">Navegue pela Athon</a>
            <a href="#about" className="btn btn-secondary">Saiba Mais</a>
          </div>
        </div>
        <img 
          className="hero-image" 
          src="/img/eicalouro.png" 
          alt="Soluções Digitais" 
        />
      </div>
      <div className="virtual-assistant-container">
  <div className="assistant-bubble">
    <img src="/img/athena-icon.png" alt="Assistente Virtual" />
  </div>
  <div className="assistant-popup">
    <div className="assistant-header">
      <strong>Athena</strong>
    </div>
    <div className="assistant-body">
      <p>Oi! Precisa de ajuda com a faculdade? 👋</p>
    </div>
</div>

  </div>


    </section>
  );
};

export default Hero;