import style from "./Sidebar.module.css";
import logo from "../../assets/Logobranco.png";
import { DiAndroid } from "react-icons/di";
import { MdGroup } from "react-icons/md";
import { SidebarItem } from "../Sidebaritem/Sidebaritem";
import { Button } from "react-bootstrap";
import { FcMenu } from "react-icons/fc";
import { useState } from "react";


export function Sidebar({ children }) {
    const [sidebar, setSidebar] = useState(false)

    const showSiderbar = () => setSidebar(!sidebar)


    return (
        <div>
            <div className={style.Sidebar_conteudo}>


                <div className={style.Botao_Sidebar}>
                    <Button variant="primary" onClick={showSiderbar}>
                        {
                            sidebar &&
                            <Sidebar active={setSidebar} />
                        }
                        <FcMenu />
                    </Button>


                </div>





                <div className={style.Sidebar_header}>
                    <img src={logo} alt="Logo-Tarefa360" className={style.logo} />

                    <hr className={style.linha} />
                </div>
                <div className={style.Sidebar_corpo}>
                    <SidebarItem texto="Usuarios" link="/usuarios" logo={<MdGroup />} />
                    <SidebarItem texto="Restaurar" link="/usuarios/restaurar" logo={<DiAndroid />} />
                </div>

            </div>

            <div className={style.pagina_conteudo} >
                
                {children}

            </div>

        </div>

    )
}