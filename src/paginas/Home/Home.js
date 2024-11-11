import style from './Home.module.css';
import { Sidebar } from '../../Componentes/Sidebar/Sidebar';
import { Topbar } from '../../Componentes/Topbar/Topbar';

export function Home() {
    return (
        <div className={style.conteudo}>
            <Sidebar>
                <Topbar>
                    <div className={style.pagina_conteudo}>
                        <h2>Home</h2>
                    </div>
                </Topbar>
            </Sidebar>
        </div>
    )
}