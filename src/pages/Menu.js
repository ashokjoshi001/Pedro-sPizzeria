import React from 'react'
import Menuitem from '../component/Menuitem';
import { MenuList } from "../helper/MenuList";
import "../styles/Menu.css"


function Menu() {
  return (
    <div className='menu'>
      <h1 className='nemuTitle'>Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) =>{
            return <Menuitem image={menuItem.image} name={menuItem.name} price={menuItem.price}/>
        })}
      </div>
    </div>
  )
}

export default Menu
