import style from './Sidebar.module.css';
import { Link } from 'react-router-dom';

export function SidebarItem({ texto, link, logo }) {

    return (
        <Link to={link} className={style.Sidebar_item}>
            
            {logo}
            <h3 className={style.texto_link}>{texto}</h3>
        </Link>
)
}