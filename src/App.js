import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MiOrg from './components/MiOrg';

function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(true)

  // Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Form /> : <></>}   */}
      {mostrarFormulario && <Form />}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
