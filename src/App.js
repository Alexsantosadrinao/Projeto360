
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './paginas/Home/Home';
import { Usuario } from './paginas/Home/Usuarios/Usuarios';
import { NovoUsuario } from './paginas/NovoUsuario/NovoUsuario';
import { EditarUsuario } from './paginas/EditarUsuario/EditarUsuario';
import { Restaurar } from './paginas/Restaurar/Restaurar';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/usuarios' element={<Usuario/>} />
      <Route path='/usuario/novo' element={<NovoUsuario/>} />
      <Route path='/usuario/editar' element={<EditarUsuario/>} />
      <Route path='/usuario/restaurar' element={<Restaurar/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
