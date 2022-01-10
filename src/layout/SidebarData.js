import React from 'react';
import * as AiIcons from 'react-icons/ai';


export const SidebarData = [
    {
    title:'Inicio',
    path:"/",
    icon:<AiIcons.AiFillHome/>,
    cName: 'nav-text'
    },
    {
    title:'Autor',
    path:"/autor/list",
    icon:<AiIcons.AiOutlineUser />,
    cName: 'nav-text'
    },
    {
    title:'Editora',
    path:"/editora/list",
    icon:<AiIcons.AiFillBook />,
    cName:'nav-text'
    }
]

export default SidebarData;