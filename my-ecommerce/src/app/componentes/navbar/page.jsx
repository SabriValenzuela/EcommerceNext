
{/* 

 'use client'

import React,{useState} from 'react'
import style from './navbar.module.css'
import {menu} from 'react-icons-kit/feather/menu'
import {x} from 'react-icons-kit/feather/x'
import {Icon} from 'react-icons-kit'



export const Navbarra = () => {
 
const [toggle, setToggle] = useState (false);

const handleToggle=()=> {
setToggle(!toggle);
}

  return (
    <nav className= {toggle?'navbar expanded':'navbar'}>
      <div className={style.toggle_icon} onClick={handleToggle}> 
    {toggle?<Icon icon={x} size={28}/>: <Icon icon={menu} size={28}/>}
      </div>
     <div className= {toggle?'navbar expanded':'navbar'}>
      <ul className={style.links}>
        <li>Inicio</li>
        <li>Sobre Nosotros</li>
        <li>Productos</li>
        <li>Mayoristas</li>
        <li>Contacto</li>
      </ul>
      </div>  
            </nav>
        
  )
}
 */}