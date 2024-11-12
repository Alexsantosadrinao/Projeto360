import { Form, Link } from 'react-router-dom';
import { Sidebar } from '../../Componentes/Sidebar/Sidebar';
import { Topbar } from '../../Componentes/Topbar/Topbar';
import style from './Restaurar.module.css';


export function Restaurar () {


    return(
        <Sidebar>
            <Topbar>
                <div className={style.Pagina_conteudo}>
                    <h3>Restaurar Usuario</h3>
                    <Link to='/usuarios/restaurar' className={style.Botao_android}></Link>

                    <Form >
                        <Form.Group controlId="forId" className="mb-3">

                        </Form.Group>

                    </Form>
                </div>
            </Topbar>
        </Sidebar>
    )


}