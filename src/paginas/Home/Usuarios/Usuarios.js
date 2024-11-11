import { Button, Modal, Table } from "react-bootstrap";
import { Sidebar } from "../../../Componentes/Sidebar/Sidebar";
import { Topbar } from "../../../Componentes/Topbar/Topbar";
import { Link } from 'react-router-dom';
import style from "./Usuarios.module.css";
import { MdDelete, MdEdit } from "react-icons/md";
import { useEffect, useState } from "react";
import UsuarioAPI from "../../../Services/usuarioAPI";

export function Usuario() {
    const [usuarios, setUsuarios] = useState([]);
    const [mostarModal, setMostarModal] = useState(false);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState(null)


    const handClikDeletar = (usuario) => {
        setUsuarioSelecionado(usuario)
        setUsuarioSelecionado(true);
    };

    const handleDeletar = async () => {
        try {
            await UsuarioAPI.deletarAsync(usuarioSelecionado.id);
            setUsuarios(usuarios.filter(u => u.id !== usuarioSelecionado.id));
        } catch (error) {
            console.error("Erro ao deletar usuario:", error);
        } finally {
            handleFecharModal()
        }
    };

    const handleFecharModal = () => {
        setMostarModal(false);
        setUsuarioSelecionado(null);;
    }

    async function carregarUsuarios() {
        try {
            const listaUsuarios = await UsuarioAPI.listarAsync(true);
            setUsuarios(listaUsuarios);
        } catch (error) {
            console.error("Erro ao carregar usuario:", error);
        }
    }

    useEffect(() => {
        carregarUsuarios();
    }, []);

    return (
        <Sidebar>
            <Topbar>
                <div className={style.pagina_conteudo}>
                    <div className={style.pagina_cabecalho}>
                        <h3>Usuarios</h3>
                        <Link to='/usuario/novo' className={style.botao_novo}>+ Novo</Link>
                    </div>


                    <div className={style.tabela}>
                        <Table responsive>
                            <thead className={style.tabela_cabecalho}>
                                <tr>
                                    <th>Nome</th>
                                    <th>Email</th>
                                    <th>Ações</th>
                                </tr>


                            </thead>
                            <tbody className={style.tabela_corpo}>
                                {usuarios.map((Usuario) => (
                                    <tr key={Usuario.id}>
                                        <td>{Usuario.nome}</td>
                                        <td>{Usuario.email}</td>
                                        <td>
                                            <Link to='/usuario/editar' state={Usuario.id} className={style.botao_editar}>
                                                <MdEdit />
                                            </Link>
                                            <button onClick={() => handClikDeletar(Usuario)} className={style.bota_deletar}>
                                                <MdDelete/>
                                            </button>

                                        </td>

                                    </tr>
                                ))}.
                            </tbody>

                        </Table>

                    </div>
                    <Modal show={mostarModal} onHide={handleFecharModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Confirmar</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            Tem certeza que deseja deletar o usuario {usuarioSelecionado?.nome}?
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleFecharModal}>
                                Cancelar
                            </Button>
                            <Button variant="danger" onClick={handleDeletar}>
                                Deletar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </Topbar>
        </Sidebar>
    )
}
