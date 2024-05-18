import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

  return (
    <>
      <div className='App'>
          <div className='msgBar'>
            <span>ÚLTIMAS VAGAS PARA ACESSAR MINHAS LIVES DE ROLETA PEGANDO NÚMEROS 100% DE GRAÇA!</span>
          </div>
          <div className='container'>
            <span className='title'>LUCRE ATÉ <span className='highlight'>$1000 POR DIA</span> SEGUINDO MEUS SINAIS AO VIVO PARA PEGAR <span className='highlight'>NÚMEROS E MULTIPLICADORES</span></span>
            <video width="400" autoPlay>
              <source src="https://backendchat.000webhostapp.com/produtor/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <a href="https://contate.me/luketadaroleta" target='_blank'><button>QUERO LUCRAR 100% DE GRAÇA</button></a>
            <div className='vantagens'>
              <div className='vantagem'>
                <i class="bi bi-camera-reels-fill"></i>
                <span><span className='highlight'>OPERAÇÕES AO VIVO</span> TODOS OS DIAS JUNTO COMIGO BUSCANDO <span className='highlight'>NÚMEROS E MULTIPLICADORES</span></span>
              </div>
              <div className='vantagem'>
                <i class="bi bi-calendar-check-fill"></i>
                <span><span className='highlight'>OPERAÇÕES MANUAIS</span> 3X/DIA TODOS OS DIAS <span className='highlight'>(CHEGA DE ROBÔZINHO FAJUTO)</span></span>
              </div>
              <div className='vantagem'>
                <i class="bi bi-door-open-fill"></i>
                <span>ACESSO A MIM E MINHAS <span className='highlight'>ESTRATÉGIAS PARA SEMPRE PEGAR NÚMEROS E LUCRAR ATÉ 3X MAIS</span></span>
              </div>
              <div className='vantagem'>
                <i class="bi bi-bounding-box"></i>
                <span>MENTORIA ROLETA MILIONÁRIA: <span className='highlight'>TREINAMENTO COMPLETO DE ROLETA</span> TE ENSINANDO DO BÁSICO AO AVANÇADO COMO PEGAR <span className='highlight'>NÚMEROS NA ROLETA</span></span>
              </div>
            </div>
            <div className='vagas'>
              <i class="bi bi-exclamation-triangle-fill"></i>
              <span>1 VAGAS RESTANTES</span>
            </div>
            <div className='redes-sociais'>
              <span>Mais de <span className='highlight'>1 MILHÃO DE REAIS</span> faturados<br />pelos meus alunos nas lives</span>
              <span className='subtitle'>Resultado ao vivo, sem mi mi mi. Só lapada em números e multiplicadores</span>
              <a href="https://contate.me/luketadaroleta" target='_blank'><button>QUERO LUCRAR 100% DE GRAÇA</button></a>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
