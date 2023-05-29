import React from "react";
import {Routes, Route} from 'react-router-dom';
import { NavLink } from "react-router-dom";
import HomePage from './HomePage';
import DriftPage from './DriftPage';
import ForzaPage from './TimeAttackTime';
import TimeAttackTime from './TimeAttackTime';


const Menu = () => {
    return (
        <React.Fragment>
            <nav className="menu">
                <NavLink to='/' className='menu__item'>Главаня</NavLink>
                <NavLink to='/drift' className='menu__item'>Дрифт-такси</NavLink>
                <NavLink to='/timeattack' className='menu__item'>Time Attack</NavLink>
                <NavLink to='/forza' className='menu__item'>Forza Karting</NavLink>
            </nav>

            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/drift' element={<DriftPage />}/>
                <Route path='/timeattack' element={<TimeAttackTime />}/>
                <Route path='/forza' element={<ForzaPage />}/>
        </Routes>
        </React.Fragment>
    );
};

export default Menu;