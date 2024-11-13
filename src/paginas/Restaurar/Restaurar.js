import { Link } from 'react-router-dom';
import { Sidebar } from '../../Componentes/Sidebar/Sidebar';
import { Topbar } from '../../Componentes/Topbar/Topbar';
import style from './Restaurar.module.css';
import { Button, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import UsuarioAPI from '../../Services/usuarioAPI';

export function Restaurar() {

    const [usuarios, setUsuarios] = useState([]);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState(null)


    const handleRestaurar = async () => {
        try {
            await UsuarioAPI.restaurarAsync(usuarioSelecionado)
            // setUsuarioSelecionado(usuarios.filter(u => u.id !== usuarioSelecionado.id));
        } catch (error) {
            console.error("Erro ao restaurar usuario:", error);
        }
    };

    async function carregarUsuarios() {
        try {
            const listarUsuarios = await UsuarioAPI.listarAsync(false);
            setUsuarios(listarUsuarios);
        } catch (error) {
            console.error("Erro ao carregar usuario:", error);
        }



    }

    useEffect(() => {
        carregarUsuarios();
    }, []);
    const isFormValid = () => {
        return


    };
    return (
        <Sidebar>
            <Topbar>
                <div className={style.Pagina_conteudo}>
                    <h3>Restaurar Usuario</h3>
                    <tbody>

                    </tbody>
                    <Form onSubmit={handleRestaurar}>
                        <Form.Group controlId='forNome' className="mb-3">
                            <Form.Label>ID do usuario</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder='Digite o ID'
                                name='id'
                                value={usuarioSelecionado}
                                onChange={(e) => setUsuarioSelecionado(e.target.value)}
                                required
                            >

                            </Form.Control>


                        </Form.Group>
                        <Button variant='primary' type='submit' >
                            Restaurar
                        </Button>
                    </Form>

                </div>
            </Topbar>
        </Sidebar>
    )


}