import React, { useEffect, useRef } from 'react';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const videoRef = useRef(null);
  const soundRef = useRef(null);


  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = false; // Desmutar o vídeo
      videoRef.current.volume = 1.0; // Define o volume para o máximo (1.0)
      soundRef.current.style.display = 'none';
    }
  };

  return (
    <>
      <div className="App">
        <div className="msgBar">
          <span>ÚLTIMAS VAGAS PARA ACESSAR MINHAS LIVES DE ROLETA PEGANDO NÚMEROS 100% DE GRAÇA!</span>
        </div>
        <div className="container">
          <span className="title">LUCRE ATÉ <span className="highlight">$1000 POR DIA</span> SEGUINDO MEUS SINAIS AO VIVO PARA PEGAR <span className="highlight">NÚMEROS E MULTIPLICADORES</span></span>
          <div className="ativarSom" onClick={handleVideoClick} ref={soundRef}>
            <div className='soundContent'>
              <i className="bi bi-volume-mute-fill"></i>
              <span>Clique para ativar o som!</span>
            </div>
          </div>
          <video width="400" ref={videoRef} autoPlay muted>
            <div className='soundContent'>
              <i className="bi bi-volume-mute-fill"></i>
              <span>Clique para ativar o som!</span>
            </div>
            <source src="https://backendchat.000webhostapp.com/produtor/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <a href="https://contate.me/luketadaroleta" target="_blank" rel="noopener noreferrer">
            <button>QUERO LUCRAR 100% DE GRAÇA</button>
          </a>
          <div className="vantagens">
            <div className="vantagem">
              <i className="bi bi-camera-reels-fill"></i>
              <span><span className="highlight">OPERAÇÕES AO VIVO</span> TODOS OS DIAS JUNTO COMIGO BUSCANDO <span className="highlight">NÚMEROS E MULTIPLICADORES</span></span>
            </div>
            <div className="vantagem">
              <i className="bi bi-calendar-check-fill"></i>
              <span><span className="highlight">OPERAÇÕES MANUAIS</span> 3X/DIA TODOS OS DIAS <span className="highlight">(CHEGA DE ROBÔZINHO FAJUTO)</span></span>
            </div>
            <div className="vantagem">
              <i className="bi bi-door-open-fill"></i>
              <span>ACESSO A MIM E MINHAS <span className="highlight">ESTRATÉGIAS PARA SEMPRE PEGAR NÚMEROS E LUCRAR ATÉ 3X MAIS</span></span>
            </div>
            <div className="vantagem">
              <i className="bi bi-bounding-box"></i>
              <span>MENTORIA ROLETA MILIONÁRIA: <span className="highlight">TREINAMENTO COMPLETO DE ROLETA</span> TE ENSINANDO DO BÁSICO AO AVANÇADO COMO PEGAR <span className="highlight">NÚMEROS NA ROLETA</span></span>
            </div>
          </div>
          <div className="vagas">
            <i className="bi bi-exclamation-triangle-fill"></i>
            <span>1 VAGAS RESTANTES</span>
          </div>
          <div className="redes-sociais">
            <span>Mais de <span className="highlight">1 MILHÃO DE REAIS</span> faturados<br />pelos meus alunos nas lives</span>
            <span className="subtitle">Resultado ao vivo, sem mi mi mi. Só lapada em números e multiplicadores</span>
            <a href="https://contate.me/luketadaroleta" target="_blank" rel="noopener noreferrer">
              <button>QUERO LUCRAR 100% DE GRAÇA</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
