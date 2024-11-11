import { useEffect, useState } from "react";
import { Sidebar } from "../../Componentes/Sidebar/Sidebar";
import { Topbar } from "../../Componentes/Topbar/Topbar";
import style from "./NovoUsuario.module.css"
import { Await, useNavigate } from "react-router-dom";
import UsuarioAPI from "../../Services/usuarioAPI";
import { Button, Form } from "react-bootstrap";



export function NovoUsuario() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState('');
    const [TipoUsuarios, setTipoUsuarios] = useState([]);

    const navigate = useNavigate(); // mover de rotas


    useEffect(() => {
        const fetchTipoUsuarios = async () => {
            try {
                const tipos = await UsuarioAPI.listarTiposUsuarioAsync();
                setTipoUsuarios(tipos)
            } catch (error) {
                console.error('Erro ao buscar tipos de usuarios:', error);
            }
        };
        fetchTipoUsuarios();
    }, []);




    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isFormValid()) {
            await UsuarioAPI.criarAsync(nome, email, senha, tipoUsuario);
            navigate('/usuarios')
        } else {
            alert('Por favor preencha todos os campos.');
        }
    };


    const isFormValid = () => {
        return nome && email && senha && tipoUsuario
    };




    return (
        <Sidebar>
            <Topbar>
                <div className={style.pagina_conteudo}>
                    <h3>Novo Usuario</h3>

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

                        <Form.Group controlId="formSenha" className="mb-3">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="*****"
                                name="senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
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
                                <option value="">Selecione o tipos de usuário</option>
                                {TipoUsuarios.map((tipo) => (
                                    <option key={tipo.id}>{tipo.nome}</option>
                                ))}
                            </Form.Control>

                        </Form.Group>

                        <Button variant="warning " type="submit" disabled={!isFormValid()}>
                            Salvar

                        </Button>

                    </Form>

                </div>
            </Topbar>
        </Sidebar >
    );
}