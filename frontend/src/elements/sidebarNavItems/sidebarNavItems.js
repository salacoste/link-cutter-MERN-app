import React, {Fragment} from 'react'
import { Nav } from "shards-react";
import SidebarNavItem from '@/elements/sidebarNavItem/sidebarNavItem'

import './styles.scss'

import AutorenewIcon from '@material-ui/icons/Autorenew';
import ListIcon from '@material-ui/icons/List';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import DomainIcon from '@material-ui/icons/Domain';

const fakeData = [
    {
        title: 'Главная страница',
        to: '/',
        htmlBefore: <i><DomainIcon fontSize="small"/></i>
    },
    {
        title: 'Список заказов',
        to: '/lolo/gg3/',
        htmlBefore: <i><ListIcon fontSize="small"/></i>
    },
    {
        title: 'Библиотека знаний',
        to: '/1/33/',
        htmlBefore: <i><LocalLibraryIcon fontSize="small"/></i>
    },
    {
        title: 'Техническая документация',
        to: '/2/a3/',
    },
    {
        title: 'Калькулятор смешивания финишного слоя',
        to: 'lolo/a31/',
    },
]
const SidebarNavItems = () => {
    return (
        <Fragment>
            <div className="nav-wrapper">
                <Nav className="nav--no-borders flex-column">
                    {fakeData.map((item, id)=> (
                        <SidebarNavItem key={id} item={item} />
                    ))}
                </Nav>
                <p className="text-center">
                    Здесь будет футер навбара
                </p>
            </div>

        </Fragment>
    )
}

export default  SidebarNavItems