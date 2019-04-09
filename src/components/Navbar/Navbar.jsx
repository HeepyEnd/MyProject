import React from 'react';
import c from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to="/profile" activeClassName={c.activeLink}>Профиль</NavLink>
            </div>
            <div className={c.item} >
                <NavLink to="/dialogs" activeClassName={c.activeLink}>Сообщения</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/Anime">Аниме</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/Manga">Манга</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/news">Новости</NavLink>
            </div>
            <div className={c.item}>
                < NavLink to="/music">Музыка</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/setting">Настройки</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;