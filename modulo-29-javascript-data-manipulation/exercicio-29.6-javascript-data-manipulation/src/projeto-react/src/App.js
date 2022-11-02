import './App.css';
import carros from './dados';

export default function App() {

  //usando map

  return (
    <div className='mainContainer'>
      <header>
        <div className='container'>
          <h1>Atividade</h1>
          <div className='nav'>
            <a href=''>Home</a>
            <a href=''>Contato</a>
            <a href=''>Sobre</a>
          </div>
        </div>
      </header>
      <section>
        {
          carros.map((carro)=>{
            return(
              <div className='card'>
                <img src={carro.img}></img>
                <h3>Marca: {carro.marca}</h3>
                <p>Modelo:{carro.modelo}</p>
                <p>Cor:{carro.cor}</p>
              </div>
            )
          })
        }
      </section>
    </div>
  );
}

