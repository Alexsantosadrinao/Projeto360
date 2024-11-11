
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './paginas/Home/Home';
import { Usuario } from './paginas/Home/Usuarios/Usuarios';
import { NovoUsuario } from './paginas/NovoUsuario/NovoUsuario';
import { EditarUsuario } from './paginas/EditarUsuario/EditarUsuario';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/usuarios' element={<Usuario/>} />
      <Route path='/usuario/novo' element={<NovoUsuario/>} />
      <Route path='/usuario/editar' element={<EditarUsuario/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
