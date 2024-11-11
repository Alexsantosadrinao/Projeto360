import style from "./Sidebar.module.css";
import logo from "../../assets/Logobranco.png";
import { DiAndroid } from "react-icons/di";
import { MdGroup } from "react-icons/md";
import { SidebarItem } from "../Sidebaritem/Sidebaritem";

export function Sidebar({ children }) {

    return (
        <div>
            <div className={style.Sidebar_conteudo}>
                <div className={style.Sidebar_header}>
                    <img src={logo} alt="Logo-Tarefa360" className={style.logo} />

                    <hr className={style.linha}/>
                </div>
                <div className={style.Sidebar_corpo}>
                    <SidebarItem texto="Usuarios" link="/usuarios" logo={<MdGroup/>}/>
                    <SidebarItem texto="algo" link="/algo" logo={<DiAndroid/>}/>
                </div>

            </div>

            <div className={style.pagina_conteudo} >
                {children}

            </div>

        </div>

    )
}