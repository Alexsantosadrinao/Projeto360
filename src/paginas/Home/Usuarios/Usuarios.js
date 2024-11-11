import { Table } from "react-bootstrap";
import { Sidebar } from "../../../Componentes/Sidebar/Sidebar";
import { Topbar } from "../../../Componentes/Topbar/Topbar";
import { Link } from 'react-router-dom';
import style from "./Usuarios.module.css";
import { MdDelete, MdEdit } from "react-icons/md";
import { useEffect , useState} from "react";
import UsuarioAPI from "../../../Services/usuarioAPI";

export function Usuario() {
    const [usuarios, setUsuarios] = useState([]);

    async function carregarUsuarios(){
        try{
            const listaUsuarios = await UsuarioAPI.listarAsync(true);
            setUsuarios(listaUsuarios);
        }catch (error){
            console.error("Erro ao carregar usuario:", error);
        }
    }

    useEffect(() =>{
        carregarUsuarios();
    },[]);
    
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
                                            <Link to='/usuario/deletar' state={Usuario.id}>
                                                <MdDelete />
                                            </Link>
                                        </td>

                                    </tr>
                                ))}.
                            </tbody>

                        </Table>

                    </div>

                </div>
            </Topbar>
        </Sidebar>
    )
}
