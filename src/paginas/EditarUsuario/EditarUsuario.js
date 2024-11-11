import {  useLocation, useNavigate } from "react-router-dom";
import { Sidebar } from "../../Componentes/Sidebar/Sidebar";
import { Topbar } from "../../Componentes/Topbar/Topbar";
import style from "./EditarUsurio.module.css";
import { useEffect, useState } from "react";
import UsuarioAPI from "../../Services/usuarioAPI";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';



export function EditarUsuario() {
    const location = useLocation();
    const navigate = useNavigate();

    const [id] = useState(location.state)

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState('');
    const [TipoUsuarios, setTipoUsuarios] = useState([]);




    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isFormValid()) {
            await UsuarioAPI.atualizarAsync(nome, email,  tipoUsuario );
            navigate('/usuarios')
        } else {
            alert('Por favor preencha todos os campos.');
        }
    };



    useEffect(() => {
        const buscarTipoUsuarios = async () => {
            try {
                const tipos = await UsuarioAPI.listarTiposUsuarioAsync();
                setTipoUsuarios(tipos)
            } catch (error) {
                console.error('Erro ao buscar tipos de usuarios:', error);
            }
        };


        const bucarDadosUsuario = async () => {
            try {
                const usuario = await UsuarioAPI.obterAsync(id);
                setTipoUsuario(usuario.tipoUsuario)
                setNome(usuario.nome)
                setEmail(usuario.email)
            }  catch (error) {
                console.error('Erro ao buscar dados do usuarios:', error);
            }
        }
        
        bucarDadosUsuario();
        buscarTipoUsuarios();
    }, [id]);




 

    const isFormValid = () => {
        return nome && email &&  tipoUsuario ;
    };


    return (
        <Sidebar>
            <Topbar>
                <div className={style.pagina_conteudo}>
                    <h3>Editar Usuario</h3>


                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formNome" className="mb-3">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite seu nome"
                                name="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />

                        </Form.Group>


                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Digite seu email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                        </Form.Group>

                        <Form.Group controlId="formTipoUsuario" className="mb-3">
                            <Form.Label>Tipo de Usuário</Form.Label>
                            <Form.Control
                                as="select"
                                name="TipoUsuario"
                                value={tipoUsuario}
                                onChange={(e) => setTipoUsuario(e.target.value)}
                                required
                            >
                               
                                {TipoUsuarios.map((tipo) => (
                                    <option value={tipo.id}>{tipo.nome}</option>
                                ))}
                            </Form.Control>

                        </Form.Group>

                        <Button variant="warning " type="submit" disabled={!isFormValid()}>
                            Salvar
                            
                        </Button>

                    </Form>


                </div>
            </Topbar>
        </Sidebar>
    )
}